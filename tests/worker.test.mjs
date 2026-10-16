import test from "node:test";
import assert from "node:assert/strict";
import { worker } from "../.qa/tests/entry.js";

const origin = "https://author.example.test";
const environment = {
  SITE_URL: origin,
  RESEND_API_KEY: "test-key-never-sent",
  CONTACT_FROM: "Test <sender@example.test>",
  ASSETS: {
    fetch: async () => new Response("static HTML", { status: 200 }),
  },
};
const payload = () => ({
  name: "Leitora de teste",
  email: "leitora@example.test",
  message: "Gostaria de saber mais sobre o livro.",
  context: "estradas",
  website: "",
  startedAt: Date.now() - 5000,
  submissionId: "00000000-0000-4000-8000-000000000001",
});
function request(body = payload(), headers = {}) {
  return new Request(`${origin}/api/contact`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin,
      "sec-fetch-site": "same-origin",
      "cf-connecting-ip": "203.0.113.12",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("Worker serves assets and rejects unknown API routes without SPA fallback", async () => {
  const page = await worker.fetch(new Request(`${origin}/sobre/`), environment);
  assert.equal(await page.text(), "static HTML");
  const missing = await worker.fetch(new Request(`${origin}/api/missing`), environment);
  assert.equal(missing.status, 404);
});

test("Worker preserves truthful unavailable, method and origin responses", async () => {
  const missing = await worker.fetch(request(), { ASSETS: environment.ASSETS });
  assert.equal(missing.status, 503);
  assert.equal((await missing.json()).ok, false);
  const method = await worker.fetch(new Request(`${origin}/api/contact`), environment);
  assert.equal(method.status, 405);
  assert.equal(method.headers.get("Allow"), "POST");
  const crossSite = await worker.fetch(request(payload(), { origin: "https://other.example.test" }), environment);
  assert.equal(crossSite.status, 403);
});

test("Worker reads streamed JSON with the same validation and byte limit", async () => {
  const malformed = await worker.fetch(request("{broken"), environment);
  assert.equal(malformed.status, 400);
  const oversized = await worker.fetch(request("x".repeat(12001)), environment);
  assert.equal(oversized.status, 413);
  const invalid = await worker.fetch(request({ ...payload(), email: "invalid" }), environment);
  assert.equal(invalid.status, 422);
});

test("Worker uses trusted Cloudflare IP and confirms only provider acceptance", async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async (_url, options) => {
    const sent = JSON.parse(options.body);
    assert.deepEqual(sent.to, ["rbrt.farias@gmail.com"]);
    assert.equal(sent.reply_to, "leitora@example.test");
    return new Response(JSON.stringify({ id: "worker-provider-accepted" }));
  };
  try {
    for (let i = 0; i < 5; i++) {
      const response = await worker.fetch(request(payload(), {
        "cf-connecting-ip": "203.0.113.90",
        "x-vercel-forwarded-for": `spoofed-${i}`,
      }), environment);
      assert.equal(response.status, 200);
      assert.equal(response.headers.get("Cache-Control"), "no-store");
      assert.equal((await response.json()).id, "worker-provider-accepted");
    }
    const blocked = await worker.fetch(request(payload(), {
      "cf-connecting-ip": "203.0.113.90",
      "x-vercel-forwarded-for": "another-spoof",
    }), environment);
    assert.equal(blocked.status, 429);
  } finally {
    globalThis.fetch = original;
  }
});
