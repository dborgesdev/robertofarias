import { biographyChapters } from "../../data/biography";
import { useChapterTimeline } from "../../lib/useChapterTimeline";
import { ActionLink, Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
import SymbolicImage from "../ui/SymbolicImage";
const captions = [
  "Retrato atual e horizonte ilustrado",
  "Banda Júpiter 4 · acervo pessoal",
  "Roberto Farias · retrato do autor",
  "O encontro com a escrita · ilustração conceitual",
];
function ChapterImage({ index }: { index: number }) {
  return index === 0 ? (
    <div className="timeline-memory">
      <SymbolicImage scene="coast" />
      <img
        className="timeline-memory-portrait"
        src="/images/roberto-retrato-web.webp"
        width="702"
        height="916"
        loading="lazy"
        alt="Retrato atual de Roberto Farias, do acervo pessoal"
      />
    </div>
  ) : index === 3 ? (
    <ArtScene scene="writing" />
  ) : (
    <img
      src={
        index === 1
          ? "/images/banda-jupiter-4.webp"
          : "/images/roberto-retrato-web.webp"
      }
      width={index === 1 ? 1400 : 702}
      height={index === 1 ? 941 : 916}
      alt={
        index === 1
          ? "Jáder, Luiz Paulo, Roberto Farias e Flávio, da Banda Júpiter 4"
          : "Retrato de Roberto Farias"
      }
      loading="lazy"
    />
  );
}
export default function Biography() {
  const { root, active } = useChapterTimeline();
  return (
    <section
      id="minha-historia"
      className="section chapter-timeline"
      ref={root}
    >
      <noscript>
        <style>{`.timeline-visual{display:none!important}.timeline-layout{display:block!important}.timeline-inline{display:block!important}.timeline-inline img{max-height:500px;object-fit:contain}.timeline-chapters>li{min-height:0!important;padding:40px 0!important}`}</style>
      </noscript>
      <div className="container">
        <header className="timeline-heading" data-reveal="rise">
          <Eyebrow>Quem está por trás dos livros</Eyebrow>
          <h2>
            Uma vida
            <br />
            <em>em capítulos.</em>
          </h2>
          <p>Antes das páginas, uma vida inteira de histórias.</p>
        </header>
        <div className="timeline-layout">
          <div className="timeline-visual" aria-hidden="true">
            <div className="timeline-images">
              {biographyChapters.map((chapter, index) => (
                <div
                  key={chapter.title}
                  className={`timeline-frame ${active === index ? "is-active" : ""}`}
                >
                  <ChapterImage index={index} />
                </div>
              ))}
            </div>
            <div className="timeline-caption">
              <span>0{active + 1} / 04</span>
              <span>{captions[active]}</span>
            </div>
            <div className="timeline-progress">
              {biographyChapters.map((chapter, index) => (
                <i
                  key={chapter.title}
                  className={index <= active ? "is-passed" : ""}
                />
              ))}
            </div>
          </div>
          <ol className="timeline-chapters">
            {biographyChapters.map((chapter, index) => (
              <li
                data-chapter
                key={chapter.title}
                className={active === index ? "is-active" : ""}
              >
                <figure className="timeline-inline">
                  <ChapterImage index={index} />
                  <figcaption>{captions[index]}</figcaption>
                </figure>
                <span className="timeline-number">0{index + 1}</span>
                <div>
                  <Eyebrow>
                    {index === 0 ? "1950 · Areias e Afogados" : chapter.detail}
                  </Eyebrow>
                  <h3>{chapter.title}</h3>
                  <p className="sr-only">{captions[index]}</p>
                  <p>{chapter.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="timeline-ending">
          <ActionLink href="/sobre/">Conheça a história completa</ActionLink>
        </div>
      </div>
    </section>
  );
}
