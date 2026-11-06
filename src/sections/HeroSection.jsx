import React from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Building2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import logoImg from '../assets/logo-b.png';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 border-b border-[#1B1E24] bg-[#090A0C]">
      {/* Structural technical hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1F242C] to-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Top Tag & Official Stamp */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#111317] border border-[#1F242C] rounded-[2px]">
            <img src={logoImg} alt="B" className="w-4 h-4 rounded-[1px] shrink-0" />
            <span className="font-['JetBrains_Mono'] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#CBD5E1]">
              Sello Mayorista Oficial · Córdoba
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs text-[#8B95A5] font-['JetBrains_Mono']">
            <span>/</span>
            <span>EXCLUSIVO COMERCIOS Y REVENDEDORES</span>
          </div>
        </div>

        {/* Main Institutional Headline */}
        <h1 className="font-['Archivo'] font-bold text-3xl sm:text-5xl lg:text-[62px] leading-[1.08] tracking-[-0.03em] text-white max-w-4xl mb-7">
          El respaldo comercial para ferreterías, comercios y revendedores.
        </h1>

        {/* Subtitle / Positioning */}
        <p className="text-base sm:text-lg lg:text-xl text-[#94A3B8] font-normal leading-relaxed max-w-2xl mb-12">
          Abastecimiento mayorista concebido para las necesidades reales del mostrador comercial. 
          Operación centralizada en depósito logístico, sin venta directa al público.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-20">
          <a
            href={COMPANY_INFO.ecommerceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#00E599] hover:bg-[#10F4A8] text-[#090A0C] font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-[2px] transition-all duration-150 shadow-sm shadow-[#00E599]/20"
          >
            <span>Acceder al Catálogo Online</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#rubros"
            className="inline-flex items-center justify-center gap-2 bg-[#111317] hover:bg-[#16191F] text-[#CBD5E1] hover:text-white border border-[#1F242C] hover:border-[#2E3540] text-xs font-semibold uppercase tracking-wider px-6 py-4 rounded-[2px] transition-all duration-150"
          >
            <span>Explorar Rubros Oficiales</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#8B95A5]" />
          </a>
        </div>

        {/* Architectural Technical Ribbon (Replaces repetitive cards) */}
        <div className="border border-[#1F242C] bg-[#0D0F12]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1F242C]">
            
            {/* Metric 1 */}
            <div className="p-7 sm:p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#8B95A5]">
                  01 // Empresa
                </span>
                <Building2 className="w-4 h-4 text-[#00E599]" />
              </div>
              <div>
                <div className="font-['Archivo'] font-bold text-4xl sm:text-5xl text-white tracking-tight mb-2">
                  22 Años
                </div>
                <p className="text-sm text-[#94A3B8] leading-snug">
                  De trayectoria empresarial en Córdoba como distribuidora mayorista.
                </p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-7 sm:p-8 flex flex-col justify-between bg-[#0F382A]/20">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#00E599]">
                  02 // Origen & Oficio
                </span>
                <Clock className="w-4 h-4 text-[#00E599]" />
              </div>
              <div>
                <div className="font-['Archivo'] font-bold text-4xl sm:text-5xl text-white tracking-tight mb-2">
                  +57 Años
                </div>
                <p className="text-sm text-[#94A3B8] leading-snug">
                  De experiencia comercial de su dueño original en el rubro.
                </p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-7 sm:p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-[#8B95A5]">
                  03 // Modelo B2B
                </span>
                <ShieldCheck className="w-4 h-4 text-[#00E599]" />
              </div>
              <div>
                <div className="font-['Archivo'] font-bold text-4xl sm:text-5xl text-white tracking-tight mb-2">
                  100% Mayorista
                </div>
                <p className="text-sm text-[#94A3B8] leading-snug">
                  Operación desde depósito logístico. Sin venta directa al público.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
