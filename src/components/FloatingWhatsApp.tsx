import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleQuickSend = (text?: string) => {
    const url = generateDirectInquiryWhatsAppUrl(text || customMsg);
    window.open(url, '_blank');
    setShowPopup(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {showPopup && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl p-4 sm:p-5 text-neutral-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Popup Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#00ff41] flex items-center justify-center text-black shadow-md">
                <MessageCircle className="w-4 h-4 fill-black" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-outfit">VYRO Sports Support</h4>
                <p className="text-[11px] text-[#00ff41] font-tech uppercase tracking-wide flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse"></span>
                  Online ({OWNER_WHATSAPP_NUMBER})
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-[#1c1c1c] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Chat Bubble */}
          <div className="p-3 rounded-2xl bg-[#0a0a0a] border border-white/10 text-xs text-neutral-300 mb-3 space-y-1">
            <p className="font-semibold text-white">Hey Athlete! 👋</p>
            <p>
              Have a question about sizes, Normal (₹650) vs Premium (₹800) fabric, or team orders? Chat directly with the owner!
            </p>
          </div>

          {/* Quick Starter Prompts */}
          <div className="space-y-1.5 mb-3">
            <button
              onClick={() => handleQuickSend('Hi! I want to order a VYRO Velocity Performance Jersey.')}
              className="w-full text-left p-2 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-[11px] text-neutral-200 transition-colors border border-white/5"
            >
              ⚡ "I want to order a Velocity Jersey"
            </button>
            <button
              onClick={() => handleQuickSend('Hi! We want custom printed jerseys for our sports team. Please share catalog & bulk pricing.')}
              className="w-full text-left p-2 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-[11px] text-neutral-200 transition-colors border border-white/5"
            >
              🏆 "Inquire for Custom Team Squad Order"
            </button>
          </div>

          {/* Direct Input & Send */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleQuickSend()}
              placeholder="Type your message..."
              className="flex-1 bg-[#0a0a0a] border border-white/10 focus:border-[#00ff41] rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
            />
            <button
              onClick={() => handleQuickSend()}
              className="p-2 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-bold transition-colors"
              title="Send to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setShowPopup(!showPopup)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#00ff41] hover:bg-[#33ff66] text-black shadow-2xl shadow-[#00ff41]/40 hover:shadow-[#00ff41]/60 hover:scale-105 transition-all duration-300 flex items-center justify-center font-bold"
        aria-label="Contact VYRO Owner on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#00ff41] opacity-70 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-black relative z-10" />

        {/* Hover Tooltip on Desktop */}
        <span className="hidden sm:group-hover:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#121212] border border-white/10 text-xs font-semibold text-white whitespace-nowrap shadow-xl items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse" />
          Chat on WhatsApp ({OWNER_WHATSAPP_NUMBER})
        </span>
      </button>
    </div>
  );
};
