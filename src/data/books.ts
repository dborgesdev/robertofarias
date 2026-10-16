import { acquisitionLink } from "./contact";
export interface Book {
  slug: string;
  title: string;
  description: string;
  cover: string;
  href: string;
  action: string;
  status: string;
}
export const books: Book[] = [
  {
    slug: "ainda-tenho-estradas",
    title: "Ainda Tenho Estradas",
    description:
      "Experiências de vida, memória e reflexões sobre continuar descobrindo novos caminhos.",
    cover: "/images/capa-ainda-tenho-estradas.webp",
    href: "/livros/ainda-tenho-estradas/",
    action: "Explorar este livro",
    status: "Obra em destaque",
  },
  {
    slug: "viva-seus-60",
    title: "Viva Seus 60+ com Saúde e Propósito",
    description:
      "Uma proposta voltada ao público 60+, com atenção à alimentação, ao movimento e à fé nesta fase da vida.",
    cover: "/images/capa-viva-seus-60.webp",
    href: acquisitionLink("viva"),
    action: "Consultar sobre esta obra",
    status: "Outra obra do autor",
  },
];
