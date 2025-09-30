// level 1: community/category data (existing, but with category added)
// MARYAMS
export type ThreadData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  comments: number;
  views: number;
  upvotes: number;
  currentTokens: number;
  goalTokens: number;
  tags: string[];
  isPinned: boolean;
  isHot: boolean;
  timeAgo: string;
  contributions: number;
  category: string; // new: for url routing
};

// level 2: listing card data (for category pages)
// LUQMAN
export type ListingData = {
  id: string;
  title: string;
  description: string;
  price: string;
  seller: string;
  location: string;
  time: string;
  tags: string[];
  imageUrl: string;
  category: string; // which category this belongs to
  listingType: "for-sale" | "want-to-buy";
};

// level 3: detailed product data (for individual item pages)
// YUVA
export type ProductData = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  tags: string[];
  seller: {
    name: string;
    location: string;
    verified: boolean;
    timePosted: string;
  };
  views: number;
  forSale: boolean;
  protected: boolean;
  category: string; // which category this belongs to
  listingType: "for-sale" | "want-to-buy";
};

// your existing community data (level 1) - updated with category
export const MOCK_THREADS: ThreadData[] = [
  {
    id: 1,
    title: "Tech Gadgets & Electronics",
    description: "Latest smartphones, laptops, gaming gear and smart devices",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 245,
    views: 18500,
    upvotes: 892,
    currentTokens: 12400,
    goalTokens: 15000,
    tags: ["electronics", "gadgets", "trending"],
    isPinned: true,
    isHot: true,
    timeAgo: "30m ago",
    contributions: 4200,
    category: "electronics", // new
  },
  {
    id: 2,
    title: "Gaming & Esports",
    description:
      "Video games, consoles, PC gaming, esports gear and gaming accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 312,
    views: 22100,
    upvotes: 1205,
    currentTokens: 8900,
    goalTokens: 12000,
    tags: ["gaming", "esports", "console"],
    isPinned: false,
    isHot: true,
    timeAgo: "45m ago",
    contributions: 3800,
    category: "gaming", // new
  },
  {
    id: 3,
    title: "Fashion & Accessories",
    description: "Shoes, bags, jewelry, watches and style accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1650741562741-19e5b5f7ed09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 156,
    views: 9800,
    upvotes: 423,
    currentTokens: 3200,
    goalTokens: 8000,
    tags: ["fashion", "accessories", "style"],
    isPinned: false,
    isHot: true,
    timeAgo: "1h ago",
    contributions: 1850,
    category: "fashion", // new
  },
  {
    id: 4,
    title: "Home & Furniture",
    description: "Furniture, decor, appliances and home improvement items",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 89,
    views: 5600,
    upvotes: 234,
    currentTokens: 6500,
    goalTokens: 6500,
    tags: ["furniture", "home", "decor"],
    isPinned: true,
    isHot: false,
    timeAgo: "3h ago",
    contributions: 2100,
    category: "furniture", // new
  },
  {
    id: 5,
    title: "Books & Media",
    description: "Books and various educational content",
    imageUrl:
      "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 67,
    views: 3400,
    upvotes: 178,
    currentTokens: 1800,
    goalTokens: 5000,
    tags: ["books", "media", "education"],
    isPinned: false,
    isHot: false,
    timeAgo: "5h ago",
    contributions: 920,
    category: "books", // new
  },
  {
    id: 6,
    title: "Sports & Fitness",
    description:
      "Exercise equipment, sportswear, outdoor gear and wellness products",
    imageUrl:
      "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 134,
    views: 7200,
    upvotes: 356,
    currentTokens: 4100,
    goalTokens: 10000,
    tags: ["sports", "fitness", "wellness"],
    isPinned: false,
    isHot: true,
    timeAgo: "2h ago",
    contributions: 1650,
    category: "sport", // new
  },
  {
    id: 7,
    title: "Tech Gadgets & Electronics duplicate",
    description: "Latest smartphones, laptops, gaming gear and smart devices",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 245,
    views: 18500,
    upvotes: 892,
    currentTokens: 12400,
    goalTokens: 15000,
    tags: ["electronics", "gadgets", "trending"],
    isPinned: true,
    isHot: true,
    timeAgo: "30m ago",
    contributions: 4200,
    category: "fashion", // new
  },
  {
    id: 8,
    title: "Gaming & Esports duplicate",
    description:
      "Video games, consoles, PC gaming, esports gear and gaming accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 312,
    views: 22100,
    upvotes: 1205,
    currentTokens: 8900,
    goalTokens: 12000,
    tags: ["gaming", "esports", "console"],
    isPinned: false,
    isHot: true,
    timeAgo: "45m ago",
    contributions: 3800,
    category: "fashion", // new
  },
  {
    id: 9,
    title: "Fashion & Accessories duplicate",
    description: "Shoes, bags, jewelry, watches and style accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1650741562741-19e5b5f7ed09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 156,
    views: 9800,
    upvotes: 423,
    currentTokens: 3200,
    goalTokens: 8000,
    tags: ["fashion", "accessories", "style"],
    isPinned: false,
    isHot: true,
    timeAgo: "1h ago",
    contributions: 1850,
    category: "gaming", // new
  },
  {
    id: 10,
    title: "Home & Furniture duplicate",
    description: "Furniture, decor, appliances and home improvement items",
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 89,
    views: 5600,
    upvotes: 234,
    currentTokens: 6500,
    goalTokens: 6500,
    tags: ["furniture", "home", "decor"],
    isPinned: true,
    isHot: false,
    timeAgo: "3h ago",
    contributions: 2100,
    category: "furniture", // new
  },
  {
    id: 11,
    title: "Books & Media duplicate",
    description: "Books and various educational content",
    imageUrl:
      "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 67,
    views: 3400,
    upvotes: 178,
    currentTokens: 1800,
    goalTokens: 5000,
    tags: ["books", "media", "education"],
    isPinned: false,
    isHot: false,
    timeAgo: "5h ago",
    contributions: 920,
    category: "books", // new
  },
  {
    id: 12,
    title: "Sports & Fitness duplicate",
    description:
      "Exercise equipment, sportswear, outdoor gear and wellness products",
    imageUrl:
      "https://images.unsplash.com/photo-1591311630200-ffa9120a540f?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: 134,
    views: 7200,
    upvotes: 356,
    currentTokens: 4100,
    goalTokens: 10000,
    tags: ["sports", "fitness", "wellness"],
    isPinned: false,
    isHot: true,
    timeAgo: "2h ago",
    contributions: 1650,
    category: "sport", // new
  },

  // ... add category to your other threads
];

// level 2: listing cards for category pages
export const MOCK_LISTINGS: ListingData[] = [
  // --- ELECTRONICS (Category: electronics) ---

  {
    id: "elec-001",
    title: "Gaming PC Setup - RTX 4070",
    description:
      'Complete gaming setup with RTX 4070, 32GB RAM, and 27" 144Hz monitor.',
    price: "RM 3,500.00",
    seller: "GamerGirl2024",
    location: "Kuala Lumpur",
    time: "1 hour ago",
    tags: ["gaming", "rtx-4070", "complete-setup"],
    imageUrl:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    category: "electronics",
    listingType: "for-sale", // FS
  },
  {
    id: "elec-002",
    title: "Looking to Buy: Latest iPhone 15 Pro Max",
    description:
      "Seeking a brand new or lightly used iPhone 15 Pro Max, 256GB. Budget: RM 4,500.",
    price: "RM 4,500.00 (Budget)",
    seller: "TechHunter",
    location: "Petaling Jaya",
    time: "2 hours ago",
    tags: ["iphone", "apple", "buy-request"],
    imageUrl:
      "https://images.unsplash.com/photo-1695427189912-70b15af87e81?auto=format&fit=crop&w=800&q=80",
    category: "electronics",
    listingType: "want-to-buy", // WTB
  },
  {
    id: "elec-003",
    title: "Sony WH-1000XM4 Noise Cancelling Headphones",
    description:
      "Excellent condition, comes with original box and accessories. Used for 6 months.",
    price: "RM 650.00",
    seller: "AudioPhile",
    location: "Subang Jaya",
    time: "5 hours ago",
    tags: ["sony", "headphones", "audio"],
    imageUrl:
      "https://images.unsplash.com/photo-1583341617260-eb502c349889?auto=format&fit=crop&w=800&q=80",
    category: "electronics",
    listingType: "for-sale", // FS
  },

  // --- FASHION (Category: fashion) ---

  {
    id: "fash-001",
    title: "Nike Air Max 270 (Size 9)",
    description:
      "Brand new Nike Air Max 270 in black/white colorway. Never worn.",
    price: "RM 450.00",
    seller: "SneakerHead99",
    location: "Shah Alam",
    time: "30 minutes ago",
    tags: ["nike", "air-max", "sneakers"],
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    category: "fashion",
    listingType: "for-sale", // FS
  },
  {
    id: "fash-002",
    title: "Want to Buy: Vintage Leather Jacket (Size L)",
    description:
      "Seeking a genuine, distressed brown leather motorcycle jacket. Must be size L.",
    price: "RM 800.00 (Budget)",
    seller: "RockerStyle",
    location: "Georgetown",
    time: "1 day ago",
    tags: ["vintage", "leather", "jacket"],
    imageUrl:
      "https://images.unsplash.com/photo-1521577352984-38a3d548398e?auto=format&fit=crop&w=800&q=80",
    category: "fashion",
    listingType: "want-to-buy", // WTB
  },
  {
    id: "fash-003",
    title: "Tissot Chronograph Watch",
    description:
      "Swiss-made chronograph. Stainless steel with black leather strap. Excellent condition.",
    price: "RM 1,800.00",
    seller: "TimePieceGuy",
    location: "Johor Bahru",
    time: "4 hours ago",
    tags: ["watch", "tissot", "luxury"],
    imageUrl:
      "https://images.unsplash.com/photo-1609117366938-16e91f112e4b?auto=format&fit=crop&w=800&q=80",
    category: "fashion",
    listingType: "for-sale", // FS
  },

  // --- GAMING (Category: gaming) ---

  {
    id: "game-001",
    title: "Nintendo Switch OLED (White)",
    description:
      "Barely used console with all original accessories and one game (Zelda).",
    price: "RM 1,250.00",
    seller: "ConsoleSeller",
    location: "Klang",
    time: "45 minutes ago",
    tags: ["nintendo", "switch", "oled"],
    imageUrl:
      "https://images.unsplash.com/photo-1631407025816-773a43657ff2?auto=format&fit=crop&w=800&q=80",
    category: "gaming",
    listingType: "for-sale", // FS
  },
  {
    id: "game-002",
    title: "Selling: PS5 DualSense Controllers (Pair)",
    description:
      "Two controllers, one white, one midnight black. Mint condition.",
    price: "RM 380.00",
    seller: "AccessoryMaster",
    location: "Bayan Lepas",
    time: "2 hours ago",
    tags: ["ps5", "dualsense", "controller"],
    imageUrl:
      "https://images.unsplash.com/photo-1621570776856-bb6b033d52d9?auto=format&fit=crop&w=800&q=80",
    category: "gaming",
    listingType: "for-sale", // FS
  },
  {
    id: "game-003",
    title: "Looking for: Used Valve Steam Deck (512GB)",
    description:
      "Seeking a 512GB Steam Deck model. Willing to meet up in KL area for trade.",
    price: "RM 2,000.00 (Budget)",
    seller: "PCGamer23",
    location: "Kuala Lumpur",
    time: "6 hours ago",
    tags: ["steam-deck", "pc-gaming", "portable"],
    imageUrl:
      "https://images.unsplash.com/photo-1662998342200-a59e9a449d0e?auto=format&fit=crop&w=800&q=80",
    category: "gaming",
    listingType: "want-to-buy", // WTB
  },
  // --- FURNITURE (Category: furniture) ---

  {
    id: "furn-001",
    title: "Minimalist Scandinavian 4-Seater Sofa",
    description:
      "Light grey fabric sofa, perfect condition, selling due to relocation.",
    price: "RM 1,800.00",
    seller: "HomeStylist",
    location: "Kuala Lumpur",
    time: "1 day ago",
    tags: ["sofa", "minimalist", "scandinavian"],
    imageUrl:
      "https://images.unsplash.com/photo-1595460505199-a86847844059?auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    listingType: "for-sale", // FS
  },
  {
    id: "furn-002",
    title: "Looking to Buy: Vintage Wooden Study Desk",
    description:
      "Seeking a solid wood antique or vintage study desk, must have drawers.",
    price: "RM 500.00 (Budget)",
    seller: "AntiqueCollector",
    location: "Ipoh",
    time: "3 days ago",
    tags: ["desk", "vintage", "study"],
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-972412e2f693?auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    listingType: "want-to-buy", // WTB
  },
  {
    id: "furn-003",
    title: "IKEA Billy Bookcase (White, 5 units)",
    description:
      "Five standard white Billy bookcases. Selling as a set only. Used for 1 year.",
    price: "RM 400.00",
    seller: "BookLoverKL",
    location: "Shah Alam",
    time: "8 hours ago",
    tags: ["ikea", "bookcase", "storage"],
    imageUrl:
      "https://images.unsplash.com/photo-1558299719-e93297a796b4?auto=format&fit=crop&w=800&q=80",
    category: "furniture",
    listingType: "for-sale", // FS
  },

  // --- BOOKS (Category: books) ---

  {
    id: "book-001",
    title: "The Lord of the Rings Trilogy (Hardcover)",
    description: "Collector's edition hardcover set. Like new condition.",
    price: "RM 150.00",
    seller: "FantasyReader",
    location: "Johor Bahru",
    time: "2 hours ago",
    tags: ["fantasy", "fiction", "collector"],
    imageUrl:
      "https://images.unsplash.com/photo-1521587765099-28c92b9b1e02?auto=format&fit=crop&w=800&q=80",
    category: "books",
    listingType: "for-sale", // FS
  },
  {
    id: "book-002",
    title: "Selling: Used University Textbooks (Finance/Eco)",
    description:
      "Assorted university textbooks for Finance and Economics degrees. Discount for bulk buy.",
    price: "RM 80.00 (per book)",
    seller: "GradStudent",
    location: "Petaling Jaya",
    time: "1 day ago",
    tags: ["textbook", "finance", "education"],
    imageUrl:
      "https://images.unsplash.com/photo-1521587765099-28c92b9b1e02?auto=format&fit=crop&w=800&q=80",
    category: "books",
    listingType: "for-sale", // FS
  },
  {
    id: "book-003",
    title: "WTB: Rare First Edition Comic Books",
    description:
      "Looking to buy rare Malaysian or Asian comic books, first editions preferred.",
    price: "Negotiable",
    seller: "ComicFanatic",
    location: "Online",
    time: "5 days ago",
    tags: ["comic", "rare", "first-edition"],
    imageUrl:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a713?auto=format&fit=crop&w=800&q=80",
    category: "books",
    listingType: "want-to-buy", // WTB
  },

  // --- SPORT (Category: sport) ---

  {
    id: "sport-001",
    title: "Used Road Bike - Polygon Strattos S5 (Size 52)",
    description:
      "Good condition, regularly maintained. Perfect for beginner to intermediate riders.",
    price: "RM 2,200.00",
    seller: "BikeLoverMY",
    location: "Puchong",
    time: "1 hour ago",
    tags: ["road-bike", "cycling", "fitness"],
    imageUrl:
      "https://images.unsplash.com/photo-1571407914717-386d4e511d7e?auto=format&fit=crop&w=800&q=80",
    category: "sport",
    listingType: "for-sale", // FS
  },
  {
    id: "sport-002",
    title: "Looking for: Adjustable Dumbbell Set (50kg)",
    description:
      "Seeking a space-saving, adjustable dumbbell set (up to 25kg per hand). Must be good quality.",
    price: "RM 600.00 (Budget)",
    seller: "HomeGymGuy",
    location: "Selangor",
    time: "7 hours ago",
    tags: ["dumbbell", "gym", "home-fitness"],
    imageUrl:
      "https://images.unsplash.com/photo-1608240409893-68d2b2707b66?auto=format&fit=crop&w=800&q=80",
    category: "sport",
    listingType: "want-to-buy", // WTB
  },
  {
    id: "sport-003",
    title: "Professional Yonex Badminton Rackets (Pair)",
    description:
      "Two high-end Yonex rackets, recently re-strung. Selling as a pair.",
    price: "RM 480.00",
    seller: "BadmintonPro",
    location: "Penang",
    time: "3 days ago",
    tags: ["badminton", "yonex", "racket"],
    imageUrl:
      "https://images.unsplash.com/photo-1616763428987-a065f299d45a?auto=format&fit=crop&w=800&q=80",
    category: "sport",
    listingType: "for-sale", // FS
  },
];

// level 3 data: detailed products ()
export const MOCK_PRODUCTS: ProductData[] = [
  // --- ELECTRONICS ---
  {
    id: "elec-001",
    title: "Gaming PC Setup",
    subtitle: "RTX 4070, 32GB RAM",
    price: 3500.0,
    currency: "RM",
    description:
      'Complete gaming setup with RTX 4070, 32GB RAM, and 27" 144Hz monitor. Perfect for gaming and streaming. Includes RGB lighting and custom cooling system.',
    images: [
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["gaming", "rtx-4070", "complete-setup", "like-new"],
    seller: {
      name: "GamerGirl2024",
      location: "Sungai Besi, Kuala Lumpur",
      verified: true,
      timePosted: "1 hour ago",
    },
    views: 234,
    forSale: true,
    protected: true,
    category: "electronics",
    listingType: "for-sale",
  },
  {
    id: "elec-002",
    title: "iPhone 15 Pro Max",
    subtitle: "BUY REQUEST: 256GB",
    price: 4500.0,
    currency: "RM", // This is the BUYER's budget
    description:
      "Looking to buy a brand new or lightly used iPhone 15 Pro Max, 256GB. Must be unlocked and in mint condition. Flexible on color. Serious sellers only.",
    images: [
      "https://images.unsplash.com/photo-1695427189912-70b15af87e81?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1678252277636-f08dd22b8265?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["iphone", "apple", "buy-request", "new"],
    seller: {
      name: "TechHunter",
      location: "Petaling Jaya, Selangor",
      verified: false,
      timePosted: "2 hours ago",
    },
    views: 88,
    forSale: false, // Key indicator: this is WTB
    protected: false,
    category: "electronics",
    listingType: "want-to-buy",
  },
  {
    id: "elec-003",
    title: "Sony WH-1000XM4",
    subtitle: "Noise Cancelling Headphones",
    price: 650.0,
    currency: "RM",
    description:
      "Excellent condition, comes with original box, hard case, and accessories. Superb battery life. Only selling because of upgrade to XM5.",
    images: [
      "https://images.unsplash.com/photo-1583341617260-eb502c349889?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["sony", "headphones", "audio", "xm4"],
    seller: {
      name: "AudioPhile",
      location: "Subang Jaya, Selangor",
      verified: true,
      timePosted: "5 hours ago",
    },
    views: 112,
    forSale: true,
    protected: true,
    category: "electronics",
    listingType: "for-sale",
  },

  // --- FASHION ---
  {
    id: "fash-001",
    title: "Nike Air Max 270",
    subtitle: "Black/White, Size 9 US",
    price: 450.0,
    currency: "RM",
    description:
      "Brand new, never worn. Selling because the size is slightly too small for me. 100% authentic with receipt available upon request.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298828-590d635c03f4?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["nike", "air-max", "sneakers", "new"],
    seller: {
      name: "SneakerHead99",
      location: "Shah Alam, Selangor",
      verified: true,
      timePosted: "30 minutes ago",
    },
    views: 56,
    forSale: true,
    protected: true,
    category: "fashion",
    listingType: "for-sale",
  },
  {
    id: "fash-002",
    title: "Vintage Leather Jacket",
    subtitle: "BUY REQUEST: Size L",
    price: 800.0,
    currency: "RM",
    description:
      "Urgently looking for a genuine, distressed brown leather motorcycle jacket. Preferably well-maintained and from the 80s/90s era. Willing to negotiate price for the right piece.",
    images: [
      "https://images.unsplash.com/photo-1521577352984-38a3d548398e?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["vintage", "leather", "jacket", "motorcycle"],
    seller: {
      name: "RockerStyle",
      location: "Georgetown, Penang",
      verified: true,
      timePosted: "1 day ago",
    },
    views: 35,
    forSale: false, // Key indicator: WTB
    protected: false,
    category: "fashion",
    listingType: "want-to-buy",
  },
  {
    id: "fash-003",
    title: "Tissot Chronograph Watch",
    subtitle: "Stainless Steel, Black Leather",
    price: 1800.0,
    currency: "RM",
    description:
      "Elegant Swiss-made chronograph. Worn only a handful of times for events. Comes with original box and papers. No scratches on the crystal.",
    images: [
      "https://images.unsplash.com/photo-1609117366938-16e91f112e4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e53006248a?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["watch", "tissot", "luxury", "swiss"],
    seller: {
      name: "TimePieceGuy",
      location: "Johor Bahru, Johor",
      verified: true,
      timePosted: "4 hours ago",
    },
    views: 92,
    forSale: true,
    protected: true,
    category: "fashion",
    listingType: "for-sale",
  },

  // --- GAMING ---
  {
    id: "game-001",
    title: "Nintendo Switch OLED",
    subtitle: "White Model with Zelda Game",
    price: 1250.0,
    currency: "RM",
    description:
      "Barely used console with all original accessories. Screen protector applied since day one. Includes 'The Legend of Zelda: Tears of the Kingdom'.",
    images: [
      "https://images.unsplash.com/photo-1631407025816-773a43657ff2?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["nintendo", "switch", "oled", "console"],
    seller: {
      name: "ConsoleSeller",
      location: "Klang, Selangor",
      verified: true,
      timePosted: "45 minutes ago",
    },
    views: 155,
    forSale: true,
    protected: true,
    category: "gaming",
    listingType: "for-sale",
  },
  {
    id: "game-002",
    title: "PS5 DualSense Controllers",
    subtitle: "White and Midnight Black Pair",
    price: 380.0,
    currency: "RM",
    description:
      "Selling two official PS5 DualSense controllers. Both are in mint, working condition. No drift issues. Battery life is excellent.",
    images: [
      "https://images.unsplash.com/photo-1621570776856-bb6b033d52d9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628105574311-209930f7893c?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["ps5", "dualsense", "controller", "accessories"],
    seller: {
      name: "AccessoryMaster",
      location: "Bayan Lepas, Penang",
      verified: true,
      timePosted: "2 hours ago",
    },
    views: 70,
    forSale: true,
    protected: true,
    category: "gaming",
    listingType: "for-sale",
  },
  {
    id: "game-003",
    title: "Valve Steam Deck",
    subtitle: "WANT TO BUY: 512GB Model",
    price: 2000.0,
    currency: "RM",
    description:
      "Looking for a well-maintained Valve Steam Deck, preferably the 512GB version. Must come with original case and charger. Willing to pay cash upon inspection in KL.",
    images: [
      "https://images.unsplash.com/photo-1662998342200-a59e9a449d0e?auto=format&fit=crop&w=800&q=80",
    ],
    tags: ["steam-deck", "pc-gaming", "portable", "buy-request"],
    seller: {
      name: "PCGamer23",
      location: "Kuala Lumpur, Federal Territory",
      verified: false,
      timePosted: "6 hours ago",
    },
    views: 45,
    forSale: false, // Key indicator: WTB
    protected: false,
    category: "gaming",
    listingType: "want-to-buy",
  },
];

// helper functions
export function getListingsByCategory(
  category: string,
  listingType?: "for-sale" | "want-to-buy"
): ListingData[] {
  let filtered = MOCK_LISTINGS.filter(
    (listing) => listing.category === category
  );

  if (listingType) {
    filtered = filtered.filter(
      (listing) => listing.listingType === listingType
    );
  }

  return filtered;
}
