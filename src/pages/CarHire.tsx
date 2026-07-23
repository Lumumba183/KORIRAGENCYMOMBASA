import { useState } from "react";
import { MessageCircle, CheckCircle2, Plane, TrainFront, ShieldCheck, Clock } from "lucide-react";
import { CARS, TRANSFERS, type Car } from "@/data/cars";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { CarCard } from "@/components/cards";
import { BookingModal } from "@/components/Modals";

export default function CarHire() {
  useSeo("Car Hire, Airport & SGR Transfers | Korir Agency — Mombasa & Diani",
    "Self-drive & chauffeured car hire on the Kenyan coast: Prado, Harrier, Noah, Hiace vans & safari 4x4s. Airport and SGR transfers 24/7 from KES 2,500.");
  const [booking, setBooking] = useState<Car | null>(null);

  return (
    <main>
      <PageHero image="/images/safari-cruiser.jpg" eyebrow="Car Hire & Transfers" title="The Right Wheels for the Coast"
        subtitle="Spotless vehicles, transparent daily rates, self-drive or chauffeured — plus 24/7 airport, SGR and taxi services." />

      {/* Fleet */}
      <section className="py-16 sm:py-20">
        <div className="container-lux">
          <SectionHead eyebrow="Our Fleet" title="Hire by the Day, Drive with Confidence"
            subtitle="Fully insured, meticulously maintained vehicles. Rates include standard coast mileage — long-term discounts available." />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {CARS.map((c, i) => (
              <CarCard key={c.id} c={c} onBook={setBooking} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
        </div>
      </section>

      {/* Transfers */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <div className="container-lux">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHead align="left" light eyebrow="Airport, SGR & Taxi" title="Arrive Like a VIP, Every Time"
                subtitle="Flight and train tracking, uniformed drivers, name boards at arrivals — the smoothest first 90 minutes of your trip." />
              <Reveal delay={1}>
                <ul className="mt-8 space-y-4">
                  {[
                    { icon: Plane, t: "Flight Tracking", d: "Delayed? We adjust automatically — no extra charge, no stress." },
                    { icon: TrainFront, t: "SGR Meet & Greet", d: "Waiting at Mombasa Terminus the moment your train arrives." },
                    { icon: ShieldCheck, t: "Vetted Drivers", d: "Licensed, insured, background-checked professionals." },
                    { icon: Clock, t: "24/7 Availability", d: "Red-eye flight? 5 AM train? We're already awake." },
                  ].map((v) => (
                    <li key={v.t} className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-400">
                        <v.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="font-bold text-white">{v.t}</p>
                        <p className="text-sm leading-6 text-white/70">{v.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href={waLink("Hello Korir Agency! I need a transfer. Details: ")} target="_blank" rel="noreferrer" className="btn-wa mt-9">
                  <MessageCircle className="h-5 w-5" /> Book a Transfer
                </a>
              </Reveal>
            </div>
            <Reveal delay={1}>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lux backdrop-blur">
                <div className="border-b border-white/10 bg-navy-900/80 px-6 py-4">
                  <p className="font-display text-lg font-semibold text-white">Transfer Rates <span className="text-sm font-normal text-white/60">(per vehicle)</span></p>
                </div>
                <ul className="divide-y divide-white/10">
                  {TRANSFERS.map((t) => (
                    <li key={t.route} className="px-6 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold text-white">{t.route}</p>
                        <p className="shrink-0 font-display text-lg font-bold text-gold-400">{t.price}</p>
                      </div>
                      <p className="mt-1 text-xs text-white/60">{t.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* hire terms */}
      <section className="py-16">
        <div className="container-lux">
          <div className="grid gap-6 rounded-3xl bg-sand-50 p-8 sm:grid-cols-2 lg:grid-cols-4 sm:p-10">
            {[
              "Valid driving licence + ID/passport required",
              "Fully comprehensive insurance included",
              "Free delivery within Diani & Ukunda",
              "Weekly & monthly discounts up to 20%",
            ].map((t) => (
              <p key={t} className="flex items-start gap-3 text-sm font-medium text-navy-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-wa" /> {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      <BookingModal open={!!booking} onClose={() => setBooking(null)} service="Car Hire"
        itemName={booking?.name ?? ""} amount={booking ? `${booking.pricePerDay}/day` : undefined} />
    </main>
  );
}
