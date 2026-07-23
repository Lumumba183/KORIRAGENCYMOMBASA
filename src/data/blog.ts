export interface BlogBlock {
  type: "h2" | "p" | "ul" | "quote";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  cta: { heading: string; text: string; button: string };
  content: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "diani-beach-complete-guide-2026",
    title: "Diani Beach: The Complete 2026 Guide to Kenya's Premier Coastline",
    excerpt: "Voted Africa's best beach more than once, Diani is where powder-white sand meets a living coral reef. Here's how to plan the perfect trip — where to stay, what to do, and when to come.",
    category: "Travel Guide",
    date: "June 18, 2026",
    readTime: "7 min read",
    image: "/images/hero-diani.jpg",
    cta: {
      heading: "Ready to feel Diani's sand between your toes?",
      text: "Tell us your dates and budget — we'll match you with the perfect villa, hotel or apartment and arrange every transfer, tour and dinner reservation.",
      button: "Plan My Diani Trip on WhatsApp",
    },
    content: [
      { type: "p", text: "Twenty-five kilometres of blinding-white sand, water the colour of polished turquoise, and a fringe of palms that leans toward the Indian Ocean as if bowing to it — Diani Beach is not just Kenya's finest coastline; it has repeatedly been voted Africa's leading beach destination. Yet for all its fame, Diani still feels like a secret shared between friends." },
      { type: "h2", text: "Where Exactly Is Diani?" },
      { type: "p", text: "Diani sits on Kenya's South Coast in Kwale County, about 30 kilometres south of Mombasa island. Most visitors arrive via Moi International Airport (roughly 45 minutes away including the Likoni ferry crossing) or on the Madaraka Express SGR from Nairobi to the Mombasa Terminus, followed by a road transfer of about an hour and a half. Korir Agency runs scheduled pickups from both — your holiday starts the moment you land or step off the train." },
      { type: "h2", text: "When to Visit" },
      { type: "p", text: "Diani is a year-round destination, but the sweet spots are January to March and July to October — long dry days, calm seas and perfect visibility for snorkelling and diving. The short rains (November) and long rains (April–June) bring lower prices, lush scenery and far fewer crowds; showers rarely last all day." },
      { type: "h2", text: "Where to Stay" },
      { type: "ul", items: [
        "Beachfront villas — private pools, staff and direct beach access, ideal for families and groups (from around KES 30,000/night).",
        "Serviced apartments & Airbnb — hotel-style convenience with a local soul, from about KES 6,500/night.",
        "Boutique resorts & cottages — makuti-thatched charm, full board options and legendary Swahili hospitality.",
        "Long-stay rentals — escaping winter for a month? We negotiate monthly rates our clients love.",
      ] },
      { type: "h2", text: "What to Do (Beyond the Lounger)" },
      { type: "p", text: "Sail a traditional dhow to Wasini Island and swim with wild dolphins at Kisite-Mpunguti Marine Park. Trek through Shimba Hills rainforest to Sheldrick Falls. Take a day safari to the red elephants of Tsavo East. Kite-surf, jet-ski, dive the reef, or simply claim a shaded lounger with a fresh coconut in hand. Diani's magic is that all of this fits inside a single week." },
      { type: "quote", text: "Diani doesn't just meet expectations — it quietly resets them. Most of our clients book their next stay before they've even flown home." },
      { type: "h2", text: "Practical Tips" },
      { type: "ul", items: [
        "Currency: Kenyan Shilling (KES); cards widely accepted, M-Pesa everywhere.",
        "Getting around: tuk-tuks for short hops, private transfers for comfort — we arrange both.",
        "Health: drink bottled water, use reef-safe sunscreen, and pack light cotton clothing.",
        "Safety: Diani is relaxed and welcoming; standard travel sense applies, as anywhere.",
      ] },
      { type: "p", text: "The hardest part of Diani is leaving. The second hardest is choosing where to stay — and that's exactly what we're here for." },
    ],
  },
  {
    slug: "coastal-kenya-property-investment-2026",
    title: "Why Coastal Kenya Is East Africa's Smartest Property Investment in 2026",
    excerpt: "Tourism is surging, infrastructure is expanding, and beachfront land is finite. We break down the numbers and the neighbourhoods behind the South Coast property boom.",
    category: "Investment",
    date: "May 30, 2026",
    readTime: "8 min read",
    image: "/images/villa-ahana.jpg",
    cta: {
      heading: "Want the off-market list before everyone else?",
      text: "We carry exclusive beachfront villas, plots and resorts you won't find on any portal. Tell us your budget and we'll send you a curated shortlist within 24 hours.",
      button: "Get My Investment Shortlist",
    },
    content: [
      { type: "p", text: "Ask any seasoned Kenyan investor where they'd put money in 2026 and you'll hear the same two words with increasing frequency: South Coast. What was once a sleepy strip of fishing villages has become one of East Africa's most compelling property stories — and the data backs the hype." },
      { type: "h2", text: "The Demand Engine: Tourism" },
      { type: "p", text: "Kenya's coast is welcoming record visitor numbers, and Diani-Ukunda sits at the heart of it. Quality holiday rentals routinely achieve 70–85% annual occupancy, with nightly rates for staffed villas ranging from KES 30,000 to well over KES 100,000 in peak season. A well-bought villa isn't just a lifestyle asset — it's a business." },
      { type: "h2", text: "Infrastructure Is Catching Up — Fast" },
      { type: "p", text: "The Dongo Kundu bypass is easing the historic Likoni ferry bottleneck, the SGR has made Nairobi-to-coast travel a comfortable five-hour glide, and continued investment in roads, water and fibre is pulling both remote workers and retirees south. Every kilometre of new tarmac adds value to coastal land." },
      { type: "h2", text: "Where the Smart Money Is Looking" },
      { type: "ul", items: [
        "Diani & Galu — premium beachfront villas and boutique resorts; the blue-chip end of the market.",
        "Msambweni & Vanga — beachfront land at yesterday's prices with tomorrow's upside.",
        "Nyali & Shanzu — apartments with deep year-round rental demand from professionals and expatriates.",
        "Ukunda town — commercial spaces riding the growth of a rapidly urbanising hub.",
      ] },
      { type: "h2", text: "The Math That Matters" },
      { type: "p", text: "Beachfront is finite — there is only so much titled ocean-front land in Kenya, and most of it is already spoken for. Meanwhile demand compounds: international tourism, domestic middle-class growth and the remote-work wave all point the same direction. Historically, prime coastal plots have outpaced inflation comfortably, and gross holiday-rental yields of 8–12% are achievable with professional management." },
      { type: "quote", text: "Buy the view, rent the dream, hold the land. That's the coastal formula — and it has rewarded patient investors for decades." },
      { type: "h2", text: "How to Buy Safely" },
      { type: "ul", items: [
        "Always verify the title at the lands registry — we conduct full due diligence on every listing.",
        "Use a licensed advocate for conveyancing; we work alongside several trusted firms.",
        "Understand leasehold vs freehold and any restrictions on foreign ownership.",
        "Factor in management: a great property poorly managed underperforms — our property management team exists precisely for this.",
      ] },
      { type: "p", text: "The window of 'early' is closing, but it hasn't closed. The investors who act in 2026 will be the ones telling the story in 2036." },
    ],
  },
  {
    slug: "tsavo-day-safari-from-diani",
    title: "From Beach to Bush: How to Plan the Perfect Tsavo Day Safari from Diani",
    excerpt: "Red elephants at dawn, lions by lunch, and back in time for a beachside dinner. Here's exactly how a Tsavo East day safari from Diani works — and how to make every hour count.",
    category: "Safaris",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: "/images/safari-elephants.jpg",
    cta: {
      heading: "The red elephants are waiting.",
      text: "Our pop-up roof 4x4s and veteran driver-guides depart Diani daily. Message us your date and group size — we'll confirm your safari within the hour.",
      button: "Book My Tsavo Safari",
    },
    content: [
      { type: "p", text: "Here's a secret most beach holidays never discover: one of the world's greatest wildlife sanctuaries sits barely three hours from your Diani sun-lounger. Tsavo East — home of the famous red elephants — is the easiest 'real safari' in Kenya, and it fits, astonishingly, into a single day." },
      { type: "h2", text: "Why Tsavo East?" },
      { type: "p", text: "Tsavo's elephants coat themselves in the park's iron-rich red soil, turning entire herds the colour of terracotta — a sight found nowhere else on earth. The park is vast, uncrowded and spectacularly photogenic: lions draped on rocks, giraffes crossing golden plains, and over 500 bird species filling the air." },
      { type: "h2", text: "How the Day Unfolds" },
      { type: "ul", items: [
        "5:30 AM — pickup from your Diani hotel or villa, cool-box stocked, coffee on board.",
        "8:30 AM — enter through Bachuma Gate; morning game drive when predators are most active.",
        "12:30 PM — lunch at a safari lodge overlooking a waterhole (elephants often attend).",
        "2:00 PM — afternoon drive via Aruba Dam, a magnet for wildlife in the dry season.",
        "4:00 PM — begin the journey back, arriving Diani around 6:30 PM in time for dinner.",
      ] },
      { type: "h2", text: "What's Included with Korir Agency" },
      { type: "ul", items: [
        "Pop-up roof 4x4 Land Cruiser with a licensed driver-guide (not just a driver — a guide).",
        "Park entry fees, lunch, bottled water and hotel transfers — one price, no surprises.",
        "Binoculars on board and flexible pacing for photographers.",
      ] },
      { type: "h2", text: "Pro Tips" },
      { type: "ul", items: [
        "Wear neutral colours and layers — mornings are cool, midday is hot.",
        "Bring a hat, sunscreen and a camera with a zoom lens (200mm+ is ideal).",
        "Travel light; the vehicle carries everything else.",
        "Book ahead in high season — good guides get snapped up fast.",
      ] },
      { type: "quote", text: "Guests always ask if one day is enough. Then they see their first red elephant herd at sunrise — and stop asking." },
      { type: "p", text: "A beach holiday is wonderful. A beach holiday with a safari in the middle of it is the story you tell for the rest of your life." },
    ],
  },
  {
    slug: "sgr-transfers-nairobi-to-south-coast",
    title: "SGR Transfers Made Easy: Your Stress-Free Route from Nairobi to the South Coast",
    excerpt: "The Madaraka Express changed coastal travel forever — but the last 90 minutes to Diani still trips people up. Here's the complete playbook for a seamless door-to-door journey.",
    category: "Travel Tips",
    date: "April 22, 2026",
    readTime: "5 min read",
    image: "/images/sgr-train.jpg",
    cta: {
      heading: "Landing or arriving by SGR this week?",
      text: "Send us your train or flight number and your destination. A uniformed driver will be waiting at arrivals — on time, every time, day or night.",
      button: "Book My Transfer Now",
    },
    content: [
      { type: "p", text: "Ten years ago, getting from Nairobi to the South Coast meant a gruelling overnight bus or an expensive flight. Today, the Madaraka Express glides from Nairobi Terminus to Mombasa in about five comfortable hours — Wi-Fi, charging ports and views of Tsavo's wildlife included. It's one of Africa's great rail journeys. But there's one gap in the chain: the Mombasa SGR Terminus is on the mainland, and paradise is still 90 minutes further south." },
      { type: "h2", text: "The Last-Mile Problem" },
      { type: "p", text: "Trains arrive on schedule — crowds of touts arrive even faster. Negotiating a fair price with luggage, children or an evening arrival is nobody's idea of a holiday start. Worse, the Likoni ferry crossing can add unpredictable delays if your driver doesn't know the rhythms of the channel." },
      { type: "h2", text: "The Korir Agency Transfer Standard" },
      { type: "ul", items: [
        "We track your train in real time — delays don't leave you stranded; we simply adjust.",
        "Your driver waits at the arrivals area with a name board, a clean air-conditioned vehicle and cold water.",
        "Fixed, transparent pricing: Mombasa SGR Terminus to Diani/South Coast from KES 3,000 per vehicle.",
        "Child seats, extra luggage space and multi-vehicle group coordination on request.",
      ] },
      { type: "h2", text: "Flying Instead?" },
      { type: "p", text: "Moi International Airport sits even closer — 45 minutes to Diani including the ferry, from KES 3,500. The same standard applies: flight tracking, meet-and-greet, and a driver who knows every shortcut on the coast road." },
      { type: "h2", text: "Booking the Train Itself" },
      { type: "ul", items: [
        "Book early on the Kenya Railways portal or via M-Pesa — weekend and holiday trains sell out.",
        "First class offers wider seats and extra legroom for a modest premium.",
        "Keep your ID handy; it's checked at both ends.",
        "Sit on the right side southbound for the best Tsavo views.",
      ] },
      { type: "quote", text: "Our rule is simple: the holiday should begin at the arrivals gate, not at the villa gate." },
      { type: "p", text: "Five hours on one of Africa's finest trains, ninety minutes with a driver who treats you like family — that's how the South Coast should begin." },
    ],
  },
  {
    slug: "hidden-gems-south-coast-kenya",
    title: "5 Hidden Gems of Kenya's South Coast Most Tourists Never See",
    excerpt: "Beyond the famous beach lies a wilder, quieter coast — secret sandbanks, sacred forests and a waterfall in the rainforest. Here are five places our guides love most.",
    category: "Destinations",
    date: "March 28, 2026",
    readTime: "6 min read",
    image: "/images/dhow-sunset.jpg",
    cta: {
      heading: "Want a coast the guidebooks haven't found?",
      text: "Our local team builds custom excursions to all five gems — private dhows, forest guides and secret picnic spots included. Tell us what excites you and we'll design the day.",
      button: "Design My Custom Excursion",
    },
    content: [
      { type: "p", text: "Every traveller finds Diani's beach. Far fewer find the coast that locals keep for themselves — the places where the only footprints are yours and the tide charts matter more than the clock. Here are five of our favourites." },
      { type: "h2", text: "1. The Funzi Sandbank" },
      { type: "p", text: "At low tide, a blinding-white sandbank rises out of the Ramisi estuary near Funzi Island — a temporary island of pure sand surrounded by shallow turquoise water. We pack a cooler, sail out by dhow, and for two hours you own a piece of the ocean that didn't exist that morning." },
      { type: "h2", text: "2. Kaya Kinondo Sacred Forest" },
      { type: "p", text: "One of the last fragments of the ancient coastal forest and a UNESCO-recognized sacred site of the Digo people. Walking its hushed trails with a community guide — among 600-year-old trees and living tradition — is the most quietly powerful hour you can spend on the coast." },
      { type: "h2", text: "3. Sheldrick Falls, Shimba Hills" },
      { type: "p", text: "Forty-five minutes inland, coastal rainforest swallows the horizon. A guided trek through Shimba Hills — home to the rare sable antelope — ends at a 25-metre waterfall pouring into a natural plunge pool. Swim beneath it, and the beach will feel very far away in the best possible way." },
      { type: "h2", text: "4. Wasini's Coral Garden Boardwalk" },
      { type: "p", text: "Most visitors eat lunch on Wasini and leave. Stay an extra hour and walk the community-run boardwalk through the mangroves to the 'Coral Garden' — a surreal exposed-coral landscape at low tide, with the Shimoni channel glittering beyond." },
      { type: "h2", text: "5. Chale Island at Golden Hour" },
      { type: "p", text: "Tiny, tidal and impossibly photogenic, Chale Island glows at sunset. Even if you're not staying at its resort, a late-afternoon dhow cruise around the island — herons overhead, mangroves turning gold — is the South Coast's most romantic two hours." },
      { type: "quote", text: "The famous beach fills the photo album. These five places fill the memory." },
      { type: "p", text: "All five are within easy reach of Diani — and all five are trips our team runs privately, at your pace, away from the crowds. The coast you dream about is closer than you think." },
    ],
  },
];
