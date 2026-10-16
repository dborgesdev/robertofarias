export interface LifePhoto {
  src: string;
  srcSet: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
}

export const lifePhotos: LifePhoto[] = [
  {
    src: "/images/roberto-cavalo.webp",
    srcSet:
      "/images/cavalo-400.webp 400w, /images/cavalo-700.webp 700w, /images/roberto-cavalo.webp 1080w",
    alt: "Roberto Farias montado a cavalo ao ar livre",
    title: "Novas paisagens",
    caption: "Momentos ao ar livre, entre paisagens e novas experiências.",
    width: 1080,
    height: 1080,
  },
  {
    src: "/images/roberto-moto.webp",
    srcSet:
      "/images/moto-400.webp 400w, /images/moto-700.webp 700w, /images/roberto-moto.webp 1200w",
    alt: "Roberto Farias em uma motocicleta em ambiente fechado",
    title: "O gosto de seguir",
    caption: "A disposição de seguir em movimento, em qualquer fase.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/banda-jupiter-4.webp",
    srcSet:
      "/images/banda-500.webp 500w, /images/banda-900.webp 900w, /images/banda-jupiter-4.webp 1400w",
    alt: "Registro histórico dos quatro integrantes da Banda Júpiter 4",
    title: "Memórias que ficam",
    caption: "Banda Júpiter 4: Jáder, Luiz Paulo, Roberto Farias e Flávio.",
    width: 1400,
    height: 941,
  },
];
