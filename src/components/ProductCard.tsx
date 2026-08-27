import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Eye, 
  Sparkles, 
  Check, 
  ArrowRight, 
  RotateCw, 
  Layers, 
  Image as ImageIcon 
} from 'lucide-react';
import { Product, QualityType } from '../types';
import { useCart } from '../context/CartContext';
import { JerseyArtwork } from './JerseyArtwork';

export interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product, defaultQuality?: QualityType) => void;
  activeQualityTier?: QualityType | 'all';
  cardLayout?: 'comfortable' | 'compact' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  activeQualityTier = 'all',
  cardLayout = 'comfortable',
}) => {
  const { addToCart } = useCart();

  const [selectedQuality, setSelectedQuality] = useState<QualityType>(
    activeQualityTier === 'premium' ? 'premium' : 'normal'
  );
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [cardView, setCardView] = useState<'front' | 'back'>('front');
  const [isAddedRecently, setIsAddedRecently] = useState(false);
  const [showPhoto, setShowPhoto] = useState<boolean>(true);

  // Sync selectedQuality when activeQualityTier changes from parent
  React.useEffect(() => {
    if (activeQualityTier === 'normal' || activeQualityTier === 'premium') {
      setSelectedQuality(activeQualityTier);
    }
  }, [activeQualityTier]);

  const currentPrice = selectedQuality === 'premium' ? product.premiumPrice : product.normalPrice;
  const activeImage = product.images?.[0] || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      productId: product.id,
      name: product.name,
      category: product.category,
      image: activeImage,
      quality: selectedQuality,
      size: selectedSize,
      color: selectedColor.name,
      unitPrice: currentPrice,
      quantity: 1,
    });

    setIsAddedRecently(true);
    setTimeout(() => setIsAddedRecently(false), 1600);
  };

  // ==========================================
  // LAYOUT 1: COMPACT LIST ROW (Ultra-dense)
  // ==========================================
  if (cardLayout === 'list') {
    return (
      <div
        id={`product-card-list-${product.id}`}
        onClick={() => onOpenDetails(product, selectedQuality)}
        className="group relative rounded-2xl bg-[#121212] border border-white/10 hover:border-[#00ff41]/50 p-3 sm:p-4 transition-all duration-200 hover:shadow-xl hover:shadow-[#00ff41]/10 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Compact Thumbnail */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#080808] border border-white/10 shrink-0 overflow-hidden flex items-center justify-center p-1">
            {showPhoto ? (
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-lg drop-shadow-sm"
              />
            ) : (
              <JerseyArtwork
                productId={product.id}
                colorHex={selectedColor.hex}
                view="front"
                className="w-full h-full"
              />
            )}
          </div>

          {/* Titles & Specs */}
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              {product.badge && (
                <span className="text-[9px] uppercase font-tech font-bold px-1.5 py-0.5 rounded bg-[#00ff41] text-black">
                  {product.badge}
                </span>
              )}
              <span className="text-[9px] font-tech uppercase text-neutral-400">
                {product.category}
              </span>
            </div>

            <h3 className="font-outfit text-sm sm:text-base font-bold text-white group-hover:text-[#00ff41] transition-colors truncate">
              {product.name}
            </h3>

            <p className="text-xs text-neutral-400 line-clamp-1 font-outfit hidden sm:block">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Right side: Prices & Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5">
          <div className="text-left sm:text-right">
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 font-tech">Normal: ₹{product.normalPrice}</span>
              <span className="text-xs text-[#00ff41] font-tech font-bold">Premium: ₹{product.premiumPrice}</span>
            </div>
            <p className="text-[10px] text-neutral-500 font-mono">180 GSM / 220 GSM</p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleQuickAdd}
              className={`px-4 py-2.5 rounded-xl text-xs font-tech font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                isAddedRecently
                  ? 'bg-emerald-500 text-black'
                  : 'bg-[#00ff41] hover:bg-[#33ff66] text-black shadow-md shadow-[#00ff41]/20'
              }`}
            >
              {isAddedRecently ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // LAYOUT 2: COMPACT GRID (High density)
  // ==========================================
  if (cardLayout === 'compact') {
    return (
      <div
        id={`product-card-compact-${product.id}`}
        onClick={() => onOpenDetails(product, selectedQuality)}
        className="group relative rounded-2xl bg-[#121212] border border-white/10 hover:border-[#00ff41]/50 p-3 sm:p-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff41]/10 cursor-pointer flex flex-col justify-between"
      >
        {/* Badges */}
        <div className="flex items-center justify-between gap-1 mb-2">
          {product.badge ? (
            <span className="text-[9px] uppercase font-tech font-black px-2 py-0.5 rounded bg-[#00ff41] text-black truncate max-w-[110px]">
              {product.badge}
            </span>
          ) : (
            <span className="text-[9px] uppercase font-tech px-2 py-0.5 rounded bg-[#1c1c1c] text-neutral-400">
              {product.category}
            </span>
          )}
        </div>

        {/* Compact Image Stage */}
        <div className="relative h-40 sm:h-48 w-full flex items-center justify-center rounded-xl bg-[#080808] border border-white/5 overflow-hidden my-1 group-hover:border-white/15 transition-colors">
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity"
            style={{
              background: `radial-gradient(circle at center, ${selectedColor.hex} 0%, transparent 70%)`,
            }}
          />

          <div className="w-full h-full p-2 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
            {showPhoto ? (
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
              />
            ) : (
              <JerseyArtwork
                productId={product.id}
                colorHex={selectedColor.hex}
                view={cardView}
                customName="VYRO"
                customNumber="18"
                className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
              />
            )}
          </div>

          {/* Switch Photo vs Vector Mode Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowPhoto(!showPhoto);
            }}
            className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#181818]/90 border border-white/10 text-[9px] font-tech uppercase text-neutral-300 hover:text-white"
          >
            {showPhoto ? 'Vector Art' : 'Photo'}
          </button>
        </div>

        {/* Title and Prices */}
        <div className="space-y-2 pt-2">
          <h3 className="font-outfit text-sm font-bold text-white group-hover:text-[#00ff41] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <div className="flex items-center justify-between bg-[#0a0a0a] p-1.5 rounded-xl border border-white/10 text-xs">
            <span className="text-neutral-400 font-tech">Normal: ₹{product.normalPrice}</span>
            <span className="text-[#00ff41] font-tech font-bold">Pro: ₹{product.premiumPrice}</span>
          </div>

          {/* Quick Add Action */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleQuickAdd}
              className={`w-full py-2.5 rounded-xl text-xs font-tech font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer ${
                isAddedRecently
                  ? 'bg-emerald-500 text-black'
                  : 'bg-[#00ff41] hover:bg-[#33ff66] text-black shadow-md shadow-[#00ff41]/10'
              }`}
            >
              {isAddedRecently ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add ₹{currentPrice}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // LAYOUT 3: COMFORTABLE STANDARD GRID
  // ==========================================
  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onOpenDetails(product, selectedQuality)}
      className="group relative rounded-3xl bg-[#121212] border border-white/10 hover:border-[#00ff41]/50 p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00ff41]/10 cursor-pointer flex flex-col justify-between"
    >
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.badge ? (
            <span className="text-[10px] uppercase font-tech font-bold px-2.5 py-1 rounded-md bg-[#00ff41] text-black shadow-sm">
              {product.badge}
            </span>
          ) : (
            <span className="text-[10px] uppercase font-tech font-semibold px-2.5 py-1 rounded-md bg-[#1f1f1f] text-neutral-300">
              {product.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          {product.sports.slice(0, 2).map((sport, i) => (
            <span key={i} className="text-[9px] font-tech uppercase px-2 py-0.5 rounded bg-[#1c1c1c] text-neutral-400 border border-white/5">
              {sport}
            </span>
          ))}
        </div>
      </div>

      {/* Product Artwork / Graphic Stage */}
      <div className="relative h-60 sm:h-72 w-full flex items-center justify-center rounded-2xl bg-[#080808] border border-white/5 overflow-hidden my-2 group-hover:border-white/15 transition-colors">
        
        {/* Glow behind product */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${selectedColor.hex} 0%, transparent 70%)`,
          }}
        />

        {/* Product Visual: Photo or Vector */}
        <div className="w-full h-full p-3 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
          {showPhoto ? (
            <img
              src={activeImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
            />
          ) : (
            <JerseyArtwork
              productId={product.id}
              colorHex={selectedColor.hex}
              view={cardView}
              customName="VYRO"
              customNumber="18"
              className="w-full h-full filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.8)]"
            />
          )}
        </div>

        {/* Switch Photo vs Vector Mode / Flip Toggle */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowPhoto(!showPhoto);
            }}
            className="px-2 py-1 rounded-lg bg-[#181818]/90 border border-white/10 text-[10px] font-tech uppercase text-neutral-300 hover:text-white transition-colors"
          >
            {showPhoto ? '3D Vector Art' : 'Photo View'}
          </button>

          {!showPhoto && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCardView(cardView === 'front' ? 'back' : 'front');
              }}
              className="px-2 py-1 rounded-lg bg-[#181818]/90 border border-white/10 text-[10px] font-tech uppercase text-neutral-300 hover:text-white transition-colors"
            >
              {cardView === 'front' ? 'Flip Back' : 'Flip Front'}
            </button>
          )}
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px] pointer-events-none">
          <span className="px-4 py-2 rounded-xl bg-white text-black font-tech font-bold uppercase text-xs flex items-center gap-1.5 shadow-lg">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-3 sm:space-y-4 pt-2">
        {/* Product Title and Tagline */}
        <div>
          <h3 className="font-outfit text-base sm:text-xl font-bold text-white group-hover:text-[#00ff41] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5 font-sans">
            {product.tagline}
          </p>
        </div>

        {/* Quality Selector (Normal ₹650 vs Premium ₹800) */}
        <div className="bg-[#0a0a0a] rounded-2xl p-1.5 border border-white/10" onClick={(e) => e.stopPropagation()}>
          <div className="grid grid-cols-2 gap-1 text-center">
            <button
              type="button"
              id={`quality-normal-${product.id}`}
              onClick={() => setSelectedQuality('normal')}
              className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-center justify-center min-h-[44px] cursor-pointer ${
                selectedQuality === 'normal'
                  ? 'bg-[#1f1f1f] text-white border border-white/20 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <span className="text-[10px] font-tech uppercase text-neutral-400">Normal</span>
              <span className="font-sport text-sm sm:text-base font-bold text-white">₹{product.normalPrice}</span>
            </button>

            <button
              type="button"
              id={`quality-premium-${product.id}`}
              onClick={() => setSelectedQuality('premium')}
              className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all flex flex-col items-center justify-center relative overflow-hidden min-h-[44px] cursor-pointer ${
                selectedQuality === 'premium'
                  ? 'bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/50 shadow-sm'
                  : 'text-neutral-400 hover:text-[#00ff41]'
              }`}
            >
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-tech uppercase text-[#00ff41]">Premium</span>
                <Sparkles className="w-2.5 h-2.5 text-[#00ff41]" />
              </div>
              <span className="font-sport text-sm sm:text-base font-bold text-[#00ff41]">₹{product.premiumPrice}</span>
            </button>
          </div>
        </div>

        {/* Color Palette and Size Picker */}
        <div className="space-y-2.5" onClick={(e) => e.stopPropagation()}>
          {/* Colors */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-neutral-400 font-medium">
              Color: <span className="text-neutral-200">{selectedColor.name}</span>
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`w-5 h-5 rounded-full border-2 transition-transform cursor-pointer ${
                    selectedColor.name === color.name
                      ? 'border-white scale-110 shadow-sm ring-1 ring-[#00ff41]/50'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-neutral-400 font-medium">Size:</span>
            <div className="flex items-center gap-1 flex-wrap">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`px-2 py-1 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer ${
                    selectedSize === sz
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#181818] text-neutral-400 hover:text-white border border-white/5'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button: Quick Add */}
        <div className="pt-2">
          <button
            type="button"
            id={`quick-add-${product.id}`}
            onClick={handleQuickAdd}
            className={`w-full py-3 rounded-xl font-tech uppercase font-black text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all min-h-[44px] cursor-pointer ${
              isAddedRecently
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                : 'bg-[#00ff41] hover:bg-[#33ff66] text-black shadow-lg shadow-[#00ff41]/20 hover:shadow-[#00ff41]/40'
            }`}
          >
            {isAddedRecently ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart • ₹{currentPrice}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
