import { createHash } from "node:crypto";
import { contactEmail } from "../src/data/contact.js";
import {
  normalizeContact,
  validateContact,
} from "../src/lib/contactValidation.js";

export interface ContactRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  socket?: { remoteAddress?: string };
  [Symbol.asyncIterator](): AsyncIterator<Uint8Array>;
}
export interface ContactResponse {
  statusCode: number;
  setHeader(name: string, value: string): void;
  end(body: string): void;
}
type Environment = Record<string, string | undefined>;
const attempts = new Map<string, { count: number; resetAt: number }>();
const subjects = {
  general: "Conversa sobre os livros",
  estradas: "Ainda Tenho Estradas",
  viva: "Viva Seus 60+ com Saúde e Propósito",
};
const maximumBytes = 12000;

function json(res: ContactResponse, status: number, data: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.end(JSON.stringify(data));
}

async function readBody(req: ContactRequest): Promise<unknown> {
  const length = Number(req.headers["content-length"] || 0);
  if (length > maximumBytes) throw new Error("too_large");
  if (req.body !== undefined) {
    const raw =
      typeof req.body === "string" ? req.body : JSON.stringify(req.body);
    if (Buffer.byteLength(raw) > maximumBytes) throw new Error("too_large");
    return typeof req.body === "string" ? JSON.parse(raw) : req.body;
  }
  const chunks: Buffer[] = [];
  let bytes = 0;
  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    bytes += buffer.length;
    if (bytes > maximumBytes) throw new Error("too_large");
    chunks.push(buffer);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function allowedOrigins(env: Environment) {
  return new Set(
    [
      env.SITE_URL,
      env.VERCEL_URL ? `https://${env.VERCEL_URL}` : undefined,
      ...(env.CONTACT_ALLOWED_ORIGINS || "").split(","),
    ]
      .filter(Boolean)
      .map((value) => {
        try {
          return new URL(value!.trim()).origin;
        } catch {
          return "";
        }
      })
      .filter(Boolean),
  );
}

export function createContactHandler(environment?: Environment) {
  return async function contactHandler(
    req: ContactRequest,
    res: ContactResponse,
  ) {
    const env = environment || process.env;
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return json(res, 405, { ok: false, code: "method" });
    }
    if (
      !String(req.headers["content-type"] || "")
        .toLowerCase()
        .startsWith("application/json")
    )
      return json(res, 415, { ok: false, code: "content_type" });
    const origins = allowedOrigins(env);
    if (!env.RESEND_API_KEY || !env.CONTACT_FROM || !origins.size)
      return json(res, 503, { ok: false, code: "unavailable" });
    if (
      typeof req.headers.origin !== "string" ||
      !origins.has(req.headers.origin)
    )
      return json(res, 403, { ok: false, code: "origin" });
    const site = req.headers["sec-fetch-site"];
    if (site && site !== "same-origin" && site !== "none")
      return json(res, 403, { ok: false, code: "origin" });

    const address = String(
      req.headers["x-vercel-forwarded-for"] ||
        req.socket?.remoteAddress ||
        "unknown",
    )
      .split(",")[0]
      .trim();
    const key = createHash("sha256").update(address).digest("hex");
    const now = Date.now();
    // Best-effort warm-instance limit; production-wide limits belong in the hosting WAF.
    for (const [ip, entry] of attempts)
      if (entry.resetAt <= now) attempts.delete(ip);
    if (attempts.size > 1000) attempts.delete(attempts.keys().next().value!);
    const entry = attempts.get(key) || { count: 0, resetAt: now + 300000 };
    entry.count++;
    attempts.set(key, entry);
    if (entry.count > 5) {
      res.setHeader(
        "Retry-After",
        String(Math.max(1, Math.ceil((entry.resetAt - now) / 1000))),
      );
      return json(res, 429, { ok: false, code: "rate_limit" });
    }

    let body: unknown;
    try {
      body = await readBody(req);
    } catch (error) {
      return json(
        res,
        error instanceof Error && error.message === "too_large" ? 413 : 400,
        { ok: false, code: "payload" },
      );
    }
    const values = normalizeContact(body);
    if (!values || !body || typeof body !== "object")
      return json(res, 400, { ok: false, code: "validation" });
    const data = body as Record<string, unknown>;
    const errors = validateContact(values);
    if (Object.keys(errors).length)
      return json(res, 422, { ok: false, code: "validation", errors });
    if (
      typeof data.website !== "string" ||
      data.website !== "" ||
      typeof data.startedAt !== "number" ||
      !Number.isFinite(data.startedAt) ||
      now - data.startedAt < 1000 ||
      now - data.startedAt > 86400000
    )
      return json(res, 400, { ok: false, code: "verification" });
    if (
      typeof data.submissionId !== "string" ||
      !/^[a-f0-9-]{36}$/i.test(data.submissionId) ||
      typeof data.context !== "string" ||
      !Object.hasOwn(subjects, data.context)
    )
      return json(res, 400, { ok: false, code: "validation" });
    const subject = subjects[data.context as keyof typeof subjects];
    const idempotency = createHash("sha256")
      .update(data.submissionId + JSON.stringify(values) + data.context)
      .digest("hex");
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        signal: AbortSignal.timeout(8000),
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `contact-${idempotency}`,
        },
        body: JSON.stringify({
          from: env.CONTACT_FROM,
          to: [contactEmail],
          reply_to: values.email,
          subject: `Site Roberto Farias — ${subject}`,
          text: `Nome: ${values.name}\nE-mail: ${values.email}\nAssunto: ${subject}\n\n${values.message}`,
        }),
      });
      const result: unknown = await response.json();
      const providerId =
        result && typeof result === "object" && "id" in result
          ? result.id
          : undefined;
      if (
        !response.ok ||
        typeof providerId !== "string" ||
        !providerId ||
        providerId.length > 100
      )
        return json(res, 502, { ok: false, code: "delivery" });
      return json(res, 200, { ok: true, id: providerId });
    } catch {
      return json(res, 502, { ok: false, code: "delivery" });
    }
  };
}

export default createContactHandler();
