import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseVyro } from '../components/WhyChooseVyro';
import { CustomTeamSection } from '../components/CustomTeamSection';
import { Product, ProductCategory, QualityType } from '../types';
import { PRODUCTS, OWNER_WHATSAPP_NUMBER } from '../data/products';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';
import { ProductCard } from '../components/ProductCard';
import { 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Shirt, 
  Layers, 
  Sparkles, 
  Trophy, 
  Flame, 
  Truck 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'products' | 'about' | 'contact', subsection?: string) => void;
  onOpenProductDetails: (product: Product, defaultQuality?: QualityType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProductDetails,
}) => {
  // Grab top 3 featured products
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 3);

  const handleSelectFeatured = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      onOpenProductDetails(product, 'premium');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 pb-20">
      
      {/* 1. Hero Section with Interactive Jersey Studio */}
      <Hero
        onShopNow={() => onNavigate('products')}
        onSelectFeatured={handleSelectFeatured}
      />

      {/* 2. Transparent Pricing & Fabric Guarantee Bar */}
      <section className="py-6 bg-[#0f0f0f] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/20 flex items-center justify-center font-sport text-2xl font-black">
                ₹
              </div>
              <div>
                <h3 className="font-outfit font-bold text-sm sm:text-base text-white">
                  Direct Transparent Sportswear Pricing
                </h3>
                <p className="text-xs text-neutral-400 font-tech">
                  Normal Quality (₹650) • Premium Tournament Grade (₹800) • Zero hidden fees
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="px-4 py-2.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-neutral-200 text-xs font-bold uppercase font-tech tracking-wider border border-white/10 transition-colors"
              >
                Our Quality Standards
              </button>
              <a
                href={generateDirectInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase font-tech tracking-wider transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Owner</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Explore Subsections / Categories Spotlight */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-tech text-xs uppercase tracking-widest text-[#00ff41] font-bold">
                Apparel Lineup
              </span>
              <h2 className="font-sport text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mt-1">
                CHOOSE YOUR BATTLE GEAR
              </h2>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#00ff41] hover:text-[#33ff66] uppercase font-tech tracking-wider"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Personal Customisation Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#00ff41]/10 via-[#141414] to-[#141414] border border-[#00ff41]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff41]/20 text-[#00ff41] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-tech font-bold text-[#00ff41] tracking-wider block">
                  Bespoke Athlete Service
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white font-outfit">
                  Need a Unique Design? We also work on 100% Personal Customisation!
                </h4>
                <p className="text-xs text-neutral-300">
                  Custom individual player names, numbers, logos, colorways, and tailored fits for single pieces or squads.
                </p>
              </div>
            </div>
            <a
              href={generateDirectInquiryWhatsAppUrl('Hi VYRO! I want to get a personal customized jersey / sportswear design with my name, number, and custom artwork.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-tech uppercase font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Personal Customisation</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Category Card 1: Jerseys & Shirts */}
            <div
              onClick={() => onNavigate('products', 'jerseys')}
              className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/10 hover:border-[#00ff41]/50 transition-all cursor-pointer relative overflow-hidden space-y-4 shadow-lg hover:shadow-[#00ff41]/10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] text-[#00ff41] group-hover:bg-[#00ff41] group-hover:text-black flex items-center justify-center transition-all">
                <Shirt className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#00ff41]">
                  Performance Tops
                </span>
                <h3 className="font-sport text-2xl font-bold uppercase text-white group-hover:text-[#00ff41] transition-colors mt-0.5">
                  Sports Jerseys & Shirts
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-outfit">
                  Breathable moisture-wicking shirts engineered for football strikers, cricket teams, and gym athletes.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs font-tech">
                <span className="text-white font-bold">From ₹650 / ₹800</span>
                <span className="text-[#00ff41] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  Browse Shirts <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Category Card 2: Sports Pants & Shorts */}
            <div
              onClick={() => onNavigate('products', 'pants')}
              className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/10 hover:border-[#00ff41]/50 transition-all cursor-pointer relative overflow-hidden space-y-4 shadow-lg hover:shadow-[#00ff41]/10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] text-[#00ff41] group-hover:bg-[#00ff41] group-hover:text-black flex items-center justify-center transition-all">
                <Layers className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#00ff41]">
                  Lower Gear
                </span>
                <h3 className="font-sport text-2xl font-bold uppercase text-white group-hover:text-[#00ff41] transition-colors mt-0.5">
                  Sports Pants & Shorts
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-outfit">
                  Ergonomic track bottoms with zip pockets, 4-way kinetic stretch, and tapered athletic ankle cuffs.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs font-tech">
                <span className="text-white font-bold">From ₹650 / ₹800</span>
                <span className="text-[#00ff41] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  Browse Pants <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Category Card 3: Full Coordinated Sets */}
            <div
              onClick={() => onNavigate('products', 'sets')}
              className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/10 hover:border-[#00ff41]/50 transition-all cursor-pointer relative overflow-hidden space-y-4 shadow-lg hover:shadow-[#00ff41]/10"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] text-[#00ff41] group-hover:bg-[#00ff41] group-hover:text-black flex items-center justify-center transition-all">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#00ff41]">
                  2-Piece Kits
                </span>
                <h3 className="font-sport text-2xl font-bold uppercase text-white group-hover:text-[#00ff41] transition-colors mt-0.5">
                  Full Sportswear Sets
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-outfit">
                  Coordinated tournament uniforms combining dynamic shirts and matching track pants or match shorts.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/5 text-xs font-tech">
                <span className="text-white font-bold">From ₹1,200 / ₹1,500</span>
                <span className="text-[#00ff41] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                  Browse Kits <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Top Picks Spotlight */}
      <section className="py-16 border-b border-white/10 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-tech text-xs uppercase tracking-widest text-[#00ff41] font-bold">
                Athlete Favorites
              </span>
              <h2 className="font-sport text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mt-1">
                FEATURED TOURNAMENT PICKS
              </h2>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-2.5 rounded-xl bg-[#1a1a1a] hover:bg-[#222222] border border-white/10 text-xs font-bold font-tech uppercase text-neutral-200 hover:text-[#00ff41] transition-colors flex items-center gap-2"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenProductDetails}
                activeQualityTier="all"
              />
            ))}
          </div>

        </div>
      </section>

      {/* 5. Why Choose VYRO */}
      <WhyChooseVyro />

      {/* 6. Custom Team Orders Section */}
      <CustomTeamSection />

      {/* 7. Final High-Energy CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] relative overflow-hidden border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-[#00ff41] text-black flex items-center justify-center mx-auto shadow-2xl shadow-[#00ff41]/40">
            <Zap className="w-8 h-8 fill-black" />
          </div>

          <div className="space-y-3">
            <span className="font-tech text-xs uppercase tracking-widest text-[#00ff41] font-bold px-3.5 py-1 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/30">
              Ready to Upgrade Your Game?
            </span>
            <h2 className="font-sport text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight">
              WEAR THE GAME. <span className="text-[#00ff41]">OWN THE MOMENT.</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Order your favorite VYRO jersey or sports pants today. 
              Experience tournament-grade moisture control, bold aggressive styling, 
              and direct WhatsApp order confirmation with owner <strong className="text-[#00ff41]">{OWNER_WHATSAPP_NUMBER}</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="cta-shop-now-btn"
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-[#00ff41]/25 hover:shadow-[#00ff41]/40 transition-all group"
            >
              <span>Browse Products (From ₹650)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              id="cta-whatsapp-chat-btn"
              href={generateDirectInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Chat on WhatsApp (+91 70074 99344)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
