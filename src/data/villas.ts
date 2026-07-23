export interface Villa {
  id: string;
  name: string;
  location: string;
  sleeps: number;
  bedrooms: number;
  baths: number;
  pricePerNight: string;
  image: string;
  tag: string;
  amenities: string[];
  description: string;
}

export const VILLAS: Villa[] = [
  {
    id: "V-01",
    name: "Ahana Beach Villa",
    location: "Diani Beach",
    sleeps: 10, bedrooms: 5, baths: 6,
    pricePerNight: "KES 55,000",
    image: "/images/villa-ahana.jpg",
    tag: "Signature",
    amenities: ["Private pool", "Beachfront", "Chef on request", "Housekeeper", "Wi-Fi", "Airport pickup"],
    description: "Our flagship villa: arched colonnades, a glass-still pool and the beach at the end of the garden. Fully staffed stays available — perfect for milestone celebrations and family reunions.",
  },
  {
    id: "V-02",
    name: "Palms Sunset Villa",
    location: "Diani Beach",
    sleeps: 8, bedrooms: 4, baths: 4,
    pricePerNight: "KES 45,000",
    image: "/images/villa-sunset.jpg",
    tag: "Guest Favourite",
    amenities: ["Infinity pool", "Sunset terrace", "BBQ pavilion", "Daily housekeeping", "Smart TVs", "Backup power"],
    description: "Watch the sky catch fire from your infinity-edge pool. A two-storey entertainer's villa with wraparound verandas, steps from the sand.",
  },
  {
    id: "V-03",
    name: "Ocean Breeze Studio",
    location: "Shanzu, Mombasa",
    sleeps: 2, bedrooms: 1, baths: 1,
    pricePerNight: "KES 6,500",
    image: "/images/airbnb-studio.jpg",
    tag: "Budget Pick",
    amenities: ["Ocean view", "Kitchenette", "Fast Wi-Fi", "Smart TV", "Housekeeping", "Self check-in"],
    description: "A bright, view-soaked studio made for couples and remote workers. Ten minutes' stroll to the beach, everything included, zero fuss.",
  },
  {
    id: "V-04",
    name: "Tiwi Makuti Cottage",
    location: "Tiwi Beach",
    sleeps: 6, bedrooms: 3, baths: 2,
    pricePerNight: "KES 18,000",
    image: "/images/cottage-veranda.jpg",
    tag: "Authentic",
    amenities: ["Beachfront garden", "Makuti veranda", "Full kitchen", "Caretaker", "Snorkel gear", "Hammocks"],
    description: "Barefoot Swahili charm under a hand-thatched roof. Fall asleep to the surf on one of the coast's quietest, loveliest beaches.",
  },
  {
    id: "V-05",
    name: "Monkey Palms House",
    location: "Galu Beach",
    sleeps: 8, bedrooms: 4, baths: 5,
    pricePerNight: "KES 38,000",
    image: "/images/villa-monkey.jpg",
    tag: "Nature",
    amenities: ["Lagoon pool", "Beachfront", "Colobus viewing", "Staff available", "Chef on request", "Kayaks"],
    description: "A palm-forest sanctuary where colobus monkeys swing past your breakfast table and a lagoon pool melts into the horizon.",
  },
  {
    id: "V-06",
    name: "Coral Garden Villa",
    location: "Galu Beach",
    sleeps: 8, bedrooms: 4, baths: 4,
    pricePerNight: "KES 30,000",
    image: "/images/villa-palms.jpg",
    tag: "Family",
    amenities: ["Free-form pool", "Kids' garden", "100m to beach", "Wi-Fi & DSTV", "Housekeeping", "BBQ area"],
    description: "Room for the whole tribe: a free-form pool, shaded gardens and Diani's white sand a two-minute walk away.",
  },
  {
    id: "V-07",
    name: "Azure Coast Penthouse",
    location: "Nyali, Mombasa",
    sleeps: 4, bedrooms: 2, baths: 2,
    pricePerNight: "KES 15,000",
    image: "/images/interior-lounge.jpg",
    tag: "Luxury",
    amenities: ["Panoramic ocean views", "Rooftop lounge", "Designer kitchen", "Gym access", "2 parking bays", "Concierge"],
    description: "Glass, light and endless blue. A penthouse stay for guests who like their beach holidays with a skyline.",
  },
  {
    id: "V-08",
    name: "Coastal Charm Apartment",
    location: "Bamburi, Mombasa",
    sleeps: 4, bedrooms: 2, baths: 2,
    pricePerNight: "KES 9,500",
    image: "/images/interior-coastal.jpg",
    tag: "Great Value",
    amenities: ["Furnished balcony", "Shared pool", "Fibre internet", "Full kitchen", "Secure parking", "Near malls"],
    description: "Calm coastal styling, a pool downstairs and Bamburi Beach up the road — an easy, great-value base for North Coast exploring.",
  },
];
