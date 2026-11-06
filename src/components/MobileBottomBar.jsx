import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled near bottom / contact section
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // If contact section is near top of viewport, hide floating bar
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0F12]/95 backdrop-blur-md border-t border-[#1F242C] px-4 py-2.5 transition-all duration-200 shadow-2xl shadow-black">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Primary E-Commerce Button */}
        <a
          href={COMPANY_INFO.ecommerceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#00E599] text-[#090A0C] font-semibold text-xs uppercase tracking-wider py-2.5 px-3 rounded-[2px] transition-colors"
        >
          <span>E-Commerce</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Confirmed WhatsApp Commercial Button */}
        <a
          href={COMPANY_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 bg-[#16191F] border border-[#1F242C] text-[#CBD5E1] font-medium text-xs py-2.5 px-3.5 rounded-[2px] transition-colors"
          aria-label="Contactar a ventas por WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#00E599]" />
          <span>WhatsApp</span>
        </a>
      </div>
      {/* Safe area padding placeholder for iOS home indicator */}
      <div className="h-[env(safe-area-inset-bottom,0px)]" />
    </div>
  );
}
