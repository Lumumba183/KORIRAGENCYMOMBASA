import { useState } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { TOURS, type Tour } from "@/data/tours";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { TourCard } from "@/components/cards";
import { Modal, BookingModal } from "@/components/Modals";

export default function Tours() {
  useSeo("Tours & Safaris | Korir Agency — Wasini, Tsavo, Shimba Hills, Dhow Cruises",
    "Guided day safaris to Tsavo, Wasini Island dhow trips, dolphin spotting, snorkelling, Fort Jesus heritage tours and sunset cruises from Diani & Mombasa.");
  const [selected, setSelected] = useState<Tour | null>(null);
  const [booking, setBooking] = useState<Tour | null>(null);

  return (
    <main>
      <PageHero image="/images/safari-elephants.jpg" eyebrow="Tours & Safaris" title="Adventures Worth Remembering"
        subtitle="From dolphin-filled mornings to red-elephant afternoons — every trip guided, insured and unforgettable." />

      <section className="py-16 sm:py-20">
        <div className="container-lux">
          <SectionHead eyebrow="Signature Experiences" title="Pick Your Adventure"
            subtitle="All tours include hotel pickup and drop-off across Diani, Ukunda and Mombasa. Private and group rates available." />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {TOURS.map((t, i) => (
              <div key={t.id} onClick={() => setSelected(t)} className="cursor-pointer">
                <TourCard t={t} onBook={(tt) => { setSelected(null); setBooking(tt); }} delay={(i % 3) as 0 | 1 | 2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* corporate */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="container-lux grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="zoom-img overflow-hidden rounded-3xl shadow-lux">
              <img src="/images/family-beach.jpg" alt="Family beach day with camel ride" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHead align="left" eyebrow="Corporate & Group Travel" title="Retreats, Teams & Big Groups — Handled"
              subtitle="Conferences, church groups, school trips and family reunions: transport, accommodation, meals and activities coordinated end to end." />
            <Reveal delay={1}>
              <ul className="mt-7 space-y-3">
                {[
                  "Dedicated group coordinator from first call to final drop-off",
                  "Fleet coordination: vans, buses and 4x4s for up to 100+ guests",
                  "Negotiated group rates with coastal hotels and resorts",
                  "Custom itineraries: team building, beach events, safaris",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm font-medium text-navy-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wa" /> {t}
                  </li>
                ))}
              </ul>
              <a href={waLink("Hello Korir Agency! I'd like a quote for group travel. Group size & dates: ")} target="_blank" rel="noreferrer" className="btn-wa mt-8">
                <MessageCircle className="h-5 w-5" /> Get a Group Quote
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detail modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} wide>
        {selected && (
          <div>
            <div className="zoom-img h-72 sm:h-80"><img src={selected.image} alt={selected.name} className="h-full w-full object-cover" /></div>
            <div className="p-7 sm:p-9">
              <span className="rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950">{selected.category}</span>
              <h3 className="h-display mt-4 text-2xl sm:text-3xl">{selected.name}</h3>
              <p className="mt-2 text-sm text-navy-600">{selected.duration}</p>
              <p className="mt-5 leading-7 text-navy-800/90">{selected.description}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {selected.highlights.map((h) => (
                  <p key={h} className="flex items-center gap-2 text-sm text-navy-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-wa" /> {h}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-sand-50 p-5">
                <p className="font-display text-2xl font-bold text-navy-950">{selected.pricePerPerson}<span className="text-sm font-normal text-navy-500"> per person</span></p>
                <div className="flex gap-3">
                  <button onClick={() => { setBooking(selected); setSelected(null); }} className="btn-gold !px-5 !py-3 !text-xs">Book This Tour</button>
                  <a href={waLink(`Hello Korir Agency! I'd like to book: ${selected.name}.`)} target="_blank" rel="noreferrer" className="btn-wa !px-5 !py-3 !text-xs">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <BookingModal open={!!booking} onClose={() => setBooking(null)} service="Tour & Safari"
        itemName={booking?.name ?? ""} amount={booking ? `${booking.pricePerPerson} pp` : undefined} />
    </main>
  );
}
