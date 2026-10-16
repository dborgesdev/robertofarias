import { contactEmail } from "../../data/contact";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="footer-brand" href="/">
              Roberto Farias
            </a>
            <p>Histórias vividas. Caminhos por descobrir.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <a href="/#livros">Livros</a>
            <a href="/sobre/">Minha história</a>
            <a href="/contato/">Contato</a>
          </nav>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Roberto Farias.</span>
          <a
            href="https://smartlocal.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desenvolvido por Douglas Borges - Smart Local
          </a>
        </div>
      </div>
    </footer>
  );
}
