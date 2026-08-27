import React from 'react';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { JerseyArtwork } from './JerseyArtwork';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalAmount,
    totalItemsCount,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col justify-between text-neutral-100">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121212]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/20 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold font-outfit text-white">Your Sportswear Cart</h2>
                <p className="text-xs text-neutral-400">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} ready for order
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full bg-[#1c1c1c] hover:bg-[#252525] text-neutral-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center mx-auto text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Your cart is empty</h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
                    Explore our high-performance jerseys & sports pants with Normal (₹650) and Premium (₹800) quality.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-black text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Clear all option */}
                <div className="flex items-center justify-between text-xs pb-2">
                  <span className="text-neutral-400">Review selected gear:</span>
                  <button
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 flex items-center gap-1 font-medium transition-colors"
                  >
                    <Trash2 className="w-3 h-3" /> Clear Cart
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#121212] border border-white/10 space-y-3 relative hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Item Thumbnail */}
                      <div className="w-20 h-20 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 p-1">
                        <JerseyArtwork
                          productId={item.productId}
                          colorHex="#00ff41"
                          view="front"
                          customName={item.customName}
                          customNumber={item.customNumber}
                          className="w-full h-full"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-white truncate font-outfit">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Quality Badge & Size */}
                        <div className="flex flex-wrap items-center gap-2 pt-0.5">
                          <span
                            className={`text-[10px] font-tech font-bold uppercase px-2 py-0.5 rounded ${
                              item.quality === 'premium'
                                ? 'bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41]/30'
                                : 'bg-[#1c1c1c] text-neutral-300 border border-white/5'
                            }`}
                          >
                            {item.quality === 'premium' ? '★ Premium (₹800)' : 'Normal (₹650)'}
                          </span>

                          <span className="text-[10px] font-tech uppercase px-2 py-0.5 rounded bg-[#1c1c1c] text-neutral-300 border border-white/5">
                            Size: {item.size}
                          </span>

                          <span className="text-[10px] font-tech uppercase px-2 py-0.5 rounded bg-[#1c1c1c] text-neutral-300 border border-white/5 truncate max-w-[100px]">
                            {item.color}
                          </span>
                        </div>

                        {/* Custom Name / Number Tag if provided */}
                        {(item.customName || item.customNumber) && (
                          <div className="text-[11px] font-mono text-[#00ff41] pt-0.5">
                            🏷️ {item.customName ? `NAME: ${item.customName} ` : ''}
                            {item.customNumber ? `NO: ${item.customNumber}` : ''}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quantity controls & Line Total */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="flex items-center gap-2 bg-[#0a0a0a] rounded-lg p-1 border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-[#161616] hover:bg-[#202020] text-neutral-300 flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-[#161616] hover:bg-[#202020] text-neutral-300 flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-neutral-400 block font-tech">
                          {item.quantity} × ₹{item.unitPrice}
                        </span>
                        <span className="text-base font-bold font-sport text-white">
                          ₹{item.unitPrice * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer with Summary & Checkout Trigger */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#121212] space-y-4">
              {/* Calculations */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Subtotal ({totalItemsCount} items)</span>
                  <span className="font-semibold text-white">₹{totalAmount}</span>
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>Delivery Charges</span>
                  <span className="text-[#00ff41] font-semibold">Free Pan-India Delivery</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>Total Amount</span>
                  <span className="font-sport text-2xl text-[#00ff41]">₹{totalAmount}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  id="cart-proceed-checkout-btn"
                  onClick={() => {
                    setIsCartOpen(false);
                    onProceedToCheckout();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00ff41] hover:bg-[#33ff66] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#00ff41]/20 hover:shadow-[#00ff41]/30 transition-all"
                >
                  <span>Proceed to Buy / Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-[#1c1c1c] hover:bg-[#252525] text-neutral-300 font-semibold text-xs transition-colors border border-white/5"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Quality & WhatsApp reassurance */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 font-tech uppercase tracking-wider pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00ff41]" />
                <span>Orders confirmed directly on WhatsApp with owner</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
