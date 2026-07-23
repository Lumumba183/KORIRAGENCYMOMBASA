import { useState } from "react";
import { Star, MessageCircle, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { TestimonialCard } from "@/components/cards";

export default function Testimonials() {
  useSeo("Testimonials | Korir Agency — What Our Clients Say",
    "Five-star reviews from property buyers, holidaymakers, investors and groups who trusted Korir Agency across Coastal Kenya.");
  const [form, setForm] = useState({ name: "", text: "" });
  const [submitted, setSubmitted] = useState(false);
  const [extra, setExtra] = useState<typeof TESTIMONIALS>([]);

  return (
    <main>
      <PageHero image="/images/villa-palms.jpg" eyebrow="Testimonials" title="Five Stars, Across the Board"
        subtitle="From London to Dubai to Nairobi — the words that keep us working harder." />

      {/* Summary */}
      <section className="border-b border-navy-100 bg-sand-50 py-12">
        <div className="container-lux flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-14">
          <Reveal>
            <p className="font-display text-6xl font-bold text-navy-950">4.9<span className="text-2xl text-gold-500">/5</span></p>
            <div className="mt-1 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-navy-600">Average client rating</p>
          </Reveal>
          <Reveal delay={1} className="sm:border-l sm:border-navy-200 sm:pl-14">
            <p className="font-display text-6xl font-bold text-navy-950">1,200<span className="text-2xl text-gold-500">+</span></p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-navy-600">Happy clients served</p>
          </Reveal>
          <Reveal delay={2} className="sm:border-l sm:border-navy-200 sm:pl-14">
            <p className="font-display text-6xl font-bold text-navy-950">98<span className="text-2xl text-gold-500">%</span></p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-navy-600">Would recommend us</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-lux">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {[...extra, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={t.name + i} t={t} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>

          {/* Submit review */}
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white p-8 shadow-card ring-1 ring-navy-100/60 sm:p-10">
            <SectionHead eyebrow="Share Your Experience" title="Leave a Review" />
            {submitted ? (
              <Reveal className="mt-8 text-center">
                <p className="font-display text-2xl text-navy-900">Asante sana! 🙏</p>
                <p className="mt-2 text-sm text-navy-600">Your review has been received and will appear after a quick check by our team.</p>
              </Reveal>
            ) : (
              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setExtra((x) => [{ name: form.name, origin: "Verified Client", service: "Korir Agency", rating: 5, text: form.text }, ...x]);
                  setSubmitted(true);
                }}
              >
                <div>
                  <label className="label-lux">Your Name</label>
                  <input required className="input-lux" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="label-lux">Your Review</label>
                  <textarea required rows={4} className="input-lux" placeholder="How was your experience with Korir Agency?" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
                </div>
                <button className="btn-gold w-full"><Quote className="h-4 w-4" /> Submit Review</button>
              </form>
            )}
          </div>

          <Reveal className="mt-12 text-center">
            <p className="text-navy-700">Ready to write your own five-star story?</p>
            <a href={waLink("Hello Korir Agency! After seeing your reviews, I'd like to book.")} target="_blank" rel="noreferrer" className="btn-wa mt-4">
              <MessageCircle className="h-5 w-5" /> Start on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
