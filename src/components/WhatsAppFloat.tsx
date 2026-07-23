import { MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Korir Agency on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden translate-x-2 rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lux transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us — replies in minutes
      </span>
      <span className="flex h-14 w-14 animate-pulse-ring items-center justify-center rounded-full bg-wa text-white shadow-lux transition-transform hover:scale-110">
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </span>
    </a>
  );
}
