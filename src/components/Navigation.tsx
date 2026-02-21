'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['contact', 'news', 'where-to-buy', 'why-ride', 'products', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById('ride-nav');
      if (nav && !nav.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'why-ride', label: 'Why RIDE' },
    { id: 'where-to-buy', label: 'Where to Buy' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      id="ride-nav"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'background 0.4s ease',
        background: scrolled ? 'rgba(10, 10, 15, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.12)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
          >
            <img
              src="/images/ride.jpg"
              alt="RIDE"
              style={{ height: '42px', width: 'auto', objectFit: 'contain', borderRadius: '4px', display: 'block' }}
            />
          </button>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      padding: '4px 0',
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: '0.63rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: activeSection === link.id ? '#00D4FF' : 'rgba(240,240,245,0.75)',
                      transition: 'color 0.3s ease',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== link.id)
                        (e.currentTarget as HTMLElement).style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== link.id)
                        (e.currentTarget as HTMLElement).style.color = 'rgba(240,240,245,0.75)';
                    }}
                  >
                    {link.label}
                    <span style={{
                      position: 'absolute', bottom: '-4px', left: 0,
                      height: '2px', borderRadius: '1px',
                      width: activeSection === link.id ? '100%' : '0%',
                      background: '#00D4FF',
                      boxShadow: '0 0 8px rgba(0,212,255,0.6)',
                      transition: 'width 0.3s ease',
                      display: 'block',
                    }} />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px',
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center', gap: '5px',
                width: '40px', height: '40px',
              }}
            >
              <span style={{
                display: 'block', width: '22px', height: '2px',
                background: 'white', borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '22px', height: '2px',
                background: 'white', borderRadius: '1px',
                transition: 'all 0.3s ease',
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? 'scaleX(0)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '22px', height: '2px',
                background: 'white', borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobile && (
        <div
          style={{
            background: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: mobileOpen ? '1px solid rgba(0,212,255,0.15)' : 'none',
            maxHeight: mobileOpen ? '420px' : '0px',
            overflow: 'hidden',
            transition: 'max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div style={{ padding: '0.5rem 0 1rem 0' }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  borderLeft: `3px solid ${activeSection === link.id ? '#00D4FF' : 'transparent'}`,
                  cursor: 'pointer',
                  padding: '0.85rem 1.5rem',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: activeSection === link.id ? '#00D4FF' : 'rgba(240,240,245,0.7)',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  transition: 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.05)';
                  if (activeSection !== link.id)
                    (e.currentTarget as HTMLElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'none';
                  if (activeSection !== link.id)
                    (e.currentTarget as HTMLElement).style.color = 'rgba(240,240,245,0.7)';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}