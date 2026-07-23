import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PROPERTIES, type Property } from "@/data/properties";

export type Role = "admin" | "customer";

export interface Session {
  role: Role;
  name: string;
  email?: string;
}

export interface Inquiry {
  id: string;
  date: string;
  type: "Contact" | "Property" | "Villa" | "Car" | "Tour" | "General";
  item?: string;
  name: string;
  contact: string;
  message: string;
  status: "New" | "In Progress" | "Closed";
}

export interface Booking {
  id: string;
  date: string;
  service: string;
  item: string;
  name: string;
  contact: string;
  dates: string;
  amount: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  payment: "Unpaid" | "Paid";
}

export interface SiteUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  joined: string;
  lastActive: string;
}

export interface SiteContent {
  announcement: string;
  heroTitle: string;
  heroSubtitle: string;
}

const DEFAULT_CONTENT: SiteContent = {
  announcement: "Karibu! Book villas, safaris, transfers & more — instant confirmation on WhatsApp: +254 722 280 840",
  heroTitle: "Where Coastal Kenya Feels Like Home",
  heroSubtitle:
    "Property sales & rentals, holiday villas, car hire, transfers, tours & safaris — one trusted partner on Kenya's South Coast.",
};

const SEED_USERS: SiteUser[] = [
  { id: "U-001", name: "Korir Agency Admin", email: "koriragency@gmail.com", role: "admin", joined: "2025-01-01", lastActive: "Today" },
  { id: "U-002", name: "Sarah Mitchell", email: "sarah.m@example.com", role: "customer", joined: "2025-11-14", lastActive: "2 days ago" },
  { id: "U-003", name: "James Mwangi", email: "j.mwangi@example.com", role: "customer", joined: "2026-02-03", lastActive: "5 hours ago" },
  { id: "U-004", name: "Luca Romano", email: "luca.r@example.com", role: "customer", joined: "2026-04-19", lastActive: "Yesterday" },
];

const SEED_INQUIRIES: Inquiry[] = [
  { id: "IN-1001", date: "2026-07-20", type: "Property", item: "KA-001 · 5-Bedroom Beachfront Villa", name: "Ahmed Al-Rashid", contact: "ahmed@example.com", message: "Interested in a viewing next month — is the title freehold?", status: "In Progress" },
  { id: "IN-1002", date: "2026-07-21", type: "Tour", item: "Tsavo East Red Elephant Day Safari", name: "Familie Schneider", contact: "+49 89 555 0100", message: "Family of 4, safari on the 28th if possible.", status: "New" },
  { id: "IN-1003", date: "2026-07-22", type: "Villa", item: "Ahana Beach Villa", name: "Emily Chen", contact: "emily.c@example.com", message: "2 weeks in December with private chef — availability?", status: "New" },
];

const SEED_BOOKINGS: Booking[] = [
  { id: "BK-2001", date: "2026-07-18", service: "Transfer", item: "SGR → Diani", name: "Beatrice Achieng", contact: "+254 700 111 222", dates: "25 Jul 2026", amount: "KES 3,000", status: "Confirmed", payment: "Paid" },
  { id: "BK-2002", date: "2026-07-19", service: "Villa", item: "Palms Sunset Villa", name: "Sarah Mitchell", contact: "+44 7700 900111", dates: "02–09 Aug 2026", amount: "KES 315,000", status: "Confirmed", payment: "Paid" },
  { id: "BK-2003", date: "2026-07-21", service: "Car Hire", item: "Toyota Harrier (7 days)", name: "Emily Chen", contact: "+65 8111 2222", dates: "27 Jul – 02 Aug", amount: "KES 56,000", status: "Pending", payment: "Unpaid" },
  { id: "BK-2004", date: "2026-07-22", service: "Tour", item: "Wasini Dhow Safari", name: "Luca Romano", contact: "+39 333 555 777", dates: "30 Jul 2026", amount: "KES 17,000", status: "Confirmed", payment: "Unpaid" },
];

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
}

interface Store {
  session: Session | null;
  login: (role: Role, name: string, email?: string) => void;
  logout: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  listings: Property[];
  addListing: (p: Property) => void;
  updateListing: (p: Property) => void;
  deleteListing: (id: string) => void;
  resetListings: () => void;
  inquiries: Inquiry[];
  addInquiry: (i: Omit<Inquiry, "id" | "date" | "status">) => void;
  setInquiryStatus: (id: string, s: Inquiry["status"]) => void;
  bookings: Booking[];
  addBooking: (b: Omit<Booking, "id" | "date" | "status" | "payment">) => void;
  setBookingStatus: (id: string, s: Booking["status"]) => void;
  setBookingPayment: (id: string, p: Booking["payment"]) => void;
  users: SiteUser[];
  content: SiteContent;
  setContent: (c: SiteContent) => void;
}

const Ctx = createContext<Store | null>(null);

const uid = (prefix: string) => `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
const today = () => new Date().toISOString().slice(0, 10);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(() => load("ka_session", null));
  const [favorites, setFavorites] = useState<string[]>(() => load("ka_favorites", []));
  const [listings, setListings] = useState<Property[]>(() => load("ka_listings", PROPERTIES));
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => load("ka_inquiries", SEED_INQUIRIES));
  const [bookings, setBookings] = useState<Booking[]>(() => load("ka_bookings", SEED_BOOKINGS));
  const [users, setUsers] = useState<SiteUser[]>(() => load("ka_users", SEED_USERS));
  const [content, setContentState] = useState<SiteContent>(() => load("ka_content", DEFAULT_CONTENT));

  useEffect(() => save("ka_session", session), [session]);
  useEffect(() => save("ka_favorites", favorites), [favorites]);
  useEffect(() => save("ka_listings", listings), [listings]);
  useEffect(() => save("ka_inquiries", inquiries), [inquiries]);
  useEffect(() => save("ka_bookings", bookings), [bookings]);
  useEffect(() => save("ka_users", users), [users]);
  useEffect(() => save("ka_content", content), [content]);

  const value = useMemo<Store>(
    () => ({
      session,
      login: (role, name, email) => {
        setSession({ role, name, email });
        setUsers((u) => [
          { id: uid("U"), name, email: email ?? "—", role, joined: today(), lastActive: "Just now" },
          ...u,
        ]);
      },
      logout: () => setSession(null),
      favorites,
      toggleFavorite: (id) =>
        setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id])),
      listings,
      addListing: (p) => setListings((l) => [p, ...l]),
      updateListing: (p) => setListings((l) => l.map((x) => (x.id === p.id ? p : x))),
      deleteListing: (id) => setListings((l) => l.filter((x) => x.id !== id)),
      resetListings: () => setListings(PROPERTIES),
      inquiries,
      addInquiry: (i) =>
        setInquiries((arr) => [{ ...i, id: uid("IN"), date: today(), status: "New" }, ...arr]),
      setInquiryStatus: (id, s) =>
        setInquiries((arr) => arr.map((x) => (x.id === id ? { ...x, status: s } : x))),
      bookings,
      addBooking: (b) =>
        setBookings((arr) => [
          { ...b, id: uid("BK"), date: today(), status: "Pending", payment: "Unpaid" },
          ...arr,
        ]),
      setBookingStatus: (id, s) =>
        setBookings((arr) => arr.map((x) => (x.id === id ? { ...x, status: s } : x))),
      setBookingPayment: (id, p) =>
        setBookings((arr) => arr.map((x) => (x.id === id ? { ...x, payment: p } : x))),
      users,
      content,
      setContent: (c) => setContentState(c),
    }),
    [session, favorites, listings, inquiries, bookings, users, content]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

/** Submit a form to Netlify (no-op safely when not on Netlify) */
export async function submitNetlifyForm(formName: string, fields: Record<string, string>) {
  try {
    const body = new URLSearchParams({ "form-name": formName, ...fields }).toString();
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    /* preview environment — submission stored locally instead */
  }
}
