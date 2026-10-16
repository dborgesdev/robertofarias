import BookCover from "../ui/BookCover";
import { acquisitionLink, contactEmail } from "../../data/contact";
import { ActionLink, Eyebrow } from "../ui/Editorial";
export default function BookAcquisition() {
  return (
    <section id="contato" className="section book-acquisition">
      <div className="container">
        <header data-reveal="rise">
          <Eyebrow>Uma conversa que continua</Eyebrow>
          <h2>
            Ainda Tenho{" "}
            <br />
            <em>Estradas.</em>
          </h2>
          <p>
            Experiências de vida, memória e reflexões sobre continuar
            descobrindo novos caminhos.
          </p>
          <p>Autor: Roberto Farias</p>
          <a className="text-link" href="/#livros">
            Ver todos os livros ↗
          </a>
        </header>
        <div data-reveal="cover">
          <BookCover />
        </div>
        <div className="acquisition-copy" data-reveal="rise">
          <h3>Quer saber como adquirir o livro?</h3>
          <p>
            Escreva ao autor para consultar disponibilidade, condições e opções
            de compra.
          </p>
          <ActionLink href={acquisitionLink("estradas")}>
            Falar pelo WhatsApp
          </ActionLink>
          <a
            className="button button-secondary"
            href={`mailto:${contactEmail}?subject=Interesse%20em%20Ainda%20Tenho%20Estradas`}
          >
            Enviar por e-mail ↗
          </a>
          <a className="text-link" href="/contato/">
            Outras formas de contato ↗
          </a>
          <p className="small-note">
            Valores e disponibilidade devem ser consultados diretamente.
          </p>
        </div>
      </div>
    </section>
  );
}
