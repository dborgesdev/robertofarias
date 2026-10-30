import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";
import EditorialVideo from "../ui/EditorialVideo";
import { editorialVideos } from "../../data/videos";
export default function WritingOrigin({
  withVideo = true,
}: {
  withVideo?: boolean;
}) {
  return (
    <section
      className={`section writing-origin${withVideo ? " writing-origin--film" : ""}`}
    >
      <ArtScene scene={withVideo ? "road" : "paper"} />
      <div className="container">
        <div className="writing-origin-copy" data-reveal="rise">
          <Eyebrow>
            {withVideo ? "Nas palavras do autor" : "Por trás das páginas"}
          </Eyebrow>
          {withVideo ? (
            <>
              <h2>“Dá pra sustentar uma vida plena.”</h2>
              <p>
                Para Roberto, há espaço para o movimento e o repouso, a conversa
                e o silêncio — sem perder a vontade de viver.
              </p>
              <p className="small-note">
                Reproduza quando quiser, com os controles do vídeo.
              </p>
            </>
          ) : (
            <>
              <h2>
                Por que escrever
                <br />
                sobre <em>continuar?</em>
              </h2>
              <p>
                A aposentadoria trouxe a Roberto uma pergunta que não saiu da
                cabeça. Ao ver amigos e colegas se afastarem do convívio social,
                ele percebeu como algumas pessoas pareciam deixar de viver
                projetos e interesses que antes lhes davam entusiasmo. Escrever
                tornou-se sua maneira de abrir uma conversa e lembrar que cada
                nova fase pode guardar seus próprios caminhos.
              </p>
            </>
          )}
        </div>
        {withVideo && (
          <figure className="writing-origin-film" data-reveal="image">
            <EditorialVideo media={editorialVideos.words} />
          </figure>
        )}
      </div>
    </section>
  );
}
