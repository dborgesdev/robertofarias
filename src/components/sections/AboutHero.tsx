import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";
export default function AboutHero() {
  return (
    <section className="about-hero portrait-scene">
      <div className="portrait-landscape" data-hero="image">
        <ArtScene scene="portrait" eager />
      </div>
      <div className="container hero-stage">
        <div className="hero-copy">
          <nav className="breadcrumb" aria-label="Você está aqui">
            <a href="/">Início</a>
            <span>/</span>
            <span aria-current="page">O autor</span>
          </nav>
          <div data-hero="eyebrow">
            <Eyebrow>Uma vida em capítulos</Eyebrow>
          </div>
          <h1 data-hero="line">Roberto Farias</h1>
          <p className="hero-subtitle" data-hero="description">
            Histórias vividas.
            <br />
            <em>Caminhos por descobrir.</em>
          </p>
          <p>
            Escritor pernambucano, economista aposentado e narrador de uma vida
            que segue em movimento.
          </p>
          <a className="text-link" href="#origens" data-hero="actions">
            Comece esta história ↓
          </a>
        </div>
        <p className="handwritten hero-note" aria-hidden="true">
          Memórias, reflexões
          <br />e novos caminhos.
        </p>
      </div>
      <div className="hero-foot container">
        <span>Retrato original em composição artística</span>
      </div>
    </section>
  );
}
