export interface EditorialVideoSource {
  title: string;
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
}
export const editorialVideos = {
  writing: {
    title: "Ainda Tenho Estradas — origem da escrita",
    src: "/videos/ainda-tenho-estradas-autor.mp4",
    poster: "/images/poster-ainda-tenho-estradas-autor.jpg",
    width: 478, height: 850,
    label: "Vídeo de Ainda Tenho Estradas sobre a origem da escrita",
  },
  estradas: {
    title: "Ainda Tenho Estradas",
    src: "/videos/ainda-tenho-estradas-autor.mp4",
    poster: "/images/poster-estradas.jpg",
    width: 360, height: 640,
    label: "Vídeo promocional de Ainda Tenho Estradas",
  },
  viva: {
    title: "Viva Seus 60+ com Saúde e Propósito",
    src: "/videos/viva-seus-60.mp4",
    poster: "/images/poster-viva-seus-60.jpg",
    width: 478, height: 850,
    label: "Vídeo de Viva Seus 60+ com Saúde e Propósito",
  },
} satisfies Record<string, EditorialVideoSource>;
