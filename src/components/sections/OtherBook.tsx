import { books } from "../../data/books";
import BookCover from "../ui/BookCover";
import { ActionLink, Eyebrow } from "../ui/Editorial";
export default function OtherBook() {
  const book = books[1];
  return (
    <section className="section other-book">
      <div className="container">
        <div data-reveal="cover">
          <BookCover index={1} />
        </div>
        <div data-reveal="rise">
          <Eyebrow>Conheça também · Outra obra do autor</Eyebrow>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <ActionLink href={book.href}>{book.action}</ActionLink>
        </div>
      </div>
    </section>
  );
}
