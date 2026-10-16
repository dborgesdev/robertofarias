import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";
export default function PersonalMotivation() {
  return (
    <section className="section motivation writing-scene">
      <div className="container">
        <figure data-reveal="image">
          <ArtScene scene="road" />
          <figcaption>Novos caminhos · ilustração conceitual</figcaption>
        </figure>
        <div>
          <Eyebrow>Uma motivação pessoal</Eyebrow>
          <h2>
            Uma missão realizada.
            <br />
            <em>Novos capítulos pela frente.</em>
          </h2>
        </div>
        <div>
          <p>
            A expressão popular de que é preciso ter filhos, plantar uma árvore
            e escrever um livro acompanhou Roberto como uma espécie de
            compromisso pessoal. Ao realizar também a escrita, celebrou essa
            conquista. Mas sua mensagem não termina na missão cumprida: ela
            continua no desejo de aproveitar a vida e compartilhar experiências.
          </p>
          <a className="text-link" href="/#livros">
            Ver todos os livros <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
