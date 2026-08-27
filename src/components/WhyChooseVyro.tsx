import React from 'react';
import { Wind, ShieldCheck, Flame, Palette, Truck, Award } from 'lucide-react';

export const WhyChooseVyro: React.FC = () => {
  const features = [
    {
      icon: Wind,
      title: 'Hyper-Breathable Dry-Fit',
      description: 'Micro-pore fabric channels heat away instantly, keeping you fresh and dry through all 90 minutes or 20 overs.',
      highlight: '360° Air Circulation',
    },
    {
      icon: ShieldCheck,
      title: 'Anti-Fade Italian Sublimation',
      description: 'Dye molecules fused directly into fibers at 200°C. Zero peeling, cracking, or color dulling after 100+ match washes.',
      highlight: '100% Color Lock',
    },
    {
      icon: Flame,
      title: 'Tournament-Grade Durability',
      description: 'Dual-locked flatlock seams and reinforced stress points built to withstand slide tackles, turf friction, and aggressive pulls.',
      highlight: 'Heavy Duty Seams',
    },
    {
      icon: Palette,
      title: 'Personal & Team Customisation',
      description: 'We work on 100% personal customisation for individual athletes and squads. Custom designs, player names, numbers & sponsor logos.',
      highlight: 'Personal & Squad Ready',
    },
    {
      icon: Award,
      title: 'Normal (₹650) vs Premium (₹800)',
      description: 'Transparent pricing with no hidden costs. High-value daily practice wear or pro-athlete jacquard knit upgrades.',
      highlight: 'Fair Honest Value',
    },
    {
      icon: Truck,
      title: 'Direct WhatsApp Support & Delivery',
      description: 'Real-time ordering directly with the owner on WhatsApp (+91 70074 99344) with Pan-India dispatch tracking.',
      highlight: 'Instant Confirmation',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-tech text-xs uppercase tracking-widest text-[#00ff41] font-bold px-3.5 py-1 rounded-full bg-[#121212] border border-[#00ff41]/30">
            Engineered For Performance
          </span>
          <h2 className="font-sport text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide">
            WHY ATHLETES <span className="text-[#00ff41]">CHOOSE VYRO</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            From local turf tournaments to competitive college leagues, VYRO delivers authentic athletic sportswear 
            crafted to withstand the intensity of real matchplay.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#121212] border border-white/10 p-6 sm:p-7 hover:border-[#00ff41]/50 transition-all group flex flex-col justify-between hover:shadow-2xl hover:shadow-[#00ff41]/5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#00ff41] group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-tech font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1c1c1c] text-neutral-300 border border-white/5">
                      {feat.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-outfit text-white group-hover:text-[#00ff41] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-tech uppercase text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41]"></span>
                  <span>VYRO Sportswear Certified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
