import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";
const ideas = [
  [
    "Memórias que acompanham",
    "A experiência de quem viveu diferentes papéis, construiu vínculos e aprendeu ao longo do caminho.",
  ],
  [
    "A importância de permanecer presente",
    "Convivência, interesses e participação como partes de uma vida que continua.",
  ],
  [
    "O que ainda está por vir",
    "A possibilidade de imaginar novos projetos sem desvalorizar o que já foi realizado.",
  ],
];
export default function ReadingIdeas() {
  return (
    <section className="section reading-ideas scene-dark">
      <ArtScene scene="road" />
      <div className="container">
        <Eyebrow>Por trás das páginas</Eyebrow>
        <h2>Três ideias de leitura</h2>
        <p className="small-note">
          Uma leitura editorial da mensagem do autor.
        </p>
        <div className="ideas-grid">
          {ideas.map(([title, body], index) => (
            <article key={title} data-reveal="rise" data-delay={index * 70}>
              <span className="idea-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
