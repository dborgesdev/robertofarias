import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
await build();
await build({ build: { ssr: "src/entry-server.tsx", outDir: ".prerender" } });
const { render } = await import(
  pathToFileURL(resolve(".prerender/entry-server.js"))
);
const template = await readFile("dist/index.html", "utf8");
const domain = process.env.SITE_URL?.replace(/\/$/, "");
if (domain && !/^https:\/\/[^/]+$/.test(domain))
  throw new Error("SITE_URL deve ser uma origem HTTPS, sem caminho.");
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
  const image = `${domain || ""}${page.image}`;
  const meta = `<title>${page.title}</title><meta name="description" content="${escape(page.description)}"/><meta property="og:locale" content="pt_BR"/><meta property="og:type" content="${page.schema["@type"] === "Book" ? "book" : "website"}"/><meta property="og:site_name" content="Roberto Farias"/><meta property="og:title" content="${page.title}"/><meta property="og:description" content="${escape(page.description)}"/><meta property="og:image" content="${image}"/><meta property="og:image:alt" content="${page.schema["@type"] === "Book" ? "Capa de Ainda Tenho Estradas" : "Retrato de Roberto Farias"}"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${page.title}"/><meta name="twitter:description" content="${escape(page.description)}"/><meta name="twitter:image" content="${image}"/>${domain ? `<link rel="canonical" href="${domain}${page.path}"/><meta property="og:url" content="${domain}${page.path}"/>` : '<meta name="robots" content="noindex, nofollow"/>'}<script type="application/ld+json">${JSON.stringify(page.schema)}</script>`;
  await mkdir(resolve(page.file, ".."), { recursive: true });
  await writeFile(
    page.file,
    template
      .replace("<!--metadata-->", meta)
      .replace("<!--app-->", render(page.path)),
  );
}
// A prévia sem domínio não publica URLs fictícias e fica fora dos índices.
await writeFile(
  "dist/robots.txt",
  domain
    ? `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`
    : "User-agent: *\nDisallow: /\n",
);
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${domain ? pages.map((page) => `<url><loc>${escape(domain + page.path)}</loc></url>`).join("") : ""}</urlset>`,
);
await writeFile(
  "dist/404.html",
  '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>Página não encontrada | Roberto Farias</title><body style="font:20px Georgia;padding:10%;background:#f7f2e8;color:#25241f"><h1>Este caminho não foi encontrado.</h1><p><a href="/">Voltar ao site de Roberto Farias</a></p></body></html>',
);
await rm(".prerender", { recursive: true, force: true });
console.log(
  "Quatro páginas pré-renderizadas. SEO de produção:",
  domain || "aguardando SITE_URL (prévia noindex)",
);
