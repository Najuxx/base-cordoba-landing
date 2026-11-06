import React from 'react';
import { ArrowUpRight, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { COMPANY_INFO } from '../data/content';

export default function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#090A0C] border-b border-[#1B1E24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <SectionHeading
          tag="05 // Contacto & Gestión"
          title="Contacto y Acceso Mayorista"
          description="Elegí la vía de atención que mejor se adapte a las necesidades de tu comercio o negocio."
        />

        {/* Dual Conversion Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Panel 1: Digital Platform / E-Commerce */}
          <div className="bg-[#0D241C] border border-[#1C5944] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F382A] border border-[#1C5944] rounded-[2px] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00E599]" />
                <span className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#00E599] uppercase tracking-wider">
                  Canal Digital Autónomo
                </span>
              </div>

              <h3 className="font-['Archivo'] font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4 leading-snug">
                Plataforma de E-Commerce Independiente
              </h3>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-8">
                Consultá el catálogo completo y actualizado de productos mayoristas, armá tu pedido en línea y envialo directamente para su preparación.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#E4E7EC]">
                  <ShieldCheck className="w-4 h-4 text-[#00E599] shrink-0" />
                  <span>Acceso directo sin registro previo para explorar artículos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#E4E7EC]">
                  <ShieldCheck className="w-4 h-4 text-[#00E599] shrink-0" />
                  <span>Los 6 rubros comerciales disponibles las 24 horas</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={COMPANY_INFO.ecommerceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 bg-[#00E599] hover:bg-[#10F4A8] text-[#090A0C] font-semibold text-xs uppercase tracking-wider py-4 rounded-[2px] transition-all duration-150 shadow-md shadow-[#00E599]/20"
              >
                <span>Acceder a basecordoba.netlify.app</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Panel 2: Direct Commercial Attention */}
          <div className="bg-[#0D0F12] border border-[#1F242C] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111317] border border-[#1F242C] rounded-[2px] mb-6">
                <span className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#8B95A5] uppercase tracking-wider">
                  Canal de Atención Directa
                </span>
              </div>

              <h3 className="font-['Archivo'] font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4 leading-snug">
                Atención Comercial Personalizada
              </h3>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8">
                ¿Querés abrir una cuenta comercial, consultar condiciones para tu comercio o realizar una consulta directa sobre artículos específicos? Contactá al equipo de ventas por WhatsApp.
              </p>

              {/* Direct Confirmed Touchpoints */}
              <div className="space-y-4 mb-8">
                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#111317] hover:bg-[#16191F] border border-[#1F242C] hover:border-[#1C5944] rounded-[2px] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#00E599]" />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">WhatsApp de Ventas</div>
                      <div className="text-xs text-[#00E599] font-['JetBrains_Mono']">{COMPANY_INFO.contact.phoneFormatted}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8B95A5] group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center justify-between p-4 bg-[#111317] border border-[#1F242C] rounded-[2px]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#8B95A5]" />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">Radicación Operativa</div>
                      <div className="text-xs text-[#8B95A5]">Córdoba Capital y Gran Córdoba, Argentina</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#111317] hover:bg-[#16191F] border border-[#1F242C] hover:border-[#2E3540] text-white font-medium text-xs uppercase tracking-wider py-4 rounded-[2px] transition-colors"
              >
                <span>Escribir a Ventas ({COMPANY_INFO.contact.phoneFormatted})</span>
                <MessageCircle className="w-4 h-4 text-[#00E599]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
