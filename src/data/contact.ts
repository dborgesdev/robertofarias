export const contactEmail = "rbrt.farias@gmail.com";
// Número autorizado pelo usuário em 15/10/2026; prevalece sobre o contato antigo do acervo.
export const whatsappNumber = "5581999522510";
export const whatsappDisplay = "+55 81 99952-2510";
export type ContactContext = "general" | "estradas" | "viva";
export const contactMessages: Record<ContactContext, string> = {
  general:
    "Olá, Roberto! Conheci seu site e gostaria de conversar sobre seus livros.",
  estradas:
    "Olá, Roberto! Conheci seu site e gostaria de informações sobre Ainda Tenho Estradas, disponibilidade, valor e entrega.",
  viva: "Olá, Roberto! Conheci seu site e gostaria de informações sobre Viva Seus 60+ com Saúde e Propósito, disponibilidade, valor e entrega.",
};
export const whatsappLink = (message = contactMessages.general) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
export const acquisitionLink = (context: ContactContext) =>
  whatsappLink(contactMessages[context]);
export const emailLink = (subject = "Interesse nos livros de Roberto Farias") =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
