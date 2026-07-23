import { useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { ShieldCheck, User, ArrowRight, MessageCircle } from "lucide-react";
import { useStore } from "@/lib/store";
import { BRAND, waLink } from "@/data/site";
import { useSeo } from "@/components/Seo";
import Reveal from "@/components/Reveal";

export default function Login() {
  useSeo("Login | Korir Agency — Admin & Customer Access");
  const { session, login } = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (session) return <Navigate to={session.role === "admin" ? "/admin" : "/account"} replace />;

  const enterCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    login("customer", name.trim() || "Guest Client", email.trim() || undefined);
    navigate("/account");
  };

  return (
    <main className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy-950 py-16">
      <img src="/images/resort-night.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="container-lux relative">
        <Reveal className="mx-auto max-w-4xl">
          <div className="text-center">
            <img src={BRAND.logo} alt="Korir Agency" className="mx-auto h-20 w-20 rounded-full ring-4 ring-gold-500/60" />
            <h1 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">Welcome to Korir Agency</h1>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Choose how you'd like to enter — no password required in this preview build.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Admin */}
            <div className="flex flex-col rounded-3xl border border-gold-500/30 bg-white/5 p-8 backdrop-blur transition hover:border-gold-400/60">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-400">
                <ShieldCheck className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-white">Admin Panel</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-white/70">
                Full control for the Korir Agency team — manage listings, bookings, inquiries, users, payments and website content.
              </p>
              <button onClick={() => { login("admin", "Korir Agency Admin", BRAND.email); navigate("/admin"); }} className="btn-gold mt-6 w-full">
                Enter Admin Panel <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Customer */}
            <div className="flex flex-col rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur transition hover:border-white/40">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <User className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-white">Customer Account</h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Save favorite properties, submit inquiries, track bookings and manage your profile.
              </p>
              <form onSubmit={enterCustomer} className="mt-5 flex-1 space-y-3">
                <input className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold-400 focus:outline-none"
                  placeholder="Your name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-gold-400 focus:outline-none"
                  placeholder="Your email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="btn-outline-light w-full !bg-transparent">Create / Enter My Account <ArrowRight className="h-4 w-4" /></button>
              </form>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-white/50">
            This is a demonstration build: accounts are stored in your browser only. For real account help,{" "}
            <a href={waLink("Hello Korir Agency! I need help with my account on the website.")} target="_blank" rel="noreferrer" className="text-gold-300 underline">
              message us on WhatsApp <MessageCircle className="inline h-3 w-3" />
            </a>
          </p>
        </Reveal>
      </div>
    </main>
  );
}
