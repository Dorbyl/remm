import { useEffect } from "react";

/**
 * One shared observer for `.reveal*` / `.line-mask` elements and one rAF-throttled
 * scroll listener for `[data-parallax]` (speed) and `[data-progress]` (sets --p 0..1).
 */
export function useLuxMotion() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    document
      .querySelectorAll(".reveal, .reveal-x, .reveal-mask, [data-reveal]")
      .forEach((el) => io.observe(el));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const host = el.parentElement!;
        const r = host.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const offset = (r.top + r.height / 2 - vh / 2) * -speed;
        const scale = el.dataset.scale ? 1 + Math.max(0, -r.top / vh) * parseFloat(el.dataset.scale) : 1;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
      });
      document.querySelectorAll<HTMLElement>("[data-progress]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const total = r.height - vh;
        const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
        el.style.setProperty("--p", p.toFixed(4));
        el.dispatchEvent(new CustomEvent("progress", { detail: p }));
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    if (!reduced) {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }
    update();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
