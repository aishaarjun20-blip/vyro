import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Flame, 
  Trophy, 
  Truck, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Scissors, 
  Printer, 
  Users, 
  Award,
  HeartHandshake
} from 'lucide-react';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'products' | 'about' | 'contact', subsection?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 pb-20">
      
      {/* Hero Banner */}
      <section className="relative py-20 lg:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#121212] via-[#0e0e0e] to-[#0a0a0a]">
        {/* Background glow accents */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00ff41]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00ff41]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/30 text-xs font-bold font-tech uppercase tracking-widest text-[#00ff41]">
            <Zap className="w-3.5 h-3.5 fill-[#00ff41]" />
            <span>The VYRO Sportswear Legacy</span>
          </div>

          <h1 className="font-sport text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-none">
            ENGINEERED FOR CHAMPIONS. <br />
            <span className="text-[#00ff41]">CRAFTED FOR ATHLETES.</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-outfit">
            VYRO was created with a single uncompromising mission: to give Indian athletes, turf warriors, 
            and sports squads world-class performance shirts, jerseys, and pants at completely honest, transparent prices.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 text-center">
              <p className="font-sport text-3xl font-black text-[#00ff41]">5,000+</p>
              <p className="text-xs text-neutral-400 font-tech uppercase mt-1">Jerseys & Pants Delivered</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 text-center">
              <p className="font-sport text-3xl font-black text-white">150+</p>
              <p className="text-xs text-neutral-400 font-tech uppercase mt-1">Teams & Clubs Geared</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 text-center">
              <p className="font-sport text-3xl font-black text-[#00ff41]">₹650 / ₹800</p>
              <p className="text-xs text-neutral-400 font-tech uppercase mt-1">Honest 2-Tier Pricing</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 text-center">
              <p className="font-sport text-3xl font-black text-white">100%</p>
              <p className="text-xs text-neutral-400 font-tech uppercase mt-1">Sublimation Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Text */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00ff41] font-tech uppercase tracking-widest">
                <Flame className="w-4 h-4 fill-[#00ff41]" />
                <span>Our Story</span>
              </div>

              <h2 className="font-sport text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                WHY WE FOUNDED <span className="text-[#00ff41]">VYRO</span>
              </h2>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-outfit">
                <p>
                  For years, sports enthusiasts and local club teams in India faced a frustrating choice: either pay 
                  <strong className="text-white"> ₹2,500+ for foreign brand sportswear</strong> with massive marketing markups, 
                  or settle for <strong className="text-white">cheap, non-breathable local polyester</strong> that clings with sweat, 
                  peels after two washes, and lacks dynamic athletic cut.
                </p>
                <p>
                  We believed athletes deserve better. We set out to manufacture precision sports apparel that combines 
                  <strong className="text-[#00ff41]"> 360-degree moisture wicking</strong>, 
                  <strong className="text-[#00ff41]"> anti-chafing flatlock seams</strong>, and 
                  <strong className="text-[#00ff41]"> aggressive vector sublimation graphics</strong> — all starting at just <strong className="text-white">₹650</strong>.
                </p>
                <p>
                  Today, VYRO equips football strikers, cricket teams, gym athletes, marathoners, and esports squads 
                  across every state in India with custom-printed gear delivered directly to their doorsteps.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#00ff41]/20 transition-all"
                >
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all"
                >
                  Contact Our Team
                </button>
              </div>
            </div>

            {/* Visual Feature Card Stack */}
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#00ff41]/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-sport text-xl font-bold text-white uppercase">1. Zero Compromise on Fabric</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We use engineered 180 GSM Poly Interlock for our Normal Tier and 220 GSM HydroCool™ Air-Knit for our Premium Tier. Every thread is designed for peak sweat evaporation.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#00ff41]/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center font-bold">
                  <Printer className="w-5 h-5" />
                </div>
                <h3 className="font-sport text-xl font-bold text-white uppercase">2. Permanent Sublimation Technology</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Our graphics and player numbers are heat-fused directly into fabric fibers at 200°C. They never crack, fade, or peel off, no matter how intense the match or frequent the wash.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 hover:border-[#00ff41]/40 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-sport text-xl font-bold text-white uppercase">3. Direct Factory-to-Athlete Connection</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  No middlemen or retailer markups. You chat directly with our owner on WhatsApp ({OWNER_WHATSAPP_NUMBER}), finalize custom names & numbers, and receive fast order tracking.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5-Step Sportswear Craftsmanship Process */}
      <section className="py-20 border-b border-white/10 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-tech text-xs uppercase tracking-widest text-[#00ff41] font-bold px-3 py-1 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/30">
              The Manufacturing Standard
            </span>
            <h2 className="font-sport text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              HOW VYRO SPORTSWEAR IS BUILT
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              From high-tenacity yarn selection to finished custom squad jerseys, every step is strictly controlled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-3 relative group hover:border-[#00ff41]/50 transition-all">
              <span className="font-sport text-3xl font-black text-neutral-700 group-hover:text-[#00ff41] transition-colors">01</span>
              <div className="w-8 h-8 rounded-lg bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-sport text-base font-bold text-white uppercase">Micro-Poly Yarn</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Selected 180 & 220 GSM high-twist yarn with natural moisture capillary channels.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-3 relative group hover:border-[#00ff41]/50 transition-all">
              <span className="font-sport text-3xl font-black text-neutral-700 group-hover:text-[#00ff41] transition-colors">02</span>
              <div className="w-8 h-8 rounded-lg bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center">
                <Printer className="w-4 h-4" />
              </div>
              <h4 className="font-sport text-base font-bold text-white uppercase">Vector Infusion</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                200°C digital dye-sublimation fuses colors deep into the thread matrix.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-3 relative group hover:border-[#00ff41]/50 transition-all">
              <span className="font-sport text-3xl font-black text-neutral-700 group-hover:text-[#00ff41] transition-colors">03</span>
              <div className="w-8 h-8 rounded-lg bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center">
                <Scissors className="w-4 h-4" />
              </div>
              <h4 className="font-sport text-base font-bold text-white uppercase">Laser Precision</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Ergonomic panels are laser-cut to match human athletic motion without tight pinch points.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-3 relative group hover:border-[#00ff41]/50 transition-all">
              <span className="font-sport text-3xl font-black text-neutral-700 group-hover:text-[#00ff41] transition-colors">04</span>
              <div className="w-8 h-8 rounded-lg bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-sport text-base font-bold text-white uppercase">Double-Lock Seams</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Reinforced flatlock stitching prevents friction burn and survives aggressive sliding tackles.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 space-y-3 relative group hover:border-[#00ff41]/50 transition-all">
              <span className="font-sport text-3xl font-black text-neutral-700 group-hover:text-[#00ff41] transition-colors">05</span>
              <div className="w-8 h-8 rounded-lg bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="font-sport text-base font-bold text-white uppercase">Fast India Dispatch</h4>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Individually inspected and packed in moisture-safe sleeves with live WhatsApp tracking.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Founder & Brand Values Note */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0d0d0d] border border-white/10 text-center space-y-6 relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-[#00ff41] text-black flex items-center justify-center mx-auto shadow-xl shadow-[#00ff41]/30">
              <Award className="w-8 h-8 fill-black" />
            </div>

            <h3 className="font-sport text-3xl sm:text-4xl font-bold uppercase text-white">
              "WE DRESS THE SQUADS WHO PLAY WITH HEART."
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-outfit">
              Whether you are an academy striker, a Sunday morning gully cricket champion, or a college tournament captain — 
              when you pull on a VYRO jersey, you are stepping onto the field with gear that matches your determination.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('products')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#00ff41]/20"
              >
                Browse All Apparel (₹650 / ₹800)
              </button>
              <a
                href={generateDirectInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat with Owner ({OWNER_WHATSAPP_NUMBER})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
