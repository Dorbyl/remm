import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { PinnedStory } from "@/components/site/PinnedStory";
import { useLuxMotion } from "@/hooks/use-lux-motion";
import { business, collections, gallery, images, navigation, packages, products, social, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Remm Boutique — Luxury Dress Hire, South Africa" },
      { name: "description", content: "Remm Boutique: luxury evening gowns, matric farewell packages and maternity dresses for hire or purchase in South Africa." },
      { property: "og:title", content: "Remm Boutique — Defined by Elegance" },
      { property: "og:description", content: "Luxury dress hire for matric farewells, galas and unforgettable nights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Line({ children, d = 0 }: { children: React.ReactNode; d?: number }) {
  return (
    <span className="line-mask" style={{ ["--d" as string]: `${d}ms` }}>
      <span>{children}</span>
    </span>
  );
}

function Index() {
  useLuxMotion();

  return (
    <main id="top" className="overflow-x-clip">
      <Nav />

      {/* 1 — HERO */}
      <section className="relative h-[100svh] overflow-hidden bg-ink text-ivory grain">
        <div className="absolute inset-0" data-parallax="0.25" data-scale="0.15">
          <img src={images.matric} alt="Model in a silver embellished off-shoulder mermaid gown" className="anim-hero h-full w-full object-cover object-[50%_15%]" fetchPriority="high" />
        </div>
        <div className="absolute inset-0 scrim-bottom" />
        <div className="relative h-full flex flex-col justify-end items-center text-center px-6 pb-16 md:pb-20">
          <p className="eyebrow anim-fade mb-6 text-champagne" style={{ ["--d" as string]: "900ms" }}>{business.tagline} · {business.country}</p>
          <h1 className="font-display leading-[0.85]">
            <span className="block overflow-hidden"><span className="block anim-rise text-[22vw] md:text-[13vw] tracking-[0.08em]" style={{ ["--d" as string]: "400ms" }}>REMM</span></span>
            <span className="block overflow-hidden"><span className="block anim-rise eyebrow !text-[0.75rem] md:!text-sm !tracking-[0.9em] mt-3" style={{ ["--d" as string]: "700ms" }}>Boutique</span></span>
          </h1>
          <p className="font-display italic text-2xl md:text-3xl mt-8 anim-fade" style={{ ["--d" as string]: "1300ms" }}>Defined by elegance.</p>
          <a href="#collections" className="btn-lux btn-light mt-10 anim-fade" style={{ ["--d" as string]: "1600ms" }}>Explore the collection</a>
        </div>
      </section>

      {/* 2 — EDITORIAL INTRO */}
      <section className="relative px-6 md:px-16 py-28 md:py-48 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <p className="eyebrow text-muted-foreground md:col-span-2 reveal">01 — The House</p>
          <h2 data-reveal className="md:col-span-10 font-display text-[11vw] md:text-[6.5vw] leading-[0.95] tracking-tight">
            <Line>Style is not</Line>
            <Line d={120}><em className="text-champagne">simply</em> worn.</Line>
            <Line d={240}><span className="md:pl-[18vw]">It is experienced.</span></Line>
          </h2>
          <div className="md:col-start-7 md:col-span-5 reveal" style={{ ["--d" as string]: "300ms" }}>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Remm Boutique is a South African house of luxury dress hire. Embellished corsets, sequins and statement
              silhouettes — curated for matric farewells, galas, shoots and every night you intend to be remembered.
              Hire or purchase, styled down to the heels and clutch.
            </p>
            <a href="#about" className="link-lux eyebrow inline-block mt-10">Discover our story</a>
          </div>
        </div>
      </section>

      {/* 3 — CINEMATIC IMAGE */}
      <section className="relative px-4 md:px-16 pb-28 md:pb-40">
        <figure className="relative mx-auto max-w-[1400px]">
          <div className="reveal-mask relative h-[85svh] md:h-[110vh] overflow-hidden">
            <div className="absolute -inset-y-[12%] inset-x-0" data-parallax="0.12">
              <img src={images.blackDramatic} alt="Model in a black one-shoulder gown against a stone wall" loading="lazy" className="h-full w-full object-cover object-[50%_20%]" />
            </div>
          </div>
          <figcaption className="reveal mt-6 flex justify-between eyebrow text-muted-foreground">
            <span>Black Dramatic One-Shoulder</span><span>Campaign — 2026</span>
          </figcaption>
          <p className="hidden md:block absolute -left-4 top-1/3 font-display italic text-ivory text-[9vw] leading-none mix-blend-difference reveal-x">Presence</p>
        </figure>
      </section>

      {/* 4 — COLLECTIONS */}
      <section id="collections" className="bg-ink text-ivory py-28 md:py-40">
        <div className="px-6 md:px-16 max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-20 md:mb-32">
            <h2 data-reveal className="font-display text-6xl md:text-9xl leading-none"><Line>Collections</Line></h2>
            <p className="eyebrow text-stone reveal hidden md:block">02 — Three worlds</p>
          </div>
          <div className="space-y-28 md:space-y-0">
            {collections.map((c, i) => {
              const flip = i % 2 === 1;
              return (
                <article key={c.name} className={`md:grid md:grid-cols-12 md:items-center ${i > 0 ? "md:-mt-24" : ""}`}>
                  <div className={`reveal-mask relative aspect-[3/4] overflow-hidden md:col-span-6 ${flip ? "md:col-start-7 md:row-start-1" : ""}`}>
                    <img src={c.image} alt={c.alt} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] hover:scale-105" />
                  </div>
                  <div className={`mt-10 md:mt-0 md:col-span-5 md:row-start-1 ${flip ? "md:col-start-1 md:text-right" : "md:col-start-8"} relative z-10`}>
                    <p className="eyebrow text-champagne reveal">Collection {c.index}</p>
                    <h3 className="font-display text-5xl md:text-7xl leading-[0.95] mt-5 reveal" style={{ ["--d" as string]: "100ms" }}>{c.name}</h3>
                    <p className={`text-stone text-lg leading-relaxed mt-6 max-w-md reveal ${flip ? "md:ml-auto" : ""}`} style={{ ["--d" as string]: "200ms" }}>{c.description}</p>
                    <a href={c.index === "I" ? "#packages" : "#pieces"} className="btn-lux btn-light mt-10 reveal" style={{ ["--d" as string]: "300ms" }}>{c.cta}</a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Matric packages — real offer */}
      <section id="packages" className="bg-ink text-ivory pb-28 md:pb-40 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto border-t border-ivory/15 pt-16">
          <div className="md:flex justify-between items-end mb-14">
            <h3 className="font-display text-4xl md:text-6xl reveal">Matric Farewell <em className="text-champagne">all-in-one</em></h3>
            <p className="eyebrow text-stone mt-4 md:mt-0 reveal">Dress · Heels · Clutch</p>
          </div>
          <div className="grid md:grid-cols-3">
            {packages.map((p, i) => (
              <div key={p.n} className="reveal py-10 md:px-10 border-t md:border-t-0 md:border-l border-ivory/15 first:border-l-0 md:first:pl-0" style={{ ["--d" as string]: `${i * 120}ms` }}>
                <p className="eyebrow text-stone">Package {p.n}</p>
                <p className="font-display text-6xl mt-4">{p.price}</p>
                <p className="eyebrow text-champagne mt-3">{p.refund}</p>
                <ul className="mt-8 space-y-2 text-stone">{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
          <a href={whatsappLink("Hello Remm Boutique, I'd like to book a Matric Farewell 2026 package.")} className="btn-lux btn-light mt-12 reveal">Book your moment</a>
        </div>
      </section>

      {/* 5 — FEATURED PIECES */}
      <section id="pieces" className="py-28 md:py-40">
        <div className="px-6 md:px-16 max-w-[1600px] mx-auto mb-16 md:mb-24 md:flex justify-between items-end">
          <h2 data-reveal className="font-display text-6xl md:text-9xl leading-none"><Line>The Pieces</Line></h2>
          <p className="text-muted-foreground max-w-xs mt-6 md:mt-0 reveal">Available for hire or purchase. Refund on return as noted.</p>
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-x-10 md:gap-y-24 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-6 md:px-16 max-w-[1600px] mx-auto pb-4 [scrollbar-width:none]">
          {products.map((p, i) => (
            <article key={p.name} className={`group shrink-0 w-[78vw] md:w-auto snap-start reveal ${i % 3 === 1 ? "md:mt-32" : ""}`} style={{ ["--d" as string]: `${(i % 3) * 140}ms` }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover object-top transition-all duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06] group-hover:brightness-90" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex gap-2 md:translate-y-full md:group-hover:translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
                  <a href={whatsappLink(`Hello Remm Boutique, I'd like to request: ${p.name} (${p.price}).`)} className="flex-1 bg-ivory text-ink eyebrow h-12 flex items-center justify-center">Request</a>
                </div>
              </div>
              <div className="mt-5 flex justify-between gap-4">
                <h3 className="font-display text-xl leading-snug">{p.name}</h3>
                <p className="eyebrow whitespace-nowrap pt-1">
                  {p.wasPrice && <s className="text-muted-foreground mr-2">{p.wasPrice}</s>}{p.price}
                </p>
              </div>
              <p className="eyebrow text-muted-foreground mt-2 !tracking-[0.2em]">{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6 — PINNED STORY */}
      <PinnedStory />

      {/* 7 — ABOUT */}
      <section id="about" className="px-6 md:px-16 py-28 md:py-48 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 reveal-mask relative aspect-[3/4] overflow-hidden">
            <div className="absolute -inset-y-[10%] inset-x-0" data-parallax="0.08">
              <img src={images.nude} alt="Inside Remm Boutique, a model in a diamanté gown among the rails" loading="lazy" className="h-full w-full object-cover object-top" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-24">
            <p className="eyebrow text-muted-foreground reveal">03 — About</p>
            <h2 data-reveal className="font-display text-5xl md:text-7xl leading-[0.95] mt-6">
              <Line>A wardrobe</Line><Line d={120}>for the moments</Line><Line d={240}><em className="text-champagne">that matter.</em></Line>
            </h2>
            <div className="columns-1 md:columns-2 gap-10 mt-12 text-muted-foreground leading-relaxed reveal">
              <p className="mb-6">
                <span className="font-display text-5xl float-left mr-3 leading-[0.8] text-foreground">R</span>emm Boutique began with a simple belief: that every woman deserves to walk into her night feeling unforgettable.
              </p>
              <p>From matric farewells to maternity shoots, each piece is chosen for its craftsmanship and its presence — and offered for hire or purchase, so luxury is within reach.</p>
            </div>
            <a href={whatsappLink("Hello Remm Boutique, I'd love to know more about you.")} className="link-lux eyebrow inline-block mt-12 reveal">Discover our story →</a>
          </div>
        </div>
      </section>

      {/* 8 — GALLERY */}
      <section className="bg-secondary py-28 md:py-40 px-4 md:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow text-muted-foreground reveal">As worn</p>
            <a href={social.instagram.href} className="font-display italic text-4xl md:text-6xl mt-4 inline-block link-lux reveal">{social.instagram.handle}</a>
          </div>
          <div className="columns-2 md:columns-3 gap-3 md:gap-6">
            {gallery.map((g, i) => (
              <a key={i} href={social.instagram.href} className={`group block mb-3 md:mb-6 overflow-hidden reveal ${i % 3 === 0 ? "aspect-[3/5]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/4]"}`} style={{ ["--d" as string]: `${(i % 3) * 100}ms` }}>
                <img src={g.image} alt={g.alt} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — FINAL CTA */}
      <section id="contact" className="relative h-[100svh] overflow-hidden bg-ink text-ivory grain">
        <div className="absolute -inset-y-[15%] inset-x-0" data-parallax="0.2">
          <img src={images.mermaid} alt="Model in a black sequinned mermaid dress" loading="lazy" className="h-full w-full object-cover object-[50%_20%]" />
        </div>
        <div className="absolute inset-0 scrim-full" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h2 data-reveal className="font-display text-[14vw] md:text-[9vw] leading-[0.88]">
            <Line>Your next look</Line><Line d={150}><em className="text-champagne">awaits.</em></Line>
          </h2>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 w-full sm:w-auto reveal" style={{ ["--d" as string]: "400ms" }}>
            <a href="#pieces" className="btn-lux btn-light">Shop the collection</a>
            <a href={whatsappLink()} className="btn-lux btn-light">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* 10 — FOOTER */}
      <footer className="bg-ink text-stone px-6 md:px-16 pt-20 pb-10 border-t border-ivory/10">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-display text-ivory text-[16vw] md:text-[10vw] leading-none tracking-[0.1em]">REMM</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 eyebrow">
            <nav className="flex flex-col gap-4" aria-label="Footer">
              <a href="#pieces" className="link-lux w-fit">Shop</a>
              {navigation.filter((n) => n.label !== "Pieces").map((n) => <a key={n.href} href={n.href} className="link-lux w-fit">{n.label}</a>)}
            </nav>
            <div className="flex flex-col gap-4">
              <a href={whatsappLink()} className="link-lux w-fit">WhatsApp</a>
              <a href={social.instagram.href} className="link-lux w-fit">Instagram</a>
              <a href={social.tiktok.href} className="link-lux w-fit">TikTok</a>
              <a href={social.facebook.href} className="link-lux w-fit">Facebook</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="link-lux w-fit">Privacy Policy</a>
              <a href="#" className="link-lux w-fit">Terms &amp; Conditions</a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <span>{business.phoneDisplay}</span>
              <span>{business.tagline}</span>
            </div>
          </div>
          <p className="eyebrow mt-20 !text-[0.6rem] text-stone/60">© {new Date().getFullYear()} {business.name} · {business.country}</p>
        </div>
      </footer>
    </main>
  );
}
