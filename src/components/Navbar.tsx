import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, ShieldCheck, Zap, ChevronDown, Shirt, Layers, Sparkles, Boxes } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';

export type PageType = 'home' | 'products' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, subsection?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { totalItemsCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavClick = (page: PageType, subsection?: string) => {
    onNavigate(page, subsection);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
      {/* Top Announcement Bar */}
      <div className="bg-[#0f0f0f] px-4 py-1.5 text-center text-xs font-medium text-neutral-300 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-[#00ff41] font-tech uppercase tracking-wider text-xs">
            <Zap className="w-3.5 h-3.5 fill-[#00ff41]" />
            <span>Built for the game • Normal ₹650 | Premium ₹800</span>
          </div>
          <div className="w-full sm:w-auto text-center font-outfit text-xs text-neutral-300">
            🚚 Pan-India Delivery • Direct WhatsApp: <span className="text-[#00ff41] font-bold">{OWNER_WHATSAPP_NUMBER}</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-xs text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff41]" />
            <span>100% Performance Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo & Name */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff41] to-[#00b32c] flex items-center justify-center shadow-lg shadow-[#00ff41]/20 group-hover:scale-105 transition-transform">
              {/* VYRO 'V' Wing Icon */}
              <svg viewBox="0 0 40 40" className="w-6 h-6 fill-black" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8 L20 32 L34 8 L26 8 L20 20 L14 8 Z" />
                <path d="M12 4 L20 14 L28 4 Z" fill="#000000" opacity="0.6" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sport text-3xl font-bold tracking-wider text-white group-hover:text-[#00ff41] transition-colors">
                  VYRO
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30">
                  SPORTS
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-tech hidden sm:block">
                Wear the Game. Own the Moment.
              </p>
            </div>
          </button>

          {/* Desktop 4-Page Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-2">
            
            {/* 1. Home Tab */}
            <button
              id="nav-tab-home"
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#00ff41] bg-white/5 font-bold shadow-inner'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              1. Home
            </button>

            {/* 2. Products Tab with Dropdown / Direct Subsections */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                id="nav-tab-products"
                onClick={() => handleNavClick('products')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentPage === 'products'
                    ? 'text-[#00ff41] bg-white/5 font-bold shadow-inner'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>2. Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? 'rotate-180 text-[#00ff41]' : ''}`} />
              </button>

              {/* Subsections Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-tech tracking-wider text-neutral-400 font-bold border-b border-white/5">
                    Product Subsections
                  </div>

                  <button
                    onClick={() => handleNavClick('products', 'all')}
                    className="w-full p-2.5 rounded-xl text-left hover:bg-[#1a1a1a] text-xs font-semibold text-white flex items-center gap-2.5 group transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#202020] flex items-center justify-center text-neutral-300 group-hover:text-[#00ff41]">
                      <Boxes className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold">All Products</p>
                      <p className="text-[10px] text-neutral-400">Complete catalog</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('products', 'jerseys')}
                    className="w-full p-2.5 rounded-xl text-left hover:bg-[#1a1a1a] text-xs font-semibold text-white flex items-center gap-2.5 group transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#202020] flex items-center justify-center text-neutral-300 group-hover:text-[#00ff41]">
                      <Shirt className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold">Jerseys & Shirts</p>
                      <p className="text-[10px] text-neutral-400">₹650 Normal / ₹800 Premium</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('products', 'pants')}
                    className="w-full p-2.5 rounded-xl text-left hover:bg-[#1a1a1a] text-xs font-semibold text-white flex items-center gap-2.5 group transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#202020] flex items-center justify-center text-neutral-300 group-hover:text-[#00ff41]">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold">Sports Pants & Shorts</p>
                      <p className="text-[10px] text-neutral-400">Track bottoms & joggers</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('products', 'sets')}
                    className="w-full p-2.5 rounded-xl text-left hover:bg-[#1a1a1a] text-xs font-semibold text-white flex items-center gap-2.5 group transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#202020] flex items-center justify-center text-neutral-300 group-hover:text-[#00ff41]">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-bold">Full 2-Piece Sets</p>
                      <p className="text-[10px] text-neutral-400">Coordinated match kits</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* 3. About Us Tab */}
            <button
              id="nav-tab-about"
              onClick={() => handleNavClick('about')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                currentPage === 'about'
                  ? 'text-[#00ff41] bg-white/5 font-bold shadow-inner'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              3. About Us
            </button>

            {/* 4. Contact Tab */}
            <button
              id="nav-tab-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#00ff41] bg-white/5 font-bold shadow-inner'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              4. Contact
            </button>

          </nav>

          {/* Action Buttons & Cart Badge */}
          <div className="flex items-center gap-3">
            {/* Quick WhatsApp Chat */}
            <a
              id="nav-whatsapp-direct-btn"
              href={generateDirectInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141414] border border-white/10 hover:border-emerald-500 hover:bg-[#1a1a1a] text-xs font-semibold text-neutral-200 hover:text-emerald-400 transition-all shadow-sm"
              title="Chat with VYRO Owner on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp Us</span>
            </a>

            {/* Shopping Cart Button with Live Badge */}
            <button
              id="nav-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] border border-white/10 hover:border-[#00ff41]/50 text-neutral-200 hover:text-[#00ff41] transition-all flex items-center gap-2 group cursor-pointer"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-neutral-300 group-hover:text-[#00ff41] transition-colors" />
              <span className="text-xs font-bold text-neutral-300 hidden md:inline">Cart</span>
              {totalItemsCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1.5 rounded-full bg-[#00ff41] text-black text-[11px] font-black flex items-center justify-center shadow-lg shadow-[#00ff41]/40 animate-bounce"
                >
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#141414] border border-white/10 text-neutral-300 hover:text-white cursor-pointer"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0a0a0a] px-4 py-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <div className="p-3 rounded-xl bg-[#141414] border border-white/10 text-center">
              <p className="text-[10px] uppercase font-tech text-neutral-400">Normal Quality</p>
              <p className="text-lg font-bold text-white font-sport">₹650</p>
            </div>
            <div className="p-3 rounded-xl bg-[#141414] border border-[#00ff41]/30 text-center">
              <p className="text-[10px] uppercase font-tech text-[#00ff41]">Premium Quality</p>
              <p className="text-lg font-bold text-[#00ff41] font-sport">₹800</p>
            </div>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                currentPage === 'home' ? 'bg-[#00ff41]/10 text-[#00ff41] font-bold' : 'text-neutral-200 hover:bg-[#141414]'
              }`}
            >
              1. Home Page
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                currentPage === 'products' ? 'bg-[#00ff41]/10 text-[#00ff41] font-bold' : 'text-neutral-200 hover:bg-[#141414]'
              }`}
            >
              2. Products & Subsections
            </button>

            {/* Indented Subsections on Mobile */}
            <div className="pl-4 space-y-1 border-l-2 border-white/10 ml-3 my-1">
              <button
                onClick={() => handleNavClick('products', 'jerseys')}
                className="w-full text-left py-1.5 px-2 rounded-lg text-xs text-neutral-400 hover:text-white"
              >
                • Sports Jerseys & Shirts (₹650 / ₹800)
              </button>
              <button
                onClick={() => handleNavClick('products', 'pants')}
                className="w-full text-left py-1.5 px-2 rounded-lg text-xs text-neutral-400 hover:text-white"
              >
                • Sports Pants & Shorts
              </button>
              <button
                onClick={() => handleNavClick('products', 'sets')}
                className="w-full text-left py-1.5 px-2 rounded-lg text-xs text-neutral-400 hover:text-white"
              >
                • Full 2-Piece Sportswear Kits
              </button>
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                currentPage === 'about' ? 'bg-[#00ff41]/10 text-[#00ff41] font-bold' : 'text-neutral-200 hover:bg-[#141414]'
              }`}
            >
              3. About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                currentPage === 'contact' ? 'bg-[#00ff41]/10 text-[#00ff41] font-bold' : 'text-neutral-200 hover:bg-[#141414]'
              }`}
            >
              4. Contact
            </button>
          </div>

          <div className="pt-2">
            <a
              href={generateDirectInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Chat with Owner ({OWNER_WHATSAPP_NUMBER})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
