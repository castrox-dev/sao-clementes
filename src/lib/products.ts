export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice?: number;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  sku: string;
  featured: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  variations?: ProductVariation[];
}

export interface ProductVariation {
  name: string;
  options: string[];
}

export const categories = [
  { id: "camisas", name: "Camisas", icon: "👕", count: 12 },
  { id: "bone", name: "Bonés", icon: "🧢", count: 8 },
  { id: "mochilas", name: "Mochilas", icon: "🎒", count: 4 },
  { id: "canecas", name: "Canecas", icon: "☕", count: 6 },
  { id: "instrumentos", name: "Instrumentos", icon: "🥁", count: 5 },
  { id: "fantasias", name: "Fantasias", icon: "🎭", count: 15 },
  { id: "acessorios", name: "Acessórios", icon: "👟", count: 20 },
  { id: "chaveiros", name: "Chaveiros", icon: "📿", count: 8 },
  { id: "bandeiras", name: "Bandeiras", icon: "🏳", count: 3 },
  { id: "livros", name: "Livros", icon: "📖", count: 5 },
  { id: "exclusivos", name: "Exclusivos", icon: "🏆", count: 7 },
];

const PLACEHOLDER = "https://placehold.co/600x750/1A1A1A/FFD400?text=SC";

export const products: Product[] = [
  {
    id: 1,
    name: "Camisa Oficial São Clemente 2026",
    slug: "camisa-oficial-2026",
    description: "Camisa oficial do GRES São Clemente para o Carnaval 2026. Confeccionada em malha de alta qualidade, com estampa exclusiva e detalhes dourados. Perfeita para torcedores e amantes do samba.",
    price: 149.90,
    comparePrice: 199.90,
    category: "Camisas",
    image: PLACEHOLDER,
    images: [PLACEHOLDER, PLACEHOLDER, PLACEHOLDER],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    sku: "SC-CAM-0001",
    featured: true,
    isNew: true,
    isBestSeller: true,
    variations: [
      { name: "Tamanho", options: ["P", "M", "G", "GG", "XGG"] },
      { name: "Cor", options: ["Preto", "Branco", "Dourado"] },
    ],
  },
  {
    id: 2,
    name: "Boné São Clemente Edição Limitada",
    slug: "bone-edicao-limitada",
    description: "Boné premium com logo bordado da São Clemente. Edição limitada com detalhes em dourado. Ajuste regulável e aba curvada.",
    price: 89.90,
    category: "Bonés",
    image: PLACEHOLDER,
    images: [PLACEHOLDER, PLACEHOLDER],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    sku: "SC-BON-0001",
    featured: true,
    isBestSeller: true,
    variations: [{ name: "Cor", options: ["Preto", "Dourado", "Branco"] }],
  },
  {
    id: 3,
    name: "Fantasia Completa - Casal de Mestre Sala e Porta Bandeira",
    slug: "fantasia-casal-mestre-sala",
    description: "Fantasia inspirada no Casal de Mestre Sala e Porta Bandeira da São Clemente. Conjunto completo com adereços e detalhes em pedraria.",
    price: 599.90,
    comparePrice: 799.90,
    category: "Fantasias",
    image: PLACEHOLDER,
    images: [PLACEHOLDER, PLACEHOLDER],
    rating: 4.9,
    reviewCount: 45,
    inStock: true,
    sku: "SC-FAN-0001",
    featured: true,
    isNew: true,
    variations: [{ name: "Tamanho", options: ["M", "G", "GG"] }],
  },
  {
    id: 4,
    name: "Mochila São Clemente",
    slug: "mochila-sao-clemente",
    description: "Mochila oficial com compartimento para notebook, bolsos laterais e alças acolchoadas. Estampa exclusiva da escola.",
    price: 199.90,
    category: "Mochilas",
    image: PLACEHOLDER,
    images: [PLACEHOLDER],
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    sku: "SC-MOC-0001",
    featured: true,
  },
  {
    id: 5,
    name: "Caneca Esmaltada São Clemente",
    slug: "caneca-esmaltada",
    description: "Caneca esmaltada com logo da São Clemente. Ideal para o café de todo dia. Capacidade 300ml.",
    price: 49.90,
    category: "Canecas",
    image: PLACEHOLDER,
    images: [PLACEHOLDER],
    rating: 4.5,
    reviewCount: 112,
    inStock: true,
    sku: "SC-CAN-0001",
    featured: false,
  },
  {
    id: 6,
    name: "Chaveiro São Clemente Premium",
    slug: "chaveiro-premium",
    description: "Chaveiro metálico com logo da São Clemente em relevo. Acabamento premium em banho dourado.",
    price: 29.90,
    category: "Chaveiros",
    image: PLACEHOLDER,
    images: [PLACEHOLDER],
    rating: 4.4,
    reviewCount: 203,
    inStock: true,
    sku: "SC-CHA-0001",
    featured: false,
  },
  {
    id: 7,
    name: "Camisa Retrô São Clemente 1961",
    slug: "camisa-retro-1961",
    description: "Camisa retrô em homenagem ao ano de fundação da escola. Estampa vintage com o escudo original.",
    price: 169.90,
    category: "Camisas",
    image: PLACEHOLDER,
    images: [PLACEHOLDER],
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    sku: "SC-CAM-0002",
    featured: true,
    isNew: true,
    variations: [{ name: "Tamanho", options: ["P", "M", "G", "GG"] }],
  },
  {
    id: 8,
    name: "Bandeira São Clemente 2m",
    slug: "bandeira-sao-clemente",
    description: "Bandeira oficial da São Clemente em tecido de alta resistência. Tamanho 2m x 1.4m.",
    price: 79.90,
    category: "Bandeiras",
    image: PLACEHOLDER,
    images: [PLACEHOLDER],
    rating: 4.6,
    reviewCount: 34,
    inStock: true,
    sku: "SC-BAN-0001",
    featured: false,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const newProducts = products.filter((p) => p.isNew);
export const bestSellers = products.filter((p) => p.isBestSeller);
