import {
  Building2, Palmtree, Hotel, KeyRound, Briefcase, Car, Plane, MapPin,
  Binoculars, Ship, Users, BellRing, ChefHat, ShieldCheck, Palette, TrendingUp,
  Facebook, Instagram, Twitter, Linkedin, Youtube, Music2, type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  building: Building2,
  palmtree: Palmtree,
  hotel: Hotel,
  key: KeyRound,
  briefcase: Briefcase,
  car: Car,
  plane: Plane,
  mapPin: MapPin,
  binoculars: Binoculars,
  ship: Ship,
  users: Users,
  concierge: BellRing,
  chef: ChefHat,
  shield: ShieldCheck,
  palette: Palette,
  chart: TrendingUp,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  tiktok: Music2,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function ServiceIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Building2;
  return <Icon className={className} />;
}
