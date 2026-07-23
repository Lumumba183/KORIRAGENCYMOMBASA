export interface Testimonial {
  name: string;
  origin: string;
  service: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    origin: "London, United Kingdom",
    service: "Holiday Villa Booking",
    rating: 5,
    text: "Korir Agency found us a beachfront villa in Diani that looked even better than the photos. Airport pickup, a private chef, a day safari — every single detail was handled. The best-organized holiday we've ever had.",
  },
  {
    name: "James & Wanjiku Mwangi",
    origin: "Nairobi, Kenya",
    service: "Property Purchase",
    rating: 5,
    text: "We bought our Nyali apartment through Korir Agency and the process was refreshingly transparent — verified title, honest advice, zero pressure. They even managed the handover while we were in Nairobi.",
  },
  {
    name: "Familie Schneider",
    origin: "Munich, Germany",
    service: "Tours & Safaris",
    rating: 5,
    text: "The Tsavo day safari was the highlight of our trip. Our guide knew exactly where to find the red elephants, and we were back at our Diani hotel in time for dinner. Flawless organization from start to finish.",
  },
  {
    name: "Ahmed Al-Rashid",
    origin: "Dubai, UAE",
    service: "Property Management",
    rating: 5,
    text: "They manage my two rental villas in Diani and I receive detailed monthly reports without ever having to ask. Occupancy is up 40% since they took over. Truly professional.",
  },
  {
    name: "Beatrice Achieng",
    origin: "Kisumu, Kenya",
    service: "SGR & Airport Transfers",
    rating: 5,
    text: "Our SGR arrived 40 minutes late but the driver was still waiting with a smile and a cold bottle of water. That small kindness says everything about this company. We use them for every coast trip now.",
  },
  {
    name: "Luca & Giulia Romano",
    origin: "Milan, Italy",
    service: "Wasini Dhow Trip",
    rating: 5,
    text: "The Wasini dhow trip felt like a dream — dolphins, snorkelling, and the best seafood lunch of our lives on the island. Booking on WhatsApp took less than five minutes. Grazie, Korir Agency!",
  },
  {
    name: "Pastor Daniel Kiptoo",
    origin: "Eldoret, Kenya",
    service: "Corporate & Group Travel",
    rating: 5,
    text: "They moved our entire church group of 46 people to the coast — buses, hotel, meals, even a beach service on Sunday morning. Everything ran on time. Our annual retreat now belongs to Korir Agency.",
  },
  {
    name: "Emily Chen",
    origin: "Singapore",
    service: "Car Hire",
    rating: 5,
    text: "Hired a Harrier for a week of self-drive exploring. The car was spotless, the paperwork took ten minutes, and when I had a question at 9pm they answered on WhatsApp immediately. Five stars, easily.",
  },
];
