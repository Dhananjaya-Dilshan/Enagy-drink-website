'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ProductsProps {
  onProductClick: (productId: string) => void;
}

const flavorColors: Record<string, { accent: string; glow: string }> = {
  '1': { accent: '#FF1F3D', glow: 'rgba(255,31,61,0.3)' },
  '2': { accent: '#00D4FF', glow: 'rgba(0,212,255,0.3)' },
  '3': { accent: '#00FF88', glow: 'rgba(0,255,136,0.3)' },
  '4': { accent: '#00D4FF', glow: 'rgba(66, 205, 245, 0.85)' },
};

function ProductCard({ product, onProductClick, index }: { product: typeof products[0]; onProductClick: (id: string) => void; index: number }) {
  const { accent, glow } = flavorColors[product.id] || { accent: '#FF1F3D', glow: 'rgba(255,31,61,0.3)' };
  const maxCaffeine = 240;
  const caffeinePercent = (product.caffeine / maxCaffeine) * 100;
  const [hovered, setHovered] = useState(false);
  const [barAnimated, setBarAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setBarAnimated(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="product-card"
      style={{
        borderRadius: '12px',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column',
        animationDelay: `${index * 0.1}s`,
        border: hovered ? `1px solid ${accent}60` : '1px solid rgba(255,255,255,0.06)',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${glow}` : 'none',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'all 0.4s ease',
      }}
      onClick={() => onProductClick(product.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >


      {/* Image */}
      <div style={{
        position: 'relative', height: '240px',
        overflow: 'hidden', borderRadius: '12px 12px 0 0',
        background: 'rgba(0,0,0,0.3)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${accent}15 0%, transparent 70%)`,
          zIndex: 1,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }} />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          style={{
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '1.8rem', letterSpacing: '0.05em',
          color: 'white', margin: '0 0 0.25rem 0',
        }}>
          {product.name}
        </h3>

        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)',
          margin: '0 0 1rem 0', lineHeight: 1.5,
        }}>
          {product.description.slice(0, 80)}...
        </p>

        {/* Caffeine meter */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)' }}>
              CAFFEINE
            </span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: accent }}>
              {product.caffeine}MG
            </span>
          </div>
          <div className="caffeine-bar">
            <div
              className="caffeine-bar-fill"
              style={{
                width: barAnimated ? `${caffeinePercent}%` : '0%',
                background: `linear-gradient(90deg, ${accent}, ${accent}90)`,
                boxShadow: `0 0 10px ${glow}`,
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '1rem', marginBottom: '1.5rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>CALORIES</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', color: 'white' }}>{product.calories}</div>
          </div>
          
        </div>


      </div>
    </div>
  );
}

export default function Products({ onProductClick }: ProductsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      className="energy-bg"
      style={{ minHeight: '100vh', padding: '6rem 0', position: 'relative' }}
      ref={sectionRef}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: '5rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease',
        }}>
          <div style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.7rem', letterSpacing: '0.4em',
              textTransform: 'uppercase', color: '#FF1F3D',
            }}>
              ⚡ Choose Your Formula
            </span>
          </div>
        
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1, margin: 0,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FF1F3D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Our Products
          </h2>
          <p style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)',
            maxWidth: '500px', margin: '1.5rem auto 0',
            fontWeight: 500,
          }}>
            Ride is engineered for peak performance. Four flavors, one mission — dominate your day.
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {products.map((product, i) => (
            <div
              key={product.id}
              style={{
                position: 'relative',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                transition: `all 0.8s ease ${i * 0.1}s`,
              }}
            >
              <ProductCard product={product} onProductClick={onProductClick} index={i} />
            </div>
          ))}
        </div>

        {/* Compare button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => document.getElementById('where-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ride btn-outline"
          >
            <span>Find Where To Buy →</span>
          </button>
        </div>
      </div>
    </section>
  );
}