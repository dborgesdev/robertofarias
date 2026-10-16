import { aboutChapters } from "../../data/about";
import { Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
export default function AboutYouth() {
  const chapter = aboutChapters.youth;
  return (
    <section className="section about-chapter about-youth scene-dark">
      <ArtScene scene="road" />
      <div className="container">
        <div className="about-prose" data-reveal="rise">
          <Eyebrow>02 · Futebol e música</Eyebrow>
          <h2>{chapter.title}</h2>
          {chapter.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="music-album">
          <figure className="memory-print" data-reveal="image">
            <img
              src="/images/banda-jupiter-4.webp"
              srcSet="/images/banda-500.webp 500w, /images/banda-900.webp 900w, /images/banda-jupiter-4.webp 1400w"
              sizes="(max-width:767px) 90vw, 55vw"
              width="1400"
              height="941"
              loading="lazy"
              alt="Jáder, Luiz Paulo, Roberto Farias e Flávio, da Banda Júpiter 4"
            />
            <figcaption>Banda Júpiter 4 · acervo pessoal</figcaption>
          </figure>
          <div className="music-story">
            <h3>{aboutChapters.music.title}</h3>
            {aboutChapters.music.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
      <span className="scene-credit">
        Paisagem de fundo · ilustração conceitual
      </span>
    </section>
  );
}
