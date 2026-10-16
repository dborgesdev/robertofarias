import { Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
export default function AboutCareer() {
  return (
    <section className="section about-chapter about-career scene-dark">
      <ArtScene scene="dam" />
      <div className="container">
        <div className="about-prose" data-reveal="rise">
          <Eyebrow>04 · Trajetória profissional</Eyebrow>
          <h2>Trabalho na Chesf</h2>
          <p>
            Roberto construiu sua trajetória profissional na Chesf, da qual se
            aposentou.
          </p>
          <p>
            A formação e a vida de trabalho integram o percurso do economista
            aposentado que encontrou na escrita outra maneira de compartilhar
            seus aprendizados.
          </p>
        </div>
      </div>
      <span className="scene-credit">
        Energia · ilustração conceitual, não retrata uma instalação da Chesf
      </span>
    </section>
  );
}
