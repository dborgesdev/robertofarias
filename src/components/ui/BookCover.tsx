import { books } from "../../data/books";
export default function BookCover({
  index = 0,
  eager = false,
}: {
  index?: number;
  eager?: boolean;
}) {
  const book = books[index];
  return (
    <span className={`book-object book-object-${index}`}>
      <img
        src={book.cover}
        alt={`Capa original de ${book.title}`}
        width={index === 0 ? 1003 : 720}
        height={index === 0 ? 1600 : 825}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
      />
    </span>
  );
}
