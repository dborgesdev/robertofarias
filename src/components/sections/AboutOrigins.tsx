import { aboutChapters } from "../../data/about";
import { Eyebrow } from "../ui/Editorial";
import SymbolicImage from "../ui/SymbolicImage";
export default function AboutOrigins() {
  const chapter = aboutChapters.origins;
  return (
    <section id="origens" className="section about-chapter about-origins">
      <div className="container">
        <div className="origins-album" data-reveal="image">
          <SymbolicImage scene="coast" />
          <figure className="memory-print">
            <img
              src="/images/roberto-retrato-web.webp"
              width="702"
              height="916"
              alt="Retrato atual de Roberto Farias, do acervo pessoal"
              loading="lazy"
            />
            <figcaption>Roberto · acervo pessoal</figcaption>
          </figure>
          <span className="scene-credit">
            Horizonte · ilustração conceitual
          </span>
        </div>
        <div className="about-prose" data-reveal="rise">
          <Eyebrow>{chapter.eyebrow}</Eyebrow>
          <h2>{chapter.title}</h2>
          {chapter.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="handwritten margin-note" aria-hidden="true">
          Recife,
          <br />
          minha origem.
        </p>
      </div>
    </section>
  );
}
