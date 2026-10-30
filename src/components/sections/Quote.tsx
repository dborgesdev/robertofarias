import ArtScene from "../ui/ArtScene";
import { Eyebrow } from "../ui/Editorial";
import EditorialVideo from "../ui/EditorialVideo";
import { editorialVideos } from "../../data/videos";

export default function Quote({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`quote-section ${compact ? "quote-compact" : "quote-panorama scene-dark"}`}
    >
      {!compact && <ArtScene scene="road" />}
      <div className="container video-grid video-grid--additional">
        <div className="video-intro" data-reveal="rise">
          <Eyebrow>Nas palavras do autor</Eyebrow>
          <h2>
            “Dá pra sustentar
            <br />
            uma vida plena.”
          </h2>
          <p>
            Para Roberto, há espaço para o movimento e o repouso, <br />a
            conversa e o silêncio — sem perder a vontade de viver.
          </p>
          <p className="small-note">
            Reproduza quando quiser, com os controles do vídeo.
          </p>
        </div>
        <div data-reveal="image">
          <EditorialVideo media={editorialVideos.words} split />
        </div>
      </div>
    </section>
  );
}
