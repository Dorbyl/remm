import { useEffect, useState } from "react";
import { business, navigation, social, whatsappLink } from "@/data/site";

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const light = !solid && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          solid && !open ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        } ${light ? "text-ivory" : "text-ink"}`}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-[1600px] items-center justify-between px-5 md:px-10">
          <nav className="hidden md:flex gap-10 eyebrow" aria-label="Primary">
            {navigation.slice(0, 2).map((n) => (
              <a key={n.href} href={n.href} className="link-lux">{n.label}</a>
            ))}
          </nav>
          <a href="#top" className="font-display text-xl md:text-2xl tracking-[0.35em] md:absolute md:left-1/2 md:-translate-x-1/2">
            REMM
          </a>
          <nav className="hidden md:flex gap-10 eyebrow" aria-label="Secondary">
            {navigation.slice(2).map((n) => (
              <a key={n.href} href={n.href} className="link-lux">{n.label}</a>
            ))}
          </nav>
          <button
            className="md:hidden eyebrow h-11 px-1 relative z-50"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ivory text-ink md:hidden flex flex-col justify-between px-6 pt-28 pb-10 transition-[clip-path] duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)] pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-4">
          {navigation.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl italic transition-all duration-700"
              style={{ transitionDelay: open ? `${200 + i * 80}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateY(20px)" }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 eyebrow text-muted-foreground">
          <a className="block" href={whatsappLink()}>WhatsApp · {business.phoneDisplay}</a>
          <a className="block" href={social.instagram.href}>Instagram · {social.instagram.handle}</a>
        </div>
      </div>
    </>
  );
}
