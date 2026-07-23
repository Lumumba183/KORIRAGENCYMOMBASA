import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { BRAND, MAP_EMBED, SOCIALS, waLink } from "@/data/site";
import { useStore, submitNetlifyForm } from "@/lib/store";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";

const SUBJECTS = ["General Inquiry", "Property Sales / Rentals", "Holiday Villa Booking", "Car Hire / Transfers", "Tours & Safaris", "Property Management", "Other Service"];

export default function Contact() {
  useSeo("Contact Us | Korir Agency — Diani Beach, South Coast Kenya",
    "Reach Korir Agency: +254 722 280 840 · +254 722 760 805 · koriragency@gmail.com. Diani Beach Road, Ukunda. WhatsApp replies in minutes.");
  const { addInquiry } = useStore();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: SUBJECTS[0], message: "" });
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({ type: "Contact", item: form.subject, name: form.name, contact: `${form.email} / ${form.phone}`, message: form.message });
    // Netlify Forms → forwards to koriragency@gmail.com once notifications are enabled in Netlify dashboard
    await submitNetlifyForm("contact", { ...form });
    setSent(true);
  };

  return (
    <main>
      <PageHero image="/images/sgr-viaduct.jpg" eyebrow="Contact Us" title="Let's Start the Conversation"
        subtitle="Call, WhatsApp, email or drop by — whichever suits you, we answer fast." />

      <section className="py-16 sm:py-20">
        <div className="container-lux grid gap-12 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: Phone, title: "Call Us", lines: BRAND.phones, href: `tel:${BRAND.phones[0].replace(/\s/g, "")}`, cta: "Call now" },
              { icon: MessageCircle, title: "WhatsApp", lines: ["+254 722 280 840", "Replies within minutes"], href: waLink("Hello Korir Agency!"), cta: "Chat now" },
              { icon: Mail, title: "Email", lines: [BRAND.email, "We reply within 24 hours"], href: `mailto:${BRAND.email}`, cta: "Write email" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) as 0 | 1 | 2}>
                <a href={c.href} target={c.title === "WhatsApp" ? "_blank" : undefined} rel="noreferrer"
                  className="group flex items-center gap-5 rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/60 transition-all hover:-translate-y-1 hover:shadow-lux">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-navy-950">{c.title}</p>
                    {c.lines.map((l) => <p key={l} className="text-sm text-navy-700">{l}</p>)}
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gold-600">{c.cta} →</p>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={2}>
              <div className="rounded-3xl bg-sand-50 p-6">
                <p className="flex items-center gap-3 font-display text-lg font-semibold text-navy-950">
                  <MapPin className="h-5 w-5 text-gold-600" /> Visit Our Office
                </p>
                <p className="mt-2 text-sm leading-6 text-navy-700">{BRAND.address}</p>
                <p className="mt-3 flex items-center gap-3 text-sm text-navy-700">
                  <Clock className="h-4 w-4 text-gold-600" /> {BRAND.hours}
                </p>
                <div className="mt-4 flex gap-3">
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-800 shadow-sm transition hover:bg-gold-500 hover:text-navy-950">
                      <ServiceIcon name={s.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={1} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-8 shadow-lux ring-1 ring-navy-100/60 sm:p-10">
              {sent ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-16 w-16 text-wa" />
                  <h3 className="h-display mt-4 text-2xl">Message Sent!</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-navy-700/80">
                    Asante sana, {form.name.split(" ")[0]}! Your message is on its way to <strong>koriragency@gmail.com</strong> —
                    expect a reply within 24 hours (usually much sooner).
                  </p>
                  <a href={waLink(`Hello Korir Agency! I just sent a message about: ${form.subject}`)} target="_blank" rel="noreferrer" className="btn-wa mt-6">
                    <MessageCircle className="h-5 w-5" /> Need a Faster Reply? WhatsApp Us
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="h-display text-2xl sm:text-3xl">Send Us a Message</h2>
                  <p className="mt-2 text-sm text-navy-600">Delivered straight to <strong>koriragency@gmail.com</strong></p>
                  <form onSubmit={submit} className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="label-lux">Full Name *</label>
                      <input required className="input-lux" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="label-lux">Email *</label>
                      <input required type="email" className="input-lux" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="label-lux">Phone / WhatsApp</label>
                      <input className="input-lux" placeholder="+254 …" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className="label-lux">Subject</label>
                      <select className="input-lux" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                        {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label-lux">Message *</label>
                      <textarea required rows={5} className="input-lux" placeholder="Tell us how we can help — dates, locations, budgets…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <div className="sm:col-span-2">
                      <button className="btn-gold w-full sm:w-auto"><Send className="h-4 w-4" /> Send Message</button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 sm:pb-20">
        <div className="container-lux">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lux ring-1 ring-navy-100/60">
              <iframe
                title="Korir Agency location — Diani Beach, South Coast Kenya"
                src={MAP_EMBED}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
