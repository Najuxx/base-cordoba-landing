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
    <section id="nosotros" className="relative py-24 sm:py-32 bg-[#000000] border-b border-[#2c2c2c]">
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
          <div className="lg:col-span-6 space-y-6 text-[#F4F4F2]/90 text-base sm:text-lg leading-relaxed font-normal">
            <div className="flex items-center gap-4 pb-4 border-b border-[#2c2c2c]">
              <img src={logoImg} alt="B" className="w-11 h-11 rounded-[3px] border border-[#2c2c2c] bg-black shrink-0" />
              <div>
                <div className="font-['Archivo_Black'] text-[#F4F4F2] text-lg leading-tight">
                  BASE Córdoba
                </div>
                <div className="font-['JetBrains_Mono'] text-xs text-[#34C77B] font-bold uppercase tracking-wider mt-0.5">
                  Distribución Mayorista B2B
                </div>
              </div>
            </div>

            <p>
              <strong className="text-white font-semibold">BASE Córdoba</strong> es una empresa mayorista orientada a satisfacer las necesidades de aprovisionamiento de comercios, ferreterías, revendedores y negocios de la provincia.
            </p>
            <p className="text-[#9A9A9A]">
              Nuestra operación se estructura a través de depósito y logística de distribución, prescindiendo deliberadamente de un salón comercial de atención directa al público. Esta decisión estratégica nos permite concentrar toda la capacidad operativa en abastecer a negocios, respetando y protegiendo el margen comercial de cada comerciante.
            </p>
            <p className="text-[#9A9A9A]">
              Entendemos las prioridades cotidianas del negocio: listas claras con precio por bulto e IVA a la vista, respuesta comercial directa y un canal digital complementario para ordenar pedidos con agilidad.
            </p>
          </div>

          {/* Right Column: Solid Corporate Green Panel with Technical Attribute Specs */}
          <div className="lg:col-span-6 bg-[#0F7B4A]/15 border border-[#1C5944] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1C5944]/60 mb-6">
                <div>
                  <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#34C77B] font-bold mb-1">
                    Atributos Comerciales Confirmados
                  </div>
                  <h3 className="font-['Archivo_Black'] text-xl text-[#F4F4F2] tracking-tight">
                    El valor de operar con un mayorista real
                  </h3>
                </div>
              </div>

              {/* Technical Specification List */}
              <div className="divide-y divide-[#1C5944]/60">
                {ATTRIBUTES.map((attr, idx) => {
                  const IconComp = iconMap[attr.icon] || ShieldCheck;
                  return (
                    <div key={idx} className="py-5 first:pt-0 last:pb-0 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-[3px] bg-[#0F7B4A] border border-[#1C5944] flex items-center justify-center text-[#F4F4F2] shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-['Archivo_Black'] text-base text-[#F4F4F2] mb-1 tracking-tight">
                          {attr.title}
                        </h4>
                        <p className="text-sm text-[#9A9A9A] leading-relaxed">
                          {attr.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#1C5944]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#F4F4F2] font-medium">
                Catálogo mayorista disponible en línea
              </span>
              <a
                href={COMPANY_INFO.ecommerceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34C77B] hover:text-[#2be072] transition-colors uppercase tracking-wider"
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
