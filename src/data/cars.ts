export interface Car {
  id: string;
  name: string;
  category: string;
  seats: number;
  transmission: string;
  fuel: string;
  pricePerDay: string;
  chauffeurPerDay: string;
  image: string;
  features: string[];
  bestFor: string;
}

export const CARS: Car[] = [
  {
    id: "C-01",
    name: "Toyota Land Cruiser Prado",
    category: "Luxury 4x4 SUV",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: "KES 15,000",
    chauffeurPerDay: "KES 18,000",
    image: "/images/car-prado.jpg",
    features: ["Full-time 4WD", "Leather interior", "Climate control", "Bluetooth & USB", "Comprehensive insurance", "Unlimited coast mileage"],
    bestFor: "Family adventures, upcountry trips & executive travel",
  },
  {
    id: "C-02",
    name: "Toyota Harrier",
    category: "Executive SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol Hybrid",
    pricePerDay: "KES 8,000",
    chauffeurPerDay: "KES 11,000",
    image: "/images/car-harrier.jpg",
    features: ["Sleek executive styling", "Fuel-sipping hybrid", "Reverse camera", "Push-start", "Air-conditioned", "Comprehensive insurance"],
    bestFor: "Business trips, weddings & stylish coastal cruising",
  },
  {
    id: "C-03",
    name: "Toyota Noah",
    category: "Family Minivan",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: "KES 6,500",
    chauffeurPerDay: "KES 9,500",
    image: "/images/car-noah.jpg",
    features: ["Sliding doors", "Spacious 7-seater", "Fold-flat seats", "Great fuel economy", "Child seats on request", "Air-conditioned"],
    bestFor: "Family holidays, group outings & airport runs",
  },
  {
    id: "C-04",
    name: "Toyota Hiace Tour Van",
    category: "Group Van (with driver)",
    seats: 14,
    transmission: "Manual",
    fuel: "Diesel",
    pricePerDay: "KES 12,000",
    chauffeurPerDay: "Included",
    image: "/images/car-hiace.jpg",
    features: ["Professional driver included", "14 comfortable seats", "Luggage space", "PA system on request", "Air-conditioned", "Ideal for groups"],
    bestFor: "Corporate groups, church trips & tour transfers",
  },
  {
    id: "C-05",
    name: "Safari Land Cruiser 4x4",
    category: "Safari Vehicle (with driver-guide)",
    seats: 7,
    transmission: "Manual",
    fuel: "Diesel",
    pricePerDay: "KES 25,000",
    chauffeurPerDay: "Guide included",
    image: "/images/safari-cruiser.jpg",
    features: ["Pop-up game-viewing roof", "Experienced driver-guide", "Cooler box", "Binoculars provided", "Park-ready 4x4", "Radio communication"],
    bestFor: "Tsavo, Shimba Hills & all national park safaris",
  },
];

export const TRANSFERS = [
  { route: "Moi International Airport → Diani / Ukunda", price: "KES 3,500", note: "Meet & greet at arrivals, flight tracking included" },
  { route: "Mombasa SGR Terminus → Diani / South Coast", price: "KES 3,000", note: "Timed to your train — we wait if it's delayed" },
  { route: "Moi International Airport → Mombasa / Nyali", price: "KES 2,500", note: "24/7 availability, clean air-conditioned vehicles" },
  { route: "Diani → Mombasa Town / Ferry crossing", price: "KES 2,800", note: "Door-to-door, including Likoni ferry coordination" },
  { route: "Custom taxi & day-hire packages", price: "On request", note: "Hourly and full-day hire anywhere on the coast" },
];
