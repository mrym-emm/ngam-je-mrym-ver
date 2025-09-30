// stucture of mock data
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
};

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
  },
];
