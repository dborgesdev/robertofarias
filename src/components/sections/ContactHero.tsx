import { Eyebrow } from "../ui/Editorial";
export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero-copy">
          <div data-hero="eyebrow">
            <Eyebrow>Contato · Roberto Farias</Eyebrow>
          </div>
          <h1 data-hero="line">
            Toda boa história começa <em>com uma conversa.</em>
          </h1>
          <p data-hero="description">
            Quer conversar com Roberto ou saber como adquirir um exemplar? Entre
            em contato diretamente com o autor.
          </p>
          <a className="text-link" href="#contato">
            Vamos conversar <span aria-hidden="true">↓</span>
          </a>
        </div>
        <figure data-hero="image">
          <img
            src="/images/roberto-retrato-web.webp"
            width="702"
            height="916"
            alt="Roberto Farias, escritor pernambucano"
            fetchPriority="high"
          />
          <figcaption>Roberto Farias · Escritor</figcaption>
        </figure>
      </div>
    </section>
  );
}
