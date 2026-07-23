import { useMemo, useState } from "react";
import { Search, BedDouble, Bath, Ruler, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import type { Property } from "@/data/properties";
import { useStore } from "@/lib/store";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import PageHero from "@/components/PageHero";
import { PropertyCard } from "@/components/cards";
import { Modal, InquiryModal } from "@/components/Modals";

const TYPES = ["All", "Villa", "Apartment", "House", "Land", "Commercial", "Hotel"];
const STATUSES = ["All", "For Sale", "For Rent"];

export default function Properties() {
  useSeo("Properties for Sale & Rent | Korir Agency — Diani, Mombasa, Coastal Kenya",
    "Verified villas, apartments, houses, beachfront plots, commercial spaces and resorts for sale and rent across Coastal Kenya.");
  const { listings } = useStore();
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Property | null>(null);
  const [inquire, setInquire] = useState<Property | null>(null);

  const filtered = useMemo(
    () =>
      listings.filter(
        (p) =>
          (type === "All" || p.type === type) &&
          (status === "All" || p.status === status) &&
          (query.trim() === "" ||
            `${p.title} ${p.location} ${p.id}`.toLowerCase().includes(query.toLowerCase()))
      ),
    [listings, type, status, query]
  );

  return (
    <main>
      <PageHero image="/images/villa-monkey.jpg" eyebrow="Properties" title="Find Your Piece of the Coast"
        subtitle="Every listing is personally verified by our team — titles checked, prices honest, viewings one WhatsApp away." />

      <section className="py-16 sm:py-20">
        <div className="container-lux">
          {/* Filters */}
          <div className="rounded-3xl bg-white p-5 shadow-card ring-1 ring-navy-100/60">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, location or ref (e.g. KA-001)…"
                  className="input-lux !pl-11"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {STATUSES.map((s) => (
                  <button key={s} onClick={() => setStatus(s)}
                    className={`rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition ${status === s ? "bg-navy-900 text-gold-300" : "bg-sand-100 text-navy-700 hover:bg-sand-200"}`}>
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <button key={t} onClick={() => setType(t)}
                    className={`rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition ${type === t ? "bg-gold-500 text-navy-950" : "bg-sand-100 text-navy-700 hover:bg-sand-200"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-navy-600">
            Showing <strong className="text-navy-950">{filtered.length}</strong> of {listings.length} verified listings
          </p>

          <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} p={p} onOpen={setSelected} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-3xl bg-sand-50 p-12 text-center">
              <p className="font-display text-2xl text-navy-900">No listings match your filters</p>
              <p className="mt-2 text-sm text-navy-600">Try widening the search — or tell us what you're looking for and we'll find it off-market.</p>
              <a href={waLink("Hello Korir Agency! I'm looking for a property: ")} target="_blank" rel="noreferrer" className="btn-wa mt-6">
                <MessageCircle className="h-5 w-5" /> Request a Property
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Detail modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)} wide>
        {selected && (
          <div>
            <div className="zoom-img h-72 sm:h-80">
              <img src={selected.image} alt={selected.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${selected.status === "For Sale" ? "bg-gold-500 text-navy-950" : "bg-navy-900 text-white"}`}>{selected.status}</span>
                <span className="rounded-full bg-sand-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-800">{selected.type}</span>
                <span className="text-xs font-semibold text-navy-500">Ref: {selected.id}</span>
              </div>
              <h3 className="h-display mt-4 text-2xl sm:text-3xl">{selected.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-navy-600">
                <MapPin className="h-4 w-4 text-gold-500" /> {selected.location}
              </p>
              <div className="mt-5 flex flex-wrap gap-5 border-y border-navy-100 py-4 text-sm text-navy-800">
                {selected.beds > 0 && <span className="flex items-center gap-2"><BedDouble className="h-4 w-4 text-gold-600" /> {selected.beds} Bedrooms</span>}
                {selected.baths > 0 && <span className="flex items-center gap-2"><Bath className="h-4 w-4 text-gold-600" /> {selected.baths} Bathrooms</span>}
                <span className="flex items-center gap-2"><Ruler className="h-4 w-4 text-gold-600" /> {selected.area}</span>
              </div>
              <p className="mt-5 leading-7 text-navy-800/90">{selected.description}</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {selected.features.map((f) => (
                  <p key={f} className="flex items-center gap-2 text-sm text-navy-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-wa" /> {f}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-sand-50 p-5">
                <p className="font-display text-2xl font-bold text-navy-950">{selected.price}</p>
                <div className="flex gap-3">
                  <button onClick={() => { setInquire(selected); setSelected(null); }} className="btn-navy !px-5 !py-3 !text-xs">Send Inquiry</button>
                  <a href={waLink(`Hello Korir Agency! I'd like a viewing: ${selected.id} — ${selected.title} (${selected.price}).`)} target="_blank" rel="noreferrer" className="btn-wa !px-5 !py-3 !text-xs">
                    <MessageCircle className="h-4 w-4" /> Book Viewing
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <InquiryModal open={!!inquire} onClose={() => setInquire(null)} type="Property"
        itemName={inquire ? `${inquire.id} — ${inquire.title}` : undefined} />
    </main>
  );
}
