import { CartItem, CustomerOrderInfo } from '../types';
import { OWNER_PHONE_RAW } from '../data/products';

export function formatWhatsAppOrderMessage(
  customer: CustomerOrderInfo,
  cartItems: CartItem[],
  totalAmount: number
): string {
  const itemLines = cartItems
    .map((item, index) => {
      const qualityLabel = item.quality === 'premium' ? 'Premium Quality (₹800)' : 'Normal Quality (₹650)';
      let line = `${index + 1}. *${item.name}*\n   Quality: ${qualityLabel}\n   Size: ${item.size}\n   Color/Style: ${item.color}\n   Quantity: ${item.quantity}\n   Price: ₹${item.unitPrice * item.quantity}`;
      if (item.customName || item.customNumber) {
        line += `\n   Customization: ${item.customName ? `Name: ${item.customName.toUpperCase()} ` : ''}${item.customNumber ? `No: ${item.customNumber}` : ''}`;
      }
      return line;
    })
    .join('\n\n');

  const fullAddress = `${customer.address}, ${customer.city}, ${customer.state} - ${customer.pinCode}`;

  const message = `*VYRO NEW ORDER*
Customer Name: ${customer.fullName}
Phone: ${customer.phone}
Address: ${fullAddress}${customer.customNotes ? `\nNotes: ${customer.customNotes}` : ''}

ORDER DETAILS

${itemLines}

Total: ₹${totalAmount}

Please confirm my order.`;

  return message;
}

export function generateWhatsAppOrderUrl(
  customer: CustomerOrderInfo,
  cartItems: CartItem[],
  totalAmount: number
): string {
  const rawMessage = formatWhatsAppOrderMessage(customer, cartItems, totalAmount);
  return `https://wa.me/${OWNER_PHONE_RAW}?text=${encodeURIComponent(rawMessage)}`;
}

export function generateDirectInquiryWhatsAppUrl(customText?: string): string {
  const defaultText = customText || 'Hi VYRO Sports! I would like to inquire about your jerseys, sports pants, and custom team orders.';
  return `https://wa.me/${OWNER_PHONE_RAW}?text=${encodeURIComponent(defaultText)}`;
}

export function generateProductInquiryWhatsAppUrl(productName: string, quality: string = 'Normal'): string {
  const text = `Hi VYRO Sports! I am interested in ordering the *${productName}* (${quality} Quality). Could you please share more details and availability?`;
  return `https://wa.me/${OWNER_PHONE_RAW}?text=${encodeURIComponent(text)}`;
}
