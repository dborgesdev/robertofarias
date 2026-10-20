import { useRef, useState } from "react";
import type { EditorialVideoSource } from "../../data/videos";

export default function EditorialVideo({ media, split = false }: { media: EditorialVideoSource; split?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [playError, setPlayError] = useState(false);
  async function play() {
    const player = video.current;
    if (!player) return;
    setPlayError(false);
    try {
      if (player.ended) player.currentTime = 0;
      await player.play();
      player.focus({ preventScroll: true });
    } catch {
      setPlayError(true);
    }
  }
  return (
    <div className={`video-stage${split ? " video-stage--split" : ""}`}>
      <noscript><style>{`.video-play{display:none!important}`}</style></noscript>
      <div className={`video-frame ${started ? "is-playing" : ""}`}>
        {split && <img className="video-portrait" src="/images/roberto-retrato-web.webp" width="702" height="916" loading="lazy" alt="" aria-hidden="true" />}
        <video
          ref={video} controls playsInline preload="none"
          poster={media.poster} width={media.width} height={media.height} tabIndex={0}
          onPlay={() => { setStarted(true); setEnded(false); }}
          onEnded={() => { setStarted(false); setEnded(true); }}
          onError={() => setPlayError(true)} aria-label={media.label}
        >
          <source src={media.src} type="video/mp4" />
          Seu navegador não reproduz este vídeo. <a href={media.src}>Abrir vídeo de {media.title}</a>
        </video>
        {!started && (
          <button type="button" className="video-play" onClick={play}
            aria-label={`${ended ? "Reiniciar" : "Assistir ao"} vídeo de ${media.title}`}>
            <span className="play-symbol" aria-hidden="true">▶</span>
            <span>{ended ? "Reiniciar vídeo" : "Assistir ao vídeo"}</span>
          </button>
        )}
      </div>
      {playError && <p className="video-error" role="status">Não foi possível reproduzir o vídeo. Tente pelos controles ou <a href={media.src}>abra o vídeo original</a>.</p>}
      {!split && <a className="video-fallback" href={media.src}>Abrir vídeo de {media.title} ↗</a>}
    </div>
  );
}
