import { useState } from "react";
import { CheckCircle2, MessageCircle, Palmtree } from "lucide-react";
import { VILLAS, type Villa } from "@/data/villas";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { VillaCard } from "@/components/cards";
import { Modal, BookingModal } from "@/components/Modals";

export default function Villas() {
  useSeo("Holiday Villas & Airbnb | Korir Agency — Diani, Mombasa, Coastal Kenya",
    "Book beachfront villas, Swahili cottages and serviced apartments across Diani, Tiwi, Nyali and Bamburi — fully staffed options, instant WhatsApp confirmation.");
  const [selected, setSelected] = useState<Villa | null>(null);
  const [booking, setBooking] = useState<Villa | null>(null);

  return (
    <main>
      <PageHero image="/images/villa-sunset.jpg" eyebrow="Holiday Villas & Airbnb" title="Wake Up to the Indian Ocean"
        subtitle="Hand-inspected villas, cottages and apartments — with housekeeping, chef options and 24/7 guest support." />

      {/* perks */}
      <section className="border-b border-navy-100 bg-sand-50 py-10">
        <div className="container-lux grid gap-6 sm:grid-cols-3">
          {[
            { t: "Inspected & Verified", d: "We photograph and inspect every stay ourselves — no surprises." },
            { t: "Fully Supported", d: "Housekeeping, chef, transfers and excursions arranged in one message." },
            { t: "Best-Rate Promise", d: "Book direct with us and skip the platform markups." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) as 0 | 1 | 2}>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                  <Palmtree className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-navy-950">{p.t}</p>
                  <p className="text-sm leading-6 text-navy-700/80">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-lux">
          <SectionHead eyebrow="Our Stays" title="Choose Your Coastal Home"
            subtitle="From KES 6,500/night studios to staffed beachfront estates — every stay backed by the Korir standard." />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {VILLAS.map((v, i) => (
              <VillaCard key={v.id} v={v} onOpen={setSelected} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Detail modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} wide>
        {selected && (
          <div>
            <div className="zoom-img h-72 sm:h-80"><img src={selected.image} alt={selected.name} className="h-full w-full object-cover" /></div>
            <div className="p-7 sm:p-9">
              <span className="rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-950">{selected.tag}</span>
              <h3 className="h-display mt-4 text-2xl sm:text-3xl">{selected.name}</h3>
              <p className="mt-2 text-sm text-navy-600">{selected.location} · Sleeps {selected.sleeps} · {selected.bedrooms} bedrooms · {selected.baths} bathrooms</p>
              <p className="mt-5 leading-7 text-navy-800/90">{selected.description}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {selected.amenities.map((a) => (
                  <p key={a} className="flex items-center gap-2 text-sm text-navy-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-wa" /> {a}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-sand-50 p-5">
                <p className="font-display text-2xl font-bold text-navy-950">{selected.pricePerNight}<span className="text-sm font-normal text-navy-500"> / night</span></p>
                <div className="flex gap-3">
                  <button onClick={() => { setBooking(selected); setSelected(null); }} className="btn-gold !px-5 !py-3 !text-xs">Request Booking</button>
                  <a href={waLink(`Hello Korir Agency! Availability for ${selected.name} (${selected.location}) please.`)} target="_blank" rel="noreferrer" className="btn-wa !px-5 !py-3 !text-xs">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <BookingModal open={!!booking} onClose={() => setBooking(null)} service="Holiday Villa"
        itemName={booking?.name ?? ""} amount={booking ? `${booking.pricePerNight}/night` : undefined} />
    </main>
  );
}
