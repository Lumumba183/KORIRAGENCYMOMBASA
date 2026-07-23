import { useState } from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { BRAND, NAV_LINKS, SERVICES, SOCIALS, waLink } from "@/data/site";
import ServiceIcon from "@/components/ServiceIcon";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={BRAND.logo} alt="Korir Agency" className="h-14 w-14 rounded-full ring-2 ring-gold-500/70" />
            <div>
              <p className="font-display text-xl font-bold">KORIR <span className="text-gold-400">AGENCY</span></p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Delivering Value. Creating Opportunities.</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-white/70">
            {BRAND.tagline}. Professional property, travel and concierge services across Coastal Kenya, throughout Kenya, and internationally on request.
          </p>
          <p className="mt-4 font-display text-sm italic text-gold-300">“{BRAND.motto}”</p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400 hover:text-gold-300">
                <ServiceIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-gold-300">Quick Links</h4>
          <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 transition hover:text-gold-300">→ {l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-semibold text-gold-300">Our Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.slice(0, 10).map((s) => (
              <li key={s.title}>
                <Link to={s.link ?? "/services"} className="text-white/70 transition hover:text-gold-300">→ {s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div>
          <h4 className="font-display text-lg font-semibold text-gold-300">Get In Touch</h4>
          <ul className="mt-5 space-y-3.5 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {BRAND.address}</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{BRAND.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-gold-300">{p}</a>
              ))}</span>
            </li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-gold-300">{BRAND.email}</a>
            </li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> {BRAND.hours}</li>
          </ul>
          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubscribed(true);
            }}
          >
            <label className="label-lux !text-gold-300">Newsletter</label>
            {subscribed ? (
              <p className="rounded-xl bg-gold-500/15 px-4 py-3 text-sm text-gold-300">Asante! You're on the list — coastal deals coming your way.</p>
            ) : (
              <div className="flex overflow-hidden rounded-full border border-white/20">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none"
                />
                <button className="bg-gold-500 px-4 text-navy-950 transition hover:bg-gold-400" aria-label="Subscribe">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-white/70">Ready to book a villa, safari, car or viewing?</p>
          <a href={waLink("Hello Korir Agency! I would like to make a booking.")} target="_blank" rel="noreferrer" className="btn-wa !px-6 !py-2.5 !text-xs">
            <MessageCircle className="h-4 w-4" /> WhatsApp +254 722 280 840
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-lux flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Korir Agency — Diani Beach, South Coast, Kenya. All rights reserved.</p>
          <p className="font-display italic text-gold-400/80">“{BRAND.motto}”</p>
        </div>
      </div>
    </footer>
  );
}
