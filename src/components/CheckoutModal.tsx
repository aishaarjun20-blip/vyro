import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ShoppingBag,
  ArrowLeft,
  Truck,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { CustomerOrderInfo } from '../types';
import { generateWhatsAppOrderUrl, formatWhatsAppOrderMessage } from '../utils/whatsapp';
import { OWNER_WHATSAPP_NUMBER } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, totalAmount, totalItemsCount, clearCart } = useCart();

  const [formData, setFormData] = useState<CustomerOrderInfo>({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    customNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerOrderInfo, string>>>({});
  const [isCopied, setIsCopied] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerOrderInfo, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile/WhatsApp number';
    } else if (!/^[0-9+ ]{10,14}$/.test(formData.phone.trim().replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.address.trim()) newErrors.address = 'Please enter complete delivery address';
    if (!formData.city.trim()) newErrors.city = 'Please enter city';
    if (!formData.state.trim()) newErrors.state = 'Please enter state';
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = 'Please enter PIN code';
    } else if (!/^[0-9]{6}$/.test(formData.pinCode.trim())) {
      newErrors.pinCode = 'PIN code must be 6 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a3e635', '#ffffff', '#3b82f6', '#ef4444'],
      });
    } catch {
      // safe fallback
    }

    // Generate WhatsApp deep link
    const whatsappUrl = generateWhatsAppOrderUrl(formData, cart, totalAmount);

    // Open WhatsApp in new tab / application
    window.open(whatsappUrl, '_blank');

    setOrderPlaced(true);
  };

  const handleCopyMessage = () => {
    const formatted = formatWhatsAppOrderMessage(formData, cart, totalAmount);
    navigator.clipboard.writeText(formatted);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleResetAndClose = () => {
    if (orderPlaced) {
      clearCart();
    }
    setOrderPlaced(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-neutral-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="p-6 border-b border-white/10 bg-[#121212] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/20 flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-outfit text-white">VYRO Fast WhatsApp Checkout</h2>
              <p className="text-xs text-neutral-400">Direct order confirmation with VYRO owner ({OWNER_WHATSAPP_NUMBER})</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#252525] text-neutral-400 hover:text-white transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ORDER SUCCESS STATE */}
        {orderPlaced ? (
          <div className="p-8 sm:p-12 text-center space-y-6 max-w-xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#00ff41]/20 border-2 border-[#00ff41] flex items-center justify-center mx-auto text-[#00ff41] shadow-xl shadow-[#00ff41]/20">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black font-sport uppercase tracking-wider text-white">
                WhatsApp Order Created!
              </h3>
              <p className="text-sm text-neutral-300">
                WhatsApp should have opened with your order details pre-filled for the owner. 
                If it didn't open automatically, use the buttons below.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#121212] border border-white/10 text-left text-xs space-y-2">
              <div className="font-tech uppercase text-neutral-400 font-bold">Order Summary Sent:</div>
              <div className="text-white font-medium">Customer: {formData.fullName} ({formData.phone})</div>
              <div className="text-[#00ff41] font-bold font-sport text-lg">Total Amount: ₹{totalAmount}</div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={generateWhatsAppOrderUrl(formData, cart, totalAmount)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Re-open WhatsApp Chat ({OWNER_WHATSAPP_NUMBER})</span>
              </a>

              <button
                onClick={handleCopyMessage}
                className="w-full py-3 rounded-2xl bg-[#121212] hover:bg-[#1c1c1c] border border-white/10 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-2 transition-colors"
              >
                {isCopied ? <Check className="w-4 h-4 text-[#00ff41]" /> : <Copy className="w-4 h-4" />}
                <span>{isCopied ? 'Order Message Copied to Clipboard!' : 'Copy Order Text Message'}</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 rounded-xl bg-transparent text-neutral-400 hover:text-white text-xs font-medium"
              >
                Done / Back to Store
              </button>
            </div>
          </div>
        ) : (
          /* CHECKOUT FORM & SUMMARY */
          <form onSubmit={handlePlaceOrderWhatsApp} className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Form: Delivery Information */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-base font-bold font-outfit text-white mb-1 flex items-center gap-2">
                    <span>1. Delivery Information</span>
                    <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30">
                      Cash on Delivery / UPI
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Enter your contact & shipping address so we can route your order directly.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-tech uppercase font-bold text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="checkout-name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Arjun Sharma"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#00ff41] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                    {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* WhatsApp Mobile Number */}
                  <div>
                    <label className="block text-xs font-tech uppercase font-bold text-neutral-300 mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="checkout-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#00ff41] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                    {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Complete Delivery Address */}
                  <div>
                    <label className="block text-xs font-tech uppercase font-bold text-neutral-300 mb-1">
                      Complete Delivery Address (House/Street/Area) *
                    </label>
                    <textarea
                      id="checkout-address"
                      required
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Flat 402, Block B, Silver Heights, MG Road"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#00ff41] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors resize-none"
                    />
                    {errors.address && <p className="text-[11px] text-red-400 mt-1">{errors.address}</p>}
                  </div>

                  {/* City, State, PIN Code in 3-col grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-tech uppercase font-bold text-neutral-300 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="checkout-city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lucknow"
                        className="w-full bg-[#121212] border border-white/10 focus:border-[#00ff41] rounded-xl px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                      {errors.city && <p className="text-[11px] text-red-400 mt-1">{errors.city}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase font-bold text-neutral-300 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="checkout-state"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. UP"
                        className="w-full bg-[#121212] border border-white/10 focus:border-[#00ff41] rounded-xl px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                      {errors.state && <p className="text-[11px] text-red-400 mt-1">{errors.state}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-tech uppercase font-bold text-neutral-300 mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        id="checkout-pin"
                        maxLength={6}
                        required
                        value={formData.pinCode}
                        onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                        placeholder="e.g. 226001"
                        className="w-full bg-[#121212] border border-white/10 focus:border-[#00ff41] rounded-xl px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                      {errors.pinCode && <p className="text-[11px] text-red-400 mt-1">{errors.pinCode}</p>}
                    </div>
                  </div>

                  {/* Special Notes / Team squad details */}
                  <div>
                    <label className="block text-xs font-tech uppercase font-bold text-neutral-400 mb-1">
                      Custom Requests / Match Date Notes (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.customNotes}
                      onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                      placeholder="e.g. Please print sponsor logo or deliver before weekend match"
                      className="w-full bg-[#121212] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary & Place Order CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#121212] border border-white/10 p-5 sm:p-6">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="text-sm font-bold font-tech uppercase tracking-wider text-white">
                      Order Summary ({totalItemsCount} items)
                    </h3>
                    <span className="text-xs text-[#00ff41] font-semibold">Instant WA Order</span>
                  </div>

                  {/* Itemized scroll */}
                  <div className="max-h-56 overflow-y-auto space-y-3 pr-1 divide-y divide-white/5">
                    {cart.map((item) => (
                      <div key={item.id} className="pt-2 first:pt-0 space-y-1 text-xs">
                        <div className="flex items-start justify-between">
                          <span className="font-semibold text-white truncate max-w-[180px]">{item.name}</span>
                          <span className="font-bold text-white font-sport text-sm">₹{item.unitPrice * item.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                          <span className={item.quality === 'premium' ? 'text-[#00ff41] font-bold' : 'text-neutral-300'}>
                            {item.quality === 'premium' ? 'Premium (₹800)' : 'Normal (₹650)'}
                          </span>
                          <span>• Size {item.size}</span>
                          <span>• Qty {item.quantity}</span>
                        </div>
                        {(item.customName || item.customNumber) && (
                          <div className="text-[10px] text-neutral-400 font-mono">
                            Print: {item.customName || ''} #{item.customNumber || ''}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Price Totals */}
                  <div className="border-t border-white/10 pt-3 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Subtotal</span>
                      <span className="text-white">₹{totalAmount}</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Pan-India Shipping</span>
                      <span className="text-[#00ff41] font-semibold">FREE</span>
                    </div>
                    <div className="flex items-center justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                      <span>Total to Pay</span>
                      <span className="font-sport text-2xl text-[#00ff41]">₹{totalAmount}</span>
                    </div>
                  </div>
                </div>

                {/* Big Order via WhatsApp CTA */}
                <div className="pt-6 space-y-3">
                  <button
                    type="submit"
                    id="place-order-whatsapp-btn"
                    className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all group"
                  >
                    <MessageCircle className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                    <span>Order via WhatsApp ({OWNER_WHATSAPP_NUMBER})</span>
                  </button>

                  <p className="text-[11px] text-center text-neutral-400">
                    🔒 No payment required now. Your order will be sent to the owner on WhatsApp to confirm delivery address & payment preference.
                  </p>
                </div>

              </div>

            </div>
          </form>
        )}

      </div>
    </div>
  );
};
