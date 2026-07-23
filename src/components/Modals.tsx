import React, { useEffect, useState } from "react";
import { X, CheckCircle2, MessageCircle } from "lucide-react";
import { useStore, submitNetlifyForm } from "@/lib/store";
import { waLink } from "@/data/site";

export function Modal({ open, onClose, children, wide }: { open: boolean; onClose: () => void; children: React.ReactNode; wide?: boolean }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative max-h-[92vh] w-full overflow-y-auto rounded-3xl bg-white shadow-lux ${wide ? "max-w-3xl" : "max-w-lg"}`}>
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 rounded-full bg-navy-950/60 p-2 text-white transition hover:bg-navy-950">
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function SuccessView({ title, text, waMessage, onClose }: { title: string; text: string; waMessage: string; onClose: () => void }) {
  return (
    <div className="p-8 text-center sm:p-10">
      <CheckCircle2 className="mx-auto h-16 w-16 text-wa" />
      <h3 className="h-display mt-4 text-2xl">{title}</h3>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-navy-700/80">{text}</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a href={waLink(waMessage)} target="_blank" rel="noreferrer" className="btn-wa !px-6 !py-3 !text-xs">
          <MessageCircle className="h-4 w-4" /> Confirm Faster on WhatsApp
        </a>
        <button onClick={onClose} className="btn-navy !px-6 !py-3 !text-xs">Done</button>
      </div>
      <p className="mt-4 text-xs text-navy-500">A copy has also been sent to koriragency@gmail.com</p>
    </div>
  );
}

export function InquiryModal({
  open, onClose, type, itemName,
}: {
  open: boolean; onClose: () => void; type: "Contact" | "Property" | "Villa" | "Car" | "Tour" | "General"; itemName?: string;
}) {
  const { addInquiry } = useStore();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  useEffect(() => {
    if (open) setSent(false);
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({ type, item: itemName, name: form.name, contact: form.contact, message: form.message });
    void submitNetlifyForm("contact", {
      name: form.name,
      email: form.contact.includes("@") ? form.contact : "noreply@koriragency.co.ke",
      phone: form.contact,
      subject: `${type} Inquiry${itemName ? ` — ${itemName}` : ""}`,
      message: form.message,
    });
    setSent(true);
  };

  return (
    <Modal open={open} onClose={onClose}>
      {sent ? (
        <SuccessView
          title="Inquiry Received!"
          text="Asante sana! Our team will respond shortly. For an instant answer, tap the WhatsApp button below."
          waMessage={`Hello Korir Agency! Inquiry about ${itemName ?? type}: ${form.message}`}
          onClose={onClose}
        />
      ) : (
        <form onSubmit={submit} className="p-7 sm:p-9">
          <p className="eyebrow">Quick Inquiry</p>
          <h3 className="h-display mt-2 text-2xl">{itemName ?? "Talk to Korir Agency"}</h3>
          <p className="mt-2 text-sm text-navy-600">We reply within minutes during business hours.</p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="label-lux">Your Name</label>
              <input required className="input-lux" placeholder="e.g. Jane Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="label-lux">Email or Phone / WhatsApp</label>
              <input required className="input-lux" placeholder="e.g. +254 7xx xxx xxx" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
            </div>
            <div>
              <label className="label-lux">Message</label>
              <textarea required rows={4} className="input-lux" placeholder="Tell us what you need — dates, guests, budget…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button className="btn-gold w-full">Send Inquiry</button>
          </div>
        </form>
      )}
    </Modal>
  );
}

export function BookingModal({
  open, onClose, service, itemName, amount,
}: {
  open: boolean; onClose: () => void; service: string; itemName: string; amount?: string;
}) {
  const { addBooking } = useStore();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", dates: "", message: "" });

  useEffect(() => {
    if (open) setSent(false);
  }, [open]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking({
      service, item: itemName, name: form.name, contact: form.contact,
      dates: form.dates || "Flexible", amount: amount ?? "On request",
    });
    void submitNetlifyForm("booking", {
      name: form.name,
      email: form.contact.includes("@") ? form.contact : "noreply@koriragency.co.ke",
      phone: form.contact,
      service, item: itemName, dates: form.dates, message: form.message,
    });
    setSent(true);
  };

  return (
    <Modal open={open} onClose={onClose}>
      {sent ? (
        <SuccessView
          title="Booking Request Sent!"
          text={`Your request for ${itemName} is in. We'll confirm availability and payment details shortly — tap WhatsApp below for instant confirmation.`}
          waMessage={`Hello Korir Agency! I just requested a booking: ${service} — ${itemName}, dates: ${form.dates || "flexible"}. Please confirm.`}
          onClose={onClose}
        />
      ) : (
        <form onSubmit={submit} className="p-7 sm:p-9">
          <p className="eyebrow">Book Now</p>
          <h3 className="h-display mt-2 text-2xl">{itemName}</h3>
          <p className="mt-2 text-sm text-navy-600">
            {service}{amount ? ` · ${amount}` : ""} — free cancellation up to 48h before.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="label-lux">Your Name</label>
              <input required className="input-lux" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="label-lux">Email or Phone / WhatsApp</label>
              <input required className="input-lux" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
            </div>
            <div>
              <label className="label-lux">Dates</label>
              <input className="input-lux" placeholder="e.g. 12 – 19 August 2026" value={form.dates} onChange={(e) => setForm({ ...form, dates: e.target.value })} />
            </div>
            <div>
              <label className="label-lux">Notes (optional)</label>
              <textarea rows={3} className="input-lux" placeholder="Guests, pickup point, special requests…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <button className="btn-gold w-full">Request Booking</button>
            <p className="text-center text-xs text-navy-500">No payment now — we confirm availability first.</p>
          </div>
        </form>
      )}
    </Modal>
  );
}
