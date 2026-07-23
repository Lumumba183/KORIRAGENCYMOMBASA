import { useState } from "react";
import { Navigate, Link } from "react-router";
import { Heart, CalendarCheck, MailQuestion, User, LogOut, MessageCircle, ArrowRight } from "lucide-react";
import { useStore } from "@/lib/store";
import { waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { PropertyCard } from "@/components/cards";
import { InquiryModal } from "@/components/Modals";
import type { Property } from "@/data/properties";

const TABS = [
  { key: "overview", label: "Overview", icon: User },
  { key: "favorites", label: "Saved Favorites", icon: Heart },
  { key: "bookings", label: "My Bookings", icon: CalendarCheck },
  { key: "inquiries", label: "My Inquiries", icon: MailQuestion },
] as const;

export default function Account() {
  useSeo("My Account | Korir Agency");
  const { session, logout, favorites, listings, bookings, inquiries } = useStore();
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("overview");
  const [inquireProp, setInquireProp] = useState<Property | null>(null);

  if (!session || session.role !== "customer") return <Navigate to="/login" replace />;

  const favListings = listings.filter((p) => favorites.includes(p.id));
  const myBookings = bookings.filter((b) => b.name === session.name || bookings.indexOf(b) < 2);
  const myInquiries = inquiries.filter((i) => i.name === session.name || inquiries.indexOf(i) < 2);

  return (
    <main className="bg-sand-50 py-12 sm:py-16">
      <div className="container-lux">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-950 p-8 shadow-lux sm:flex-row sm:items-center">
            <div className="flex items-center gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 font-display text-2xl font-bold text-navy-950">
                {session.name.charAt(0).toUpperCase()}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Customer Account</p>
                <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">Karibu, {session.name}</h1>
                {session.email && <p className="text-sm text-white/60">{session.email}</p>}
              </div>
            </div>
            <button onClick={logout} className="flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:border-red-400 hover:text-red-300">
              <LogOut className="h-4 w-4" /> Log Out
            </button>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${tab === t.key ? "bg-navy-900 text-gold-300" : "bg-white text-navy-700 shadow-sm hover:bg-sand-100"}`}>
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "overview" && (
            <Reveal className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Saved Favorites", value: favorites.length, action: () => setTab("favorites") },
                { label: "Bookings", value: myBookings.length, action: () => setTab("bookings") },
                { label: "Inquiries", value: myInquiries.length, action: () => setTab("inquiries") },
              ].map((s) => (
                <button key={s.label} onClick={s.action} className="rounded-3xl bg-white p-8 text-left shadow-card ring-1 ring-navy-100/60 transition hover:-translate-y-1 hover:shadow-lux">
                  <p className="font-display text-5xl font-bold text-navy-950">{s.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-navy-600">{s.label}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-xs font-bold text-gold-600">View <ArrowRight className="h-3.5 w-3.5" /></p>
                </button>
              ))}
              <div className="sm:col-span-3 rounded-3xl bg-white p-8 shadow-card ring-1 ring-navy-100/60">
                <h3 className="font-display text-xl font-bold text-navy-950">Need something?</h3>
                <p className="mt-2 text-sm text-navy-700">Our team is one message away — villas, cars, safaris, transfers, viewings.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link to="/properties" className="btn-navy !px-5 !py-2.5 !text-xs">Browse Properties</Link>
                  <a href={waLink("Hello Korir Agency! I'm a registered customer and I need help with: ")} target="_blank" rel="noreferrer" className="btn-wa !px-5 !py-2.5 !text-xs">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Support
                  </a>
                </div>
              </div>
            </Reveal>
          )}

          {tab === "favorites" && (
            <div>
              {favListings.length === 0 ? (
                <Reveal className="rounded-3xl bg-white p-12 text-center shadow-card">
                  <Heart className="mx-auto h-12 w-12 text-navy-200" />
                  <p className="mt-4 font-display text-2xl text-navy-900">No favorites yet</p>
                  <p className="mt-2 text-sm text-navy-600">Tap the heart on any property or villa to save it here.</p>
                  <Link to="/properties" className="btn-gold mt-6">Browse Properties <ArrowRight className="h-4 w-4" /></Link>
                </Reveal>
              ) : (
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                  {favListings.map((p) => <PropertyCard key={p.id} p={p} onOpen={setInquireProp} />)}
                </div>
              )}
            </div>
          )}

          {tab === "bookings" && (
            <Reveal className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm">
                  <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-300">
                    <tr>
                      <th className="px-6 py-4">Ref</th><th className="px-6 py-4">Service</th><th className="px-6 py-4">Item</th>
                      <th className="px-6 py-4">Dates</th><th className="px-6 py-4">Amount</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Payment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {myBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-sand-50">
                        <td className="px-6 py-4 font-semibold text-navy-900">{b.id}</td>
                        <td className="px-6 py-4">{b.service}</td>
                        <td className="px-6 py-4">{b.item}</td>
                        <td className="px-6 py-4">{b.dates}</td>
                        <td className="px-6 py-4 font-semibold">{b.amount}</td>
                        <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-[11px] font-bold ${b.status === "Confirmed" ? "bg-green-100 text-green-700" : b.status === "Pending" ? "bg-amber-100 text-amber-700" : "bg-navy-100 text-navy-700"}`}>{b.status}</span></td>
                        <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-[11px] font-bold ${b.payment === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{b.payment}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {myBookings.length === 0 && <p className="p-10 text-center text-sm text-navy-600">No bookings yet — request one from any villa, car or tour page.</p>}
            </Reveal>
          )}

          {tab === "inquiries" && (
            <Reveal className="space-y-4">
              {myInquiries.length === 0 && (
                <div className="rounded-3xl bg-white p-12 text-center shadow-card">
                  <MailQuestion className="mx-auto h-12 w-12 text-navy-200" />
                  <p className="mt-4 font-display text-2xl text-navy-900">No inquiries yet</p>
                  <Link to="/contact" className="btn-gold mt-6">Send an Inquiry</Link>
                </div>
              )}
              {myInquiries.map((i) => (
                <div key={i.id} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/60">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-bold text-navy-950">{i.item ?? i.type}</p>
                      <p className="text-xs text-navy-500">{i.id} · {i.date} · {i.type}</p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${i.status === "New" ? "bg-amber-100 text-amber-700" : i.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>{i.status}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-navy-800">{i.message}</p>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>
      <InquiryModal open={!!inquireProp} onClose={() => setInquireProp(null)} type="Property" itemName={inquireProp?.title} />
    </main>
  );
}
