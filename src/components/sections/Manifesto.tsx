import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";
export default function Manifesto() {
  return (
    <section id="uma-nova-fase" className="section manifesto">
      <ArtScene scene="paper" />
      <div className="container">
        <header className="manifesto-heading" data-reveal="rise">
          <Eyebrow>A vida em outra fase</Eyebrow>
          <h2>
            Aposentar-se do trabalho{" "}
            <br />
            não é <em>aposentar-se da vida.</em>
          </h2>
        </header>
        <div className="manifesto-prose">
          <p>
            Há mudanças que alteram a rotina, mas não precisam diminuir nossos
            horizontes. Cultivar amizades, aprender algo novo, voltar a uma
            antiga paixão ou simplesmente continuar presente: cada pessoa
            encontra seu próprio jeito de seguir.
          </p>
          <p>
            É dessa inquietação que nasce a escrita de Roberto Farias — um
            convite a olhar para a maturidade com memória, liberdade e
            disposição para novos capítulos.
          </p>
        </div>
      </div>
      <span className="scene-credit">
        Caderno e bússola · ilustração conceitual
      </span>
    </section>
  );
}
