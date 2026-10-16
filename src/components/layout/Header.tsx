import { useState } from "react";
import { acquisitionLink } from "../../data/contact";
const links = [
  ["Início", "inicio"],
  ["Livros", "livros"],
  ["O autor", "sobre"],
  ["Vida em movimento", "vida-em-movimento"],
  ["Contato", "contato"],
];
export default function Header({
  bookPage,
  contactPage = false,
  aboutPage = false,
}: {
  bookPage: boolean;
  contactPage?: boolean;
  aboutPage?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="Roberto Farias — início">
          Roberto Farias<span>ESCRITOR</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}{" "}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-nav"
          aria-label="Navegação principal"
          className={open ? "navigation is-open" : "navigation"}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              href={
                id === "sobre"
                  ? "/sobre/"
                  : id === "contato"
                    ? "/contato/"
                    : `${bookPage ? "/" : ""}#${id}`
              }
              aria-current={
                (id === "contato" && contactPage) ||
                (id === "sobre" && aboutPage)
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="header-contact button"
          href={acquisitionLink("general")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar livros ↗
        </a>
      </div>
    </header>
  );
}
