import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";
export default function WritingOrigin() {
  return (
    <section className="section writing-origin">
      <ArtScene scene="paper" />
      <div className="container">
        <div data-reveal="rise">
          <Eyebrow>Por trás das páginas</Eyebrow>
          <h2>
            Por que escrever
            <br />
            sobre <em>continuar?</em>
          </h2>
        </div>
        <p>
          A aposentadoria trouxe a Roberto uma pergunta que não saiu da cabeça.
          Ao ver amigos e colegas se afastarem do convívio social, ele percebeu
          como algumas pessoas pareciam deixar de viver projetos e interesses
          que antes lhes davam entusiasmo. Escrever tornou-se sua maneira de
          abrir uma conversa e lembrar que cada nova fase pode guardar seus
          próprios caminhos.
        </p>
      </div>
      <span className="scene-credit">
        Caderno e bússola · ilustração conceitual
      </span>
    </section>
  );
}
