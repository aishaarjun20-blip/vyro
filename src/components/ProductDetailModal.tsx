import React, { useState } from 'react';
import {
  X,
  ShoppingBag,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Ruler,
  RotateCw,
  Plus,
  Minus,
  Check,
  Zap,
  Image as ImageIcon,
} from 'lucide-react';
import { Product, QualityType } from '../types';
import { useCart } from '../context/CartContext';
import { JerseyArtwork } from './JerseyArtwork';

interface ProductDetailModalProps {
  product: Product | null;
  initialQuality?: QualityType;
  isOpen: boolean;
  onClose: () => void;
  onOpenSizeGuide: () => void;
  onDirectCheckout?: (product: Product, quality: QualityType, size: string, color: string, qty: number, customName?: string, customNumber?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  initialQuality = 'normal',
  isOpen,
  onClose,
  onOpenSizeGuide,
  onDirectCheckout,
}) => {
  const { addToCart, setIsCartOpen } = useCart();

  const [selectedQuality, setSelectedQuality] = useState<QualityType>(initialQuality);
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'front' | 'back'>('front');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isPhotoView, setIsPhotoView] = useState<boolean>(true);
  const [customName, setCustomName] = useState<string>('ZAKARIYA');
  const [customNumber, setCustomNumber] = useState<string>('18');
  const [isAdded, setIsAdded] = useState<boolean>(false);

  // Sync initialQuality when product or initialQuality changes
  React.useEffect(() => {
    if (initialQuality) {
      setSelectedQuality(initialQuality);
    }
  }, [initialQuality, product]);

  // Reset image index on product change
  React.useEffect(() => {
    setActiveImageIndex(0);
  }, [product]);

  if (!isOpen || !product) return null;

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : ['https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80'];

  const activeImage = productImages[activeImageIndex] || productImages[0];
  const currentColor = product.colors[selectedColorIndex] || product.colors[0];
  const unitPrice = selectedQuality === 'premium' ? product.premiumPrice : product.normalPrice;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      category: product.category,
      image: activeImage,
      quality: selectedQuality,
      size: selectedSize,
      color: currentColor.name,
      customName: customName.trim() || undefined,
      customNumber: customNumber.trim() || undefined,
      unitPrice,
      quantity,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  const handleDirectBuyWhatsApp = () => {
    if (onDirectCheckout) {
      onDirectCheckout(
        product,
        selectedQuality,
        selectedSize,
        currentColor.name,
        quantity,
        customName.trim() || undefined,
        customNumber.trim() || undefined
      );
    } else {
      addToCart({
        productId: product.id,
        name: product.name,
        category: product.category,
        image: activeImage,
        quality: selectedQuality,
        size: selectedSize,
        color: currentColor.name,
        customName: customName.trim() || undefined,
        customNumber: customNumber.trim() || undefined,
        unitPrice,
        quantity,
      });
      onClose();
      setIsCartOpen(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl my-4 sm:my-8 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-neutral-100 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Top Sticky Header with Close Button */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#121212] z-30">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[10px] uppercase font-tech font-bold px-2 py-0.5 rounded bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/30 truncate">
              {product.category}
            </span>
            <h2 className="font-outfit text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">
              {product.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1c1c1c] hover:bg-[#282828] text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
          
          {/* Left Column: Product Visual Showcase */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#141414] to-[#0a0a0a] p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
            
            {/* Top Showcase Toolbar */}
            <div className="flex items-center justify-between gap-2 z-10">
              <div className="flex items-center gap-2 flex-wrap">
                {product.badge && (
                  <span className="text-[10px] font-tech uppercase font-black px-2.5 py-0.5 rounded-md bg-[#00ff41] text-black">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Switch between Realistic Photo and 3D Vector View */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsPhotoView(!isPhotoView)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] border border-white/10 text-xs font-semibold text-neutral-200 transition-colors shadow-sm cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#00ff41]" />
                  <span>{isPhotoView ? '3D Vector Mockup' : 'Realistic Photo'}</span>
                </button>

                {!isPhotoView && (
                  <button
                    onClick={() => setViewMode(viewMode === 'front' ? 'back' : 'front')}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] border border-white/10 text-xs font-semibold text-neutral-200 transition-colors cursor-pointer"
                    title="Flip front / back"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-[#00ff41]" />
                    <span>{viewMode === 'front' ? 'Back' : 'Front'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Main Stage Artwork / Photo */}
            <div className="relative h-[260px] sm:h-[340px] flex items-center justify-center my-3 rounded-2xl bg-[#080808] border border-white/5 overflow-hidden">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background: `radial-gradient(circle at center, ${currentColor.hex} 0%, transparent 70%)`,
                }}
              />

              <div className="w-full h-full p-4 flex items-center justify-center">
                {isPhotoView ? (
                  <img
                    src={activeImage}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.9)]"
                  />
                ) : (
                  <JerseyArtwork
                    productId={product.id}
                    colorHex={currentColor.hex}
                    view={viewMode}
                    customName={customName}
                    customNumber={customNumber}
                    className="w-full h-full filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.9)]"
                  />
                )}
              </div>
            </div>

            {/* Image Thumbnail Selector Strip */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-tech text-neutral-400 uppercase tracking-wider flex items-center gap-1">
                  <ImageIcon className="w-3 h-3 text-[#00ff41]" />
                  Product Gallery Views:
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {/* Thumbnail for 3D Vector Art */}
                <button
                  onClick={() => setIsPhotoView(false)}
                  className={`relative w-14 h-14 rounded-xl border p-1 overflow-hidden shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                    !isPhotoView
                      ? 'border-[#00ff41] bg-[#00ff41]/10 ring-2 ring-[#00ff41]/40'
                      : 'border-white/10 bg-[#0d0d0d] hover:border-white/20'
                  }`}
                  title="3D Vector Studio View"
                >
                  <JerseyArtwork
                    productId={product.id}
                    colorHex={currentColor.hex}
                    view="front"
                    className="w-full h-full"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-tech uppercase text-center text-[#00ff41] py-0.2">
                    3D Art
                  </span>
                </button>

                {/* Thumbnails for images */}
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsPhotoView(true);
                      setActiveImageIndex(idx);
                    }}
                    className={`relative w-14 h-14 rounded-xl border p-1 overflow-hidden shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                      isPhotoView && activeImageIndex === idx
                        ? 'border-[#00ff41] bg-[#00ff41]/10 ring-2 ring-[#00ff41]/40'
                        : 'border-white/10 bg-[#0d0d0d] hover:border-white/20'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-md"
                    />
                    {idx === 0 && (
                      <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-tech uppercase text-center text-neutral-300 py-0.2">
                        Main
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric Specs Summary */}
            <div className="mt-4 p-3.5 rounded-2xl bg-[#080808] border border-white/5 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 font-tech uppercase text-[10px]">Active Fabric Spec:</span>
                <span className="text-[#00ff41] font-mono text-[11px] font-bold">
                  {selectedQuality === 'premium' ? '220 GSM Pro Jacquard' : '180 GSM Micro-Poly'}
                </span>
              </div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                {selectedQuality === 'premium' ? product.fabricSpecs.premium : product.fabricSpecs.normal}
              </p>
            </div>

          </div>

          {/* Right Column: Customization Controls & Specifications */}
          <div className="lg:col-span-6 p-4 sm:p-8 space-y-5 overflow-y-auto">
            
            {/* Product Header */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-tech text-xs uppercase tracking-widest text-[#00ff41] font-bold">
                  Official Apparel Spec
                </span>
                <span className="text-neutral-500">•</span>
                <div className="flex items-center gap-1 text-neutral-400 text-xs">
                  {product.sports.slice(0, 3).join(', ')}
                </div>
              </div>

              <h1 className="font-sport text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-xs sm:text-sm text-neutral-300 font-outfit leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* 1. Transparent Quality Tier Selection (Normal ₹650 vs Premium ₹800) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-tech uppercase tracking-wider text-neutral-300 font-bold">
                  1. Select Quality Grade:
                </span>
                <span className="text-[11px] text-[#00ff41] font-tech font-bold uppercase">
                  Zero Hidden Extra Charges
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Normal Tier Button */}
                <button
                  type="button"
                  onClick={() => setSelectedQuality('normal')}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                    selectedQuality === 'normal'
                      ? 'bg-[#181818] border-white shadow-md'
                      : 'bg-[#101010] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-tech uppercase font-bold text-neutral-400">Normal</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">180 GSM</span>
                  </div>
                  <div className="font-sport text-xl font-black text-white mt-1">
                    ₹{product.normalPrice}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 font-outfit line-clamp-1">
                    Micro-Poly Interlock • Regular Fit
                  </p>
                  {selectedQuality === 'normal' && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white" />
                  )}
                </button>

                {/* Premium Tier Button */}
                <button
                  type="button"
                  onClick={() => setSelectedQuality('premium')}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                    selectedQuality === 'premium'
                      ? 'bg-[#00ff41]/10 border-[#00ff41] shadow-lg shadow-[#00ff41]/15'
                      : 'bg-[#101010] border-white/10 hover:border-[#00ff41]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-tech uppercase font-bold text-[#00ff41]">Premium</span>
                      <Sparkles className="w-3 h-3 text-[#00ff41]" />
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00ff41]/20 text-[#00ff41] font-mono font-bold">220 GSM</span>
                  </div>
                  <div className="font-sport text-xl font-black text-[#00ff41] mt-1">
                    ₹{product.premiumPrice}
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-1 font-outfit line-clamp-1">
                    Jacquard Dot-Knit • Pro HydroCool
                  </p>
                  {selectedQuality === 'premium' && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00ff41]" />
                  )}
                </button>
              </div>
            </div>

            {/* 2. Color Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-tech uppercase tracking-wider text-neutral-300 font-bold">
                  2. Colorway: <span className="text-white font-normal">{currentColor.name}</span>
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColorIndex(index)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-all cursor-pointer min-h-[40px] ${
                      selectedColorIndex === index
                        ? 'border-[#00ff41] bg-[#1a1a1a] text-white shadow-sm'
                        : 'border-white/10 bg-[#101010] text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 shadow-inner shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Size Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-tech uppercase tracking-wider text-neutral-300 font-bold">
                  3. Size (Athletic Standard):
                </span>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="text-xs text-[#00ff41] hover:underline flex items-center gap-1 font-tech uppercase cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>View Size Chart</span>
                </button>
              </div>

              <div className="grid grid-cols-6 gap-1.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center justify-center min-h-[44px] cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#00ff41] text-black font-black shadow-md shadow-[#00ff41]/20'
                        : 'bg-[#141414] text-neutral-300 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Optional Custom Jersey Print (Name & Number) */}
            <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-tech uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#00ff41]" />
                  <span>Optional Back Print (Free Sublimation)</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">Printed on Order</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] uppercase font-tech text-neutral-400 block mb-1">
                    Player Name
                  </label>
                  <input
                    type="text"
                    maxLength={14}
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                    placeholder="e.g. ZAKARIYA"
                    className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-white font-sport uppercase text-sm focus:border-[#00ff41] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-tech text-neutral-400 block mb-1">
                    Jersey Number
                  </label>
                  <input
                    type="text"
                    maxLength={3}
                    value={customNumber}
                    onChange={(e) => setCustomNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 18"
                    className="w-full px-3 py-2 rounded-xl bg-[#181818] border border-white/10 text-white font-sport text-sm focus:border-[#00ff41] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 5. Quantity Stepper */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-tech uppercase tracking-wider text-neutral-300 font-bold">
                Order Quantity:
              </span>
              
              <div className="flex items-center gap-3 bg-[#141414] p-1 rounded-xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-[#202020] hover:bg-[#2a2a2a] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-mono font-bold text-sm text-white">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-[#202020] hover:bg-[#2a2a2a] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Total Price Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#141414] to-[#1a1a1a] border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-tech text-neutral-400">Total Calculation</p>
                <p className="text-xs text-neutral-300">
                  {quantity} × ₹{unitPrice} ({selectedQuality === 'premium' ? 'Premium 220 GSM' : 'Normal 180 GSM'})
                </p>
              </div>
              <div className="text-right">
                <p className="font-sport text-2xl sm:text-3xl font-black text-[#00ff41]">
                  ₹{totalPrice}
                </p>
                <p className="text-[10px] text-neutral-400 font-tech uppercase">Includes All Customizations</p>
              </div>
            </div>

            {/* Action Buttons: Add to Cart & Buy on WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                id="modal-add-to-cart-btn"
                onClick={handleAddToCart}
                className={`py-3.5 px-4 rounded-xl font-tech uppercase font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[46px] ${
                  isAdded
                    ? 'bg-emerald-500 text-black'
                    : 'bg-white hover:bg-neutral-200 text-black shadow-lg shadow-white/10'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Item Added!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart (₹{totalPrice})</span>
                  </>
                )}
              </button>

              <button
                type="button"
                id="modal-direct-whatsapp-btn"
                onClick={handleDirectBuyWhatsApp}
                className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-tech uppercase font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer min-h-[46px]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-neutral-400 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00ff41]" />
                <span>100% Quality Fabric Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff41]" />
                <span>Doorstep Pan-India Courier</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
