import type { ReactNode } from "react";
export function ActionLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
      target={href.startsWith("https://wa.me/") ? "_blank" : undefined}
      rel={
        href.startsWith("https://wa.me/") ? "noopener noreferrer" : undefined
      }
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
