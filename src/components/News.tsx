'use client';

import { useState, useEffect, useRef } from 'react';

const newsArticles = [
  {
    id: 1,
    title: 'RIDE Launches New Ultra Formula',
    date: 'FEB 1, 2026',
    readTime: '3 MIN READ',
    category: 'Product Launch',
    categoryColor: '#FF1F3D',
    image: '/images/news1.jpg',
    excerpt: 'Introducing our most powerful energy formula yet with 200mg of caffeine and enhanced B-vitamins.',
    content: `We are thrilled to announce the launch of RIDE Ultra, our most advanced energy drink formula to date. This new product features 200mg of caffeine, a comprehensive B-vitamin complex, and our proprietary energy blend designed for maximum performance.

After two years of research and development, RIDE Ultra represents the pinnacle of energy drink innovation. The formula includes natural ingredients, zero artificial colors, and a refreshing tropical flavor that sets it apart from traditional energy drinks.

Whether you're an athlete, gamer, or professional, RIDE Ultra delivers sustained energy without the crash.`,
  },
  {
    id: 2,
    title: 'RIDE Sponsors Major Esports Tournament',
    date: 'JAN 28, 2026',
    readTime: '4 MIN READ',
    category: 'Esports',
    categoryColor: '#00D4FF',
    image: '/images/news2.jpg',
    excerpt: 'RIDE becomes official energy drink partner of the Global Gaming Championship.',
    content: `RIDE Energy has officially partnered with the Global Gaming Championship, one of the world's largest esports tournaments. This partnership marks a significant milestone in our commitment to supporting the gaming community.

The tournament will feature over 500 professional gamers competing for a $2 million prize pool across multiple games. RIDE will provide exclusive player lounges, energy drink stations, and special edition cans featuring tournament branding.

Our RIDE Zero formula has become the preferred choice among professional gamers for its zero-sugar content and sustained energy delivery.`,
  },
  {
    id: 3,
    title: 'Sustainability Initiative: 100% Recyclable Cans',
    date: 'JAN 15, 2026',
    readTime: '3 MIN READ',
    category: 'Environment',
    categoryColor: '#00FF88',
    image: '/images/news3.jpg',
    excerpt: 'RIDE commits to environmental responsibility with fully recyclable aluminum packaging.',
    content: `As part of our ongoing commitment to environmental sustainability, RIDE Energy has transitioned all our packaging to 100% recyclable aluminum cans. This initiative eliminates over 50 tons of plastic waste annually.

Our new cans are made from 70% recycled aluminum and can be recycled infinitely without losing quality. Additionally, we've partnered with environmental organizations to support recycling programs in communities worldwide.

Every RIDE can features clear recycling instructions and information about our sustainability efforts.`,
  },
  {
    id: 4,
    title: 'New Flavor Alert: RIDE Savage Lime',
    date: 'DEC 20, 2025',
    readTime: '2 MIN READ',
    category: 'Product Launch',
    categoryColor: '#FF1F3D',
    image: '/images/news4.jpg',
    excerpt: 'Experience the bold, refreshing taste of our newest flavor — Savage Lime.',
    content: `Get ready for an explosion of flavor! RIDE Savage Lime is our latest creation, combining the perfect balance of tart lime with a hint of sweetness.

This limited edition flavor has been in development for over a year, with taste tests involving thousands of energy drink enthusiasts. Savage Lime features our signature 160mg caffeine formula, enhanced with natural lime extract and zero artificial flavors.

The response from our beta testers has been phenomenal, with 95% rating it as their new favorite RIDE flavor.`,
  },
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState<typeof newsArticles[0] | null>(null);
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

  return (
    <>
      <section
        id="news"
        style={{ padding: '6rem 0', background: 'var(--ride-bg)', position: 'relative' }}
        ref={sectionRef}
      >
        {/* Top border accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,31,61,0.3), transparent)' }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Header */}
          <div style={{
            textAlign: 'center', marginBottom: '5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s ease',
          }}>
            <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#FF1F3D' }}>
              Latest Updates
            </span>
           
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 1, margin: 0,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FF1F3D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Latest News
            </h2>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '1.5rem auto 0', fontWeight: 500 }}>
              Stay updated with the latest from RIDE Energy
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
            {newsArticles.map((article, i) => (
              <div
                key={article.id}
                className="news-card"
                style={{
                  borderRadius: '12px', cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                  transition: `all 0.8s ease ${i * 0.1}s`,
                }}
                onClick={() => setSelectedNews(article)}
              >
                {/* Image */}
                <div className="news-image" style={{ position: 'relative', height: '200px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,20,28,0.9) 0%, transparent 50%)' }} />

                  {/* Category badge */}
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'rgba(0, 212, 255, 0.95)',
                    borderRadius: '4px', padding: '0.3rem 0.75rem',
                  }}>
                    <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#0A0A0F', textTransform: 'uppercase' }}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>{article.date}</span>
                    <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>{article.readTime}</span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.4rem', letterSpacing: '0.03em',
                    color: 'white', marginBottom: '0.75rem', lineHeight: 1.2,
                  }}>
                    {article.title}
                  </h3>

                  <p style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6, marginBottom: '1.25rem', fontWeight: 500,
                  }}>
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    color: '#00D4FF',
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                    position: 'relative',
                  }}>
                    <span>Read More</span>
                    <span>→</span>
                    {/* Animated underline */}
                    <div style={{
                      position: 'absolute', bottom: '-4px', left: 0,
                      height: '1px', background: '#00D4FF',
                      width: '0%', transition: 'width 0.3s ease',
                    }} className="read-more-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedNews && (
        <div
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 100, padding: '1rem',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => setSelectedNews(null)}
        >
          <div
            style={{
              background: 'var(--ride-card)',
              border: `1px solid ${selectedNews.categoryColor}30`,
              borderRadius: '16px',
              maxWidth: '700px', width: '100%',
              maxHeight: '90vh', overflowY: 'auto',
              boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 60px ${selectedNews.categoryColor}15`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
              <button
                onClick={() => setSelectedNews(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: 'none',
                  borderRadius: '50%', width: '40px', height: '40px',
                  color: 'white', fontSize: '1.2rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                ×
              </button>
            </div>

            {/* Image */}
            <div style={{ height: '320px', overflow: 'hidden', borderRadius: '16px 16px 0 0', position: 'relative' }}>
              <img src={selectedNews.image} alt={selectedNews.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--ride-card) 0%, transparent 50%)' }} />
            </div>

            {/* Content */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  background: 'rgba(0, 212, 255, 0.95)',
                  borderRadius: '4px', padding: '0.3rem 0.75rem',
                }}>
                  <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: '#0A0A0F', textTransform: 'uppercase' }}>
                    {selectedNews.category}
                  </span>
                </div>
                <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)' }}>
                  {selectedNews.date} · {selectedNews.readTime}
                </span>
              </div>

              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: 'white', lineHeight: 1.1, marginBottom: '1.5rem',
              }}>
                {selectedNews.title}
              </h2>

              <div style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: '1rem', color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8, fontWeight: 500,
                whiteSpace: 'pre-line',
              }}>
                {selectedNews.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}