export interface Tour {
  id: string;
  name: string;
  duration: string;
  pricePerPerson: string;
  image: string;
  category: "Safari" | "Marine" | "Culture" | "Adventure";
  highlights: string[];
  description: string;
}

export const TOURS: Tour[] = [
  {
    id: "T-01",
    name: "Wasini Island & Kisite Dolphin Dhow Safari",
    duration: "Full day (7:00 AM – 5:00 PM)",
    pricePerPerson: "KES 8,500",
    image: "/images/kisite-dhows.jpg",
    category: "Marine",
    highlights: ["Dolphin spotting at Kisite-Mpunguti", "Snorkelling on the reef", "Swahili seafood lunch on Wasini", "Traditional dhow sailing", "Hotel transfers included"],
    description: "The South Coast's signature day out. Sail a traditional dhow to the Kisite Marine Park, swim with dolphins and snorkel coral gardens, then feast on a Swahili seafood lunch on Wasini Island.",
  },
  {
    id: "T-02",
    name: "Tsavo East Red Elephant Day Safari",
    duration: "Full day (5:30 AM – 6:30 PM)",
    pricePerPerson: "KES 12,000",
    image: "/images/safari-elephants.jpg",
    category: "Safari",
    highlights: ["Famous red-dust elephants", "Lions, giraffes, zebras & more", "Aruba Dam game drive", "Lunch at a safari lodge", "Pop-up roof 4x4 with guide"],
    description: "From beach to bush in a single day. Watch Tsavo's legendary red elephants bathe in the Galana River and tick off the Big Five with an expert driver-guide — back at your hotel by dinner.",
  },
  {
    id: "T-03",
    name: "Shimba Hills & Sheldrick Falls Trek",
    duration: "Half or full day",
    pricePerPerson: "KES 6,500",
    image: "/images/shimba-falls.jpg",
    category: "Adventure",
    highlights: ["Coastal rainforest reserve", "Guided waterfall hike", "Sable antelope & elephants", "Natural plunge pool swim", "Picnic or lodge lunch"],
    description: "Just 45 minutes from Diani, trade sand for misty rainforest. Hike to the 25-metre Sheldrick Falls, swim in the plunge pool and spot rare sable antelope in Kenya's only coastal rainforest.",
  },
  {
    id: "T-04",
    name: "Mombasa Old Town & Fort Jesus Heritage Tour",
    duration: "Half day",
    pricePerPerson: "KES 4,000",
    image: "/images/fort-jesus.jpg",
    category: "Culture",
    highlights: ["UNESCO-listed Fort Jesus", "Old Town's carved Swahili doors", "Spice market tasting", "Likoni ferry experience", "Professional local guide"],
    description: "Walk 500 years of Swahili, Portuguese and Omani history. Explore Fort Jesus, wander Old Town's carved-door alleys and taste your way through the spice market.",
  },
  {
    id: "T-05",
    name: "Sunset Dhow Cruise — Indian Ocean",
    duration: "2.5 hours (late afternoon)",
    pricePerPerson: "KES 3,500",
    image: "/images/dhow-sunset.jpg",
    category: "Marine",
    highlights: ["Golden-hour sailing", "Swahili snacks & drinks", "Dolphin sightings common", "Live coastal breeze & music", "Romantic & group friendly"],
    description: "The coast at its most cinematic. Drift along the shoreline on a hand-built dhow as the sun melts into the Indian Ocean — snacks, drinks and salt-air magic included.",
  },
  {
    id: "T-06",
    name: "Snorkelling & Marine Park Adventure",
    duration: "Half day",
    pricePerPerson: "KES 5,500",
    image: "/images/snorkeling.jpg",
    category: "Marine",
    highlights: ["Coral garden snorkelling", "Sea turtles & tropical fish", "All gear provided", "Marine guide on board", "Sandbank swim stop"],
    description: "Float above rainbow coral gardens with turtles and tropical fish. Our marine guides know exactly where the ocean hides its best colours.",
  },
  {
    id: "T-07",
    name: "Beach Excursions & Water Sports",
    duration: "Flexible",
    pricePerPerson: "From KES 2,500",
    image: "/images/jetski.jpg",
    category: "Adventure",
    highlights: ["Jet-ski hire", "Glass-bottom boat trips", "Kite-surfing lessons", "Deep-sea fishing charters", "Banana boat & fun rides"],
    description: "Adrenaline on demand: jet-skis, kite-surfing, glass-bottom boats and deep-sea fishing — all arranged with licensed, safety-first operators.",
  },
  {
    id: "T-08",
    name: "Family Beach Day & Camel Rides",
    duration: "Half day",
    pricePerPerson: "KES 3,000",
    image: "/images/family-beach.jpg",
    category: "Adventure",
    highlights: ["Camel rides on the beach", "Sandcastle & games setup", "Beach picnic hamper", "Shaded loungers provided", "Perfect for kids"],
    description: "A ready-made perfect beach day for families: camel rides, games, a shaded picnic and our team handling every detail while you just enjoy.",
  },
];
