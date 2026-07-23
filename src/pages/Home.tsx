import { useState } from "react";
import { Link } from "react-router";
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Clock, Sparkles, Palmtree, Car, Binoculars, Plane, Star, Quote } from "lucide-react";
import { BRAND, SERVICES, STATS, waLink } from "@/data/site";
import { VILLAS } from "@/data/villas";
import { TOURS } from "@/data/tours";
import { TESTIMONIALS } from "@/data/testimonials";
import { BLOG_POSTS } from "@/data/blog";
import { useStore } from "@/lib/store";
import { useSeo } from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ServiceIcon from "@/components/ServiceIcon";
import { PropertyCard, VillaCard, TestimonialCard } from "@/components/cards";
import { InquiryModal } from "@/components/Modals";
import type { Property } from "@/data/properties";
import type { Villa } from "@/data/villas";

export default function Home() {
  useSeo(
    "Korir Agency | Your Trusted Coastal Property & Travel Partner — Diani, Mombasa, Kenya",
    "Property sales & rentals, holiday villas, car hire, airport & SGR transfers, tours & safaris across Coastal Kenya. Book instantly on WhatsApp +254 722 280 840."
  );
  const { listings, content } = useStore();
  const [property, setProperty] = useState<Property | null>(null);
  const [villaInquiry, setVillaInquiry] = useState<Villa | null>(null);
  const featured = listings.filter((p) => p.featured).slice(0, 3);

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950">
        <img src="/images/hero-diani.jpg" alt="Aerial view of Diani Beach, Kenya" className="absolute inset-0 h-full w-full animate-kenburns object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/80 to-transparent" />

        <div className="container-lux relative pt-16 pb-28">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-10 bg-gold-500" />
              Diani Beach · South Coast · Kenya
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
              {content.heroTitle.split("Coastal Kenya")[0]}
              <span className="italic text-gold-300">Coastal Kenya</span>
              {content.heroTitle.split("Coastal Kenya")[1] ?? ""}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">{content.heroSubtitle}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={waLink("Hello Korir Agency! I would like to make a booking.")} target="_blank" rel="noreferrer" className="btn-wa">
                <MessageCircle className="h-5 w-5" /> Book Now on WhatsApp
              </a>
              <Link to="/properties" className="btn-outline-light">
                Explore Properties <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* Quick actions */}
          <Reveal delay={2} className="mt-14">
            <div className="grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: Palmtree, label: "Holiday Villas", to: "/holiday-villas" },
                { icon: Car, label: "Car Hire", to: "/car-hire" },
                { icon: Binoculars, label: "Safaris", to: "/tours-safaris" },
                { icon: Plane, label: "Transfers", to: "/car-hire" },
              ].map((q) => (
                <Link key={q.label} to={q.to}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-5 text-center backdrop-blur transition-all hover:border-gold-400/60 hover:bg-white/10">
                  <q.icon className="h-6 w-6 text-gold-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">{q.label}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="relative z-10 -mt-14">
        <div className="container-lux">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-800 shadow-lux lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-navy-900 px-6 py-8 text-center">
                  <p className="font-display text-3xl font-bold text-gold-400 sm:text-4xl">{s.value}</p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ABOUT TEASER ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="zoom-img overflow-hidden rounded-3xl shadow-lux">
              <img src="/images/villa-sunset.jpg" alt="Luxury villa at sunset in Diani" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-lux sm:block">
              <img src="/images/dhow-sunset.jpg" alt="Dhow at sunset" className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -left-4 top-8 hidden rounded-2xl bg-gold-500 px-5 py-4 shadow-lux lg:block">
              <p className="font-display text-2xl font-bold text-navy-950">10+ yrs</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-navy-900">Coastal expertise</p>
            </div>
          </Reveal>
          <div>
            <SectionHead align="left" eyebrow="About Korir Agency" title="One Trusted Partner for Property, Travel & Lifestyle"
              subtitle="Korir Agency is a leading real estate, travel and lifestyle solutions company based on the South Coast of Kenya — serving clients across Coastal Kenya, throughout Kenya, and internationally on request." />
            <Reveal delay={1}>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, title: "Verified & Transparent", text: "Every property is vetted, every price is honest, every promise is kept." },
                  { icon: MapPin, title: "Deep Local Roots", text: "Born on the South Coast — we know every beach, plot, road and shortcut." },
                  { icon: Clock, title: "24/7 Concierge Care", text: "One WhatsApp message reaches our whole team, day or night." },
                ].map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-100 text-gold-600">
                      <v.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-navy-950">{v.title}</p>
                      <p className="text-sm leading-6 text-navy-700/80">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/about" className="btn-navy">Our Story <ArrowRight className="h-4 w-4" /></Link>
                <a href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`} className="btn-gold">Call {BRAND.phones[0]}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="container-lux">
          <SectionHead eyebrow="What We Do" title="Sixteen Services. One Standard: Excellence."
            subtitle="From your first airport pickup to the keys of your beachfront villa — everything under one trusted roof." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
                <Link to={s.link ?? "/services"}
                  className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lux">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-navy-950">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-navy-700/80">{s.blurb}</p>
                  <span className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/services" className="btn-gold">View All 16 Services <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURED PROPERTIES ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-lux">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHead align="left" eyebrow="Featured Listings" title="Hand-Picked Coastal Properties"
              subtitle="Beachfront villas, apartments, plots and resorts — verified and ready." />
            <Reveal>
              <Link to="/properties" className="btn-navy shrink-0">All Properties <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} p={p} onOpen={setProperty} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ VILLAS TEASER (dark) ============ */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
        <img src="/images/resort-night.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="container-lux relative">
          <SectionHead light eyebrow="Holiday Villas & Airbnb" title="Stay Where the Ocean Whispers"
            subtitle="Beachfront villas, Swahili cottages and serviced apartments — fully vetted, fully supported, unforgettable." />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {VILLAS.slice(0, 3).map((v, i) => (
              <VillaCard key={v.id} v={v} onOpen={setVillaInquiry} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/holiday-villas" className="btn-gold">Browse All Stays <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ TOURS STRIP ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-lux">
          <SectionHead eyebrow="Tours & Safaris" title="Beach to Bush, in One WhatsApp Message"
            subtitle="Dolphins at dawn, red elephants by noon, sunset dhows by evening — the South Coast's greatest hits, expertly guided." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TOURS.slice(0, 4).map((t, i) => (
              <Reveal key={t.id} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
                <Link to="/tours-safaris" className="group relative block h-80 overflow-hidden rounded-3xl shadow-card transition-all hover:-translate-y-1.5 hover:shadow-lux">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <span className="rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-950">{t.category}</span>
                    <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug text-white">{t.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-gold-300">{t.pricePerPerson} pp</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="bg-navy-900 py-20 sm:py-24">
        <div className="container-lux">
          <SectionHead light eyebrow="The Korir Standard" title="Why Clients Never Leave Us"
            subtitle="Local and international clients trust us for one reason: we treat your holiday, your property and your money like our own." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, t: "Integrity First", d: "Verified titles, licensed partners, honest pricing — always." },
              { icon: Sparkles, t: "Premium Experience", d: "Every touchpoint designed to feel effortless and elegant." },
              { icon: Clock, t: "Always On", d: "24/7 support on WhatsApp, phone and email. We answer." },
              { icon: Star, t: "Proven Results", d: "1,200+ happy clients and five-star reviews across every service." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:border-gold-400/50">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{v.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-sand-50 py-20 sm:py-28">
        <div className="container-lux">
          <SectionHead eyebrow="Client Love" title="Trusted From Diani to Dubai"
            subtitle="Real words from real clients — property buyers, holidaymakers, investors and groups." />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/testimonials" className="btn-navy">Read All Testimonials <Quote className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ BLOG TEASER ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-lux">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHead align="left" eyebrow="From the Journal" title="Coastal Stories & Expert Guides"
              subtitle="Travel guides, investment insights and insider knowledge from the South Coast." />
            <Reveal><Link to="/blog" className="btn-navy shrink-0">All Articles <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((b, i) => (
              <Reveal key={b.slug} delay={(i % 3) as 0 | 1 | 2} className="h-full">
                <Link to={`/blog/${b.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all hover:-translate-y-1.5 hover:shadow-lux">
                  <div className="zoom-img h-52"><img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover" /></div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold-600">{b.category} · {b.readTime}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-950 group-hover:text-gold-700">{b.title}</h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-navy-700/80">{b.excerpt}</p>
                    <span className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                      Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <img src="/images/dhow-sunset.jpg" alt="Dhows sailing at sunset" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="container-lux relative text-center">
          <Reveal>
            <p className="font-display text-lg italic text-gold-300">“{BRAND.motto}”</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Your Coastal Story Starts With One Message
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              Villas, properties, safaris, cars, transfers — tell us what you dream of, and let it happen.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href={waLink("Hello Korir Agency! I'm ready to start planning.")} target="_blank" rel="noreferrer" className="btn-wa">
                <MessageCircle className="h-5 w-5" /> WhatsApp {BRAND.phones[0]}
              </a>
              <Link to="/contact" className="btn-outline-light">Send an Inquiry</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <InquiryModal open={!!property} onClose={() => setProperty(null)} type="Property" itemName={property ? `${property.id} — ${property.title}` : undefined} />
      <InquiryModal open={!!villaInquiry} onClose={() => setVillaInquiry(null)} type="Villa" itemName={villaInquiry?.name} />
    </main>
  );
}
