import { BedDouble, Bath, Ruler, MapPin, Heart, MessageCircle, Star, Users, Gauge, Fuel } from "lucide-react";
import type { Property } from "@/data/properties";
import type { Villa } from "@/data/villas";
import type { Car } from "@/data/cars";
import type { Tour } from "@/data/tours";
import type { Testimonial } from "@/data/testimonials";
import { waLink } from "@/data/site";
import { useStore } from "@/lib/store";
import Reveal from "@/components/Reveal";

export function PropertyCard({ p, onOpen, delay = 0 }: { p: Property; onOpen: (p: Property) => void; delay?: 0 | 1 | 2 | 3 }) {
  const { favorites, toggleFavorite } = useStore();
  const fav = favorites.includes(p.id);
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lux">
        <div className="zoom-img relative h-60">
          <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white ${p.status === "For Sale" ? "bg-gold-500 text-navy-950" : "bg-navy-900/90"}`}>
              {p.status}
            </span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-900">{p.type}</span>
          </div>
          <button
            onClick={() => toggleFavorite(p.id)}
            aria-label="Save to favorites"
            className={`absolute right-4 top-4 rounded-full p-2.5 shadow transition ${fav ? "bg-gold-500 text-navy-950" : "bg-white/90 text-navy-800 hover:bg-white"}`}
          >
            <Heart className={`h-4 w-4 ${fav ? "fill-navy-950" : ""}`} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/85 to-transparent p-4">
            <p className="font-display text-xl font-bold text-white">{p.price}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold leading-snug text-navy-950">{p.title}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-navy-600">
            <MapPin className="h-4 w-4 text-gold-500" /> {p.location} · <span className="text-navy-400">{p.id}</span>
          </p>
          <div className="mt-3 flex items-center gap-4 border-y border-navy-100 py-3 text-sm text-navy-700">
            {p.beds > 0 && <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-gold-600" /> {p.beds} Beds</span>}
            {p.baths > 0 && <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold-600" /> {p.baths} Baths</span>}
            <span className="flex items-center gap-1.5"><Ruler className="h-4 w-4 text-gold-600" /> {p.area}</span>
          </div>
          <div className="mt-4 flex flex-1 items-end gap-2">
            <button onClick={() => onOpen(p)} className="btn-navy flex-1 !px-4 !py-2.5 !text-xs">View Details</button>
            <a
              href={waLink(`Hello Korir Agency! I'm interested in ${p.id} — ${p.title} (${p.price}).`)}
              target="_blank" rel="noreferrer" aria-label="Inquire on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-wa text-white transition hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function VillaCard({ v, onOpen, delay = 0 }: { v: Villa; onOpen: (v: Villa) => void; delay?: 0 | 1 | 2 | 3 }) {
  const { favorites, toggleFavorite } = useStore();
  const fav = favorites.includes(v.id);
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lux">
        <div className="zoom-img relative h-60">
          <img src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950">{v.tag}</span>
          <button
            onClick={() => toggleFavorite(v.id)}
            aria-label="Save to favorites"
            className={`absolute right-4 top-4 rounded-full p-2.5 shadow transition ${fav ? "bg-gold-500 text-navy-950" : "bg-white/90 text-navy-800 hover:bg-white"}`}
          >
            <Heart className={`h-4 w-4 ${fav ? "fill-navy-950" : ""}`} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/85 to-transparent p-4">
            <p className="font-display text-xl font-bold text-white">{v.pricePerNight} <span className="text-sm font-normal text-white/80">/ night</span></p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold text-navy-950">{v.name}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-navy-600"><MapPin className="h-4 w-4 text-gold-500" /> {v.location}</p>
          <div className="mt-3 flex items-center gap-4 border-y border-navy-100 py-3 text-sm text-navy-700">
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-gold-600" /> Sleeps {v.sleeps}</span>
            <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-gold-600" /> {v.bedrooms} BR</span>
            <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold-600" /> {v.baths} BA</span>
          </div>
          <div className="mt-4 flex flex-1 items-end gap-2">
            <button onClick={() => onOpen(v)} className="btn-gold flex-1 !px-4 !py-2.5 !text-xs">Check Availability</button>
            <a
              href={waLink(`Hello Korir Agency! I'd like to book ${v.name} in ${v.location}.`)}
              target="_blank" rel="noreferrer" aria-label="Book on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-wa text-white transition hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function CarCard({ c, onBook, delay = 0 }: { c: Car; onBook: (c: Car) => void; delay?: 0 | 1 | 2 | 3 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lux">
        <div className="zoom-img relative h-56 bg-sand-100">
          <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-navy-900/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">{c.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold text-navy-950">{c.name}</h3>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-navy-700">
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-gold-600" /> {c.seats} seats</span>
            <span className="flex items-center gap-1.5"><Gauge className="h-4 w-4 text-gold-600" /> {c.transmission}</span>
            <span className="flex items-center gap-1.5"><Fuel className="h-4 w-4 text-gold-600" /> {c.fuel}</span>
          </div>
          <p className="mt-3 text-sm italic text-navy-600">{c.bestFor}</p>
          <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-4">
            <div>
              <p className="font-display text-lg font-bold text-navy-950">{c.pricePerDay}<span className="text-xs font-normal text-navy-500"> /day self-drive</span></p>
              <p className="text-xs text-navy-500">With driver: {c.chauffeurPerDay}</p>
            </div>
            <button onClick={() => onBook(c)} className="btn-gold !px-5 !py-2.5 !text-xs">Hire Now</button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function TourCard({ t, onBook, delay = 0 }: { t: Tour; onBook: (t: Tour) => void; delay?: 0 | 1 | 2 | 3 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lux">
        <div className="zoom-img relative h-56">
          <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950">{t.category}</span>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/85 to-transparent p-4">
            <p className="font-display text-lg font-bold text-white">{t.pricePerPerson} <span className="text-sm font-normal text-white/80">per person</span></p>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold leading-snug text-navy-950">{t.name}</h3>
          <p className="mt-1.5 text-sm text-navy-600">{t.duration}</p>
          <ul className="mt-3 space-y-1.5 text-sm text-navy-700">
            {t.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2"><Star className="mt-0.5 h-3.5 w-3.5 shrink-0 fill-gold-500 text-gold-500" /> {h}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-1 items-end">
            <button onClick={() => onBook(t)} className="btn-navy w-full !py-2.5 !text-xs">Book This Tour</button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function TestimonialCard({ t, delay = 0 }: { t: Testimonial; delay?: 0 | 1 | 2 | 3 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/60">
        <div className="flex gap-1">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
          ))}
        </div>
        <blockquote className="mt-4 flex-1 text-sm leading-7 text-navy-800">“{t.text}”</blockquote>
        <figcaption className="mt-5 flex items-center gap-3 border-t border-navy-100 pt-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-bold text-gold-400">
            {t.name.charAt(0)}
          </span>
          <div>
            <p className="text-sm font-bold text-navy-950">{t.name}</p>
            <p className="text-xs text-navy-500">{t.origin} · {t.service}</p>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
