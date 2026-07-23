import { useState } from "react";
import { X } from "lucide-react";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

interface Shot { src: string; cat: string; alt: string }

const SHOTS: Shot[] = [
  { src: "/images/hero-diani.jpg", cat: "Beaches", alt: "Aerial view of Diani Beach" },
  { src: "/images/villa-ahana.jpg", cat: "Properties", alt: "Luxury beachfront villa" },
  { src: "/images/safari-elephants.jpg", cat: "Safaris", alt: "Red elephants of Tsavo" },
  { src: "/images/dhow-sunset.jpg", cat: "Experiences", alt: "Dhows at golden hour" },
  { src: "/images/villa-sunset.jpg", cat: "Properties", alt: "Villa at sunset" },
  { src: "/images/kisite-dhows.jpg", cat: "Experiences", alt: "Dhows at Kisite sandbank" },
  { src: "/images/interior-lounge.jpg", cat: "Interiors", alt: "Penthouse living room" },
  { src: "/images/shimba-falls.jpg", cat: "Safaris", alt: "Sheldrick Falls, Shimba Hills" },
  { src: "/images/villa-monkey.jpg", cat: "Properties", alt: "Palm villa with pool" },
  { src: "/images/jetski.jpg", cat: "Experiences", alt: "Jet ski fun at Diani" },
  { src: "/images/cottage-veranda.jpg", cat: "Properties", alt: "Swahili cottage veranda" },
  { src: "/images/fort-jesus.jpg", cat: "Culture", alt: "Fort Jesus, Mombasa" },
  { src: "/images/interior-coastal.jpg", cat: "Interiors", alt: "Coastal apartment interior" },
  { src: "/images/dhow-wasini.jpg", cat: "Experiences", alt: "Wasini dhow sailing" },
  { src: "/images/resort-night.jpg", cat: "Properties", alt: "Resort pool by night" },
  { src: "/images/family-beach.jpg", cat: "Experiences", alt: "Family beach day with camel" },
  { src: "/images/airbnb-studio.jpg", cat: "Interiors", alt: "Ocean view studio" },
  { src: "/images/sgr-viaduct.jpg", cat: "Culture", alt: "SGR Madaraka Express" },
  { src: "/images/chef.jpg", cat: "Experiences", alt: "Private chef plating" },
  { src: "/images/hotel-lobby.jpg", cat: "Interiors", alt: "Makuti resort lobby" },
  { src: "/images/villa-palms.jpg", cat: "Properties", alt: "Villa pool and palms" },
  { src: "/images/snorkeling.jpg", cat: "Experiences", alt: "Snorkelling the reef" },
  { src: "/images/land-plot.jpg", cat: "Properties", alt: "Beachfront plot, Msambweni" },
  { src: "/images/sgr-train.jpg", cat: "Culture", alt: "Madaraka Express at terminus" },
];

const CATS = ["All", "Properties", "Beaches", "Experiences", "Safaris", "Interiors", "Culture"];

export default function Gallery() {
  useSeo("Gallery | Korir Agency — Coastal Kenya in Pictures",
    "A portfolio of properties, beaches, safaris and travel experiences across Coastal Kenya — Diani, Mombasa, Wasini, Tsavo and beyond.");
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<Shot | null>(null);

  const filtered = SHOTS.filter((s) => cat === "All" || s.cat === cat);

  return (
    <main>
      <PageHero image="/images/kisite-dhows.jpg" eyebrow="Gallery" title="Coastal Kenya, Frame by Frame"
        subtitle="Properties, beaches, safaris and experiences — a glimpse of the life we help you live." />

      <section className="py-16 sm:py-20">
        <div className="container-lux">
          <div className="flex flex-wrap justify-center gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${cat === c ? "bg-navy-900 text-gold-300" : "bg-sand-100 text-navy-700 hover:bg-sand-200"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
            {filtered.map((s, i) => (
              <Reveal key={s.src + s.cat} delay={(i % 3) as 0 | 1 | 2}>
                <button onClick={() => setLightbox(s)} className="zoom-img group relative block w-full overflow-hidden rounded-2xl shadow-card">
                  <img src={s.src} alt={s.alt} loading="lazy" className="w-full object-cover" />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-left">
                      <span className="block text-xs font-bold uppercase tracking-wider text-gold-300">{s.cat}</span>
                      <span className="block text-sm font-semibold text-white">{s.alt}</span>
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur" onClick={() => setLightbox(null)}>
          <button className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <figure className="max-h-[88vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="max-h-[78vh] w-full rounded-2xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-white/80">{lightbox.alt} · {lightbox.cat}</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
