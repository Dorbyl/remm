import { useEffect, useRef, useState } from "react";
import { images } from "@/data/site";

const scenes = [
  { eyebrow: "The Collection", line: "Designed for presence.", image: images.silver, alt: "Silver corset gown beside a pool" },
  { eyebrow: "The Detail", line: "Every bead, every seam.", image: images.nude, alt: "Diamanté corset gown in the boutique" },
  { eyebrow: "The Night", line: "Made to be remembered.", image: images.clientLook, alt: "Client in a black gown under a chandelier" },
];

export function PinnedStory() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current!;
    const on = (e: Event) => {
      const p = (e as CustomEvent<number>).detail;
      setActive(Math.min(scenes.length - 1, Math.floor(p * scenes.length)));
    };
    el.addEventListener("progress", on);
    return () => el.removeEventListener("progress", on);
  }, []);

  return (
    <section ref={ref} data-progress className="relative h-[320vh] bg-ink text-ivory" aria-label="The collection story">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {scenes.map((s, i) => (
          <img
            key={s.line}
            src={s.image}
            alt={s.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-[1800ms] ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.08)" }}
          />
        ))}
        <div className="absolute inset-0 scrim-full" />
        <div className="relative h-full flex flex-col justify-end md:justify-center px-6 md:px-20 pb-24 md:pb-0">
          <div className="relative h-48 md:h-64">
            {scenes.map((s, i) => (
              <div
                key={s.line}
                className="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)]"
                style={{ opacity: i === active ? 1 : 0, transform: i === active ? "none" : `translateY(${i < active ? -30 : 30}px)` }}
                aria-hidden={i !== active}
              >
                <p className="eyebrow text-champagne mb-6">{String(i + 1).padStart(2, "0")} — {s.eyebrow}</p>
                <h2 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-4xl">{s.line}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-6 md:right-20 bottom-10 flex gap-3" aria-hidden>
          {scenes.map((_, i) => (
            <span key={i} className={`h-px w-10 transition-colors duration-700 ${i === active ? "bg-ivory" : "bg-ivory/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
