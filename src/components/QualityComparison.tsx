import React, { useState } from 'react';
import { Sparkles, Check, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { QUALITY_COMPARISON_DATA } from '../data/products';

interface QualityComparisonProps {
  onSelectTierFilter?: (tier: 'normal' | 'premium') => void;
  onOpenWhatsAppQuestion?: () => void;
}

export const QualityComparison: React.FC<QualityComparisonProps> = ({
  onSelectTierFilter,
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'normal' | 'premium'>('both');

  const comparisonPoints = [
    {
      feature: 'Fabric GSM & Weight',
      normal: '180 GSM Micro-Poly Interlock',
      premium: '220 GSM Pro Jacquard Dot-Knit HydroCool™',
      winner: 'premium',
      note: 'Premium has 22% higher fabric density with micro-mesh airflow',
    },
    {
      feature: 'Moisture Management',
      normal: 'Standard Fast-Dry Active Coating',
      premium: 'Advanced Capillary Action Evaporative Weave',
      winner: 'premium',
      note: 'Premium evaporates sweat in under 90 seconds during peak drills',
    },
    {
      feature: 'Sublimation Print & Colors',
      normal: 'Vibrant HD Thermal Sublimation',
      premium: 'Ultra-HD Italian Heat-Fused Fade-Proof Dye',
      winner: 'premium',
      note: 'Zero fading, zero peeling, zero cracking over 100+ matches',
    },
    {
      feature: 'Seam & Stitching Strength',
      normal: 'Reinforced Flatlock 3-Thread Seams',
      premium: 'Dual-Reinforced Anti-Chafe Heavy-Duty Lockstitch',
      winner: 'premium',
      note: 'Engineered for tough slide tackles and high friction',
    },
    {
      feature: 'Athletic Cut & Stretch',
      normal: 'Regular Sport Athletic Fit (2-Way Stretch)',
      premium: 'Ergonomic 4-Way Hyper-Flex Performance Cut',
      winner: 'premium',
      note: 'Maximum freedom of movement for throwing, sprinting, jumping',
    },
    {
      feature: 'Neckband & Sleeve Taping',
      normal: 'Standard Elastic Ribbed Collar',
      premium: 'Anti-Friction Ultrasonic Soft Taping + "Built to Move" Print',
      winner: 'premium',
      note: 'Prevents neck chafing and collar stretching over time',
    },
    {
      feature: 'Recommended Usage',
      normal: 'Turf matches, gym, training & casual sports',
      premium: 'Pro tournaments, competitive squad leagues & intense athletics',
      winner: 'neutral',
      note: 'Both offer genuine sports performance; pick what fits your needs',
    },
    {
      feature: 'Affordability & Value',
      normal: '₹650 — Outstanding Value per Piece',
      premium: '₹800 — Tournament-Grade Elite Apparel',
      winner: 'neutral',
      note: 'Only ₹150 difference for pro athlete upgrades',
    },
  ];

  return (
    <section id="quality-comparison" className="py-16 sm:py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Accent Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00ff41]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#00ff41]/30 text-[#00ff41] text-xs font-tech uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fabric Engineering Matrix</span>
          </div>
          <h2 className="font-sport text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide">
            NORMAL <span className="text-neutral-400 font-sans font-light text-3xl sm:text-4xl">(₹650)</span> VS PREMIUM <span className="text-[#00ff41] font-sans font-light text-3xl sm:text-4xl">(₹800)</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every VYRO garment is engineered with genuine high-performance sports technology. 
            Choose between our battle-tested <strong className="text-white">Normal Quality</strong> for everyday athletic wear, 
            or step up to <strong className="text-[#00ff41]">Premium Quality</strong> for elite tournament durability.
          </p>
        </div>

        {/* 2 Big Visual Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Normal Quality Card */}
          <div className="rounded-3xl bg-[#121212] border border-white/10 p-8 relative flex flex-col justify-between hover:border-white/20 transition-all shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-tech uppercase font-bold px-3 py-1 rounded-full bg-[#1c1c1c] text-neutral-300 border border-white/10">
                  {QUALITY_COMPARISON_DATA.normal.badge}
                </span>
                <span className="text-xs text-neutral-400">Standard Match Fit</span>
              </div>

              <h3 className="font-sport text-3xl sm:text-4xl font-bold uppercase text-white tracking-wider">
                {QUALITY_COMPARISON_DATA.normal.name}
              </h3>
              <div className="flex items-baseline gap-2 my-3">
                <span className="font-sport text-5xl font-black text-white">₹{QUALITY_COMPARISON_DATA.normal.price}</span>
                <span className="text-xs text-neutral-400">per piece</span>
              </div>
              <p className="text-sm text-neutral-400 mb-6">{QUALITY_COMPARISON_DATA.normal.tagline}</p>

              <div className="space-y-3.5 border-t border-white/10 pt-6">
                {[
                  '180 GSM Micro-Poly Interlock Fabric',
                  'Standard Quick-Drying Active Coating',
                  'High-Definition Sublimation Dye',
                  'Comfortable Regular Athletic Cut',
                  'Reinforced 3-Thread Flatlock Seams',
                  '50+ Washes Color Retention',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                    <div className="w-5 h-5 rounded-full bg-[#1c1c1c] flex items-center justify-center text-neutral-400 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs text-neutral-400 font-tech uppercase tracking-wider mb-3">
                🎯 Best For: <span className="text-white">{QUALITY_COMPARISON_DATA.normal.idealFor}</span>
              </div>
              {onSelectTierFilter && (
                <button
                  onClick={() => onSelectTierFilter('normal')}
                  className="w-full py-3 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-neutral-200 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/5"
                >
                  <span>Browse ₹650 Normal Quality Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Premium Quality Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#161616] via-[#121212] to-[#0a0a0a] border-2 border-[#00ff41]/50 p-8 relative flex flex-col justify-between shadow-2xl shadow-[#00ff41]/5 hover:border-[#00ff41] transition-all">
            {/* Top Glow Ribbon */}
            <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-[#00ff41] text-black text-xs font-black uppercase tracking-wider shadow-lg shadow-[#00ff41]/30 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Recommended Choice</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-tech uppercase font-bold px-3 py-1 rounded-full bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/40">
                  {QUALITY_COMPARISON_DATA.premium.badge}
                </span>
                <span className="text-xs text-[#00ff41] font-semibold">Pro Tournament Cut</span>
              </div>

              <h3 className="font-sport text-3xl sm:text-4xl font-bold uppercase text-white tracking-wider">
                {QUALITY_COMPARISON_DATA.premium.name}
              </h3>
              <div className="flex items-baseline gap-2 my-3">
                <span className="font-sport text-5xl font-black text-[#00ff41]">₹{QUALITY_COMPARISON_DATA.premium.price}</span>
                <span className="text-xs text-neutral-400">per piece (+₹150 upgrade)</span>
              </div>
              <p className="text-sm text-neutral-300 mb-6">{QUALITY_COMPARISON_DATA.premium.tagline}</p>

              <div className="space-y-3.5 border-t border-white/10 pt-6">
                {[
                  '220 GSM High-Density Jacquard Dot-Knit HydroCool™',
                  'Rapid Capillary Action Moisture Evaporation',
                  'Ultra-HD Italian Heat-Fused Fade-Proof Graphics',
                  'Ergonomic 4-Way HyperFlex Athlete Cut',
                  'Dual-Reinforced Anti-Chafing Heavy Duty Seams',
                  'Anti-Friction Inner Neck Ribbon & Laser Mesh Slits',
                  '100+ Washes Pro-Durability Guaranteed',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#00ff41] text-black flex items-center justify-center shrink-0 shadow-sm shadow-[#00ff41]/50">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs text-neutral-300 font-tech uppercase tracking-wider mb-3">
                🏆 Best For: <span className="text-[#00ff41]">{QUALITY_COMPARISON_DATA.premium.idealFor}</span>
              </div>
              {onSelectTierFilter && (
                <button
                  onClick={() => onSelectTierFilter('premium')}
                  className="w-full py-3 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#00ff41]/25"
                >
                  <span>Browse ₹800 Premium Quality Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Detailed Breakdown Table */}
        <div className="rounded-3xl bg-[#121212] border border-white/10 overflow-hidden">
          <div className="p-4 sm:p-6 bg-[#161616] border-b border-white/10 flex items-center justify-between">
            <h3 className="font-tech text-base sm:text-lg font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00ff41]" />
              <span>Side-by-Side Specifications</span>
            </h3>
            <span className="text-xs text-neutral-400 hidden sm:inline">100% Genuine VYRO Sportswear Fabric</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0a0a0a] text-neutral-400 font-tech uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-3.5 sm:p-4">Specification</th>
                  <th className="p-3.5 sm:p-4 text-white">Normal Quality (₹650)</th>
                  <th className="p-3.5 sm:p-4 text-[#00ff41]">Premium Quality (₹800)</th>
                  <th className="p-3.5 sm:p-4 hidden md:table-cell text-neutral-400">Key Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300">
                {comparisonPoints.map((item, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 sm:p-4 font-semibold text-white">{item.feature}</td>
                    <td className="p-3.5 sm:p-4">{item.normal}</td>
                    <td className="p-3.5 sm:p-4 text-[#00ff41] font-medium">{item.premium}</td>
                    <td className="p-3.5 sm:p-4 hidden md:table-cell text-xs text-neutral-400">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
