import { useRef, useState } from "react";
import { Eyebrow } from "../ui/Editorial";
import ArtScene from "../ui/ArtScene";
export default function Video({ bookPage = false }: { bookPage?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playError, setPlayError] = useState(false);
  async function play() {
    setPlayError(false);
    try {
      await video.current?.play();
      video.current?.focus({ preventScroll: true });
    } catch {
      setPlayError(true);
    }
  }
  return (
    <section id="videos" className="section video-section audiovisual">
      <noscript>
        <style>{`.video-play{display:none!important}`}</style>
      </noscript>
      <div className="video-atmosphere" aria-hidden="true">
        <ArtScene scene="road" />
      </div>
      <div className="container video-grid">
        <div className="video-intro" data-reveal="rise">
          <Eyebrow>O livro em vídeo</Eyebrow>
          <h2>
            {bookPage
              ? "Conheça Ainda Tenho Estradas em vídeo"
              : "Uma apresentação de Ainda Tenho Estradas."}
          </h2>
          <p>
            {bookPage
              ? "Veja a peça de apresentação enviada por Roberto."
              : "Assista ao material de divulgação da obra e conheça a mensagem que Roberto deseja compartilhar."}
          </p>
          <p className="small-note">
            Reproduza quando quiser, com os controles do vídeo.
          </p>
        </div>
        <div className="video-stage" data-reveal="image">
          <div className={`video-frame ${started ? "is-playing" : ""}`}>
            <img
              className="video-portrait"
              src="/images/roberto-retrato-web.webp"
              width="702"
              height="916"
              loading="lazy"
              alt=""
              aria-hidden="true"
            />
            <video
              ref={video}
              controls
              playsInline
              preload="none"
              poster="/images/poster-estradas.jpg"
              width="360"
              height="640"
              tabIndex={0}
              onPlay={() => setStarted(true)}
              onEnded={() => setStarted(false)}
              aria-label="Vídeo promocional de Ainda Tenho Estradas"
            >
              <source
                src="/videos/ainda-tenho-estradas-autor.mp4"
                type="video/mp4"
              />
              Seu navegador não reproduz este vídeo.{" "}
              <a href="/videos/ainda-tenho-estradas.mp4">
                Abrir vídeo de Ainda Tenho Estradas
              </a>
            </video>
            {!started && (
              <button
                type="button"
                className="video-play"
                onClick={play}
                aria-label="Assistir ao vídeo de Ainda Tenho Estradas"
              >
                <span className="play-symbol" aria-hidden="true">
                  ▶
                </span>
                <span>Assistir ao vídeo</span>
              </button>
            )}
          </div>
          {playError && (
            <p className="video-error" role="status">
              Não foi possível iniciar a reprodução. Use os controles do vídeo
              ou{" "}
              <a href="/videos/ainda-tenho-estradas.mp4">
                abra o vídeo original
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
