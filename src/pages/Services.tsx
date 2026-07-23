import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { SERVICES, waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";

export default function Services() {
  useSeo("Our Services | Korir Agency — Property, Travel, Car Hire, Safaris & Concierge",
    "16 professional services: property sales & rentals, holiday villas, car hire, airport & SGR transfers, tours & safaris, concierge, security, consultancy and more.");

  return (
    <main>
      <PageHero image="/images/hotel-lobby.jpg" eyebrow="Our Services" title="Sixteen Ways We Make Life Easier"
        subtitle="One agency for property, travel and lifestyle — across Coastal Kenya, throughout Kenya, and internationally on request." />

      <section className="py-20 sm:py-28">
        <div className="container-lux">
          <SectionHead eyebrow="Full Service List" title="Everything Under One Trusted Roof"
            subtitle="Tap any service to enquire instantly on WhatsApp — our team replies in minutes." />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lux">
                  {s.image && (
                    <div className="zoom-img h-44">
                      <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                        <ServiceIcon name={s.icon} className="h-6 w-6" />
                      </span>
                      <h3 className="font-display text-lg font-semibold leading-snug text-navy-950">{s.title}</h3>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-6 text-navy-700/80">{s.blurb}</p>
                    <div className="mt-5 flex items-center gap-3">
                      {s.link && s.link !== "/services" && (
                        <Link to={s.link} className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-gold-700">
                          View <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                      <a
                        href={waLink(`Hello Korir Agency! I'd like to enquire about: ${s.title}.`)}
                        target="_blank" rel="noreferrer"
                        className="ml-auto flex items-center gap-2 rounded-full bg-wa px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:brightness-110"
                      >
                        <MessageCircle className="h-4 w-4" /> Enquire
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="container-lux text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
              Don't see exactly what you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              If it involves property, travel or lifestyle in Kenya — we can almost certainly help. Ask us.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={waLink("Hello Korir Agency! I have a custom request.")} target="_blank" rel="noreferrer" className="btn-wa">
                <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
              </a>
              <Link to="/contact" className="btn-outline-light">Contact Form</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
