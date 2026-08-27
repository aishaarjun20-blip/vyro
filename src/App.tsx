import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar, PageType } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Product, ProductCategory, QualityType } from './types';

function MainStore() {
  const { addToCart } = useCart();

  // Page routing state: 'home' | 'products' | 'about' | 'contact'
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [productInitialCategory, setProductInitialCategory] = useState<ProductCategory>('all');
  const [productInitialQuality, setProductInitialQuality] = useState<QualityType | 'all'>('all');

  // Modal States
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeProductQuality, setActiveProductQuality] = useState<QualityType>('normal');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  // Sync with browser URL hash for bookmarking / browser back
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'products' || hash === 'jerseys' || hash === 'pants' || hash === 'sets') {
        setCurrentPage('products');
        if (hash === 'jerseys' || hash === 'pants' || hash === 'sets') {
          setProductInitialCategory(hash as ProductCategory);
        }
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Page navigation handler
  const handleNavigate = (page: PageType, subsection?: string) => {
    setCurrentPage(page);
    window.location.hash = page;

    if (page === 'products' && subsection) {
      if (subsection === 'jerseys' || subsection === 'pants' || subsection === 'sets') {
        setProductInitialCategory(subsection as ProductCategory);
      } else if (subsection === 'all') {
        setProductInitialCategory('all');
      }
    }

    // Scroll to top on page switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductDetails = (product: Product, defaultQuality: QualityType = 'normal') => {
    setActiveProduct(product);
    setActiveProductQuality(defaultQuality);
    setIsDetailModalOpen(true);
  };

  const handleDirectCheckoutFromDetails = (
    product: Product,
    quality: QualityType,
    size: string,
    color: string,
    quantity: number,
    customName?: string,
    customNumber?: string
  ) => {
    const unitPrice = quality === 'premium' ? product.premiumPrice : product.normalPrice;
    addToCart({
      productId: product.id,
      name: product.name,
      category: product.category,
      image: product.images[0],
      quality,
      size,
      color,
      customName,
      customNumber,
      unitPrice,
      quantity,
    });
    setIsDetailModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col selection:bg-[#00ff41] selection:text-black">
      {/* Sticky Header with 4-page menu */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page View Switcher */}
      <main className="flex-1">
        {/* Page 1: Home */}
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProductDetails={handleOpenProductDetails}
          />
        )}

        {/* Page 2: Products (with deep subsections) */}
        {currentPage === 'products' && (
          <ProductsPage
            key={productInitialCategory}
            onOpenDetails={handleOpenProductDetails}
            initialCategory={productInitialCategory}
            initialQualityTier={productInitialQuality}
          />
        )}

        {/* Page 3: About Us */}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {/* Page 4: Contact */}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProduct}
        initialQuality={activeProductQuality}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onDirectCheckout={handleDirectCheckoutFromDetails}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutModalOpen(true)} />

      {/* WhatsApp Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
      />

      {/* Size Guide Chart Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainStore />
    </CartProvider>
  );
}
