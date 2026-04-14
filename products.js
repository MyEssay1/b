/* ============================================================
   PRODUCTS DATA
   ------------------------------------------------------------
   HOW TO USE:
   1. Find a product on Amazon
   2. Get your affiliate link from Amazon Associates dashboard
   3. Replace the "affiliateUrl" placeholder with your real link
   4. Replace the "image" URL with the Amazon product image URL
   5. Adjust name, price, and description as needed

   AFFILIATE LINK FORMAT:
   https://www.amazon.com/dp/PRODUCT_ID/?tag=YOUR-ASSOCIATE-TAG

   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Rattan Pendant Light",
    room: "living",
    roomLabel: "Living Room",
    price: "$48",
    description: "Warm boho glow for any corner. Works beautifully over a reading nook.",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 2,
    name: "Chunky Knit Throw",
    room: "bedroom",
    roomLabel: "Bedroom",
    price: "$62",
    description: "Handmade texture that layers beautifully on any sofa or bed.",
    badge: "Staff Pick",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 3,
    name: "Terracotta Planter Set",
    room: "living",
    roomLabel: "Living Room",
    price: "$34",
    description: "Set of 3 graduated pots. Perfect for succulents or trailing plants.",
    badge: null,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 4,
    name: "Linen Duvet Cover",
    room: "bedroom",
    roomLabel: "Bedroom",
    price: "$89",
    description: "Stone-washed linen in warm sand. Gets softer with every wash.",
    badge: "New",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 5,
    name: "Woven Seagrass Basket",
    room: "living",
    roomLabel: "Living Room",
    price: "$29",
    description: "Storage that doubles as décor. Holds blankets, toys, or plants.",
    badge: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 6,
    name: "Ceramic Table Lamp",
    room: "bedroom",
    roomLabel: "Bedroom",
    price: "$74",
    description: "Matte earth-tone ceramic with a linen shade. Warm evening light.",
    badge: "Staff Pick",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 7,
    name: "Vintage-Style Mirror",
    room: "entryway",
    roomLabel: "Entryway",
    price: "$55",
    description: "Arched wood frame mirror. Makes small spaces feel open and airy.",
    badge: null,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 8,
    name: "Bamboo Desk Organizer",
    room: "desk",
    roomLabel: "Desk & Study",
    price: "$26",
    description: "Keeps your workspace calm and clear. Holds pens, notes, and more.",
    badge: "New",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 1,
    name: "Light fixture",
    room: "living",
    roomLabel: "bedroom",
    price: "$48",
    description: "Warm boho glow for any corner. Works beautifully over a reading nook.",
    badge: "Best Seller",
    image: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  /* ---- BEDROOM EXTRAS ---- */
  {
    id: 9,
    name: "Macramé Wall Hanging",
    room: "bedroom",
    roomLabel: "Bedroom",
    price: "$38",
    description: "Handcrafted cotton rope art. Adds instant texture to bare walls.",
    badge: null,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 10,
    name: "Jute Area Rug 5×8",
    room: "living",
    roomLabel: "Living Room",
    price: "$120",
    description: "Natural jute weave. Grounds a seating area with earthy warmth.",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 11,
    name: "Bathroom Teak Tray",
    room: "bathroom",
    roomLabel: "Bathroom",
    price: "$32",
    description: "Water-resistant teak shelf tray. Elevates your bathtub instantly.",
    badge: null,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  },
  {
    id: 12,
    name: "Minimalist Wall Clock",
    room: "living",
    roomLabel: "Living Room",
    price: "$44",
    description: "Silent sweep mechanism. Clean lines in matte walnut and brass.",
    badge: null,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75",
    affiliateUrl: "https://www.amazon.com/?tag=YOUR-TAG-HERE"
  }
];

/* Room metadata for the room page */
const ROOMS = {
  living:    { label: "Living Room",     desc: "Cozy gathering spaces that feel intentional, not staged." },
  bedroom:   { label: "Bedroom",          desc: "Your sanctuary. Soft textures, warm light, total peace." },
  kitchen:   { label: "Kitchen & Dining", desc: "Small touches that make cooking and gathering feel special." },
  bathroom:  { label: "Bathroom",         desc: "Spa-like calm in even the tiniest apartment bathroom." },
  desk:      { label: "Desk & Study",     desc: "A workspace that actually makes you want to sit down." },
  entryway:  { label: "Entryway",         desc: "First impressions, warmly made." }
};
