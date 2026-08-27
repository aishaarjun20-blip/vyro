import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Layers, 
  Sparkles, 
  Shirt, 
  Boxes, 
  Zap, 
  ShieldCheck, 
  Info,
  RotateCcw,
  LayoutGrid,
  Grid3X3,
  List,
  MessageCircle,
  X
} from 'lucide-react';
import { Product, ProductCategory, QualityType } from '../types';
import { PRODUCTS, OWNER_WHATSAPP_NUMBER } from '../data/products';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';
import { ProductCard } from '../components/ProductCard';
import { QualityComparison } from '../components/QualityComparison';

interface ProductsPageProps {
  onOpenDetails: (product: Product, defaultQuality?: QualityType) => void;
  initialCategory?: ProductCategory;
  initialQualityTier?: QualityType | 'all';
  initialSubsection?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenDetails,
  initialCategory = 'all',
  initialQualityTier = 'all',
}) => {
  // Subsection / Filter States
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [selectedQualityTier, setSelectedQualityTier] = useState<QualityType | 'all'>(initialQualityTier);
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [showFabricDrawer, setShowFabricDrawer] = useState<boolean>(false);
  
  // Layout density mode: 'comfortable' | 'compact' | 'list'
  const [cardLayout, setCardLayout] = useState<'comfortable' | 'compact' | 'list'>('comfortable');

  // Sports list
  const SPORTS_SUBSECTIONS = [
    { id: 'all', label: 'All Sports' },
    { id: 'football', label: 'Football / Turf' },
    { id: 'cricket', label: 'Cricket' },
    { id: 'gym', label: 'Gym & Training' },
    { id: 'running', label: 'Running & Athletics' },
    { id: 'esports', label: 'Esports & Gaming' },
  ];

  // Category Subsections Definition
  const CATEGORY_SUBSECTIONS = [
    {
      id: 'all' as ProductCategory,
      label: 'All Products',
      icon: Boxes,
      count: PRODUCTS.length,
      description: 'Complete athletic line (Jerseys, Pants & Sets)',
    },
    {
      id: 'jerseys' as ProductCategory,
      label: 'Jerseys & Shirts',
      icon: Shirt,
      count: PRODUCTS.filter((p) => p.category === 'jerseys').length,
      description: 'Moisture-wicking football, cricket, and gym performance tees',
    },
    {
      id: 'pants' as ProductCategory,
      label: 'Sports Pants & Joggers',
      icon: Layers,
      count: PRODUCTS.filter((p) => p.category === 'pants').length,
      description: 'Ergonomic track bottoms and training joggers with kinetic stretch',
    },
    {
      id: 'sets' as ProductCategory,
      label: 'Full Sportswear Sets',
      icon: Sparkles,
      count: PRODUCTS.filter((p) => p.category === 'sets').length,
      description: 'Coordinated 2-piece kits (Shirt + Pants)',
    },
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // 2. Sport filter
      if (selectedSport !== 'all') {
        const hasSport = product.sports.some((s) =>
          s.toLowerCase().includes(selectedSport.toLowerCase())
        );
        if (!hasSport) return false;
      }

      // 3. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchTagline = product.tagline.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchSports = product.sports.some((s) => s.toLowerCase().includes(query));
        if (!matchName && !matchTagline && !matchDesc && !matchSports) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const priceA = selectedQualityTier === 'premium' ? a.premiumPrice : a.normalPrice;
        const priceB = selectedQualityTier === 'premium' ? b.premiumPrice : b.normalPrice;
        return priceA - priceB;
      }
      if (sortBy === 'price-desc') {
        const priceA = selectedQualityTier === 'premium' ? a.premiumPrice : a.normalPrice;
        const priceB = selectedQualityTier === 'premium' ? b.premiumPrice : b.normalPrice;
        return priceB - priceA;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      // 'featured' default
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedQualityTier, selectedSport, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedQualityTier('all');
    setSelectedSport('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedQualityTier !== 'all' ||
    selectedSport !== 'all' ||
    searchQuery !== '';

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 pb-20">
      
      {/* Page Header */}
      <section className="relative py-8 sm:py-12 lg:py-16 border-b border-white/10 bg-gradient-to-b from-[#121212] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00ff41]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/30 text-xs font-bold font-tech uppercase tracking-widest text-[#00ff41]">
                <Zap className="w-3.5 h-3.5 fill-[#00ff41]" />
                <span>The Official VYRO Collection</span>
              </div>
              <h1 className="font-sport text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
                SPORTSWEAR & <span className="text-[#00ff41]">APPAREL</span>
              </h1>
              <p className="text-neutral-300 text-xs sm:text-sm max-w-xl font-outfit">
                Explore high-performance match jerseys, athletic track bottoms, and full uniform sets. 
                We also work on 100% bespoke personal customisation for individual athletes and squads.
              </p>
            </div>

            {/* Quality Status Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <div className="p-3 rounded-2xl bg-[#141414] border border-white/10 flex items-center justify-between gap-3">
                <div className="text-left sm:text-right">
                  <p className="text-[10px] uppercase font-tech text-neutral-400">Direct Pricing</p>
                  <p className="text-xs sm:text-sm font-bold text-white font-sport">
                    <span>Normal ₹650</span> • <span className="text-[#00ff41]">Premium ₹800</span>
                  </p>
                </div>
                <button
                  onClick={() => setShowFabricDrawer(!showFabricDrawer)}
                  className="px-3 py-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-xs font-bold text-[#00ff41] border border-[#00ff41]/30 flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>{showFabricDrawer ? 'Hide' : 'Fabric Info'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Statement on Personal Customisation */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-[#111111] border border-[#00ff41]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg shadow-black/40">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00ff41]/15 text-[#00ff41] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white font-outfit">
                  Personal Customisation Available: <span className="text-[#00ff41] font-normal">We create custom 1-on-1 personalized jerseys & sportswear with your own design, logos, name, and numbers.</span>
                </p>
                <p className="text-[11px] text-neutral-400 font-tech">
                  Single pieces or tournament squad batches • Zero hidden design fees • Standard Normal (₹650) & Premium (₹800)
                </p>
              </div>
            </div>
            <a
              href={generateDirectInquiryWhatsAppUrl('Hi VYRO Sports! I would like to get a personal customized jersey / apparel made with my own custom design, name, and number.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-tech uppercase font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Personal Custom Order</span>
            </a>
          </div>

          {/* Subsection: Primary Category Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
            {CATEGORY_SUBSECTIONS.map((sub) => {
              const Icon = sub.icon;
              const isSelected = selectedCategory === sub.id;
              return (
                <button
                  key={sub.id}
                  id={`subsection-cat-${sub.id}`}
                  onClick={() => setSelectedCategory(sub.id)}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-[#161616] border-[#00ff41] shadow-lg shadow-[#00ff41]/10'
                      : 'bg-[#121212] border-white/10 hover:border-white/20 hover:bg-[#161616]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#00ff41] text-black font-bold' : 'bg-[#1c1c1c] text-neutral-300 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-[#00ff41]/20 text-[#00ff41]' : 'bg-[#1c1c1c] text-neutral-400'
                      }`}
                    >
                      {sub.count}
                    </span>
                  </div>

                  <h3 className={`font-sport text-sm sm:text-base font-bold uppercase mt-2.5 sm:mt-3 truncate ${isSelected ? 'text-[#00ff41]' : 'text-white'}`}>
                    {sub.label}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 line-clamp-1 mt-0.5 font-outfit hidden sm:block">
                    {sub.description}
                  </p>

                  {isSelected && (
                    <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#00ff41]/10 rounded-bl-full flex items-start justify-end p-1 sm:p-1.5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ff41]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Fabric Comparison Accordion Drawer */}
      {showFabricDrawer && (
        <section className="py-6 bg-[#0f0f0f] border-b border-[#00ff41]/20 animate-in slide-in-from-top duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <QualityComparison
              onSelectTierFilter={(tier) => {
                setSelectedQualityTier(tier);
                setShowFabricDrawer(false);
              }}
            />
          </div>
        </section>
      )}

      {/* Sticky Filter & View Toolbar */}
      <section className="py-3.5 sm:py-4 bg-[#0d0d0d] border-b border-white/10 sticky top-18 z-30 backdrop-blur-md bg-[#0d0d0d]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          
          {/* Main Controls Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80 lg:w-96">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jerseys, pants, football, cricket..."
                className="w-full pl-10 pr-10 py-2 rounded-xl bg-[#141414] border border-white/10 text-white placeholder-neutral-500 text-xs focus:border-[#00ff41] focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quality Tier Pills */}
            <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-[10px] uppercase font-tech text-neutral-400 font-bold shrink-0">
                Tier:
              </span>
              <button
                onClick={() => setSelectedQualityTier('all')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold font-tech uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                  selectedQualityTier === 'all'
                    ? 'bg-white text-black font-black'
                    : 'bg-[#141414] text-neutral-400 border border-white/10 hover:text-white'
                }`}
              >
                All
              </button>

              <button
                onClick={() => setSelectedQualityTier('normal')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold font-tech uppercase tracking-wider shrink-0 flex items-center gap-1 transition-all cursor-pointer ${
                  selectedQualityTier === 'normal'
                    ? 'bg-neutral-200 text-black font-black shadow-md'
                    : 'bg-[#141414] text-neutral-300 border border-white/10 hover:text-white'
                }`}
              >
                <span>Normal (₹650)</span>
              </button>

              <button
                onClick={() => setSelectedQualityTier('premium')}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold font-tech uppercase tracking-wider shrink-0 flex items-center gap-1 transition-all cursor-pointer ${
                  selectedQualityTier === 'premium'
                    ? 'bg-[#00ff41] text-black font-black shadow-md shadow-[#00ff41]/20'
                    : 'bg-[#141414] text-[#00ff41] border border-[#00ff41]/30 hover:border-[#00ff41]'
                }`}
              >
                <span>Premium (₹800)</span>
              </button>
            </div>

            {/* Layout Density Switchers & Sort */}
            <div className="flex items-center justify-between md:justify-end gap-2 w-full md:w-auto">
              
              {/* Layout Mode Toggle: Comfortable / Compact / List */}
              <div className="flex items-center p-1 rounded-xl bg-[#141414] border border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setCardLayout('comfortable')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    cardLayout === 'comfortable'
                      ? 'bg-[#00ff41] text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Comfortable Standard Grid"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setCardLayout('compact')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    cardLayout === 'compact'
                      ? 'bg-[#00ff41] text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Compact Grid (Optimized for all mobile screens)"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setCardLayout('list')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    cardLayout === 'list'
                      ? 'bg-[#00ff41] text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Compact List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl bg-[#141414] border border-white/10 text-white text-xs font-semibold focus:border-[#00ff41] focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low-High</option>
                <option value="price-desc">Price: High-Low</option>
                <option value="name">A-Z</option>
              </select>

            </div>

          </div>

          {/* Sports Subsections Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs pt-1 border-t border-white/5 no-scrollbar">
            <span className="text-[10px] uppercase font-tech text-neutral-400 font-bold shrink-0 mr-1">
              Sport:
            </span>
            {SPORTS_SUBSECTIONS.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setSelectedSport(sport.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium shrink-0 transition-colors cursor-pointer ${
                  selectedSport === sport.id
                    ? 'bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/40 font-bold'
                    : 'bg-[#141414] text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {sport.label}
              </button>
            ))}

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="ml-auto px-2 py-1 rounded-lg bg-[#202020] hover:bg-[#2c2c2c] text-neutral-300 text-xs flex items-center gap-1 shrink-0 font-tech uppercase cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="text-[10px]">Reset</span>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Main Products Display Section */}
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-neutral-400 bg-[#111111] p-3 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
              <p>
                Showing <strong className="text-white">{filteredProducts.length}</strong> items in{' '}
                <strong className="text-[#00ff41] uppercase font-tech">
                  {CATEGORY_SUBSECTIONS.find((c) => c.id === selectedCategory)?.label}
                </strong>
                {selectedQualityTier !== 'all' && (
                  <span> ({selectedQualityTier === 'premium' ? '₹800 Premium' : '₹650 Normal'})</span>
                )}
              </p>
            </div>
          </div>

          {/* Grid or List of Product Cards */}
          {filteredProducts.length > 0 ? (
            <div
              className={
                cardLayout === 'list'
                  ? 'space-y-3'
                  : cardLayout === 'compact'
                  ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'
                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8'
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={onOpenDetails}
                  activeQualityTier={selectedQualityTier}
                  cardLayout={cardLayout}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-20 text-center space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#141414] border border-white/10 text-neutral-500 flex items-center justify-center mx-auto">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-sport text-2xl font-bold uppercase text-white">No Matching Gear Found</h3>
              <p className="text-xs text-neutral-400 font-outfit">
                We couldn't find any products matching your active filters. Try searching for "jersey", "pants", or resetting your sport and category filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-bold text-xs uppercase font-tech tracking-wider transition-all cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
