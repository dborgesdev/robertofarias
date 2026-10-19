import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
await build();
await build({ build: { ssr: "src/entry-server.tsx", outDir: ".prerender" } });
const { render } = await import(
  pathToFileURL(resolve(".prerender/entry-server.js"))
);
const template = await readFile("dist/index.html", "utf8");
const deployment = JSON.parse(await readFile("wrangler.json", "utf8"));
const domain = (process.env.SITE_URL ?? deployment.vars?.SITE_URL)?.replace(/\/$/, "");
if (!domain || !/^https:\/\/[a-z0-9.-]+$/i.test(domain))
  throw new Error("SITE_URL deve ser uma origem HTTPS, sem caminho.");
if (domain !== deployment.vars.SITE_URL)
  throw new Error("SITE_URL do build deve coincidir com wrangler.json.");
const pages = [
  {
    path: "/sobre/",
    file: "dist/sobre/index.html",
    title: "Sobre o autor | A história de Roberto Farias",
    description:
      "Conheça a trajetória de Roberto Farias: infância no Recife, futebol, Banda Júpiter 4, Economia na UFPE, Chesf e o encontro com a escrita.",
    image: "/images/og-autor.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Sobre Roberto Farias",
      about: {
        "@type": "Person",
        name: "Roberto Farias",
        birthPlace: { "@type": "Place", name: "Recife, Pernambuco" },
      },
    },
  },
  {
    path: "/",
    file: "dist/index.html",
    title: "Roberto Farias | Escritor e autor de Ainda Tenho Estradas",
    description:
      "Conheça Roberto Farias, escritor pernambucano, sua trajetória e obras sobre experiências de vida, maturidade e novos caminhos. Explore os livros do autor.",
    image: "/images/og-autor.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Roberto Farias",
      jobTitle: "Escritor",
      birthPlace: { "@type": "Place", name: "Recife, Pernambuco" },
    },
  },
  {
    path: "/contato/",
    file: "dist/contato/index.html",
    title: "Contato | Converse com Roberto Farias",
    description:
      "Converse com Roberto Farias sobre seus livros. Entre em contato pelo WhatsApp ou por e-mail e consulte informações sobre as obras do autor.",
    image: "/images/og-autor.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contato — Roberto Farias",
      about: {
        "@type": "Person",
        name: "Roberto Farias",
        email: "rbrt.farias@gmail.com",
        telephone: "+5581999522510",
      },
    },
  },
  {
    path: "/livros/ainda-tenho-estradas/",
    file: "dist/livros/ainda-tenho-estradas/index.html",
    title: "Ainda Tenho Estradas | Livro de Roberto Farias",
    description:
      "Conheça Ainda Tenho Estradas, de Roberto Farias. Experiências, memórias e reflexões sobre a vontade de continuar vivendo novos capítulos.",
    image: "/images/og-estradas.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "Book",
      name: "Ainda Tenho Estradas",
      author: { "@type": "Person", name: "Roberto Farias" },
      inLanguage: "pt-BR",
    },
  },
];
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
for (const page of pages) {
  const personId = `${domain}/#autor`;
  page.schema.url = `${domain}${page.path}`;
  page.schema["@id"] = page.schema["@type"] === "Person"
    ? personId
    : `${domain}${page.path}#${page.schema["@type"] === "Book" ? "livro" : "pagina"}`;
  if (page.schema.about) page.schema.about["@id"] = personId;
  if (page.schema.author) page.schema.author["@id"] = personId;
  const image = `${domain}${page.image}`;
  const meta = `<title>${page.title}</title><meta name="description" content="${escape(page.description)}"/><meta property="og:locale" content="pt_BR"/><meta property="og:type" content="${page.schema["@type"] === "Book" ? "book" : "website"}"/><meta property="og:site_name" content="Roberto Farias"/><meta property="og:title" content="${page.title}"/><meta property="og:description" content="${escape(page.description)}"/><meta property="og:image" content="${image}"/><meta property="og:image:alt" content="${page.schema["@type"] === "Book" ? "Capa de Ainda Tenho Estradas" : "Retrato de Roberto Farias"}"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${page.title}"/><meta name="twitter:description" content="${escape(page.description)}"/><meta name="twitter:image" content="${image}"/><link rel="canonical" href="${domain}${page.path}"/><meta property="og:url" content="${domain}${page.path}"/><script type="application/ld+json">${JSON.stringify(page.schema)}</script>`;
  await mkdir(resolve(page.file, ".."), { recursive: true });
  await writeFile(
    page.file,
    template
      .replace("<!--metadata-->", meta)
      .replace("<!--app-->", render(page.path)),
  );
}
// Robots e sitemap são gerados somente com a origem confirmada e validada.
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`,
);
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>${escape(domain + page.path)}</loc></url>`).join("")}</urlset>`,
);
await writeFile(
  "dist/404.html",
  '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>Página não encontrada | Roberto Farias</title><body style="font:20px Georgia;padding:10%;background:#f7f2e8;color:#25241f"><h1>Este caminho não foi encontrado.</h1><p><a href="/">Voltar ao site de Roberto Farias</a></p></body></html>',
);
await writeFile(
  "dist/build-info.json",
  JSON.stringify({
    commit: execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
    builtAt: new Date().toISOString(),
  }),
);
await rm(".prerender", { recursive: true, force: true });
await import("./check-seo.mjs");
console.log(
  "Quatro páginas pré-renderizadas. SEO de produção:",
  domain,
);
