import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { render } from "../.qa/tests/entry.js";

test("Home presents only Viva video; book distinguishes writing film from its promotional film", () => {
  const home = render("/");
  const book = render("/livros/ainda-tenho-estradas/");
  const sources = (html) => [...html.matchAll(/<source src="([^"]+\.mp4)"/g)].map((match) => match[1]);
  assert.deepEqual(sources(home), ["/videos/viva-seus-60.mp4"]);
  assert.deepEqual(sources(book), ["/videos/ainda-tenho-estradas-autor.mp4", "/videos/ainda-tenho-estradas.mp4"]);
  const writing = book.match(/<section class="section writing-origin">(.*?)<\/section>/s)[1];
  assert.ok(writing.includes("/videos/ainda-tenho-estradas-autor.mp4"));
  assert.ok(!book.match(/<source src="\/videos\/viva/));
});

test("Every player is manual, labeled, has a real poster and matching accessible fallback", async () => {
  for (const path of ["/", "/livros/ainda-tenho-estradas/"]) {
    const html = render(path);
    for (const match of html.matchAll(/<video (.*?)>(.*?)<\/video>/gs)) {
      assert.ok(match[1].includes('preload="none"'));
      assert.ok(match[1].includes('controls=""'));
      assert.ok(match[1].includes('aria-label="Vídeo'));
      assert.ok(!/autoplay/i.test(match[1]));
      const source = match[2].match(/src="([^"]+)"/)[1];
      const poster = match[1].match(/poster="([^"]+)"/)[1];
      assert.ok(match[2].includes(`href="${source}"`));
      await access("public" + source);
      await access("public" + poster);
    }
  }
});

test("Both responsive timeline presentations use the supplied photographs", () => {
  const html = render("/");
  const timeline = html.match(/<section id="minha-historia"(.*?)<\/section>/s)[1];
  for (const image of ["roberto-futebol.webp", "trajetoria.webp"])
    assert.equal([...timeline.matchAll(new RegExp(`src="/images/${image}"`, "g"))].length, 2);
  assert.ok(!timeline.includes("timeline-memory"));
  assert.ok(!timeline.includes("Retrato atual e horizonte ilustrado"));
});
