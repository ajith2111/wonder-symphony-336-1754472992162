export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Evening Gown",
    description: "Luxurious silk gown with elegant draping, perfect for upscale events.",
    price: 1450,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    category: "Women",
  },
  {
    id: "2",
    name: "Tailored Wool Blazer",
    description: "Handcrafted Italian wool blazer for a distinguished, modern look.",
    price: 980,
    image: "https://images.unsplash.com/photo-1525563665632-1e85aab2683d?auto=format&fit=crop&w=800&q=80",
    category: "Men",
  },
  {
    id: "3",
    name: "Cashmere Turtleneck Sweater",
    description: "Superfine Mongolian cashmere, soft and warm for the discerning customer.",
    price: 620,
    image: "https://images.unsplash.com/photo-1469398715555-76331a00a4a7?auto=format&fit=crop&w=800&q=80",
    category: "Women",
  },
  {
    id: "4",
    name: "Classic Trench Coat",
    description: "Elegant, water-repellent trench coat for all-weather sophistication.",
    price: 1100,
    image: "https://images.unsplash.com/photo-1503342452485-86a096e80b54?auto=format&fit=crop&w=800&q=80",
    category: "Men",
  },
  {
    id: "5",
    name: "Embellished Evening Dress",
    description: "Stunning evening dress with hand-embroidered crystal details.",
    price: 2000,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    category: "Women",
  },
  {
    id: "6",
    name: "Velvet Blazer",
    description: "Rich velvet blazer with a tailored fit for formal occasions.",
    price: 1150,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    category: "Men",
  },
];