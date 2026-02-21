'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface WhereToBuyProps {
  selectedProductId?: string | null;
}

const retailers = [
  {
    id: 'cargills',
    name: 'Cargills Food City',
    description: 'Sri Lanka\'s leading supermarket chain with over 400 outlets island-wide',
    website: 'https://www.cargillsceylon.com',
    accent: '#FF1F3D',
    glow: 'rgba(255,31,61,0.25)',
    locations: '400+',
    locationLabel: 'OUTLETS',
    hours: 'Open Daily',
    image: '/images/Frame-261-1.png',
  },
  {
    id: 'glomark',
    name: 'Keells Super',
    description: 'Premium supermarket experience with 135+ stores across Sri Lanka',
    website: 'https://www.glomark.lk',
    accent: '#00FF88',
    glow: 'rgba(0,255,136,0.2)',
    locations: '100+',
    locationLabel: 'LOCATIONS',
    hours: 'Open Daily',
    image: '/images/unnamed.jpg',
  },
  {
    id: 'keells',
    name: 'Glomark',
    description: 'Your neighborhood supermarket bringing better life to home',
    website: 'https://www.keellssuper.com',
    accent: '#00D4FF',
    glow: 'rgba(0,212,255,0.2)',
    locations: '135+',
    locationLabel: 'STORES',
    hours: 'Open Daily',
    image: '/images/GlomarkLogo.jpg',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const num = parseInt(target.replace(/\D/g, ''));
    let current = 0;
    const step = Math.ceil(num / 30);
    const interval = setInterval(() => {
      current = Math.min(current + step, num);
      setDisplay(`${current}${suffix}`);
      if (current >= num) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, target, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function WhereToBuy({ selectedProductId }: WhereToBuyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProductId) {
      setTimeout(() => {
        document.getElementById('where-to-buy')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedProductId]);

  return (
    <section
      id="where-to-buy"
      style={{ minHeight: '100vh', padding: '6rem 0', position: 'relative', background: 'var(--ride-bg)' }}
      ref={sectionRef}
    >
      {/* Animated map background hint */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
        background: `radial-gradient(ellipse 100% 60% at 50% 100%, rgba(0,212,255,0.06) 0%, transparent 60%)`,
      }}>
        {/* Grid dots pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.15,
          backgroundImage: `radial-gradient(rgba(0,212,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>

        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: '5rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease',
        }}>
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: '#00D4FF',
          }}>
            📍 Find RIDE Near You
          </span>
         
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1, margin: 0,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #00D4FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Where to Buy
          </h2>
          <p style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)',
            maxWidth: '500px', margin: '1.5rem auto 0', fontWeight: 500,
          }}>
            Find our premium energy drinks at these trusted retailers across Sri Lanka
          </p>
        </div>

        {/* Total store count banner */}
        <div style={{
          background: 'var(--ride-card)',
          border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: '12px', padding: '2rem',
          display: 'flex', justifyContent: 'center', gap: '4rem',
          marginBottom: '3rem',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease 0.2s',
        }} className="store-banner">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', lineHeight: 1, color: '#FF1F3D', textShadow: '0 0 20px rgba(255,31,61,0.5)' }}>
              <AnimatedCounter target="635" suffix="+" />
            </div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>TOTAL OUTLETS</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', lineHeight: 1, color: '#00FF88', textShadow: '0 0 20px rgba(0,255,136,0.5)' }}>
              <AnimatedCounter target="3" />
            </div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>RETAIL PARTNERS</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', lineHeight: 1, color: '#00D4FF', textShadow: '0 0 20px rgba(0,212,255,0.5)' }}>
              🇱🇰
            </div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>ISLAND-WIDE</div>
          </div>
        </div>

        {/* Retailer cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {retailers.map((r, i) => (
            <div
              key={r.id}
              className="retailer-card"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                transition: `all 0.8s ease ${i * 0.15}s`,
              }}
            >
              {/* Logo area */}
              <div style={{
                padding: '2rem', background: 'rgba(0,0,0,0.3)',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                position: 'relative', height: '140px',
                borderBottom: `1px solid ${r.accent}20`,
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${r.accent}10 0%, transparent 70%)`,
                }} />
                <div style={{
                  background: 'white', borderRadius: '10px',
                  padding: '1rem 1.5rem',
                  position: 'relative', zIndex: 1,
                  boxShadow: `0 8px 30px rgba(0,0,0,0.4), 0 0 20px ${r.glow}`,
                }}>
                  <Image
                    src={r.image}
                    alt={r.name}
                    width={160}
                    height={60}
                    style={{ objectFit: 'contain', display: 'block', maxHeight: '60px' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.5rem', letterSpacing: '0.05em',
                  color: 'white', margin: '0 0 0.5rem 0',
                }}>
                  {r.name}
                </h3>

                <p style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 500,
                }}>
                  {r.description}
                </p>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    background: `${r.accent}10`,
                    border: `1px solid ${r.accent}25`,
                    borderRadius: '8px', padding: '0.75rem',
                  }}>
                    <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>
                      {r.locationLabel}
                    </div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: r.accent, lineHeight: 1 }}>
                      {r.locations}
                    </div>
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px', padding: '0.75rem',
                  }}>
                    <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>
                      OPENS
                    </div>
                    <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.9rem', color: 'white', fontWeight: 700 }}>
                      {r.hours}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={r.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ride"
                  style={{
                    display: 'block', width: '100%', textAlign: 'center',
                    background: `linear-gradient(135deg, ${r.accent} 0%, ${r.accent}99 100%)`,
                    color: r.accent === '#00FF88' ? '#0A0A0F' : 'white',
                    boxShadow: `0 4px 20px ${r.glow}`,
                    fontWeight: 900,
                  }}
                >
                  <span>Visit Website →</span>
                </a>
              </div>

              {/* Bottom accent */}
              <div style={{ height: '3px', background: `linear-gradient(90deg, transparent, ${r.accent}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .store-banner { flex-direction: column !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}