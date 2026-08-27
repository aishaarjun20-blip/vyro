import React, { useState } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Flame, CheckCircle2, RotateCw, Zap } from 'lucide-react';
import { JerseyArtwork } from './JerseyArtwork';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';

interface HeroProps {
  onShopNow: () => void;
  onSelectFeatured: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onSelectFeatured }) => {
  const [heroView, setHeroView] = useState<'front' | 'back'>('front');
  const [heroColor, setHeroColor] = useState<string>('#00ff41'); // Professional Polish electric volt
  const [heroCustomName, setHeroCustomName] = useState<string>('ZAKARIYA');
  const [heroCustomNumber, setHeroCustomNumber] = useState<string>('18');

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-[#0a0a0a]">
      {/* Background Gradients and Sports Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00ff41]/8 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121212] border border-[#00ff41]/30 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#00ff41] animate-ping" />
              <span className="font-tech text-xs font-bold uppercase tracking-widest text-[#00ff41]">
                Official VYRO Sportswear Launch
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-medium text-neutral-300">Collection 01</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-sport text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
                BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] via-emerald-300 to-[#00ff41]">THE GAME.</span>
              </h1>
              <p className="font-tech text-xl sm:text-2xl font-semibold tracking-wide text-neutral-300 uppercase">
                "Wear the Game. Own the Moment."
              </p>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              VYRO provides stylish, ultra-comfortable, and performance-focused sportswear. 
              Engineered with advanced moisture-wicking fabrics, bold dynamic graphics, 
              and reinforced anti-chafe stitching for tournament athletes and turf warriors.
            </p>

            {/* Normal vs Premium Quick Pricing Highlight */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-2">
              <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-white/20 transition-all text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-tech uppercase font-bold text-neutral-400">Everyday Training</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#202020] text-neutral-300 font-semibold">180 GSM</span>
                </div>
                <div className="text-sm font-semibold text-white">Normal Quality</div>
                <div className="text-3xl font-black font-sport text-white mt-1">₹650</div>
                <p className="text-[11px] text-neutral-400 mt-1">Fast-dry poly interlock</p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#161616] to-[#0f0f0f] border border-[#00ff41]/40 hover:border-[#00ff41] transition-all text-left shadow-lg shadow-[#00ff41]/5 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#00ff41]/10 rounded-full blur-lg" />
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-tech uppercase font-bold text-[#00ff41] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Pro Grade
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#00ff41]/20 text-[#00ff41] font-semibold">220 GSM</span>
                </div>
                <div className="text-sm font-semibold text-white">Premium Quality</div>
                <div className="text-3xl font-black font-sport text-[#00ff41] mt-1">₹800</div>
                <p className="text-[11px] text-neutral-300 mt-1">HydroCool™ 4-Way Jacquard</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-shop-now-btn"
                onClick={onShopNow}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-[#00ff41]/25 hover:shadow-[#00ff41]/40 transition-all group"
              >
                <span>SHOP VYRO COLLECTION</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-whatsapp-order-btn"
                href={generateDirectInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] border border-white/10 hover:border-emerald-500 text-neutral-100 font-semibold text-sm flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                <span>Order via WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 border-t border-white/10 text-xs text-neutral-400 font-tech uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff41]" />
                <span>Dry-Fit Breathable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff41]" />
                <span>100+ Wash Anti-Fade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff41]" />
                <span>Custom Name & Number</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff41]" />
                <span>Hotline: {OWNER_WHATSAPP_NUMBER}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Interactive Jersey Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing Showcase Stage */}
              <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] via-[#111111] to-[#0a0a0a] border border-white/10 p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Stage Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-tech uppercase tracking-widest text-[#00ff41] font-bold">Featured Drop</span>
                    <h3 className="text-lg font-bold text-white font-outfit">VYRO Velocity Pro 01</h3>
                  </div>
                  
                  {/* Front/Back Flip Toggle */}
                  <button
                    id="hero-flip-view-btn"
                    onClick={() => setHeroView(heroView === 'front' ? 'back' : 'front')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-xs font-semibold text-neutral-200 border border-white/10 transition-colors"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-[#00ff41]" />
                    <span>View {heroView === 'front' ? 'Back' : 'Front'}</span>
                  </button>
                </div>

                {/* Interactive Jersey Vector Visual */}
                <div className="relative h-[340px] sm:h-[380px] flex items-center justify-center my-4">
                  <JerseyArtwork
                    productId="vyro-velocity-01"
                    colorHex={heroColor}
                    view={heroView}
                    customName={heroCustomName}
                    customNumber={heroCustomNumber}
                    className="w-full h-full filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  />

                  {/* Quality Floating Badge */}
                  <div className="absolute top-2 left-2 px-3 py-1.5 rounded-xl bg-[#0a0a0a]/90 border border-white/15 backdrop-blur-md">
                    <span className="text-[10px] uppercase font-tech text-neutral-400 block">Pricing</span>
                    <span className="text-sm font-bold text-white">₹650 <span className="text-neutral-500 font-normal">/</span> <span className="text-[#00ff41]">₹800</span></span>
                  </div>
                </div>

                {/* Live Customizer Controls for Preview */}
                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-medium">Color Variation:</span>
                    <div className="flex items-center gap-2">
                      {[
                        { name: 'Volt', hex: '#00ff41' },
                        { name: 'Crimson', hex: '#ef4444' },
                        { name: 'Royal', hex: '#3b82f6' },
                        { name: 'Purple', hex: '#a855f7' },
                      ].map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setHeroColor(c.hex)}
                          className={`w-6 h-6 rounded-full border-2 transition-all ${
                            heroColor === c.hex ? 'border-white scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Interactive Name/Number in Back View */}
                  {heroView === 'back' && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[10px] text-neutral-400 block mb-0.5">Player Name:</label>
                        <input
                          type="text"
                          value={heroCustomName}
                          maxLength={12}
                          onChange={(e) => setHeroCustomName(e.target.value.toUpperCase())}
                          className="w-full bg-[#0a0a0a] border border-white/15 rounded-lg px-2 py-1 text-white font-mono text-xs focus:border-[#00ff41] outline-none"
                          placeholder="NAME"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-neutral-400 block mb-0.5">Back Number:</label>
                        <input
                          type="text"
                          value={heroCustomNumber}
                          maxLength={2}
                          onChange={(e) => setHeroCustomNumber(e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-white/15 rounded-lg px-2 py-1 text-white font-mono text-xs focus:border-[#00ff41] outline-none"
                          placeholder="NO"
                        />
                      </div>
                    </div>
                  )}

                  {/* Quick Detail Action */}
                  <button
                    id="hero-view-details-btn"
                    onClick={() => onSelectFeatured('vyro-velocity-01')}
                    className="w-full py-2.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] border border-white/10 hover:border-[#00ff41]/40 text-xs font-bold text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <span>View Full Specs & Order</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00ff41]" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
