'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import WhereToBuy from '@/components/WhereToBuy';
import News from '@/components/News';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Loading from '@/components/Loading';

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleProductClick = (productId: string) => {
    // Set the selected product
    setSelectedProductId(productId);

    // Scroll to where to buy section
    setTimeout(() => {
      const whereToBuySection = document.getElementById('where-to-buy');
      if (whereToBuySection) {
        whereToBuySection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}

      <main className="overflow-x-hidden">
        <Navigation />
        <Hero />
        <Products onProductClick={handleProductClick} />
        <WhereToBuy selectedProductId={selectedProductId} />
        <News />
        <Footer />
      </main>
    </>
  );
}