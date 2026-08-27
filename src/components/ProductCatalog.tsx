import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  SlidersHorizontal,
  Sparkles,
  Shirt,
  Layers,
  Zap,
  ShoppingBag,
  RotateCcw,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory, QualityType } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  onOpenDetails: (product: Product, defaultQuality?: QualityType) => void;
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  selectedQualityTier: QualityType | 'all';
  onSelectQualityTier: (q: QualityType | 'all') => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenDetails,
  selectedCategory,
  onSelectCategory,
  selectedQualityTier,
  onSelectQualityTier,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  // Sports list extraction
  const allSports = useMemo(() => {
    const sportsSet = new Set<string>();
    PRODUCTS.forEach((p) => p.sports.forEach((s) => sportsSet.add(s)));
    return ['all', ...Array.from(sportsSet)];
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Sport match
      if (selectedSport !== 'all' && !product.sports.includes(selectedSport)) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesTagline = product.tagline.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesSports = product.sports.some((s) => s.toLowerCase().includes(q));
        if (!matchesName && !matchesTagline && !matchesDesc && !matchesSports) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      const priceA = selectedQualityTier === 'premium' ? a.premiumPrice : a.normalPrice;
      const priceB = selectedQualityTier === 'premium' ? b.premiumPrice : b.normalPrice;

      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedSport, searchQuery, sortBy, selectedQualityTier]);

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-tech uppercase tracking-widest text-[#00ff41] font-bold flex items-center gap-1.5 mb-2">
              <Zap className="w-3.5 h-3.5 fill-[#00ff41]" />
              <span>Full Performance Apparel Line</span>
            </span>
            <h2 className="font-sport text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide">
              EXPLORE <span className="text-[#00ff41]">VYRO COLLECTION</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mt-1">
              Select any sportswear piece and toggle between Normal (₹650) and Premium (₹800) quality.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jerseys, pants, sets..."
              className="w-full bg-[#121212] border border-white/10 focus:border-[#00ff41] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs & Quality Filter Toolbar */}
        <div className="space-y-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'jerseys', label: 'Sports Jerseys & Shirts' },
              { id: 'pants', label: 'Sports Pants & Shorts' },
              { id: 'sets', label: 'Full Sportswear Sets' },
            ].map((cat) => (
              <button
                key={cat.id}
                id={`cat-btn-${cat.id}`}
                onClick={() => onSelectCategory(cat.id as ProductCategory)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-tech transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#00ff41] text-black shadow-md shadow-[#00ff41]/20 font-black'
                    : 'bg-[#141414] text-neutral-300 border border-white/10 hover:bg-[#1f1f1f] hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Secondary Filter Bar (Quality tier toggle + Sport tags + Sort) */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-[#121212] border border-white/10">
            
            {/* Quality Tier Quick Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-tech uppercase text-neutral-400 font-bold">Default Tier:</span>
              <div className="flex items-center gap-1 bg-[#0a0a0a] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => onSelectQualityTier('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedQualityTier === 'all' ? 'bg-[#1f1f1f] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Both Tiers
                </button>
                <button
                  onClick={() => onSelectQualityTier('normal')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedQualityTier === 'normal' ? 'bg-[#1f1f1f] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Normal (₹650)
                </button>
                <button
                  onClick={() => onSelectQualityTier('premium')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                    selectedQualityTier === 'premium' ? 'bg-[#00ff41] text-black font-black' : 'text-[#00ff41] hover:text-[#33ff66]'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Premium (₹800)</span>
                </button>
              </div>
            </div>

            {/* Sports Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-xs font-tech uppercase text-neutral-400 font-bold whitespace-nowrap">Sport:</span>
              {allSports.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setSelectedSport(sport)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium uppercase font-tech whitespace-nowrap transition-colors ${
                    selectedSport === sport
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#0a0a0a] text-neutral-400 hover:text-neutral-200 border border-white/10'
                  }`}
                >
                  {sport === 'all' ? 'All Sports' : sport}
                </button>
              ))}
            </div>

            {/* Sort by Dropdown */}
            <div className="flex items-center gap-2 self-end lg:self-center">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#0a0a0a] border border-white/10 text-xs text-neutral-300 rounded-xl px-3 py-1.5 outline-none focus:border-[#00ff41]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High (₹650 → ₹800)</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>

          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 p-8 rounded-3xl bg-[#121212] border border-white/10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#1c1c1c] flex items-center justify-center mx-auto text-neutral-500">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              We couldn't find any products matching your filters. Try clearing your search query or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSport('all');
                onSelectCategory('all');
              }}
              className="px-6 py-2.5 rounded-xl bg-[#00ff41] text-black font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
                defaultQuality={selectedQualityTier === 'premium' ? 'premium' : 'normal'}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
