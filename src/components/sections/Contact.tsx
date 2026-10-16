import {
  contactEmail,
  acquisitionLink,
  whatsappDisplay,
} from "../../data/contact";
import ContactForm from "../contact/ContactForm";
import { Eyebrow } from "../ui/Editorial";

export default function Contact({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  return (
    <section
      id="contato"
      className={`section contact contact-conversation ${standalone ? "standalone-contact" : ""}`}
    >
      <div className="container">
        <header className="conversation-heading" data-reveal="rise">
          <Eyebrow>Uma conversa que continua</Eyebrow>
          <h2>
            {standalone ? (
              "Escreva sua mensagem."
            ) : (
              <>
                Toda boa história começa <em>com uma conversa.</em>
              </>
            )}
          </h2>
          <p>
            Quer conversar com Roberto ou saber como adquirir um exemplar? Entre
            em contato diretamente com o autor e consulte as informações
            atualizadas sobre suas obras.
          </p>
        </header>
        <div className="conversation-body">
          <aside className="contact-addresses">
            <p className="contact-address-label">
              Uma mensagem, um novo encontro.
            </p>
            <a
              href={acquisitionLink("general")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp</span>
              {whatsappDisplay}
              <span aria-hidden="true">↗</span>
            </a>
            <a href={`mailto:${contactEmail}`}>
              <span>E-mail</span>
              {contactEmail}
              <span aria-hidden="true">↗</span>
            </a>
            {!standalone && (
              <a className="contact-page-link" href="/contato/">
                Ir para a página de contato <span aria-hidden="true">↗</span>
              </a>
            )}
            <p className="small-note">
              Valores e disponibilidade dos livros devem ser consultados
              diretamente com Roberto.
            </p>
          </aside>
          <ContactForm />
        </div>
      </div>
      <span className="scene-credit">
        Elementos de escrita · ilustração conceitual
      </span>
    </section>
  );
}
