import { books } from "../../data/books";
import { ActionLink, Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
import BookCover from "../ui/BookCover";
export default function Works({ about = false }: { about?: boolean }) {
  return (
    <section id="livros" className="section works scene-dark">
      <ArtScene scene="road" />
      <div className="container works-layout">
        <header data-reveal="rise">
          <Eyebrow>
            {about ? "07 · As obras" : "Livros de Roberto Farias"}
          </Eyebrow>
          <h2>
            Histórias e reflexões para diferentes <em>caminhos.</em>
          </h2>
          <p>
            Cada livro abre uma conversa própria. Conheça as obras que Roberto
            está preparando para compartilhar com seus leitores.
          </p>
          <ActionLink href={books[0].href}>
            Conheça a obra em destaque
          </ActionLink>
        </header>
        <div className="books-grid">
          {books.map((book, index) => (
            <article className={`book-card book-${index}`} key={book.slug}>
              <a
                className="catalog-cover"
                href={book.href}
                aria-label={`${book.action}: ${book.title}`}
                data-reveal="cover"
                data-delay={index * 90}
              >
                <BookCover index={index} />
              </a>
              <div className="catalog-copy">
                <Eyebrow>{book.status}</Eyebrow>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <a className="text-link" href={book.href}>
                  {book.action} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <span className="scene-credit">Paisagem · ilustração conceitual</span>
    </section>
  );
}
