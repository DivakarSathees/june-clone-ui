export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: string;
  categorySlug: string;
  images: [string, string];
  isSale: boolean;
  isNew?: boolean;
  badge?: string;
  colors?: string[];
  description?: string;
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  subcategories?: { name: string; slug: string; image: string }[];
}

export const CATEGORIES: Category[] = [
  {
    name: "Home & Living",
    slug: "home-living",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=600",
    subcategories: [
      { name: "Artifacts", slug: "artifacts", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=400" },
      { name: "Table Lamps", slug: "table-lamps", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=400" },
      { name: "Photo Frames", slug: "photo-frames", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=400" },
      { name: "Wall Clocks", slug: "wall-clocks", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=400" },
    ],
  },
  {
    name: "Kitchen & Dining",
    slug: "kitchen-dining",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600",
    subcategories: [
      { name: "Ceramic Plates", slug: "ceramic-plates", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=400" },
      { name: "Glassware", slug: "glassware", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?auto=format&fit=crop&q=80&w=400" },
      { name: "Lunch Boxes", slug: "lunch-boxes", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400" },
    ],
  },
  {
    name: "Stationery",
    slug: "stationery",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=600",
    subcategories: [
      { name: "Dated Planners", slug: "dated-planners", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400" },
      { name: "Undated Planners", slug: "undated-planners", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400" },
      { name: "Wedding Planners", slug: "wedding-planners", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400" },
    ],
  },
  {
    name: "Eyewear",
    slug: "eyewear",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Personal Care",
    slug: "personal-care",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=600",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Table Light Bear Bedside Lamp Resin Crafts",
    slug: "bear-bedside-lamp",
    price: 1299,
    originalPrice: 1999,
    category: "Home & Living",
    categorySlug: "home-living",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    colors: ["Orange", "Green"],
    description: "A charming bear-shaped bedside lamp crafted from high-quality resin. Perfect for adding a playful touch to any bedroom or nursery. Features warm LED lighting and a durable finish.",
  },
  {
    id: 2,
    name: "Sports Lamp Soccer Original Shade",
    slug: "sports-lamp-soccer",
    price: 1899,
    originalPrice: 2999,
    category: "Home & Living",
    categorySlug: "home-living",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    colors: ["White", "Red"],
    description: "A unique sports-themed table lamp featuring a soccer ball design. Great for sports enthusiasts and kids' rooms.",
  },
  {
    id: 3,
    name: "Bohemia Ceramic Plates Set Of 6",
    slug: "bohemia-ceramic-plates",
    price: 2200,
    originalPrice: 2899,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Hand-painted Bohemia ceramic plates with intricate patterns. Set of 6 pieces, perfect for everyday dining or special occasions.",
  },
  {
    id: 4,
    name: "Pout Face Ceramic Table Lamp",
    slug: "pout-face-ceramic-lamp",
    price: 935,
    originalPrice: 1699,
    category: "Home & Living",
    categorySlug: "home-living",
    images: [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "An adorable ceramic table lamp with a quirky pout face design. Adds personality to any space.",
  },
  {
    id: 5,
    name: "2026 Dated Planner - Make Magic Happen",
    slug: "planner-make-magic",
    price: 1599,
    originalPrice: 2299,
    category: "Stationery",
    categorySlug: "stationery",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Plan your year with style. This beautifully designed dated planner helps you stay organized while keeping you inspired.",
  },
  {
    id: 6,
    name: "2026 Dated Planner - Never Stop Dreaming",
    slug: "planner-never-stop",
    price: 1599,
    originalPrice: 2299,
    category: "Stationery",
    categorySlug: "stationery",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Dream big and plan bigger. Features monthly and weekly layouts, goal trackers, and inspirational quotes.",
  },
  {
    id: 7,
    name: "Vintage Oversized Orange Tint Sunglass",
    slug: "vintage-orange-sunglass",
    price: 1299,
    originalPrice: 1899,
    category: "Eyewear",
    categorySlug: "eyewear",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Make a statement with these vintage-inspired oversized sunglasses featuring orange tinted lenses.",
  },
  {
    id: 8,
    name: "Flat Oversized Midnight Hue Sunglass",
    slug: "flat-midnight-sunglass",
    price: 1299,
    originalPrice: 2499,
    category: "Eyewear",
    categorySlug: "eyewear",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Sleek flat oversized sunglasses in a stunning midnight hue. UV400 protection.",
  },
  {
    id: 9,
    name: "Bubble Soywax Candle Blue",
    slug: "bubble-candle-blue",
    price: 399,
    originalPrice: 499,
    category: "Home & Living",
    categorySlug: "home-living",
    images: [
      "https://images.unsplash.com/photo-1602607511321-a67b4f411019?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "A delightful bubble-shaped soy wax candle in calming blue. Burns clean and fills your space with a subtle fragrance.",
  },
  {
    id: 10,
    name: "Midnight Prism Crystal Tall Glasses Set Of 2",
    slug: "midnight-prism-glasses",
    price: 899,
    originalPrice: 1099,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: [
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Elegant crystal tall glasses with a mesmerizing prism effect. Perfect for cocktails and special occasions.",
  },
  {
    id: 11,
    name: "WickerBase Insulated Lunch Bag Tote",
    slug: "wickerbase-lunch-bag",
    price: 899,
    originalPrice: 1499,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: [
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Stylish insulated lunch bag with a wicker-look base. Keeps food hot or cold for hours.",
  },
  {
    id: 12,
    name: "The Feel-Good Planner Box™",
    slug: "feel-good-planner-box",
    price: 1999,
    originalPrice: 2099,
    category: "Stationery",
    categorySlug: "stationery",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Everything you need to plan happier. Includes a dated planner, stickers, bookmarks, and more curated goodies.",
  },
  {
    id: 13,
    name: "Lotus Petals Soywax Candle Set Of 2",
    slug: "lotus-candle-set",
    price: 349,
    originalPrice: 499,
    category: "Home & Living",
    categorySlug: "home-living",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1602607511321-a67b4f411019?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Beautiful lotus-shaped soy wax candles. Set of 2, perfect for gifting or home decor.",
  },
  {
    id: 14,
    name: "DailyStack 3-Tier Insulated Lunch Box",
    slug: "dailystack-lunch-box",
    price: 2499,
    originalPrice: 2999,
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: [
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    colors: ["Cream", "Brown"],
    description: "3-tier insulated lunch box for the organized foodie. Leak-proof, microwave safe, and stylishly designed.",
  },
  {
    id: 15,
    name: "Oversized Flat & Square Ice Blue Sunglass",
    slug: "ice-blue-sunglass",
    price: 749,
    originalPrice: 1699,
    category: "Eyewear",
    categorySlug: "eyewear",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    badge: "Sale",
    description: "Cool ice blue flat square sunglasses. Oversized for maximum style impact.",
  },
  {
    id: 16,
    name: "Abstract Ceramic Vase Minimalist",
    slug: "abstract-ceramic-vase",
    price: 1450,
    originalPrice: 1999,
    category: "Home & Living",
    categorySlug: "home-living",
    images: [
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?auto=format&fit=crop&q=80&w=800",
    ],
    isSale: true,
    isNew: true,
    badge: "New",
    description: "A minimalist abstract ceramic vase that adds sophistication to any shelf or table.",
  },
];

export const TOP_CATEGORIES = [
  { name: "Artifacts", slug: "artifacts", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=600" },
  { name: "Lamps & Lighting", slug: "lamps-lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?auto=format&fit=crop&q=80&w=600" },
  { name: "Gadgets", slug: "gadgets", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600" },
  { name: "Photo Frames", slug: "photo-frames", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=600" },
];

export const PLANNER_CATEGORIES = [
  { name: "Undated Yearly Planners", slug: "undated-yearly-planners", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" },
  { name: "Baby Record Books", slug: "baby-record-books", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=600" },
  { name: "Wedding Planners", slug: "wedding-planners", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600" },
  { name: "Re-writable Planners", slug: "re-writable-planners", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600" },
];

export const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=2000",
    title: "Match Your Planner To Your Personality",
    cta: "Choose Your Planner",
    link: "/category/stationery",
  },
  {
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=2000",
    title: "Curated For The Modern Home",
    cta: "Shop Home & Living",
    link: "/category/home-living",
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=2000",
    title: "Elevate Your Dining Experience",
    cta: "Shop Kitchen & Dining",
    link: "/category/kitchen-dining",
  },
];
