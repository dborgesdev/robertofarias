import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { EditorialVideoSource } from "../../data/videos";

export default function EditorialVideo({ media }: { media: EditorialVideoSource }) {
  const video = useRef<HTMLVideoElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [playError, setPlayError] = useState(false);

  async function play() {
    const player = video.current;
    if (!player) return;
    setPlayError(false);
    // Attach the MP4 only in response to a visitor's explicit action.
    if (!player.getAttribute("src")) player.src = media.src;
    try {
      await player.play();
      setStarted(true);
      player.focus({ preventScroll: true });
    } catch {
      setPlayError(true);
    }
  }

  function finish() {
    const hadFocus = document.activeElement === video.current;
    setStarted(false);
    setEnded(true);
    // Unload the last frame so replay returns to the original static cover.
    video.current?.removeAttribute("src");
    video.current?.load();
    if (hadFocus) requestAnimationFrame(() => trigger.current?.focus({ preventScroll: true }));
  }

  return (
    <div className="video-stage" style={{ "--film-ratio": `${media.width} / ${media.height}` } as CSSProperties}>
      <div className={`video-frame${started ? " is-playing" : ""}`}>
        <video ref={video} controls={started} playsInline preload="none"
          width={media.width} height={media.height} tabIndex={started ? 0 : -1}
          aria-hidden={!started} aria-label={media.label}
          onEnded={finish} onError={() => setPlayError(true)} />
        {!started && <>
          <img className="video-cover" src={media.poster} width={media.width} height={media.height} loading="lazy" alt="" />
          <button ref={trigger} type="button" className="video-play" onClick={play}
            aria-label={`${ended ? "Reiniciar" : "Assistir ao"} vídeo de ${media.title}`}>
            <svg className="play-symbol" viewBox="0 0 48 48" aria-hidden="true"><path d="m19 14 16 10-16 10Z" fill="currentColor" /></svg>
            <span className="sr-only">{ended ? "Reiniciar vídeo" : "Assistir ao vídeo"}</span>
          </button>
        </>}
      </div>
      {playError && <p className="video-error" role="status">Não foi possível reproduzir o vídeo. Tente novamente ou <a href={media.src}>abra o vídeo original</a>.</p>}
      <noscript><p><a href={media.src}>Assistir ao vídeo de {media.title}</a></p></noscript>
    </div>
  );
}
