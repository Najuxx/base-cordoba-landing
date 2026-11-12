import React from 'react';
import { ArrowUpRight, ArrowDown, Building2, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 border-b border-[#2c2c2c] bg-[#000000] overflow-hidden">
      {/* Radial green glow identical to the e-commerce: radial-gradient(ellipse 60% 70% at 85% 30%, rgba(15,123,74,0.22), transparent 70%) */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 85% 30%, rgba(15, 123, 74, 0.24), transparent 70%)',
          boxShadow: 'inset 0 -30px 50px -40px rgba(0,0,0,0.8)'
        }}
      />

      {/* Official "B" Watermark on the right matching basecordoba.netlify.app */}
      <div 
        className="absolute right-0 sm:right-6 lg:right-16 top-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] pointer-events-none opacity-30 select-none z-0"
        style={{
          filter: 'drop-shadow(0 10px 30px rgba(15, 123, 74, 0.35))'
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" focusable="false" className="w-full h-full">
          <path 
            d="M60 30 H150 C210 30 230 60 230 95 C230 125 215 142 195 150 C218 158 235 178 235 208 C235 248 210 270 150 270 H60 Z
               M115 75 V135 H150 C175 135 185 120 185 100 C185 82 173 75 150 75 Z
               M115 165 V225 H155 C182 225 190 208 190 193 C190 176 178 165 155 165 Z"
            fill="#0F7B4A"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Eyebrow matching the e-commerce: "LA BASE DE TU NEGOCIO" */}
        <p className="text-[#34C77B] text-[13px] font-bold tracking-[0.04em] uppercase mb-4">
          La base de tu negocio · Distribución Mayorista en Córdoba
        </p>

        {/* Main Headline in Archivo Black identical to the e-commerce */}
        <h1 className="font-['Archivo_Black'] text-3xl sm:text-5xl lg:text-[54px] leading-[1.06] tracking-[-0.01em] text-[#F4F4F2] max-w-3xl mb-6">
          El respaldo mayorista para comercios, ferreterías y revendedores.
        </h1>

        {/* Subtitle / Lead matching the e-commerce style */}
        <p className="text-base sm:text-lg text-[#F4F4F2]/90 font-normal leading-relaxed max-w-2xl mb-8">
          Abastecimiento comercial en herramientas, riego, repuestos, automotor y ferretería con <b className="text-[#34C77B] font-bold">precio por bulto</b> e <b className="text-[#34C77B] font-bold">IVA a la vista</b>. Operación exclusiva mediante depósito, sin local de atención al público.
        </p>

        {/* Hero Actions matching the e-commerce button style */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <a
            href={COMPANY_INFO.ecommerceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0F7B4A] hover:bg-[#0D6A40] text-[#F4F4F2] font-bold text-sm px-6 py-3.5 rounded-[3px] transition-all duration-150 shadow-[0_4px_14px_rgba(15,123,74,0.4)]"
          >
            <span>Ver catálogo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={COMPANY_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent hover:border-[#34C77B] hover:text-[#34C77B] text-[#F4F4F2] border border-[#9A9A9A] font-bold text-sm px-6 py-3.5 rounded-[3px] transition-all duration-150"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Hablar con ventas</span>
          </a>

          <a
            href="#rubros"
            className="inline-flex items-center gap-1.5 text-xs text-[#9A9A9A] hover:text-white underline underline-offset-4 ml-1 transition-colors"
          >
            <span>Conocer rubros comerciales</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Technical Ribbon with Confirmed Milestones */}
        <div className="border border-[#2c2c2c] bg-[#111111]/90 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2c2c2c]">
            
            {/* Metric 1 */}
            <div className="p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.12em] text-[#9A9A9A] font-semibold">
                  01 // Empresa
                </span>
                <Building2 className="w-4 h-4 text-[#34C77B]" />
              </div>
              <div>
                <div className="font-['Archivo_Black'] text-3xl sm:text-4xl text-[#F4F4F2] tracking-tight mb-1">
                  22 Años
                </div>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-snug">
                  De trayectoria empresarial en Córdoba como firma mayorista.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-6 sm:p-7 flex flex-col justify-between bg-[#0F7B4A]/15">
              <div className="flex items-center justify-between mb-3">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.12em] text-[#34C77B] font-semibold">
                  02 // Origen & Oficio
                </span>
                <Clock className="w-4 h-4 text-[#34C77B]" />
              </div>
              <div>
                <div className="font-['Archivo_Black'] text-3xl sm:text-4xl text-[#F4F4F2] tracking-tight mb-1">
                  +57 Años
                </div>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-snug">
                  De experiencia comercial de su dueño original en el rubro.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-6 sm:p-7 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.12em] text-[#9A9A9A] font-semibold">
                  03 // Modelo B2B
                </span>
                <ShieldCheck className="w-4 h-4 text-[#34C77B]" />
              </div>
              <div>
                <div className="font-['Archivo_Black'] text-3xl sm:text-4xl text-[#F4F4F2] tracking-tight mb-1">
                  100% Mayorista
                </div>
                <p className="text-xs sm:text-sm text-[#9A9A9A] leading-snug">
                  Operación centralizada en depósito. Sin atención directa al público.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
