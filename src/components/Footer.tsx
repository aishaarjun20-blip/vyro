import React from 'react';
import { MessageCircle, ShieldCheck, Truck, Mail, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';
import { PageType } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageType, subsection?: string) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSizeGuide }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-neutral-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 3 Trust Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Pan-India Express Shipping</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">Reliable doorstep delivery with live WhatsApp tracking updates</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">100% Quality Fabric Guarantee</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">Tested for anti-fade sublimation & anti-chafing performance</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#121212] border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#00ff41]/10 text-[#00ff41] flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Direct WhatsApp Ordering</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">Fast, personal support with the owner: {OWNER_WHATSAPP_NUMBER}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00ff41] flex items-center justify-center shadow-lg shadow-[#00ff41]/20">
                <svg viewBox="0 0 40 40" className="w-5 h-5 fill-black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8 L20 32 L34 8 L26 8 L20 20 L14 8 Z" />
                </svg>
              </div>
              <span className="font-sport text-3xl font-bold tracking-wider text-white">VYRO</span>
            </div>

            <p className="text-neutral-300 font-tech text-sm font-semibold uppercase tracking-wide">
              "Wear the Game. Own the Moment."
            </p>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-outfit">
              VYRO is India's dedicated performance sportswear brand, delivering tournament-tested sports jerseys, 
              sports pants, and complete kits in Normal (₹650) and Premium (₹800) quality tiers.
            </p>

            <div className="pt-2">
              <a
                href={generateDirectInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Chat on WhatsApp ({OWNER_WHATSAPP_NUMBER})</span>
              </a>
            </div>
          </div>

          {/* Page Links */}
          <div className="space-y-3">
            <h4 className="font-tech text-sm uppercase tracking-wider text-white font-bold">Main Pages</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  1. Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  2. Products & Subsections
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  3. About Us & Craft
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  4. Contact & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Product Subsections */}
          <div className="space-y-3">
            <h4 className="font-tech text-sm uppercase tracking-wider text-white font-bold">Subsections</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button onClick={() => onNavigate('products', 'jerseys')} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  Jerseys & Shirts (₹650 / ₹800)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products', 'pants')} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  Sports Pants & Shorts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products', 'sets')} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  Full 2-Piece Kits
                </button>
              </li>
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-[#00ff41] transition-colors cursor-pointer">
                  Size Guide (S - 3XL)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Hotline */}
          <div className="space-y-3">
            <h4 className="font-tech text-sm uppercase tracking-wider text-white font-bold">Direct Support</h4>
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00ff41]" />
                <span className="font-mono">{OWNER_WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {OWNER_WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00ff41]" />
                <span>India • Direct Nationwide Dispatch</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-neutral-500">
              Payments via UPI (GPay/PhonePe/Paytm) & Direct Bank Transfer.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} VYRO Sportswear. All rights reserved. "Wear the Game. Own the Moment."
          </div>

          <div className="flex items-center gap-1">
            <span>Built with precision for athletes across India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
