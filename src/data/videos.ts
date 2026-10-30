export interface EditorialVideoSource {
  title: string;
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
}
export const editorialVideos = {
  words: {
    title: "Aos 60 a vida continua — palavras do autor",
    src: "/videos/a-vida-continua.mp4",
    poster: "/images/poster-a-vida-continua.webp",
    width: 478,
    height: 850,
    label: "Vídeo de Aos 60 a vida continua — palavras do autor",
  },
  writing: {
    title: "Ainda Tenho Estradas — origem da escrita",
    src: "/videos/ainda-tenho-estradas-autor.mp4",
    poster: "/images/poster-estradas.jpg",
    width: 478,
    height: 850,
    label: "Vídeo de Ainda Tenho Estradas sobre a origem da escrita",
  },
  estradas: {
    title: "Ainda Tenho Estradas",
    src: "/videos/ainda-tenho-estradas.mp4",
    poster: "/images/poster-estradas.jpg",
    width: 540,
    height: 810,
    label: "Vídeo promocional de Ainda Tenho Estradas",
  },
  viva: {
    title: "Viva Seus 60+ com Saúde e Propósito",
    src: "/videos/viva-seus-60.mp4",
    poster: "/images/poster-viva-seus-60.jpg",
    width: 478,
    height: 850,
    label: "Vídeo de Viva Seus 60+ com Saúde e Propósito",
  },
} satisfies Record<string, EditorialVideoSource>;
