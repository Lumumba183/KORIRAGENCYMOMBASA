import { useState } from "react";
import { MessageCircle, CheckCircle2, ClipboardList, Wrench, Banknote, FileBarChart } from "lucide-react";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { InquiryModal } from "@/components/Modals";

const PACKAGES = [
  {
    name: "Essential",
    price: "8% of rent",
    features: ["Tenant sourcing & vetting", "Rent collection & remittance", "Quarterly property inspections", "Monthly owner statement", "Tenant relations handling"],
  },
  {
    name: "Premium",
    price: "10% of rent",
    highlight: true,
    features: ["Everything in Essential", "Full maintenance coordination", "Utility & bill management", "Annual market rent review", "Furnishing & upgrade advice", "Priority legal support access"],
  },
  {
    name: "Executive (Holiday Let)",
    price: "15% of revenue",
    features: ["Everything in Premium", "Full Airbnb & booking management", "Professional photography & listing", "Housekeeping & guest support 24/7", "Dynamic pricing optimization", "Monthly revenue reports"],
  },
];

export default function PropertyManagement() {
  useSeo("Property Management & Advisory | Korir Agency — Coastal Kenya",
    "Full-service property management across Coastal Kenya: tenant vetting, rent collection, maintenance, Airbnb management and transparent owner reporting.");
  const [inquire, setInquire] = useState(false);

  return (
    <main>
      <PageHero image="/images/keys.jpg" eyebrow="Property Management" title="Your Property. Our Responsibility."
        subtitle="Own property on the coast without the coastal headaches — tenants, maintenance, rent and reporting, handled." />

      {/* Process */}
      <section className="py-16 sm:py-20">
        <div className="container-lux">
          <SectionHead eyebrow="How It Works" title="Four Steps to Effortless Ownership" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClipboardList, t: "1. Assessment", d: "We inspect, photograph and price your property honestly against the live market." },
              { icon: Wrench, t: "2. Preparation", d: "Snagging, furnishing and compliance — we get it rent-ready and guest-ready." },
              { icon: Banknote, t: "3. Management", d: "Tenants or guests, rent or revenue, maintenance and bills — all handled." },
              { icon: FileBarChart, t: "4. Reporting", d: "Clear monthly statements to your inbox. Your money, fully accounted for." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="h-full rounded-3xl bg-white p-7 text-center shadow-card ring-1 ring-navy-100/60">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-gold-400">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy-950">{s.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy-700/80">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <div className="container-lux">
          <SectionHead light eyebrow="Management Packages" title="Simple, Transparent Pricing"
            subtitle="No setup fees. No hidden charges. You only pay when your property earns." />
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) as 0 | 1 | 2} className="h-full">
                <div className={`flex h-full flex-col rounded-3xl p-8 ${p.highlight ? "bg-gold-500 text-navy-950 shadow-lux ring-4 ring-gold-300/40" : "border border-white/10 bg-white/5 text-white"}`}>
                  {p.highlight && <span className="mb-4 w-fit rounded-full bg-navy-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-300">Most Popular</span>}
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className={`mt-2 font-display text-3xl font-bold ${p.highlight ? "text-navy-900" : "text-gold-400"}`}>{p.price}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${p.highlight ? "text-navy-900" : "text-wa"}`} /> {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setInquire(true)}
                    className={`mt-8 rounded-full py-3.5 text-sm font-bold uppercase tracking-wider transition ${p.highlight ? "bg-navy-950 text-gold-300 hover:bg-navy-900" : "bg-white/10 text-white hover:bg-white/20"}`}>
                    Choose {p.name}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory + CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-lux grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="zoom-img overflow-hidden rounded-3xl shadow-lux">
              <img src="/images/villa-palms.jpg" alt="Managed villa with pool" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHead align="left" eyebrow="Advisory Services" title="Buying? Selling? Developing? Talk to Us First"
              subtitle="Market valuations, due diligence support, feasibility advice and buyer representation across Coastal Kenya." />
            <Reveal delay={1}>
              <ul className="mt-7 space-y-3">
                {[
                  "Independent market valuations before you buy or sell",
                  "Title verification & due diligence coordination with advocates",
                  "Rental yield analysis and investment feasibility studies",
                  "Buyer & seller representation — we negotiate for you",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm font-medium text-navy-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wa" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => setInquire(true)} className="btn-navy">Request a Consultation</button>
                <a href={waLink("Hello Korir Agency! I'd like property management / advisory services.")} target="_blank" rel="noreferrer" className="btn-wa">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <InquiryModal open={inquire} onClose={() => setInquire(false)} type="General" itemName="Property Management & Advisory" />
    </main>
  );
}
