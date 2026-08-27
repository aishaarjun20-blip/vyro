export type QualityType = 'normal' | 'premium';

export type ProductCategory = 'all' | 'jerseys' | 'pants' | 'sets';

export interface ProductColor {
  name: string;
  hex: string;
  code?: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'jerseys' | 'pants' | 'sets';
  tagline: string;
  description: string;
  highlights?: string[];
  images: string[];
  normalPrice: number;
  premiumPrice: number;
  sizes: string[];
  colors: ProductColor[];
  sports: string[];
  badge?: string;
  isFeatured?: boolean;
  fabricSpecs: {
    normal: string;
    premium: string;
  };
  features?: {
    breathability: number; // 1-100
    durability: number;
    stretch: number;
    lightweight: number;
  };
}

export interface CartItem {
  id?: string; // unique item id in cart (combination of product + options)
  productId: string;
  name: string;
  category: string;
  image: string;
  quality: QualityType;
  size: string;
  color: string;
  customName?: string;
  customNumber?: string;
  unitPrice: number;
  quantity: number;
}

export interface CustomerOrderInfo {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  customNotes?: string;
}

export interface FilterState {
  category: ProductCategory;
  quality: QualityType | 'all';
  searchQuery: string;
  selectedSport: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'name';
}
