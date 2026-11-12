import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/content';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Rubros', href: '#rubros' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Distribución', href: '#distribucion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#2c2c2c] shadow-lg shadow-black/60'
          : 'bg-[#000000]/80 backdrop-blur-sm border-b border-[#1c1c1c]'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:opacity-90 transition-opacity" aria-label="Ir al inicio de BASE Córdoba">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#9A9A9A] hover:text-[#F4F4F2] transition-colors duration-150 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA (E-Commerce) */}
        <div className="hidden md:flex items-center">
          <a
            href={COMPANY_INFO.ecommerceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#0F7B4A] hover:bg-[#0D6A40] text-[#F4F4F2] font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-[3px] transition-all duration-150 shadow-[0_4px_14px_rgba(15,123,74,0.35)]"
          >
            <span>Ir al E-Commerce</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9A9A9A] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#34C77B]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#2c2c2c] px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#F4F4F2] hover:text-[#34C77B] py-2 border-b border-[#222222] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={COMPANY_INFO.ecommerceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#0F7B4A] text-[#F4F4F2] font-bold text-xs uppercase tracking-wider py-3.5 rounded-[3px]"
            >
              <span>Acceder al E-Commerce</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
