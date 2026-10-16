import { aboutChapters } from "../../data/about";
import { lifePhotos } from "../../data/photos";
import { Eyebrow } from "../ui/Editorial";
export default function AboutNewPaths() {
  const chapter = aboutChapters.paths;
  return (
    <section className="section about-chapter about-paths">
      <div className="container">
        <div className="about-prose" data-reveal="rise">
          <Eyebrow>{chapter.eyebrow}</Eyebrow>
          <h2>{chapter.title}</h2>
          {chapter.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="paths-album">
          {lifePhotos.slice(0, 2).map((photo) => (
            <figure
              className="memory-print"
              key={photo.src}
              data-reveal="image"
            >
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width:767px) 65vw, 30vw"
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                loading="lazy"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
