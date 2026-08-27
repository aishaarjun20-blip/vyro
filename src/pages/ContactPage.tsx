import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  ShieldCheck, 
  Truck,
  Sparkles,
  Users
} from 'lucide-react';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';
import { generateDirectInquiryWhatsAppUrl } from '../utils/whatsapp';

interface ContactPageProps {
  onNavigate: (page: 'home' | 'products' | 'about' | 'contact') => void;
  onOpenSizeGuide?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenSizeGuide }) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('Single Order (Jersey/Pants)');
  const [teamName, setTeamName] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [qualityPref, setQualityPref] = useState<'normal' | 'premium' | 'both'>('normal');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const FAQS = [
    {
      q: 'How fast is delivery across India?',
      a: 'Standard orders are dispatched within 24-48 business hours after confirmation. Delivery typically takes 3-6 business days depending on your pin code. Custom squad sublimations take 4-7 business days.',
    },
    {
      q: 'What is the exact difference between Normal (₹650) and Premium (₹800)?',
      a: 'The Normal Quality (₹650) is crafted from 180 GSM Micro-Poly Interlock with quick-dry sweat evaporation — perfect for regular matches and gym sessions. The Premium Quality (₹800) uses 220 GSM HydroCool™ Air-Knit fabric with 4-way stretch, ultra-deep sublimation color depth, and anti-cling airflow panels for professional tournament play.',
    },
    {
      q: 'Can I add my custom name and jersey number on the back?',
      a: 'Yes! Custom player names and numbers can be added to any VYRO jersey or set. You can specify your desired name & number during checkout or directly via our WhatsApp support hotline.',
    },
    {
      q: 'Do you offer bulk discounts for school, college, or club sports teams?',
      a: 'Absolutely! For team orders of 10+ jerseys or full kits, we provide custom sponsor logo placements, captain badges, and complimentary squad customization. Chat directly with the owner on WhatsApp (+91 70074 99344) for instant bulk pricing.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major Indian payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Bank Transfer upon WhatsApp confirmation with our team.',
    },
    {
      q: 'How do I choose the right size?',
      a: 'Our sizes run standard athletic fit from S (38" chest) up to 3XL (48" chest). For an athletic slim fit, choose your regular t-shirt size. For a looser match jersey fit, order one size up. Check our official Size Guide for chest and length measurements.',
    },
  ];

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please enter your Name and WhatsApp phone number.');
      return;
    }

    const cleanPhone = OWNER_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
    const text = `*New VYRO Sports Inquiry via Website*%0A%0A` +
      `*Name:* ${encodeURIComponent(fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Inquiry Type:* ${encodeURIComponent(inquiryType)}%0A` +
      (teamName ? `*Team/Club:* ${encodeURIComponent(teamName)}%0A` : '') +
      `*Expected Quantity:* ${encodeURIComponent(quantity)}%0A` +
      `*Fabric Preference:* ${qualityPref === 'premium' ? 'Premium (₹800)' : qualityPref === 'normal' ? 'Normal (₹650)' : 'Both / Need Advice'}%0A` +
      (message ? `*Message:* ${encodeURIComponent(message)}%0A` : '') +
      `%0A_Please assist me with details and catalog pricing._`;

    const url = `https://wa.me/${cleanPhone}?text=${text}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-16 lg:py-20 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#121212] via-[#0e0e0e] to-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ff41]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/30 text-xs font-bold font-tech uppercase tracking-widest text-[#00ff41]">
            <MessageCircle className="w-3.5 h-3.5 fill-[#00ff41]" />
            <span>Direct Athlete Support</span>
          </div>

          <h1 className="font-sport text-5xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none">
            GET IN TOUCH WITH <span className="text-[#00ff41]">VYRO</span>
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto font-outfit">
            Have questions about sizes, Normal (₹650) vs Premium (₹800) quality, custom squad jerseys, or shipping? 
            Our team and brand owner are always ready to connect directly.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contacts + Message Generator Form */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Contact Channels (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Priority Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0d0d0d] border border-emerald-500/40 shadow-xl shadow-emerald-500/10 space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <span className="text-[10px] font-bold font-tech uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Fastest Response (Instant)
                  </span>
                </div>

                <div>
                  <h3 className="font-sport text-2xl font-bold text-white uppercase">Direct WhatsApp Owner Chat</h3>
                  <p className="text-xs text-neutral-300 mt-1 font-outfit">
                    Chat directly with our founder for instant sizing recommendations, order updates, and custom team jersey previews.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-xs text-neutral-300 font-mono flex items-center justify-between">
                  <span>Number:</span>
                  <strong className="text-emerald-400 text-sm font-bold">{OWNER_WHATSAPP_NUMBER}</strong>
                </div>

                <a
                  href={generateDirectInquiryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>

              {/* Other Contact Channels */}
              <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 space-y-5">
                <h4 className="font-tech text-xs uppercase tracking-wider text-neutral-400 font-bold">Alternative Channels</h4>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-[#00ff41] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Phone Support</p>
                    <p className="text-sm font-bold text-white font-mono">{OWNER_WHATSAPP_NUMBER}</p>
                    <p className="text-[11px] text-neutral-500">Mon - Sun: 9:00 AM - 10:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-4">
                  <div className="w-9 h-9 rounded-xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-[#00ff41] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Email Support</p>
                    <p className="text-sm font-bold text-white">support@vyrosports.com</p>
                    <p className="text-[11px] text-neutral-500">Replies within 12-24 business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-white/5 pt-4">
                  <div className="w-9 h-9 rounded-xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-[#00ff41] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">HQ & Printing Hub</p>
                    <p className="text-sm font-bold text-white">VYRO Sportswear Production Facility</p>
                    <p className="text-[11px] text-neutral-500">India • Direct Express Nationwide Dispatch</p>
                  </div>
                </div>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#121212] border border-white/10 text-center">
                  <Truck className="w-5 h-5 text-[#00ff41] mx-auto mb-1" />
                  <p className="text-xs font-bold text-white">Pan-India Delivery</p>
                  <p className="text-[10px] text-neutral-400">Doorstep courier shipping</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#121212] border border-white/10 text-center">
                  <ShieldCheck className="w-5 h-5 text-[#00ff41] mx-auto mb-1" />
                  <p className="text-xs font-bold text-white">Quality Guarantee</p>
                  <p className="text-[10px] text-neutral-400">Anti-fade sublimation</p>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Message / Squad Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 space-y-6">
                
                <div>
                  <span className="font-tech text-xs uppercase tracking-widest text-[#00ff41] font-bold">
                    Quick Inquiry Generator
                  </span>
                  <h3 className="font-sport text-3xl font-bold uppercase text-white tracking-tight mt-1">
                    SEND A DIRECT INQUIRY
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 font-outfit">
                    Fill out your requirements below to instantly generate and launch a personalized message with our owner.
                  </p>
                </div>

                {isSubmitted && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>WhatsApp chat initiated! Our team will respond shortly. If WhatsApp didn't open automatically, use the direct button on the left.</span>
                  </div>
                )}

                <form onSubmit={handleSendViaWhatsApp} className="space-y-4 text-xs">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-neutral-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Arjun Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-neutral-500 focus:border-[#00ff41] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-neutral-300">WhatsApp Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-neutral-500 focus:border-[#00ff41] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type & Expected Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-neutral-300">Inquiry Purpose</label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white focus:border-[#00ff41] focus:outline-none"
                      >
                        <option value="Single Order (Jersey/Pants)">Single Order (Jersey / Pants)</option>
                        <option value="Custom Team Squad Order">Custom Team Squad Order (5+ units)</option>
                        <option value="Quality Tier Advice (₹650 vs ₹800)">Quality Tier Advice (₹650 vs ₹800)</option>
                        <option value="Sizing & Measurements Guidance">Sizing & Measurements Guidance</option>
                        <option value="Tournament / Bulk Sponsorship">Tournament / Bulk Sponsorship</option>
                        <option value="Order Tracking & Status">Order Tracking & Status</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-neutral-300">Estimated Quantity</label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white focus:border-[#00ff41] focus:outline-none"
                      >
                        <option value="1 Unit">1 Unit (Personal wear)</option>
                        <option value="2-4 Units">2 - 4 Units (Small bundle)</option>
                        <option value="5-15 Units">5 - 15 Units (Sports Squad)</option>
                        <option value="16-30 Units">16 - 30 Units (Full Team + Subs)</option>
                        <option value="30+ Units">30+ Units (Club / Academy Tournament)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Team Name */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-neutral-300">Team / Club / College Name (Optional)</label>
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="e.g. Thunder FC / Rising Stars Cricket Club"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-neutral-500 focus:border-[#00ff41] focus:outline-none"
                    />
                  </div>

                  {/* Quality Tier Preference */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-neutral-300">Fabric Quality Interest</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setQualityPref('normal')}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          qualityPref === 'normal'
                            ? 'bg-[#1c1c1c] border-[#00ff41] text-[#00ff41] font-bold'
                            : 'bg-[#0a0a0a] border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <p className="text-[10px] uppercase font-tech">Normal</p>
                        <p className="text-xs font-bold text-white">₹650 (180 GSM)</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setQualityPref('premium')}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          qualityPref === 'premium'
                            ? 'bg-[#1c1c1c] border-[#00ff41] text-[#00ff41] font-bold'
                            : 'bg-[#0a0a0a] border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <p className="text-[10px] uppercase font-tech text-[#00ff41]">Premium</p>
                        <p className="text-xs font-bold text-[#00ff41]">₹800 (220 GSM)</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setQualityPref('both')}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          qualityPref === 'both'
                            ? 'bg-[#1c1c1c] border-[#00ff41] text-[#00ff41] font-bold'
                            : 'bg-[#0a0a0a] border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <p className="text-[10px] uppercase font-tech">Compare</p>
                        <p className="text-xs font-bold text-white">Need Guidance</p>
                      </button>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="font-semibold text-neutral-300">Message / Special Instructions</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your preferred colors, player names, numbers, or specific tournament deadlines..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-neutral-500 focus:border-[#00ff41] focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit via WhatsApp */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#00ff41]/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp (+91 70074 99344)</span>
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff41]/10 border border-[#00ff41]/30 text-xs font-bold font-tech uppercase tracking-widest text-[#00ff41]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-sport text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto font-outfit">
              Everything you need to know about placing orders, fabric standards, customization, and delivery.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#121212] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-[#00ff41] transition-colors"
                  >
                    <span className="font-outfit">{faq.q}</span>
                    <div className="w-7 h-7 rounded-lg bg-[#1c1c1c] flex items-center justify-center shrink-0 text-neutral-400">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#00ff41]" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-white/5 pt-3 font-outfit">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Size Guide CTA within FAQ */}
          <div className="p-6 rounded-3xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-sport text-lg font-bold text-white uppercase">Need Help Picking Your Size?</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Check our official chest, shoulder, and length measurements.</p>
            </div>
            <button
              onClick={onOpenSizeGuide}
              className="px-5 py-2.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-[#00ff41] text-xs font-bold uppercase font-tech tracking-wider border border-[#00ff41]/30 transition-all"
            >
              Open Size Guide (S - 3XL)
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
