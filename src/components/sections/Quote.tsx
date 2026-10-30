import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";

export default function Quote({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`quote-section ${compact ? "quote-compact" : "quote-panorama scene-dark"}`}>
      {!compact && <ArtScene scene="road" />}
      <div className="container" data-reveal="rise">
        <Eyebrow>Nas palavras do autor</Eyebrow>
        <blockquote>
          <p>“Dá pra sustentar uma vida plena.”</p>
          <footer>Roberto Farias · reflexão compartilhada pelo autor</footer>
        </blockquote>
        <p className="quote-context">Para Roberto, há espaço para o movimento e o repouso, a conversa e o silêncio — sem perder a vontade de viver.</p>
      </div>
    </section>
  );
}
