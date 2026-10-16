import { Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
export default function AboutEducation() {
  return (
    <section className="section about-chapter about-education">
      <ArtScene scene="study" />
      <div className="container">
        <div className="about-prose" data-reveal="rise">
          <Eyebrow>03 · Formação</Eyebrow>
          <h2>
            UFPE e novos <em>horizontes.</em>
          </h2>
          <p>
            Roberto formou-se em Ciências Econômicas pela Universidade Federal
            de Pernambuco.
          </p>
          <p>
            A formação e a vida de trabalho integram o percurso do economista
            aposentado que encontrou na escrita outra maneira de compartilhar
            seus aprendizados.
          </p>
        </div>
      </div>
      <span className="scene-credit">
        Formação · ilustração simbólica, não retrata a UFPE
      </span>
    </section>
  );
}
