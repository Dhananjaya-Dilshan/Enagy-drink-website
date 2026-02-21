'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: '#050508', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background image with overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('/images/all.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 80%',
        opacity: 0.08,
      }} />

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Top border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,31,61,0.5), transparent)' }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Newsletter strip */}
        <div style={{
          background: 'rgba(255,31,61,0.08)',
          borderBottom: '1px solid rgba(255,31,61,0.15)',
          padding: '2.5rem 2rem',
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '2rem', color: 'white', margin: '0 0 0.5rem 0',
              letterSpacing: '0.05em',
            }}>
              STAY IN THE LOOP
            </h3>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem', fontWeight: 500 }}>
              Get exclusive deals, new flavor alerts, and RIDE news delivered straight to you.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '4px', padding: '0.75rem 1.25rem',
                  color: 'white', fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '1rem', minWidth: '260px',
                  outline: 'none',
                }}
              />
              <button
                className="btn-ride btn-primary"
                style={{ fontSize: '0.7rem', padding: '0.75rem 2rem' }}
              >
                <span>Subscribe →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}>

            {/* Brand */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <img src="/images/ride.jpg" alt="RIDE" style={{ height: '44px', borderRadius: '4px' }} />
              </div>
              <p style={{
                fontFamily: "'Rajdhani', sans-serif",
                color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontSize: '0.95rem', fontWeight: 500,
                marginBottom: '1.5rem',
              }}>
                Everyone's got their own unique way of life and RIDE gives you the power to live it the way you want.
              </p>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href="https://www.facebook.com/p/Ride-Energy-Drink-61551394352392/"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '40px', height: '40px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,31,61,0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(255,31,61,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Image src="/images/facebook.png" alt="Facebook" width={18} height={18} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                </a>
                <a
                  href="https://www.instagram.com/rideenergydrink/?hl=en"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '40px', height: '40px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,31,61,0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(255,31,61,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <Image src="/images/instagram.png" alt="Instagram" width={18} height={18} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.7rem', letterSpacing: '0.25em',
                color: '#FF1F3D', marginBottom: '1.5rem', textTransform: 'uppercase',
              }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Products', id: 'products' },
                  { label: 'Why RIDE', id: 'why-ride' },
                  { label: 'Where to Buy', id: 'where-to-buy' },
                  { label: 'News', id: 'news' },
                ].map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '1rem', color: 'rgba(255,255,255,0.5)',
                        fontWeight: 600, transition: 'color 0.2s ease',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      <span style={{ color: 'rgba(255,31,61,0.5)', fontSize: '0.7rem' }}>→</span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.7rem', letterSpacing: '0.25em',
                color: '#00D4FF', marginBottom: '1.5rem', textTransform: 'uppercase',
              }}>
                Legal
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '1rem', color: 'rgba(255,255,255,0.5)',
                        fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s ease',
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      <span style={{ color: 'rgba(0,212,255,0.5)', fontSize: '0.7rem' }}>→</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.7rem', letterSpacing: '0.25em',
                color: '#00FF88', marginBottom: '1.5rem', textTransform: 'uppercase',
              }}>
                Contact
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '📍', text: 'No. 40, York Street, Colombo 01' },
                  { icon: '📧', text: 'contact@cargillsceylon.com' },
                  { icon: '📞', text: '+94 11 242 7777\n+94 11 242 7500' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1rem', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                    <span style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)',
                      fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line',
                    }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem', margin: 0, fontWeight: 500 }}>
              © 2026 RIDE Energy Drinks. All rights reserved.
            </p>
            <p style={{ fontFamily: "'Orbitron', sans-serif", color: 'rgba(255,31,61,0.4)', fontSize: '0.6rem', letterSpacing: '0.15em', margin: 0 }}>
              DESIGNED BY DHANANAJAYA DILSHAN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}