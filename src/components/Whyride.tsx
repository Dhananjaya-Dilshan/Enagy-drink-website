'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '⚡',
    title: 'HIGH-PERFORMANCE FORMULA',
    desc: 'Engineered with precision — 160-240mg caffeine, B-vitamins, and taurine to keep you sharp and powerful.',
    accent: '#FF1F3D',
    stat: '160MG+',
    statLabel: 'CAFFEINE',
  },
  {
    icon: '🧠',
    title: 'ENHANCED FOCUS BLEND',
    desc: 'Our cognitive formula sharpens mental clarity, reaction time, and concentration for gamers and athletes alike.',
    accent: '#00D4FF',
    stat: '4X',
    statLabel: 'FOCUS BOOST',
  },
  {
    icon: '🔥',
    title: 'ZERO CRASH ENERGY',
    desc: 'Sustained release energy matrix ensures consistent performance without the dreaded post-energy crash.',
    accent: '#00FF88',
    stat: '6HR',
    statLabel: 'SUSTAINED',
  },
  {
    icon: '🌱',
    title: 'SUSTAINABLE PACKAGING',
    desc: '100% recyclable aluminum cans. Zero plastic. Ride powers your performance without costing the planet.',
    accent: '#00FF88',
    stat: '100%',
    statLabel: 'RECYCLABLE',
  },
];

export default function WhyRide() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="why-ride"
      className="energy-bg-green"
      style={{ minHeight: '100vh', padding: '6rem 0', position: 'relative' }}
      ref={ref}
    >
      {/* Decorative diagonal line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'start',
          marginBottom: '5rem',
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s ease',
        }} className="header-grid">

          <div>
            <span style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.7rem', letterSpacing: '0.4em',
              textTransform: 'uppercase', color: '#00FF88',
            }}>
              The RIDE Advantage
            </span>
            <div className="section-divider" style={{ marginTop: '0.75rem', background: 'linear-gradient(90deg, #00FF88, #00D4FF)' }} />
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 1, marginTop: '1rem',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #00FF88 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              WHY CHOOSE<br />RIDE?
            </h2>
          </div>

          <div style={{ paddingTop: '3rem' }}>
            <p style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7, fontWeight: 500,
            }}>
              RIDE isn't just another energy drink. It's a precisely engineered performance tool. Every ingredient, every milligram, every flavor — designed to give you the edge when it counts most.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              {[{ n: '4+', l: 'YEARS R&D' }, { n: '50K+', l: 'FANS' }, { n: '#1', l: 'SRI LANKA' }].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#00FF88', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                background: 'var(--ride-card)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(60px)',
                transition: `all 0.8s ease ${i * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = `1px solid ${f.accent}50`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${f.accent}20`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute', top: '-30px', right: '-30px',
                width: '120px', height: '120px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${f.accent}20 0%, transparent 70%)`,
              }} />

              {/* Icon */}
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>

              {/* Stat */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '2.5rem', color: f.accent,
                  lineHeight: 1,
                  textShadow: `0 0 20px ${f.accent}60`,
                }}>
                  {f.stat}
                </span>
                <span style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '0.6rem', letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.4)',
                  display: 'block',
                }}>
                  {f.statLabel}
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.3rem', letterSpacing: '0.05em',
                color: 'white', marginBottom: '0.75rem',
              }}>
                {f.title}
              </h3>

              <p style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.6, fontWeight: 500,
              }}>
                {f.desc}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)`,
                opacity: 0.6,
              }} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .header-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}