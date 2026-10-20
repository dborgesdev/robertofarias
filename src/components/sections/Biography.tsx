import { biographyChapters } from "../../data/biography";
import { useChapterTimeline } from "../../lib/useChapterTimeline";
import { ActionLink, Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
const captions = [
  "Roberto e o futebol · acervo pessoal",
  "Banda Júpiter 4 · acervo pessoal",
  "Roberto Farias com um livro · imagem fornecida pelo autor",
  "O encontro com a escrita · ilustração conceitual",
];
function ChapterImage({ index }: { index: number }) {
  return index === 3 ? (
    <ArtScene scene="writing" />
  ) : (
    <img
      src={
        index === 0 ? "/images/roberto-futebol.webp" : index === 1
          ? "/images/banda-jupiter-4.webp"
          : "/images/trajetoria.webp"
      }
      width={index === 0 ? 899 : index === 1 ? 1400 : 879}
      height={index === 0 ? 905 : index === 1 ? 941 : 1093}
      alt={
        index === 0 ? "Registro antigo de Roberto com uma bola, em fotografia com texto sobre futebol" : index === 1
          ? "Jáder, Luiz Paulo, Roberto Farias e Flávio, da Banda Júpiter 4"
          : "Roberto Farias de chapéu, segurando um livro junto à janela"
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
