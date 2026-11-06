import React from 'react';
import { ShieldCheck, Building2, Layers, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { ATTRIBUTES, COMPANY_INFO } from '../data/content';
import logoImg from '../assets/logo-b.png';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Building2: Building2,
  Layers: Layers,
};

export default function PresentationSection() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-[#090A0C] border-b border-[#1B1E24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <SectionHeading
          tag="01 // Identidad Institucional"
          title="Presentación de BASE Córdoba"
          description="Una firma mayorista cordobesa concebida para abastecer con seriedad, orden y cercanía al mostrador comercial."
        />

        {/* Editorial 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Narrative with Official Brand Verification */}
          <div className="lg:col-span-6 space-y-6 text-[#CBD5E1] text-base sm:text-lg leading-relaxed font-normal">
            <div className="flex items-center gap-4 pb-2 border-b border-[#1F242C]">
              <img src={logoImg} alt="B" className="w-10 h-10 rounded-[2px] border border-[#1F242C] bg-black shrink-0" />
              <div>
                <div className="font-['Archivo'] font-bold text-white text-base leading-tight">
                  BASE Córdoba
                </div>
                <div className="font-['JetBrains_Mono'] text-xs text-[#00E599] uppercase tracking-wider">
                  Distribución Mayorista B2B
                </div>
              </div>
            </div>

            <p>
              <strong className="text-white font-semibold">BASE Córdoba</strong> es una empresa mayorista orientada a satisfacer las necesidades de aprovisionamiento de comercios, ferreterías, revendedores y negocios de la provincia.
            </p>
            <p className="text-[#94A3B8]">
              Nuestra operación se estructura a través de depósito y logística de distribución, prescindiendo deliberadamente de un salón comercial de atención directa al público. Esta decisión estratégica nos permite concentrar toda la capacidad operativa en abastecer a negocios, respetando y protegiendo el margen comercial de cada comerciante.
            </p>
            <p className="text-[#94A3B8]">
              Entendemos las prioridades cotidianas del negocio: listas claras, respuesta comercial directa y un canal digital complementario para ordenar pedidos con agilidad.
            </p>
          </div>

          {/* Right Column: Solid Corporate Green Architecture (25% rule) with Technical Attribute Specs */}
          <div className="lg:col-span-6 bg-[#0D241C] border border-[#1C5944] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1C5944]/60 mb-6">
                <div>
                  <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#00E599] mb-1">
                    Atributos Comerciales Confirmados
                  </div>
                  <h3 className="font-['Archivo'] font-bold text-xl text-white tracking-tight">
                    El valor de operar con un mayorista real
                  </h3>
                </div>
              </div>

              {/* Technical Specification List (Replaces generic cards) */}
              <div className="divide-y divide-[#1C5944]/60">
                {ATTRIBUTES.map((attr, idx) => {
                  const IconComp = iconMap[attr.icon] || ShieldCheck;
                  return (
                    <div key={idx} className="py-5 first:pt-0 last:pb-0 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-[2px] bg-[#0F382A] border border-[#1C5944] flex items-center justify-center text-[#00E599] shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-['Archivo'] font-bold text-base text-white mb-1 tracking-tight">
                          {attr.title}
                        </h4>
                        <p className="text-sm text-[#A1ACB8] leading-relaxed">
                          {attr.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#1C5944]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#E4E7EC] font-medium">
                Catálogo mayorista disponible en línea
              </span>
              <a
                href={COMPANY_INFO.ecommerceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E599] hover:text-[#10F4A8] transition-colors uppercase tracking-wider"
              >
                <span>Acceder al Catálogo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
