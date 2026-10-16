import { useEffect, useRef, useState } from "react";
export function useChapterTimeline() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const chapters = Array.from(
      root.current?.querySelectorAll<HTMLElement>("[data-chapter]") || [],
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      let next = 0;
      const line = window.innerHeight * 0.48;
      chapters.forEach((chapter, index) => {
        if (chapter.getBoundingClientRect().top <= line) next = index;
      });
      setActive(next);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return { root, active };
}
