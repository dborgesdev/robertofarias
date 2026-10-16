import ArtScene from "../ui/ArtScene";
import { ActionLink, Eyebrow } from "../ui/Editorial";
export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero portrait-scene min-h-[calc(100vh-80px)]"
    >
      <div className="portrait-landscape" data-hero="image">
        <ArtScene scene="portrait" eager />
      </div>
      <div className="container hero-stage">
        <div className="hero-copy">
          <div data-hero="eyebrow">
            <Eyebrow>Roberto Farias · Escritor pernambucano</Eyebrow>
          </div>
          <h1>
            <span className="title-line">
              <span data-hero="line">A vida ainda tem</span>
            </span>{" "}
            <span className="title-line">
              <span data-hero="line">muitas páginas</span>
            </span>{" "}
            <span className="title-line">
              <em data-hero="line">por escrever.</em>
            </span>
          </h1>
          <p className="hero-description" data-hero="description">
            Depois de uma vida de trabalho, futebol, música e aprendizados,
            Roberto Farias encontrou na escrita uma nova forma de compartilhar
            experiências. Histórias que olham para o que passou sem perder de
            vista tudo o que ainda pode ser vivido.
          </p>
          <div className="actions" data-hero="actions">
            <ActionLink href="#livros">Conheça os livros</ActionLink>
            <a className="button button-secondary" href="/sobre/">
              Conheça Roberto ↗
            </a>
          </div>
        </div>
        <p className="handwritten hero-note" aria-hidden="true">
          Memórias, reflexões
          <br />e novos caminhos.
        </p>
      </div>
      <div className="hero-foot container">
        <a href="#uma-nova-fase">Continue a leitura ↓</a>
      </div>
    </section>
  );
}
