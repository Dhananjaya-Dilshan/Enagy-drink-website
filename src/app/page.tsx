'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import WhyRide from '@/components/Whyride';

import WhereToBuy from '@/components/WhereToBuy';
import News from '@/components/News';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Loading from '@/components/Loading';

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setTimeout(() => {
      document.getElementById('where-to-buy')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onLoadingComplete={handleLoadingComplete} />}

      {/* Floating mobile buy button */}
      <div className="floating-buy-btn">
        <button
          onClick={() => document.getElementById('where-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            padding: '0.875rem 1.5rem',
            background: 'linear-gradient(135deg, #FF1F3D, #CC0026)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(255,31,61,0.5)',
            animation: 'glowPulse 2s ease-in-out infinite',
          }}
        >
          🔥 BUY NOW
        </button>
      </div>

      <main style={{ overflow: 'hidden' }}>
        <Navigation />
        <Hero />
        <Products onProductClick={handleProductClick} />
        <WhyRide />
        
        <WhereToBuy selectedProductId={selectedProductId} />
        <News />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}