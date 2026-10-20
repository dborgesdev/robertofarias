import ArtScene from "../ui/ArtScene";
import BookCover from "../ui/BookCover";
import { acquisitionLink } from "../../data/contact";
import { ActionLink, Eyebrow } from "../ui/Editorial";
export default function BookHero() {
  return (
    <section className="book-hero scene-dark min-h-[calc(100vh-80px)]">
      <ArtScene scene="road" eager />
      <div className="container">
        <nav className="breadcrumb" aria-label="Você está aqui">
          <a href="/">Início</a>
          <span>/</span>
          <a href="/#livros">Livros</a>
          <span>/</span>
          <span aria-current="page">Ainda Tenho Estradas</span>
        </nav>
        <div className="book-hero-layout">
          <div className="book-introduction">
            <div data-hero="eyebrow">
              <Eyebrow>Uma obra de Roberto Farias</Eyebrow>
            </div>
            <h1 data-hero="line">
              Ainda Tenho <em>Estradas</em>
            </h1>
            <p className="book-deck" data-hero="description">
              As histórias que nos trouxeram até aqui não precisam ser o fim do
              caminho.
            </p>
            <p>
              Em Ainda Tenho Estradas, Roberto Farias compartilha uma
              inquietação que atravessa sua própria trajetória: a vida continua
              pedindo presença, convivência e curiosidade, mesmo quando os anos
              e a rotina mudam. A obra nasce de experiências pessoais e do
              desejo de convidar outros leitores a enxergar possibilidades na
              maturidade.
            </p>
            <div className="actions" data-hero="actions">
              <ActionLink href={acquisitionLink("estradas")}>
                Consultar como adquirir
              </ActionLink>
              <a className="button button-secondary" href="/sobre/">
                Sobre o autor ↗
              </a>
            </div>
          </div>
          <div className="book-cover-stage" data-hero="image">
            <BookCover eager />
            <p className="handwritten" aria-hidden="true">
              Histórias vividas.
              <br />
              Caminhos por descobrir.
            </p>
          </div>
        </div>
      </div>
      <span className="scene-credit">
        Estrada e horizonte · ilustração conceitual
      </span>
    </section>
  );
}
