import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X, Phone, Mail, ChevronDown, User, MessageCircle } from "lucide-react";
import { BRAND, NAV_LINKS, waLink } from "@/data/site";
import { useStore } from "@/lib/store";
import ServiceIcon from "@/components/ServiceIcon";
import { SOCIALS } from "@/data/site";

const PRIMARY = ["Home", "About Us", "Services", "Properties", "Villas & Airbnb", "Car Hire", "Tours & Safaris"];
const MORE = ["Property Management", "Gallery", "Testimonials", "Blog", "Contact Us"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { session, content } = useStore();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
      isActive ? "text-gold-400" : "text-white/85 hover:text-gold-300"
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-gold-500 px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold text-navy-950">
        {content.announcement}
      </div>

      {/* Top info bar */}
      <div className="hidden border-b border-white/10 bg-navy-950 lg:block">
        <div className="container-lux flex items-center justify-between py-2 text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a href={`tel:${BRAND.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-gold-300">
              <Phone className="h-3.5 w-3.5 text-gold-400" /> {BRAND.phones[0]} | {BRAND.phones[1]}
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-gold-300">
              <Mail className="h-3.5 w-3.5 text-gold-400" /> {BRAND.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.slice(0, 5).map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} className="hover:text-gold-300">
                <ServiceIcon name={s.icon} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-navy-900/95 backdrop-blur transition-shadow ${scrolled ? "shadow-lux" : ""}`}>
        <div className="container-lux flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={BRAND.logo} alt="Korir Agency logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-500/70" />
            <div className="leading-tight">
              <span className="font-display text-lg font-bold tracking-wide text-white sm:text-xl">
                KORIR <span className="text-gold-400">AGENCY</span>
              </span>
              <p className="hidden text-[10px] uppercase tracking-[0.22em] text-white/60 sm:block">
                Coastal Property & Travel Partner
              </p>
            </div>
          </Link>

          <nav className="hidden items-center xl:flex">
            {NAV_LINKS.filter((l) => PRIMARY.includes(l.label)).map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls} end={l.to === "/"}>
                {l.label.replace("Villas & Airbnb", "Villas").replace("Tours & Safaris", "Tours")}
              </NavLink>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-white/85 transition-colors hover:text-gold-300">
                More <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute right-0 top-full w-60 translate-y-2 rounded-2xl border border-white/10 bg-navy-900 p-2 opacity-0 shadow-lux transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {NAV_LINKS.filter((l) => MORE.includes(l.label)).map((l) => (
                  <NavLink key={l.to} to={l.to} className="block rounded-xl px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-gold-300">
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              to={session ? (session.role === "admin" ? "/admin" : "/account") : "/login"}
              className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:border-gold-400 hover:text-gold-300"
            >
              <User className="h-4 w-4" />
              {session ? (session.role === "admin" ? "Admin Panel" : "My Account") : "Login"}
            </Link>
            <a href={waLink("Hello Korir Agency! I would like to make a booking.")} target="_blank" rel="noreferrer" className="btn-wa !px-5 !py-2 !text-xs">
              <MessageCircle className="h-4 w-4" /> Book Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white xl:hidden" aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 xl:hidden ${open ? "" : "pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-navy-950/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-navy-900 p-6 shadow-lux transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={BRAND.logo} alt="logo" className="h-10 w-10 rounded-full ring-2 ring-gold-500/70" />
              <span className="font-display text-lg font-bold text-white">KORIR <span className="text-gold-400">AGENCY</span></span>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-lg p-2 text-white"><X className="h-6 w-6" /></button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? "bg-gold-500/15 text-gold-300" : "text-white/85 hover:bg-white/5"}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link to={session ? (session.role === "admin" ? "/admin" : "/account") : "/login"} className="btn-outline-light !py-3 !text-xs">
              <User className="h-4 w-4" /> {session ? (session.role === "admin" ? "Admin Panel" : "My Account") : "Login / Register"}
            </Link>
            <a href={waLink("Hello Korir Agency! I would like to make a booking.")} target="_blank" rel="noreferrer" className="btn-wa !py-3 !text-xs">
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
          <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/60">
            <p>{BRAND.phones.join("  ·  ")}</p>
            <p className="mt-1">{BRAND.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
