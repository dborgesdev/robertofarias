import {
  createContactHandler,
  type ContactRequest,
  type ContactResponse,
} from "../api/contact";

interface WorkerEnvironment {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_FROM?: string;
  SITE_URL?: string;
  CONTACT_ALLOWED_ORIGINS?: string;
}

export default {
  async fetch(request: Request, env: WorkerEnvironment): Promise<Response> {
    const path = new URL(request.url).pathname;
    if (!path.startsWith("/api/")) return env.ASSETS.fetch(request);
    if (path !== "/api/contact") {
      return Response.json(
        { ok: false, code: "not_found" },
        { status: 404, headers: { "Cache-Control": "no-store" } },
      );
    }

    const headers: Record<string, string> = {};
    request.headers.forEach((value, name) => { headers[name] = value; });
    // Cloudflare sets this IP; never trust a client-supplied Vercel forwarding header.
    delete headers["x-vercel-forwarded-for"];
    const incoming: ContactRequest = {
      method: request.method,
      headers,
      socket: { remoteAddress: request.headers.get("cf-connecting-ip") || "unknown" },
      async *[Symbol.asyncIterator]() {
        const reader = request.body?.getReader();
        if (!reader) return;
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            yield value;
          }
        } finally {
          await reader.cancel();
          reader.releaseLock();
        }
      },
    };
    const responseHeaders = new Headers();
    let body = "";
    const outgoing: ContactResponse = {
      statusCode: 200,
      setHeader(name, value) { responseHeaders.set(name, value); },
      end(value) { body = value; },
    };
    await createContactHandler({
      RESEND_API_KEY: env.RESEND_API_KEY,
      CONTACT_FROM: env.CONTACT_FROM,
      SITE_URL: env.SITE_URL,
      CONTACT_ALLOWED_ORIGINS: env.CONTACT_ALLOWED_ORIGINS,
    })(incoming, outgoing);
    return new Response(body, {
      status: outgoing.statusCode,
      headers: responseHeaders,
    });
  },
};
