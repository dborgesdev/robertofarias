type Props = {
  scene: "coast";
  className?: string;
  eager?: boolean;
};
export default function SymbolicImage({
  scene,
  className,
  eager = false,
}: Props) {
  return (
    <img
      className={className}
      src={`/images/symbolic-${scene}-960.webp`}
      srcSet={`/images/symbolic-${scene}-640.webp 640w, /images/symbolic-${scene}-960.webp 960w, /images/symbolic-${scene}-1536.webp 1536w`}
      sizes="(max-width:767px) 100vw, 75vw"
      width="1536"
      height="1024"
      alt=""
      loading={eager ? "eager" : "lazy"}
    />
  );
}
