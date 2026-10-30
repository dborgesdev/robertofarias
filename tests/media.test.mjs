import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { render } from "../.qa/tests/entry.js";

const mediaPaths = ["/videos/a-vida-continua.mp4", "/videos/ainda-tenho-estradas-autor.mp4", "/videos/viva-seus-60.mp4"];

test("Home has three distinct films in editorial order; book has only its author presentation", () => {
  const home = render("/");
  const book = render("/livros/ainda-tenho-estradas/");
  const paths = html => [...html.matchAll(/<noscript><p><a href="([^"]+\.mp4)"/g)].map(match => match[1]);
  assert.deepEqual(paths(home), mediaPaths);
  assert.deepEqual(paths(book), [mediaPaths[1]]);
  assert.ok(home.includes("Uma apresentação de Ainda Tenho Estradas."));
  assert.ok(home.includes("Assista ao material de divulgação da obra e conheça a mensagem que Roberto deseja compartilhar."));
  assert.ok(!home.includes('video-portrait'));
  assert.ok(!book.includes('/videos/viva-seus-60.mp4'));
  assert.ok(home.indexOf('writing-origin--film') < home.indexOf('id="videos"'));
  assert.ok(home.includes('video-grid--reverse'));
  const firstPresentation = home.match(/<section class="section writing-origin writing-origin--film">(.*?)<\/section>/s)[1];
  assert.ok(firstPresentation.includes('“Dá pra sustentar uma vida plena.”'));
  assert.ok(firstPresentation.includes('Nas palavras do autor'));
  assert.ok(!book.includes('writing-origin--film'));
});

test("Initial players show static covers with accessible manual triggers and no MP4 source or controls", async () => {
  for (const path of ["/", "/livros/ainda-tenho-estradas/"]) {
    const html = render(path);
    for (const match of html.matchAll(/<video (.*?)>/gs)) {
      assert.ok(match[1].includes('preload="none"'));
      assert.ok(match[1].includes('aria-label="Vídeo'));
      assert.ok(!/autoplay|controls|src=/i.test(match[1]));
    }
    for (const match of html.matchAll(/class="video-cover" src="([^"]+)"/g)) await access("public" + match[1]);
    for (const match of html.matchAll(/<noscript><p><a href="([^"]+\.mp4)"/g)) await access("public" + match[1]);
    assert.ok(html.includes('aria-label="Assistir ao vídeo de'));
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
