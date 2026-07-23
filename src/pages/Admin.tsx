import { useMemo, useState } from "react";
import { Navigate } from "react-router";
import {
  LayoutDashboard, Building2, CalendarCheck, MailQuestion, Users, Wallet,
  FileText, LogOut, Plus, Pencil, Trash2, RotateCcw, CheckCircle2, X,
} from "lucide-react";
import { useStore, type Booking, type Inquiry } from "@/lib/store";
import type { Property } from "@/data/properties";
import { useSeo } from "@/components/Seo";
import { Modal } from "@/components/Modals";
import Reveal from "@/components/Reveal";

const TABS = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "listings", label: "Property Listings", icon: Building2 },
  { key: "bookings", label: "Bookings", icon: CalendarCheck },
  { key: "inquiries", label: "Inquiries", icon: MailQuestion },
  { key: "users", label: "Users", icon: Users },
  { key: "payments", label: "Payments", icon: Wallet },
  { key: "content", label: "Website Content", icon: FileText },
] as const;

type TabKey = (typeof TABS)[number]["key"];

const EMPTY_LISTING: Property = {
  id: "", title: "", type: "Villa", status: "For Sale", price: "", location: "",
  beds: 0, baths: 0, area: "", image: "/images/villa-ahana.jpg", features: [], description: "", featured: false,
};

const IMAGE_OPTIONS = [
  "/images/villa-ahana.jpg", "/images/villa-sunset.jpg", "/images/villa-palms.jpg", "/images/villa-monkey.jpg",
  "/images/apartments-nyali.jpg", "/images/interior-lounge.jpg", "/images/interior-coastal.jpg", "/images/airbnb-studio.jpg",
  "/images/cottage-veranda.jpg", "/images/land-plot.jpg", "/images/commercial.jpg", "/images/hotel-lobby.jpg",
  "/images/resort-night.jpg", "/images/resort-pool.jpg", "/images/hero-diani.jpg",
];

export default function Admin() {
  useSeo("Admin Panel | Korir Agency");
  const {
    session, logout, listings, addListing, updateListing, deleteListing, resetListings,
    inquiries, setInquiryStatus, bookings, setBookingStatus, setBookingPayment, users, content, setContent,
  } = useStore();
  const [tab, setTab] = useState<TabKey>("overview");
  const [editing, setEditing] = useState<Property | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [contentDraft, setContentDraft] = useState(content);
  const [contentSaved, setContentSaved] = useState(false);

  const revenue = useMemo(
    () => bookings.filter((b) => b.payment === "Paid").length,
    [bookings]
  );

  if (!session || session.role !== "admin") return <Navigate to="/login" replace />;

  const openNew = () => {
    setIsNew(true);
    setEditing({ ...EMPTY_LISTING, id: `KA-${String(listings.length + 13).padStart(3, "0")}` });
  };

  const saveListing = () => {
    if (!editing) return;
    const clean = { ...editing, features: editing.features.filter((f) => f.trim()) };
    if (isNew) addListing(clean);
    else updateListing(clean);
    setEditing(null);
  };

  const badge = (text: string, tone: "green" | "amber" | "blue" | "red" | "navy") => {
    const map = {
      green: "bg-green-100 text-green-700", amber: "bg-amber-100 text-amber-700",
      blue: "bg-blue-100 text-blue-700", red: "bg-red-100 text-red-700", navy: "bg-navy-100 text-navy-700",
    };
    return <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${map[tone]}`}>{text}</span>;
  };

  const statusTone = (s: Booking["status"]) =>
    s === "Confirmed" ? "green" : s === "Pending" ? "amber" : s === "Cancelled" ? "red" : "navy";

  return (
    <main className="bg-sand-50 py-10 sm:py-14">
      <div className="container-lux">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-950 p-8 shadow-lux sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Korir Agency · Admin Panel</p>
              <h1 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">Control Centre</h1>
              <p className="mt-1 text-sm text-white/60">Signed in as {session.name} — full administrative access</p>
            </div>
            <button onClick={logout} className="flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:border-red-400 hover:text-red-300">
              <LogOut className="h-4 w-4" /> Log Out
            </button>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="mt-7 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition ${tab === t.key ? "bg-navy-900 text-gold-300" : "bg-white text-navy-700 shadow-sm hover:bg-sand-100"}`}>
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {/* ============ OVERVIEW ============ */}
          {tab === "overview" && (
            <Reveal>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Live Listings", value: listings.length, sub: `${listings.filter((l) => l.featured).length} featured` },
                  { label: "Bookings", value: bookings.length, sub: `${bookings.filter((b) => b.status === "Pending").length} pending` },
                  { label: "Open Inquiries", value: inquiries.filter((i) => i.status !== "Closed").length, sub: `${inquiries.filter((i) => i.status === "New").length} new today` },
                  { label: "Registered Users", value: users.length, sub: `${users.filter((u) => u.role === "customer").length} customers` },
                ].map((s) => (
                  <div key={s.label} className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-100/60">
                    <p className="font-display text-4xl font-bold text-navy-950">{s.value}</p>
                    <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-navy-600">{s.label}</p>
                    <p className="mt-1 text-xs text-gold-600">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-100/60">
                  <h3 className="font-display text-lg font-bold text-navy-950">Latest Bookings</h3>
                  <ul className="mt-4 divide-y divide-navy-100">
                    {bookings.slice(0, 4).map((b) => (
                      <li key={b.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                        <div>
                          <p className="font-semibold text-navy-950">{b.item}</p>
                          <p className="text-xs text-navy-500">{b.name} · {b.dates}</p>
                        </div>
                        {badge(b.status, statusTone(b.status))}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-100/60">
                  <h3 className="font-display text-lg font-bold text-navy-950">Latest Inquiries</h3>
                  <ul className="mt-4 divide-y divide-navy-100">
                    {inquiries.slice(0, 4).map((i) => (
                      <li key={i.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                        <div>
                          <p className="font-semibold text-navy-950">{i.item ?? i.type}</p>
                          <p className="text-xs text-navy-500">{i.name} · {i.date}</p>
                        </div>
                        {badge(i.status, i.status === "New" ? "amber" : i.status === "In Progress" ? "blue" : "green")}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          )}

          {/* ============ LISTINGS ============ */}
          {tab === "listings" && (
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-navy-600"><strong>{listings.length}</strong> listings — changes appear on the public site instantly</p>
                <div className="flex gap-2">
                  <button onClick={resetListings} className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-700 shadow-sm transition hover:bg-sand-100">
                    <RotateCcw className="h-4 w-4" /> Reset Demo Data
                  </button>
                  <button onClick={openNew} className="flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 shadow transition hover:bg-gold-400">
                    <Plus className="h-4 w-4" /> Add Listing
                  </button>
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[860px] text-left text-sm">
                    <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-300">
                      <tr>
                        <th className="px-5 py-4">Property</th><th className="px-5 py-4">Type</th><th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4">Price</th><th className="px-5 py-4">Location</th><th className="px-5 py-4">Featured</th><th className="px-5 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100">
                      {listings.map((p) => (
                        <tr key={p.id} className="hover:bg-sand-50">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-3">
                              <img src={p.image} alt="" className="h-11 w-16 rounded-lg object-cover" />
                              <div>
                                <p className="font-semibold text-navy-950">{p.title}</p>
                                <p className="text-xs text-navy-500">{p.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3">{p.type}</td>
                          <td className="px-5 py-3">{badge(p.status, p.status === "For Sale" ? "amber" : "blue")}</td>
                          <td className="px-5 py-3 font-semibold">{p.price}</td>
                          <td className="px-5 py-3">{p.location}</td>
                          <td className="px-5 py-3">{p.featured ? <CheckCircle2 className="h-5 w-5 text-wa" /> : <span className="text-navy-300">—</span>}</td>
                          <td className="px-5 py-3">
                            <div className="flex justify-end gap-2">
                              <button onClick={() => { setIsNew(false); setEditing({ ...p }); }} aria-label="Edit" className="rounded-lg bg-navy-100 p-2 text-navy-800 transition hover:bg-navy-900 hover:text-gold-300">
                                <Pencil className="h-4 w-4" />
                              </button>
                              <button onClick={() => setConfirmDelete(p.id)} aria-label="Delete" className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-600 hover:text-white">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          )}

          {/* ============ BOOKINGS ============ */}
          {tab === "bookings" && (
            <Reveal className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-300">
                    <tr>
                      <th className="px-5 py-4">Ref</th><th className="px-5 py-4">Client</th><th className="px-5 py-4">Service / Item</th>
                      <th className="px-5 py-4">Dates</th><th className="px-5 py-4">Amount</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Payment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {bookings.map((b) => (
                      <tr key={b.id} className="hover:bg-sand-50">
                        <td className="px-5 py-3 font-semibold">{b.id}</td>
                        <td className="px-5 py-3"><p className="font-semibold text-navy-950">{b.name}</p><p className="text-xs text-navy-500">{b.contact}</p></td>
                        <td className="px-5 py-3">{b.service} — {b.item}</td>
                        <td className="px-5 py-3">{b.dates}</td>
                        <td className="px-5 py-3 font-semibold">{b.amount}</td>
                        <td className="px-5 py-3">
                          <select value={b.status} onChange={(e) => setBookingStatus(b.id, e.target.value as Booking["status"])}
                            className="rounded-lg border border-navy-200 px-2 py-1.5 text-xs font-semibold focus:border-gold-500 focus:outline-none">
                            {["Pending", "Confirmed", "Completed", "Cancelled"].map((s) => <option key={s}>{s}</option>)}
                          </select>
                        </td>
                        <td className="px-5 py-3">
                          <select value={b.payment} onChange={(e) => setBookingPayment(b.id, e.target.value as Booking["payment"])}
                            className="rounded-lg border border-navy-200 px-2 py-1.5 text-xs font-semibold focus:border-gold-500 focus:outline-none">
                            {["Unpaid", "Paid"].map((s) => <option key={s}>{s}</option>)}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          )}

          {/* ============ INQUIRIES ============ */}
          {tab === "inquiries" && (
            <Reveal className="space-y-4">
              {inquiries.map((i) => (
                <div key={i.id} className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-navy-100/60">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-navy-950">{i.item ?? i.type}</p>
                      <p className="mt-0.5 text-xs text-navy-500">{i.id} · {i.date} · {i.type} · {i.name} · {i.contact}</p>
                    </div>
                    <select value={i.status} onChange={(e) => setInquiryStatus(i.id, e.target.value as Inquiry["status"])}
                      className="rounded-lg border border-navy-200 px-3 py-1.5 text-xs font-semibold focus:border-gold-500 focus:outline-none">
                      {["New", "In Progress", "Closed"].map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-navy-800">{i.message}</p>
                </div>
              ))}
            </Reveal>
          )}

          {/* ============ USERS ============ */}
          {tab === "users" && (
            <Reveal className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-300">
                    <tr><th className="px-5 py-4">User</th><th className="px-5 py-4">Role</th><th className="px-5 py-4">Joined</th><th className="px-5 py-4">Last Active</th></tr>
                  </thead>
                  <tbody className="divide-y divide-navy-100">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-sand-50">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">{u.name.charAt(0)}</span>
                            <div><p className="font-semibold text-navy-950">{u.name}</p><p className="text-xs text-navy-500">{u.email}</p></div>
                          </div>
                        </td>
                        <td className="px-5 py-3">{badge(u.role, u.role === "admin" ? "amber" : "blue")}</td>
                        <td className="px-5 py-3">{u.joined}</td>
                        <td className="px-5 py-3">{u.lastActive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          )}

          {/* ============ PAYMENTS ============ */}
          {tab === "payments" && (
            <Reveal>
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-100/60">
                  <p className="font-display text-4xl font-bold text-wa">{revenue}</p>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-navy-600">Paid Bookings</p>
                </div>
                <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-100/60">
                  <p className="font-display text-4xl font-bold text-amber-500">{bookings.length - revenue}</p>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-navy-600">Awaiting Payment</p>
                </div>
                <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy-100/60">
                  <p className="font-display text-4xl font-bold text-navy-950">M-Pesa</p>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-navy-600">Primary Payment Channel</p>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100/60">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] text-left text-sm">
                    <thead className="bg-navy-900 text-xs uppercase tracking-wider text-gold-300">
                      <tr><th className="px-5 py-4">Ref</th><th className="px-5 py-4">Client</th><th className="px-5 py-4">Item</th><th className="px-5 py-4">Amount</th><th className="px-5 py-4">Payment</th></tr>
                    </thead>
                    <tbody className="divide-y divide-navy-100">
                      {bookings.map((b) => (
                        <tr key={b.id} className="hover:bg-sand-50">
                          <td className="px-5 py-3 font-semibold">{b.id}</td>
                          <td className="px-5 py-3">{b.name}</td>
                          <td className="px-5 py-3">{b.item}</td>
                          <td className="px-5 py-3 font-semibold">{b.amount}</td>
                          <td className="px-5 py-3">{badge(b.payment, b.payment === "Paid" ? "green" : "red")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-4 text-xs text-navy-500">Note: in this preview build, payment tracking is manual (M-Pesa/bank confirmation). Online card & M-Pesa STK checkout can be integrated in the next phase.</p>
            </Reveal>
          )}

          {/* ============ CONTENT ============ */}
          {tab === "content" && (
            <Reveal className="max-w-3xl rounded-3xl bg-white p-8 shadow-card ring-1 ring-navy-100/60">
              <h3 className="font-display text-xl font-bold text-navy-950">Edit Website Content</h3>
              <p className="mt-1 text-sm text-navy-600">Changes go live on the public site instantly (saved in this browser).</p>
              <div className="mt-6 space-y-5">
                <div>
                  <label className="label-lux">Announcement Bar (top of every page)</label>
                  <input className="input-lux" value={contentDraft.announcement} onChange={(e) => setContentDraft({ ...contentDraft, announcement: e.target.value })} />
                </div>
                <div>
                  <label className="label-lux">Homepage Hero Headline</label>
                  <input className="input-lux" value={contentDraft.heroTitle} onChange={(e) => setContentDraft({ ...contentDraft, heroTitle: e.target.value })} />
                  <p className="mt-1 text-xs text-navy-500">Tip: include the phrase “Coastal Kenya” — it is highlighted in gold automatically.</p>
                </div>
                <div>
                  <label className="label-lux">Homepage Hero Sub-headline</label>
                  <textarea rows={3} className="input-lux" value={contentDraft.heroSubtitle} onChange={(e) => setContentDraft({ ...contentDraft, heroSubtitle: e.target.value })} />
                </div>
                <button onClick={() => { setContent(contentDraft); setContentSaved(true); setTimeout(() => setContentSaved(false), 2500); }} className="btn-gold">
                  {contentSaved ? "✓ Saved — Live Now" : "Publish Changes"}
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* ============ LISTING EDITOR MODAL ============ */}
      <Modal open={!!editing} onClose={() => setEditing(null)} wide>
        {editing && (
          <div className="p-7 sm:p-9">
            <h3 className="h-display text-2xl">{isNew ? "Add New Listing" : `Edit ${editing.id}`}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="label-lux">Title</label>
                <input className="input-lux" value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
              </div>
              <div>
                <label className="label-lux">Type</label>
                <select className="input-lux" value={editing.type} onChange={(e) => setEditing({ ...editing, type: e.target.value as Property["type"] })}>
                  {["Villa", "Apartment", "House", "Land", "Commercial", "Hotel"].map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="label-lux">Status</label>
                <select className="input-lux" value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value as Property["status"] })}>
                  {["For Sale", "For Rent"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="label-lux">Price (display text)</label>
                <input className="input-lux" placeholder="e.g. KES 25,000,000" value={editing.price} onChange={(e) => setEditing({ ...editing, price: e.target.value })} />
              </div>
              <div>
                <label className="label-lux">Location</label>
                <input className="input-lux" value={editing.location} onChange={(e) => setEditing({ ...editing, location: e.target.value })} />
              </div>
              <div>
                <label className="label-lux">Bedrooms</label>
                <input type="number" min={0} className="input-lux" value={editing.beds} onChange={(e) => setEditing({ ...editing, beds: +e.target.value })} />
              </div>
              <div>
                <label className="label-lux">Bathrooms</label>
                <input type="number" min={0} className="input-lux" value={editing.baths} onChange={(e) => setEditing({ ...editing, baths: +e.target.value })} />
              </div>
              <div>
                <label className="label-lux">Area (e.g. 0.5 acre)</label>
                <input className="input-lux" value={editing.area} onChange={(e) => setEditing({ ...editing, area: e.target.value })} />
              </div>
              <div>
                <label className="label-lux">Featured on Homepage?</label>
                <select className="input-lux" value={editing.featured ? "yes" : "no"} onChange={(e) => setEditing({ ...editing, featured: e.target.value === "yes" })}>
                  <option value="no">No</option><option value="yes">Yes</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label-lux">Photo</label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {IMAGE_OPTIONS.map((src) => (
                    <button key={src} type="button" onClick={() => setEditing({ ...editing, image: src })}
                      className={`overflow-hidden rounded-xl ring-2 transition ${editing.image === src ? "ring-gold-500" : "ring-transparent hover:ring-navy-300"}`}>
                      <img src={src} alt="" className="h-16 w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="label-lux">Features (one per line)</label>
                <textarea rows={4} className="input-lux" value={editing.features.join("\n")}
                  onChange={(e) => setEditing({ ...editing, features: e.target.value.split("\n") })} />
              </div>
              <div className="sm:col-span-2">
                <label className="label-lux">Description</label>
                <textarea rows={4} className="input-lux" value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => setEditing(null)} className="btn-navy !px-5 !py-3 !text-xs">Cancel</button>
              <button onClick={saveListing} disabled={!editing.title.trim() || !editing.price.trim()} className="btn-gold !px-5 !py-3 !text-xs disabled:opacity-50">
                {isNew ? "Publish Listing" : "Save Changes"}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete confirm */}
      <Modal open={!!confirmDelete} onClose={() => setConfirmDelete(null)}>
        <div className="p-8 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
            <Trash2 className="h-6 w-6" />
          </span>
          <h3 className="h-display mt-4 text-xl">Delete listing {confirmDelete}?</h3>
          <p className="mt-2 text-sm text-navy-600">This removes it from the public site immediately. You can restore demo data anytime with “Reset Demo Data”.</p>
          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => setConfirmDelete(null)} className="btn-navy !px-5 !py-3 !text-xs"><X className="h-4 w-4" /> Keep It</button>
            <button onClick={() => { if (confirmDelete) deleteListing(confirmDelete); setConfirmDelete(null); }} className="rounded-full bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
