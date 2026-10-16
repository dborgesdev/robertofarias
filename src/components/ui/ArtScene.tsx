type Scene = "portrait" | "road" | "paper" | "study" | "dam" | "writing";
export default function ArtScene({
  scene,
  eager = false,
  className = "",
}: {
  scene: Scene;
  eager?: boolean;
  className?: string;
}) {
  return (
    <img
      className={`art-scene ${className}`}
      src={`/images/editorial-${scene}-1536.webp`}
      srcSet={`/images/editorial-${scene}-768.webp 768w, /images/editorial-${scene}-1536.webp 1536w`}
      sizes="100vw"
      width="1536"
      height="864"
      alt={
        scene === "portrait"
          ? "Composição artística a partir do retrato original de Roberto Farias, sobre litoral ao pôr do sol"
          : ""
      }
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}
