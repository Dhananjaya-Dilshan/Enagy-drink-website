'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    video: '/videos/classic.mp4',
    title: 'CLASSIC',
    subtitle: 'UNLEASH YOUR ENERGY',
    tagline: 'Fuel performance. Power focus. Dominate your day.',
    accent: '#00D4FF',
    image: '/images/blue.jpg',
  },
  {
    video: '/videos/red-berry.mp4',
    title: 'RED BERRY',
    subtitle: 'WILD POWER WITHIN',
    tagline: 'Explosive fusion of wild berries meets unstoppable energy.',
    accent: '#FF1F3D',
    image: '/images/red.jpg',
  },
  {
    video: '/videos/sugar-free.mp4',
    title: 'SUGAR FREE',
    subtitle: 'ZERO LIMITS',
    tagline: 'Zero sugar. Maximum performance. No compromises.',
    accent: '#00FF88',
    image: '/images/lumeness blue.jpg',
  },
  {
    video: '/videos/green-apple.mp4',
    title: 'GREEN APPLE',
    subtitle: 'CRISP DOMINATION',
    tagline: 'Crisp. Refreshing. Unstoppable energy redefined.',
    accent: '#00FF88',
    image: '/images/green.jpg',
  },
];

const Particle = ({ style }: { style: React.CSSProperties }) => (
  <div className="particle" style={style} />
);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  // Generate particles
  useEffect(() => {
    const items = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 40}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        background: i % 3 === 0 ? '#FF1F3D' : i % 3 === 1 ? '#00FF88' : '#00D4FF',
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: `${Math.random() * 4 + 3}s`,
        animationDelay: `${Math.random() * 4}s`,
      } as React.CSSProperties,
    }));
    setParticles(items);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const v = videoRefs.current[current];
    if (v) v.play().catch(() => {});
  }, [current]);

  const goTo = (fn: ((n: number) => number) | number) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(typeof fn === 'function' ? fn : () => fn);
    setTimeout(() => setTransitioning(false), 700);
  };

  const slide = slides[current];

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#0A0A0F' }}>

      {/* Video backgrounds */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          opacity: i === current ? 1 : 0,
          transition: 'opacity 1s ease',
          zIndex: i === current ? 1 : 0,
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse 70% 60% at 70% 50%, ${s.accent}15 0%, transparent 60%)`,
            zIndex: 2,
          }} />
          <video
            ref={el => { videoRefs.current[i] = el; }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            autoPlay={i === 0}
            loop muted playsInline preload="auto"
          >
            <source src={s.video} type="video/mp4" />
          </video>
        </div>
      ))}

      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
        {particles.map(p => <Particle key={p.id} style={p.style} />)}
      </div>

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(255,31,61,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,31,61,0.04) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10, height: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'center', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem',
        gap: '4rem',
      }} className="flex-col-mobile">

        {/* LEFT: Text */}
        <div style={{ paddingTop: '80px' }}>
          {/* Category label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: `${slide.accent}20`,
            border: `1px solid ${slide.accent}40`,
            borderRadius: '2px', padding: '0.35rem 1rem',
            marginBottom: '1.5rem',
          }}>
            <span style={{
              display: 'inline-block', width: '6px', height: '6px',
              borderRadius: '50%', background: slide.accent,
              animation: 'glowPulse 1.5s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.65rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: slide.accent,
            }}>
              New Formula
            </span>
          </div>

          {/* Main headline */}
          <div style={{ marginBottom: '0.5rem' }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.5)',
              margin: 0, lineHeight: 1,
            }}>
              RIDE ENERGY
            </h2>
          </div>
          <div
            key={current}
            style={{
              marginBottom: '1.5rem',
              animation: 'fadeInUp 0.6s ease-out',
            }}
          >
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              lineHeight: 0.9,
              margin: 0,
              background: `linear-gradient(135deg, #FFFFFF 0%, ${slide.accent} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}>
              {slide.subtitle}
            </h1>
          </div>

          <p
            key={`sub-${current}`}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '440px',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              fontWeight: 500,
              animation: 'fadeInUp 0.6s ease-out 0.1s both',
            }}
          >
            {slide.tagline}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <a
              href="#where-to-buy"
              className="btn-ride btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('where-to-buy')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span> Buy Now</span>
            </a>
            <a
              href="#products"
              className="btn-ride btn-outline"
              onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <span> Explore Flavors</span>
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: '2rem', marginTop: '3rem',
            animation: 'fadeInUp 0.6s ease-out 0.3s both',
          }}>
            {[
              { num: '160+', label: 'MG CAFFEINE' },
              { num: '4', label: 'FLAVORS' },
              { num: '400+', label: 'STORES' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2rem',
                  color: slide.accent,
                  lineHeight: 1,
                  textShadow: `0 0 20px ${slide.accent}80`,
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '0.55rem', letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.4)', marginTop: '4px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Floating can image */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          position: 'relative', paddingTop: '80px',
        }} className="hidden md:flex">
          {/* Glow behind can */}
          <div style={{
            position: 'absolute',
            width: '400px', height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${slide.accent}30 0%, transparent 70%)`,
            transition: 'background 0.8s ease',
            animation: 'energyBurst 3s ease-in-out infinite',
          }} />

          {/* Can image */}
          <div
            key={`can-${current}`}
            style={{
              position: 'relative', zIndex: 2,
              animation: 'float 4s ease-in-out infinite, fadeIn 0.6s ease-out',
              width: '280px', height: '420px',
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${slide.accent}40`,
              }}
            />
            {/* Reflection */}
            <div style={{
              position: 'absolute', bottom: '-60px', left: '10%',
              width: '80%', height: '60px',
              background: `linear-gradient(to bottom, ${slide.accent}20, transparent)`,
              transform: 'scaleY(-1) skewX(-5deg)',
              borderRadius: '50%',
              filter: 'blur(10px)',
            }} />
          </div>

          {/* Floating label badges */}
          <div style={{
            position: 'absolute', top: '25%', right: '-10px',
            background: 'rgba(20,20,28,0.9)',
            border: `1px solid ${slide.accent}40`,
            borderRadius: '8px', padding: '0.75rem 1rem',
            animation: 'float 3s ease-in-out infinite 1s',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>CAFFEINE</div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: slide.accent }}>160MG</div>
          </div>


        </div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute', bottom: '7rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 20,
        display: 'flex', gap: '0.75rem', alignItems: 'center',
      }}>
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
              width: i === current ? '40px' : '8px',
              height: '3px',
              borderRadius: '2px',
              backgroundColor: i === current ? slide.accent : 'rgba(255,255,255,0.3)',
              boxShadow: i === current ? `0 0 10px ${slide.accent}` : 'none',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 20,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)' }}>
          SCROLL
        </span>
        <div style={{
          width: '22px', height: '36px',
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: '11px',
          display: 'flex', justifyContent: 'center', paddingTop: '6px',
        }}>
          <div style={{
            width: '4px', height: '8px',
            background: slide.accent,
            borderRadius: '2px',
            animation: 'float 1.5s ease-in-out infinite',
            boxShadow: `0 0 8px ${slide.accent}`,
          }} />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .flex-col-mobile {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}