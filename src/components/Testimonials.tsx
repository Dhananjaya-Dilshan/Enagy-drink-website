'use client';

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Kavindu R.',
    role: 'Pro Gamer',
    avatar: '🎮',
    rating: 5,
    quote: 'RIDE Classic is my go-to before every tournament. Keeps me focused and reactive for hours without the jittery crash.',
    accent: '#00D4FF',
  },
  {
    name: 'Senuri M.',
    role: 'National Athlete',
    avatar: '🏃',
    rating: 5,
    quote: 'Training hard every day. RIDE Green Apple gives me the clean energy boost I need without loading up on sugar.',
    accent: '#00FF88',
  },
  {
    name: 'Thisara P.',
    role: 'University Student',
    avatar: '📚',
    rating: 5,
    quote: 'Exam season is brutal. RIDE Sugar Free helps me power through late-night study sessions without the guilt.',
    accent: '#FF1F3D',
  },
  {
    name: 'Dilshan W.',
    role: 'Fitness Coach',
    avatar: '💪',
    rating: 5,
    quote: 'I recommend RIDE to all my clients. The Red Berry flavor tastes incredible and the energy is consistent and reliable.',
    accent: '#FF1F3D',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[current];

  return (
    <section
      style={{ padding: '6rem 0', background: 'var(--ride-card)', position: 'relative', overflow: 'hidden' }}
      ref={ref}
    >
      {/* BG accent */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,31,61,0.05) 0%, transparent 70%)`,
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem', opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(40px)', transition: 'all 0.8s ease' }}>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#FF1F3D' }}>
            Social Proof
          </span>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1, color: 'white', margin: 0 }}>
            WHAT RIDERS SAY
          </h2>
        </div>

        {/* Quote card */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.8s ease 0.2s',
          }}
          onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const diff = touchStart.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
              setCurrent(p => diff > 0 ? (p + 1) % testimonials.length : (p - 1 + testimonials.length) % testimonials.length);
            }
          }}
        >
          <div
            key={current}
            style={{
              background: 'var(--ride-bg)',
              border: `1px solid ${t.accent}30`,
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 40px ${t.accent}10`,
              animation: 'fadeInUp 0.5s ease-out',
            }}
          >
            {/* Quote mark */}
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '6rem', lineHeight: 0.5,
              color: t.accent, opacity: 0.3,
              marginBottom: '1rem',
            }}>
              "
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem' }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} style={{ color: '#FFD700', fontSize: '1.1rem' }}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
              fontWeight: 500,
              maxWidth: '600px',
              margin: '0 auto 2rem',
              fontStyle: 'italic',
            }}>
              {t.quote}
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '50%',
                background: `${t.accent}20`,
                border: `2px solid ${t.accent}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
              }}>
                {t.avatar}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', color: 'white', letterSpacing: '0.05em' }}>{t.name}</div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: t.accent }}>{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                width: i === current ? '24px' : '8px',
                height: '8px', borderRadius: '4px',
                backgroundColor: i === current ? testimonials[i].accent : 'rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}