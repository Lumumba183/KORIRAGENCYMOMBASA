import { Link } from "react-router";
import { MessageCircle, ShieldCheck, Handshake, Gem, Globe2, ArrowRight } from "lucide-react";
import { BRAND, STATS, waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export default function About() {
  useSeo("About Us | Korir Agency — Coastal Kenya Property & Travel",
    "Korir Agency is a leading real estate, travel and lifestyle solutions company based on the South Coast of Kenya — professionalism, integrity and reliable service.");

  return (
    <main>
      <PageHero image="/images/villa-ahana.jpg" eyebrow="About Us" title="Professionalism, Integrity & the Beauty of Coastal Kenya"
        subtitle={BRAND.tagline} />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead align="left" eyebrow="Our Story" title="Born on the South Coast. Built on Trust." />
            <Reveal delay={1}>
              <div className="mt-6 space-y-5 text-[1.02rem] leading-8 text-navy-800/90">
                <p>
                  Korir Agency is a leading real estate, travel and lifestyle solutions company based on the South Coast of Kenya.
                  We provide professional property, travel and concierge services across Coastal Kenya, throughout Kenya,
                  and internationally on request.
                </p>
                <p>
                  Our mission is simple: to deliver exceptional customer experiences through professionalism, integrity
                  and reliable service. Whether we're handing over the keys to a beachfront villa, arranging a dawn safari,
                  or managing an investor's entire portfolio — the standard never changes.
                </p>
                <p>
                  From a single desk in Ukunda to a full-service agency trusted by clients from Nairobi to London, Dubai
                  and beyond — our journey has been guided by one motto:
                </p>
              </div>
              <blockquote className="mt-8 border-l-4 border-gold-500 bg-sand-50 px-6 py-5 font-display text-xl italic text-navy-900 rounded-r-2xl">
                “{BRAND.motto}”
              </blockquote>
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="zoom-img overflow-hidden rounded-3xl shadow-lux">
              <img src="/images/keys.jpg" alt="Handover of property keys" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-lux sm:block">
              <img src="/images/hero-diani.jpg" alt="Diani Beach aerial" className="aspect-[3/4] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <div className="container-lux">
          <SectionHead light eyebrow="What We Stand For" title="The Values Behind Every Handshake" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, t: "Integrity", d: "We say what we do and do what we say — in writing." },
              { icon: Gem, t: "Excellence", d: "Premium standards in every listing, vehicle, tour and reply." },
              { icon: Handshake, t: "Reliability", d: "When you need us, we show up. Every time, on time." },
              { icon: Globe2, t: "Global Reach", d: "Local heart, international standards — wherever you are." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 text-center transition hover:border-gold-400/50">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{v.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-800 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-navy-900 px-6 py-7 text-center">
                <p className="font-display text-3xl font-bold text-gold-400">{s.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-20 sm:py-28">
        <div className="container-lux">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 shadow-lux">
            <div className="grid items-center sm:grid-cols-[220px_1fr]">
              <div className="flex h-full items-center justify-center bg-navy-950/60 p-8">
                <img src={BRAND.logo} alt="Korir Agency logo" className="h-36 w-36 rounded-full object-cover ring-4 ring-gold-500/60" />
              </div>
              <div className="p-8 sm:p-10">
                <p className="eyebrow">From the CEO's Desk</p>
                <p className="mt-4 font-display text-lg italic leading-8 text-white/90">
                  “Every client who calls us is trusting us with something precious — a dream home, a hard-earned
                  investment, a once-in-a-lifetime holiday. We built Korir Agency to be worthy of that trust.
                  Against all odds, we hope — and then we make it happen.”
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-display text-xl font-bold text-gold-400">The CEO</p>
                  <p className="text-sm text-white/70">Korir Agency — South Coast, Diani, Kenya</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/70">
                    <span>📞 {BRAND.phones.join(" | ")}</span>
                    <span>📧 {BRAND.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage + CTA */}
      <section className="bg-sand-50 py-20 sm:py-24">
        <div className="container-lux text-center">
          <SectionHead eyebrow="Where We Work" title="Coastal Kenya First — Kenya & Beyond on Request"
            subtitle="Diani · Ukunda · Galu · Tiwi · Msambweni · Mombasa · Nyali · Bamburi · Kilifi · Malindi · Watamu · Lamu — and anywhere you need us." />
          <Reveal className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={waLink("Hello Korir Agency! I'd like to know more about your services.")} target="_blank" rel="noreferrer" className="btn-wa">
              <MessageCircle className="h-5 w-5" /> Talk to Us on WhatsApp
            </a>
            <Link to="/services" className="btn-navy">Explore Our Services <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
