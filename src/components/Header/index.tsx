"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#nosotros', text: 'Nosotros' },
    { href: '#servicios', text: 'Servicios' },
    { href: '#frutas', text: 'Frutas' },
    { href: '#contacto', text: 'Contacto' }
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    // Scroll suave a la sección
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-light tracking-wider">PRIME QUALITY</span>
            <span className="text-sm text-gray-500 ml-2">PROFESSIONAL QC</span>
          </div>

          <div className="hidden lg:flex space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
              >
                {link.text}
              </button>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-gray-700 hover:text-black transition-colors duration-200 text-left"
                >
                  {link.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;