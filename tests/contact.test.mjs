import test from "node:test";
import assert from "node:assert/strict";
import {
  createContactHandler,
  validateContact,
  normalizeContact,
  formatWhatsAppMessage,
  whatsappLink,
  acquisitionLink,
} from "../.qa/tests/entry.js";
const environment = {
  RESEND_API_KEY: "test-key-never-sent",
  CONTACT_FROM: "Test <sender@example.test>",
  SITE_URL: "https://author.example.test",
};
const valid = () => ({
  name: "Leitora de teste",
  email: "leitora@example.test",
  message: "Gostaria de saber mais sobre o livro.",
  website: "",
  startedAt: Date.now() - 5000,
  submissionId: "00000000-0000-4000-8000-000000000001",
  context: "estradas",
});
let ip = 1;
async function request({
  body = valid(),
  env = environment,
  headers = {},
  method = "POST",
  address,
} = {}) {
  const result = { status: 0, headers: {}, body: null };
  const req = {
    body,
    method,
    headers: {
      "content-type": "application/json",
      origin: "https://author.example.test",
      "sec-fetch-site": "same-origin",
      "x-vercel-forwarded-for": address || `203.0.113.${ip++}`,
      ...headers,
    },
    socket: { remoteAddress: "127.0.0.1" },
  };
  const res = {
    statusCode: 200,
    setHeader(k, v) {
      result.headers[k] = v;
    },
    end(value) {
      result.status = this.statusCode;
      result.body = JSON.parse(value);
    },
  };
  await createContactHandler(env)(req, res);
  return result;
}
async function withProvider(provider, work) {
  const original = globalThis.fetch;
  globalThis.fetch = provider;
  try {
    return await work();
  } finally {
    globalThis.fetch = original;
  }
}

test("validates required fields, lengths and email header injection", () => {
  assert.equal(Object.keys(validateContact(valid())).length, 0);
  assert.ok(validateContact({ ...valid(), name: "A" }).name);
  assert.ok(
    validateContact({ ...valid(), name: `Nome${String.fromCharCode(127)}` })
      .name,
  );
  assert.ok(
    validateContact({
      ...valid(),
      email: `reader${String.fromCharCode(0)}@example.test`,
    }).email,
  );
  assert.ok(
    validateContact({
      ...valid(),
      email: "reader@example.test\r\nBcc: bad@example.test",
    }).email,
  );
  assert.ok(validateContact({ ...valid(), message: "a".repeat(2001) }).message);
  assert.ok(validateContact({ ...valid(), message: "short" }).message);
  assert.deepEqual(validateContact({ ...valid(), email: "" }, false), {});
  assert.equal(normalizeContact({ name: 8, email: "e", message: "x" }), null);
});
test("encodes confirmed phone, personal data and distinct book contexts", () => {
  const href = whatsappLink(
    formatWhatsAppMessage(
      {
        ...valid(),
        name: "João & Ana",
        message: "Olá! Quanto custa?\nQuero informações.",
      },
      "estradas",
    ),
  );
  const url = new URL(href);
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/5581999522510");
  assert.match(url.searchParams.get("text"), /João & Ana/);
  assert.match(url.searchParams.get("text"), /Ainda Tenho Estradas/);
  assert.match(
    new URL(acquisitionLink("viva")).searchParams.get("text"),
    /Viva Seus 60\+/,
  );
});
test("missing credentials returns 503 and never calls provider", async () =>
  withProvider(
    () => {
      throw Error("Unexpected provider call");
    },
    async () => {
      const r = await request({ env: {} });
      assert.equal(r.status, 503);
      assert.equal(r.body.ok, false);
      assert.equal(r.body.id, undefined);
    },
  ));
test("rejects unsupported methods and non-JSON data", async () => {
  assert.equal((await request({ method: "GET" })).status, 405);
  assert.equal(
    (await request({ headers: { "content-type": "text/plain" } })).status,
    415,
  );
});
test("rejects unknown origins and cross-site requests", async () => {
  assert.equal(
    (await request({ headers: { origin: "https://other.example.test" } }))
      .status,
    403,
  );
  assert.equal(
    (await request({ headers: { "sec-fetch-site": "cross-site" } })).status,
    403,
  );
});
test("rejects malformed and oversized payloads", async () => {
  assert.equal((await request({ body: "{broken" })).status, 400);
  assert.equal(
    (await request({ headers: { "content-length": "12001" } })).status,
    413,
  );
});
test("server independently rejects invalid email and empty message", async () => {
  const r = await request({
    body: { ...valid(), email: "not-an-email", message: "" },
  });
  assert.equal(r.status, 422);
  assert.ok(r.body.errors.email);
  assert.ok(r.body.errors.message);
});
test("honeypot and impossible completion time are rejected without fake success", async () => {
  assert.equal(
    (await request({ body: { ...valid(), website: "bot-filled" } })).status,
    400,
  );
  assert.equal(
    (await request({ body: { ...valid(), startedAt: Date.now() + 10000 } }))
      .status,
    400,
  );
});
test("accepts only the provider acknowledgement and fixes recipient/reply-to", async () =>
  withProvider(
    async (url, options) => {
      assert.equal(url, "https://api.resend.com/emails");
      const data = JSON.parse(options.body);
      assert.deepEqual(data.to, ["rbrt.farias@gmail.com"]);
      assert.equal(data.reply_to, "leitora@example.test");
      assert.equal(data.from, environment.CONTACT_FROM);
      assert.match(data.subject, /Ainda Tenho Estradas/);
      assert.equal(data.html, undefined);
      assert.match(
        options.headers["Idempotency-Key"],
        /^contact-[a-f0-9]{64}$/,
      );
      return new Response(JSON.stringify({ id: "provider-accepted-id" }), {
        status: 200,
      });
    },
    async () => {
      const r = await request();
      assert.equal(r.status, 200);
      assert.deepEqual(r.body, { ok: true, id: "provider-accepted-id" });
      assert.equal(r.headers["Cache-Control"], "no-store");
    },
  ));
test("provider error, empty acknowledgement and network failure never yield success", async () => {
  for (const provider of [
    async () =>
      new Response(JSON.stringify({ message: "provider failure" }), {
        status: 500,
      }),
    async () => new Response("{}", { status: 200 }),
    async () => {
      throw Error("network");
    },
  ]) {
    await withProvider(provider, async () => {
      const r = await request();
      assert.equal(r.status, 502);
      assert.equal(r.body.ok, false);
      assert.equal(r.body.id, undefined);
    });
  }
});
test("five attempts per warm instance are limited with Retry-After", async () =>
  withProvider(
    async () =>
      new Response(JSON.stringify({ id: "accepted" }), { status: 200 }),
    async () => {
      const address = "203.0.113.250";
      for (let i = 0; i < 5; i++)
        assert.equal((await request({ address })).status, 200);
      const blocked = await request({ address });
      assert.equal(blocked.status, 429);
      assert.ok(Number(blocked.headers["Retry-After"]) > 0);
    },
  ));
test("same message retry keeps provider idempotency key", async () => {
  const keys = [];
  await withProvider(
    async (_, options) => {
      keys.push(options.headers["Idempotency-Key"]);
      return new Response(JSON.stringify({ id: "same-id" }), { status: 200 });
    },
    async () => {
      const body = valid();
      await request({ body });
      await request({ body });
    },
  );
  assert.equal(keys[0], keys[1]);
});
