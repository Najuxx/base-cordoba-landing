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
          ? 'bg-[#090A0C]/95 backdrop-blur-md border-b border-[#1F242C] shadow-lg shadow-black/40'
          : 'bg-[#090A0C]/80 backdrop-blur-sm border-b border-[#171A20]'
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
              className="text-sm font-medium text-[#A1ACB8] hover:text-white transition-colors duration-150 tracking-wide"
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
            className="group inline-flex items-center gap-2 bg-[#00E599] hover:bg-[#10F4A8] text-[#090A0C] font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-[2px] transition-all duration-150 shadow-sm shadow-[#00E599]/20"
          >
            <span>Ir al E-Commerce</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#CBD5E1] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#00E599]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0F12] border-b border-[#1F242C] px-5 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#CBD5E1] hover:text-white py-2 border-b border-[#1A1D24] transition-colors"
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
              className="w-full flex items-center justify-center gap-2 bg-[#00E599] text-[#090A0C] font-semibold text-xs uppercase tracking-wider py-3 rounded-[2px]"
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
