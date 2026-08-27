import React from 'react';
import { MessageCircle, Users, Award, Shield, Check, Sparkles } from 'lucide-react';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';

export const CustomTeamSection: React.FC = () => {
  const customWhatsAppUrl = generateDirectInquiryWhatsAppUrl(
    'Hi VYRO Sports! I would like to inquire about personal customization / custom team apparel order (custom design, name, number, logos, and sizing). Please share details and mockup process.'
  );

  return (
    <section id="team-orders" className="py-16 sm:py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-white/10">
      {/* Background visual accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00ff41]/10 via-emerald-500/10 to-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#141414] via-[#111111] to-[#0a0a0a] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121212] border border-[#00ff41]/30 text-[#00ff41] text-xs font-tech uppercase tracking-widest font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personal Customisation & Squad Ordering</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-sport text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-wide leading-tight">
                WE ALSO WORK ON <span className="text-[#00ff41]">PERSONAL CUSTOMISATION</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Whether you need a single <strong>1-of-1 bespoke personal jersey</strong> with your own custom design, 
                player name, lucky number, and sponsor prints, or a full uniform kit for your entire Championship squad — 
                VYRO manufactures custom sportswear tailored to your exact vision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  '1-on-1 Personal Individual Customisation',
                  'Custom Team Name & Sponsor Chest Logos',
                  'Personal Player Names & Custom Back Numbers',
                  'Choice of Normal (₹650) or Premium (₹800)',
                  'Full Range of Sizes from S up to 3XL',
                  'Italian Sublimation & 100% Anti-Fade Guarantee',
                  'Direct WhatsApp Consultation with Owner',
                  'Pan-India Fast Tracked Dispatch',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <div className="w-5 h-5 rounded-full bg-[#00ff41]/20 text-[#00ff41] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all group cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>Start Personal Customisation on WhatsApp</span>
                </a>

                <span className="text-xs text-neutral-400 font-tech uppercase">
                  Direct Line: <strong className="text-white">{OWNER_WHATSAPP_NUMBER}</strong>
                </span>
              </div>
            </div>

            {/* Right Card: Squad & Personal Benefits Summary */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0a0a0a] border border-white/10 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-tech text-sm uppercase text-neutral-400 font-bold">Custom Pricing</span>
                  <span className="text-xs font-bold text-[#00ff41]">Zero Hidden Custom Charges</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Normal Quality Custom Piece</div>
                      <div className="text-[11px] text-neutral-400">180 GSM Micro-Poly Interlock</div>
                    </div>
                    <span className="font-sport text-2xl font-black text-white">₹650 <span className="text-xs text-neutral-400 font-sans font-normal">/pc</span></span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#141414] border border-[#00ff41]/30 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#00ff41] flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Premium Pro Custom Piece
                      </div>
                      <div className="text-[11px] text-neutral-400">220 GSM HydroCool™ Jacquard</div>
                    </div>
                    <span className="font-sport text-2xl font-black text-[#00ff41]">₹800 <span className="text-xs text-neutral-400 font-sans font-normal">/pc</span></span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#00ff41]/5 border border-[#00ff41]/20 text-[11px] text-neutral-300 space-y-1">
                  <span className="font-bold text-white block">🎨 How Personal Customisation Works:</span>
                  <p>1. Message us your design idea, logo, colors, or reference photo.</p>
                  <p>2. Choose your fabric tier (Normal ₹650 or Premium ₹800) and sizes.</p>
                  <p>3. We create and share digital mockups before printing.</p>
                  <p>4. Fast sublimation print & doorstep courier dispatch.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
