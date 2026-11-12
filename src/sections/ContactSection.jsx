import React from 'react';
import { ArrowUpRight, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { COMPANY_INFO } from '../data/content';

export default function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32 bg-[#000000] border-b border-[#2c2c2c]">
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
          <div className="bg-[#0F7B4A]/15 border border-[#1C5944] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F7B4A]/30 border border-[#1C5944] rounded-[3px] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#34C77B]" />
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#34C77B] uppercase tracking-wider">
                  Canal Digital Autónomo
                </span>
              </div>

              <h3 className="font-['Archivo_Black'] text-2xl sm:text-3xl text-[#F4F4F2] tracking-tight mb-4 leading-snug">
                Plataforma de E-Commerce Independiente
              </h3>

              <p className="text-sm sm:text-base text-[#F4F4F2]/80 leading-relaxed mb-8">
                Consultá el catálogo completo y actualizado de productos mayoristas, armá tu pedido en línea con precio por bulto e IVA a la vista, y envialo por WhatsApp para su preparación.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#F4F4F2]">
                  <ShieldCheck className="w-4 h-4 text-[#34C77B] shrink-0" />
                  <span>Acceso directo sin registro previo para explorar artículos</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#F4F4F2]">
                  <ShieldCheck className="w-4 h-4 text-[#34C77B] shrink-0" />
                  <span>Los 6 rubros comerciales disponibles las 24 horas</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={COMPANY_INFO.ecommerceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 bg-[#0F7B4A] hover:bg-[#0D6A40] text-[#F4F4F2] font-bold text-xs uppercase tracking-wider py-4 rounded-[3px] transition-all duration-150 shadow-[0_4px_14px_rgba(15,123,74,0.4)]"
              >
                <span>Acceder a basecordoba.netlify.app</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Panel 2: Direct Commercial Attention */}
          <div className="bg-[#111111] border border-[#2c2c2c] p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#2c2c2c] rounded-[3px] mb-6">
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#9A9A9A] uppercase tracking-wider">
                  Canal de Atención Directa
                </span>
              </div>

              <h3 className="font-['Archivo_Black'] text-2xl sm:text-3xl text-[#F4F4F2] tracking-tight mb-4 leading-snug">
                Atención Comercial Personalizada
              </h3>

              <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed mb-8">
                ¿Querés abrir una cuenta comercial, consultar condiciones para tu comercio o realizar una consulta directa sobre artículos específicos? Contactá al equipo de ventas por WhatsApp.
              </p>

              {/* Direct Confirmed Touchpoints */}
              <div className="space-y-4 mb-8">
                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#1A1A1A] hover:bg-[#222222] border border-[#2c2c2c] hover:border-[#1C5944] rounded-[3px] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-[#F4F4F2]">WhatsApp de Ventas</div>
                      <div className="text-xs text-[#34C77B] font-['JetBrains_Mono'] font-bold">{COMPANY_INFO.contact.phoneFormatted}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#9A9A9A] group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center justify-between p-4 bg-[#1A1A1A] border border-[#2c2c2c] rounded-[3px]">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#9A9A9A]" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-[#F4F4F2]">Radicación Operativa</div>
                      <div className="text-xs text-[#9A9A9A]">Córdoba Capital y Gran Córdoba, Argentina</div>
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
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-[#222222] border border-[#9A9A9A] hover:border-[#34C77B] text-[#F4F4F2] font-bold text-xs uppercase tracking-wider py-4 rounded-[3px] transition-colors"
              >
                <span>Escribir a Ventas ({COMPANY_INFO.contact.phoneFormatted})</span>
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
