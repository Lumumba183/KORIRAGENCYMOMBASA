export const BRAND = {
  name: "Korir Agency",
  tagline: "Your Trusted Coastal Property & Travel Partner",
  motto: "Against All Odds, We Hope. Let It Happen.",
  logo: "/images/logo.jpg",
  email: "koriragency@gmail.com",
  phones: ["+254 722 280 840", "+254 722 760 805"],
  whatsapp: "254722280840",
  address: "Diani Beach Road, Ukunda, Kwale County — South Coast, Kenya",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM · Sun: 10:00 AM – 4:00 PM (EAT)",
};

/** Build a WhatsApp deep link with a pre-filled message */
export const waLink = (message: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = waLink(
  "Hello Korir Agency! I would like to make a booking / inquiry."
);

export const SOCIALS = [
  { name: "Facebook", handle: "Korir Agency", url: "https://facebook.com/koriragency", icon: "facebook" },
  { name: "Instagram", handle: "@koriragency", url: "https://instagram.com/koriragency", icon: "instagram" },
  { name: "X (Twitter)", handle: "@koriragency", url: "https://x.com/koriragency", icon: "twitter" },
  { name: "TikTok", handle: "@koriragency", url: "https://tiktok.com/@koriragency", icon: "tiktok" },
  { name: "LinkedIn", handle: "Korir Agency", url: "https://linkedin.com/company/koriragency", icon: "linkedin" },
  { name: "YouTube", handle: "Korir Agency", url: "https://youtube.com/@koriragency", icon: "youtube" },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Properties", to: "/properties" },
  { label: "Villas & Airbnb", to: "/holiday-villas" },
  { label: "Car Hire", to: "/car-hire" },
  { label: "Tours & Safaris", to: "/tours-safaris" },
  { label: "Property Management", to: "/property-management" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

export interface Service {
  title: string;
  blurb: string;
  icon: string; // lucide icon key
  image?: string;
  link?: string;
}

export const SERVICES: Service[] = [
  { title: "Property Sales & Rentals", blurb: "Verified homes, villas, apartments and plots for sale or rent across Coastal Kenya — fully vetted, fairly priced.", icon: "building", image: "/images/villa-ahana.jpg", link: "/properties" },
  { title: "Holiday Villa & Airbnb Bookings", blurb: "Hand-picked beachfront villas, cottages and serviced apartments for unforgettable coastal stays.", icon: "palmtree", image: "/images/villa-sunset.jpg", link: "/holiday-villas" },
  { title: "Hotels, Resorts, Cottages & Apartments", blurb: "From boutique resorts to family cottages — we match every budget and every occasion.", icon: "hotel", image: "/images/hotel-lobby.jpg", link: "/holiday-villas" },
  { title: "Property Management & Advisory", blurb: "End-to-end management for owners: tenants, maintenance, rent collection and transparent reporting.", icon: "key", image: "/images/keys.jpg", link: "/property-management" },
  { title: "Commercial Property & Business Space Leasing", blurb: "Shops, offices and business spaces in prime, high-traffic coastal locations.", icon: "briefcase", image: "/images/commercial.jpg", link: "/properties" },
  { title: "Car Hire (Self-drive & Chauffeur)", blurb: "A spotless fleet — from executive SUVs to safari-ready 4x4s — with or without a professional driver.", icon: "car", image: "/images/car-prado.jpg", link: "/car-hire" },
  { title: "Airport & SGR Transfers", blurb: "On-time pickups from Moi International Airport and Mombasa SGR Terminus, 24/7.", icon: "plane", image: "/images/sgr-train.jpg", link: "/car-hire" },
  { title: "Taxi Services", blurb: "Safe, clean, air-conditioned taxis across Diani, Ukunda, Mombasa and the wider coast.", icon: "mapPin", image: "/images/car-hiace.jpg", link: "/car-hire" },
  { title: "Tours & Safaris", blurb: "Tsavo, Shimba Hills and beyond — expertly guided day safaris from your beach hotel.", icon: "binoculars", image: "/images/safari-elephants.jpg", link: "/tours-safaris" },
  { title: "Beach Excursions & Boat Trips", blurb: "Wasini dhow trips, dolphin spotting, snorkelling, jet-ski and sunset cruises.", icon: "ship", image: "/images/dhow-sunset.jpg", link: "/tours-safaris" },
  { title: "Corporate & Group Travel", blurb: "Retreats, conferences and team getaways — logistics handled end to end.", icon: "users", link: "/services" },
  { title: "Concierge Services", blurb: "Reservations, errands, personal shopping and lifestyle management on demand.", icon: "concierge", link: "/services" },
  { title: "Private Chef Services", blurb: "Coastal and international cuisine prepared in your villa by a professional chef.", icon: "chef", image: "/images/chef.jpg", link: "/services" },
  { title: "Security Services", blurb: "Vetted guards and property surveillance for homes, events and businesses.", icon: "shield", link: "/services" },
  { title: "Graphics Design & Branding", blurb: "Logos, brand identities and marketing materials that make your business shine.", icon: "palette", link: "/services" },
  { title: "Business Consultancy", blurb: "Practical guidance for starting, registering and growing a business in Kenya.", icon: "chart", link: "/services" },
];

export const STATS = [
  { value: "500+", label: "Properties Listed" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "350+", label: "Safaris & Tours Run" },
  { value: "24/7", label: "Client Support" },
];

export const MAP_EMBED =
  "https://maps.google.com/maps?q=Diani%20Beach%2C%20Ukunda%2C%20Kenya&t=&z=12&ie=UTF8&iwloc=&output=embed";
