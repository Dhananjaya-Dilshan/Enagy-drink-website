'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'where-to-buy', label: 'Where to Buy' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/images/ride.jpg"
              alt="RIDE"
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* Navigation Links */}
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    text-white hover:scale-110 transition-all duration-200 font-semibold py-1 border-b-2
                    ${activeSection === link.id ? 'border-white' : 'border-transparent'}
                  `}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}