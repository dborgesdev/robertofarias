import { lifePhotos } from "../../data/photos";
import { Eyebrow } from "../ui/Editorial";

export default function LifeGallery() {
  return (
    <section id="vida-em-movimento" className="section gallery">
      <div className="container">
        <div className="section-heading" data-reveal="rise">
          <div>
            <Eyebrow>Histórias fora do papel</Eyebrow>
            <h2>
              Uma vida feita de encontros, <br />
              movimento e descobertas.
            </h2>
          </div>
          <p>
            O futebol, a música, os passeios e a convivência não são apenas
            lembranças para Roberto. Fazem parte da maneira como ele conta sua
            história — e do desejo de continuar participando dela.
          </p>
        </div>
        <div className="gallery-grid">
          {[lifePhotos[2], lifePhotos[0], lifePhotos[1]].map((photo, index) => (
            <figure
              key={photo.src}
              className={`life-photo life-photo-${index}`}
            >
              <div className="gallery-image" data-reveal="image">
                <img
                  src={photo.src}
                  srcSet={photo.srcSet}
                  sizes="(max-width: 767px) 90vw, 48vw"
                  alt={photo.alt}
                  loading="lazy"
                  width={photo.width}
                  height={photo.height}
                  data-parallax={index === 0 ? "gentle" : undefined}
                />
              </div>
              <figcaption data-reveal="rise">
                <span className="photo-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <h3>{photo.title}</h3>
                  <p>{photo.caption}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
