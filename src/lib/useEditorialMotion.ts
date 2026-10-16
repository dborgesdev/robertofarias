import { useEffect } from "react";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

export function useEditorialMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !Element.prototype.animate) return;

    const animations = new Set<Animation>();
    const observers: IntersectionObserver[] = [];
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    let stopped = false;
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let fastScrollUntil = 0;

    const play = (
      element: HTMLElement,
      frames: Keyframe[],
      delay = 0,
      duration = 720,
    ) => {
      if (stopped) return;
      // Only a running animation changes visibility; SSR and failure states stay readable.
      try {
        const animation = element.animate(frames, {
          duration,
          delay,
          easing: ease,
          fill: "backwards",
        });
        animations.add(animation);
        animation.finished.then(
          () => animations.delete(animation),
          () => animations.delete(animation),
        );
      } catch {
        // Unsupported effects must not prevent the static document from working.
      }
    };

    let line = 0;
    document.querySelectorAll<HTMLElement>("[data-hero]").forEach((element) => {
      switch (element.dataset.hero) {
        case "line":
          play(
            element,
            [
              { transform: "translate3d(0, 105%, 0)", opacity: 0 },
              { transform: "translate3d(0, 0, 0)", opacity: 1 },
            ],
            60 + line++ * 85,
            780,
          );
          break;
        case "image":
          play(
            element,
            [
              {
                clipPath: "inset(0 0 0 12%)",
                transform: "scale(1.035)",
                opacity: 0,
              },
              { clipPath: "inset(0 0 0 0)", transform: "scale(1)", opacity: 1 },
            ],
            0,
            900,
          );
          break;
        default: {
          const delay =
            { eyebrow: 0, description: 220, actions: 300, caption: 260 }[
              element.dataset.hero || ""
            ] || 0;
          play(
            element,
            [
              { transform: "translate3d(0, 14px, 0)", opacity: 0 },
              { transform: "translate3d(0, 0, 0)", opacity: 1 },
            ],
            delay,
            620,
          );
        }
      }
    });

    const parallaxImages = new Set<HTMLElement>();
    const updateParallax = () => {
      frame = 0;
      parallaxImages.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const progress =
          (rect.top + rect.height / 2 - window.innerHeight / 2) /
          window.innerHeight;
        const shift = desktop.matches
          ? Math.max(-12, Math.min(12, progress * 22))
          : 0;
        element.style.setProperty("--parallax-shift", `${shift}px`);
      });
    };
    const queueParallax = () => {
      if (!frame && !stopped)
        frame = window.requestAnimationFrame(updateParallax);
    };
    const onScroll = () => {
      const now = performance.now();
      const distance = Math.abs(window.scrollY - lastScrollY);
      const elapsed = Math.max(now - lastScrollTime, 16);
      if (distance > 120 && distance / elapsed > 2.5) {
        fastScrollUntil = now + 180;
        animations.forEach((animation) => animation.cancel());
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
      queueParallax();
    };

    if ("IntersectionObserver" in window) {
      const reveals = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            reveals.unobserve(element);
            // A fast scroll or anchor jump must never wait for an offscreen entrance.
            if (
              performance.now() < fastScrollUntil ||
              entry.boundingClientRect.top < -40 ||
              element.contains(document.activeElement)
            )
              return;
            const delay = Math.min(Number(element.dataset.delay) || 0, 140);
            if (element.dataset.reveal === "soft") {
              play(element, [{ opacity: 0 }, { opacity: 1 }], delay, 650);
            } else if (element.dataset.reveal === "image") {
              play(
                element,
                [
                  {
                    clipPath: "inset(0 0 8% 0)",
                    opacity: 0,
                    transform: "translate3d(0, 18px, 0)",
                  },
                  {
                    clipPath: "inset(0 0 0 0)",
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                  },
                ],
                delay,
                800,
              );
            } else {
              const cover = element.dataset.reveal === "cover";
              play(
                element,
                [
                  {
                    transform: `translate3d(0, ${cover ? 30 : 20}px, 0) scale(${cover ? 0.97 : 1})`,
                    opacity: 0,
                  },
                  { transform: "translate3d(0, 0, 0) scale(1)", opacity: 1 },
                ],
                delay,
              );
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -16px 0px" },
      );
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => reveals.observe(element));
      observers.push(reveals);

      const parallax = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) parallaxImages.add(element);
          else parallaxImages.delete(element);
        });
        queueParallax();
      });
      document
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((element) => parallax.observe(element));
      observers.push(parallax);
    }

    const cancelElementMotion = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      animations.forEach((animation) => {
        const target = (animation.effect as KeyframeEffect | null)?.target;
        if (target instanceof Element && target.contains(event.target as Node))
          animation.cancel();
      });
    };
    const stop = () => {
      stopped = true;
      observers.forEach((observer) => observer.disconnect());
      animations.forEach((animation) => animation.cancel());
      window.cancelAnimationFrame(frame);
      document
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((element) => element.style.removeProperty("--parallax-shift"));
    };
    const onPreferenceChange = () => {
      if (reducedMotion.matches) stop();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", queueParallax, { passive: true });
    document.addEventListener("focusin", cancelElementMotion);
    reducedMotion.addEventListener("change", onPreferenceChange);
    return () => {
      stop();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", queueParallax);
      document.removeEventListener("focusin", cancelElementMotion);
      reducedMotion.removeEventListener("change", onPreferenceChange);
    };
  }, []);
}
