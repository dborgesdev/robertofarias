import { aboutChapters } from "../../data/about";
import { Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
export default function AboutWriting() {
  const chapter = aboutChapters.writing;
  return (
    <section className="section about-chapter about-writing">
      <div className="container">
        <figure data-reveal="image">
          <ArtScene scene="writing" />
          <figcaption>Ilustração conceitual · escrita</figcaption>
        </figure>
        <div className="about-prose" data-reveal="rise">
          <Eyebrow>{chapter.eyebrow}</Eyebrow>
          <h2>{chapter.title}</h2>
          {chapter.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
