'use client';

import { useEffect, useRef, useState } from 'react';

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: '8rem 2rem',
        background: 'var(--ride-card)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      ref={ref}
    >
      {/* Dramatic background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,31,61,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,212,255,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 80% 20%, rgba(0,255,136,0.05) 0%, transparent 60%)
        `,
      }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.06,
        backgroundImage: `linear-gradient(rgba(255,31,61,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,31,61,0.8) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i * 8.5) % 100}%`,
            bottom: `${(i * 13) % 60}%`,
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            background: i % 2 === 0 ? '#FF1F3D' : '#00FF88',
            animationDuration: `${3 + (i % 3)}s`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
        {/* Pre-headline */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease',
        }}>
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.7rem', letterSpacing: '0.4em',
            textTransform: 'uppercase', color: '#FF1F3D',
          }}>
            ⚡ The Time Is Now
          </span>
        </div>

        {/* Main headline */}
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(3.5rem, 12vw, 9rem)',
          lineHeight: 0.95, margin: '1rem 0',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 0.8s ease 0.15s',
        }}>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            READY TO
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #FF1F3D 0%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
          }}>
            LEVEL UP?
          </span>
        </h2>

        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)',
          maxWidth: '500px', margin: '0 auto 3rem',
          lineHeight: 1.6, fontWeight: 500,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease 0.25s',
        }}>
          Your next level of performance is one can away. Find RIDE at 635+ outlets across Sri Lanka.
        </p>

        {/* Big CTA button */}
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.8s ease 0.35s',
        }}>
          <button
            onClick={() => document.getElementById('where-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900,
              fontSize: '1rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '1.25rem 4rem',
              background: 'linear-gradient(135deg, #FF1F3D 0%, #CC0026 100%)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              clipPath: 'polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)',
              animation: 'glowPulse 2s ease-in-out infinite',
              transition: 'transform 0.3s ease',
              
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
          >
             BUY RIDE NOW
          </button>
        </div>

        {/* Sub text */}
        <p style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '0.6rem', letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.25)',
          marginTop: '1.5rem',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.8s ease 0.5s',
        }}>
          AVAILABLE AT CARGILLS · GLOMARK · KEELLS AND MORE
        </p>
      </div>
    </section>
  );
}