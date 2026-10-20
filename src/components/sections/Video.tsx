import { Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
import EditorialVideo from "../ui/EditorialVideo";
import { editorialVideos } from "../../data/videos";

export default function Video({ bookPage = false }: { bookPage?: boolean }) {
  return (
    <section id="videos" className="section video-section audiovisual">
      <div className="video-atmosphere" aria-hidden="true"><ArtScene scene="road" /></div>
      <div className="container video-grid">
        <div className="video-intro" data-reveal="rise">
          <Eyebrow>O livro em vídeo</Eyebrow>
          <h2>{bookPage ? "Conheça Ainda Tenho Estradas em vídeo" : "Uma apresentação de Ainda Tenho Estradas."}</h2>
          <p>{bookPage ? "Veja a peça de apresentação enviada por Roberto." : "Assista ao material de divulgação da obra e conheça a mensagem que Roberto deseja compartilhar."}</p>
          <p className="small-note">Reproduza quando quiser, com os controles do vídeo.</p>
        </div>
        <div data-reveal="image"><EditorialVideo media={editorialVideos.estradas} split /></div>
      </div>
      {!bookPage && (
        <div className="container video-grid video-grid--additional">
          <div className="video-intro" data-reveal="rise">
            <Eyebrow>Outra obra do autor · em vídeo</Eyebrow>
            <h2>Viva Seus 60+ com Saúde e Propósito</h2>
            <p>Uma proposta voltada ao público 60+, com atenção à alimentação, ao movimento e à fé nesta fase da vida.</p>
            <p className="small-note">Reproduza quando quiser, com os controles do vídeo.</p>
          </div>
          <div data-reveal="image"><EditorialVideo media={editorialVideos.viva} split /></div>
        </div>
      )}
    </section>
  );
}
