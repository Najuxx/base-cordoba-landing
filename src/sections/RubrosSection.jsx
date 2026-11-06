import React from 'react';
import { 
  Wrench, 
  Hammer, 
  Sprout, 
  Car, 
  Bike, 
  Cpu, 
  ArrowUpRight, 
  ExternalLink 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { RUBROS, COMPANY_INFO } from '../data/content';

const rubroIconMap = {
  Wrench: Wrench,
  Hammer: Hammer,
  Sprout: Sprout,
  Car: Car,
  Bike: Bike,
  Cpu: Cpu,
};

export default function RubrosSection() {
  return (
    <section id="rubros" className="relative py-24 sm:py-32 bg-[#0A0C0E] border-b border-[#1B1E24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <SectionHeading
          tag="02 // Catálogo Mayorista"
          title="Rubros Comerciales"
          description="Las seis familias de producto activas en nuestro centro de distribución y catálogo digital."
          action={
            <a
              href={COMPANY_INFO.ecommerceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#111317] hover:bg-[#16191F] border border-[#1F242C] hover:border-[#00E599]/40 text-[#CBD5E1] hover:text-white px-4 py-2.5 rounded-[2px] text-xs font-semibold uppercase tracking-wider transition-all duration-150 shrink-0"
            >
              <span>Catálogo Completo en E-Commerce</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00E599] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        {/* 6 Official Categories Grid (Architectural Index Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1F242C] border border-[#1F242C] mb-12">
          {RUBROS.map((rubro) => {
            const IconComponent = rubroIconMap[rubro.icon] || Wrench;
            return (
              <a
                key={rubro.id}
                href={rubro.ecommerceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0D0F12] hover:bg-[#12151B] p-8 flex flex-col justify-between transition-colors duration-150"
              >
                <div>
                  {/* Top technical line */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#171A20] group-hover:border-[#1C5944]/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#00E599]">
                        {rubro.number}
                      </span>
                      <span className="text-[#3A424E] text-xs font-mono">/</span>
                      <span className="font-['JetBrains_Mono'] text-[11px] text-[#8B95A5] uppercase tracking-wider">
                        CAT-{rubro.id.slice(0, 3).toUpperCase()}
                      </span>
                    </div>

                    <div className="w-8 h-8 flex items-center justify-center bg-[#111317] border border-[#1F242C] group-hover:border-[#1C5944] group-hover:bg-[#0F382A] rounded-[2px] transition-colors duration-150 text-[#8B95A5] group-hover:text-[#00E599]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Category Title */}
                  <h3 className="font-['Archivo'] font-bold text-xl text-white tracking-tight mb-3 group-hover:text-[#F2F4F7] transition-colors">
                    {rubro.name}
                  </h3>

                  {/* Official Category Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
                    {rubro.description}
                  </p>
                </div>

                {/* Direct Action Hook to E-Commerce */}
                <div className="pt-4 border-t border-[#171A20] flex items-center justify-between text-xs font-semibold text-[#8B95A5] group-hover:text-[#00E599] transition-colors">
                  <span className="uppercase tracking-wider">Consultar en E-Commerce</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Notice & Direct Order Gateway */}
        <div className="bg-[#111317] border border-[#1F242C] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-['Archivo'] font-bold text-base sm:text-lg text-white mb-1">
              ¿Buscás artículos o códigos específicos para tu negocio?
            </h4>
            <p className="text-sm text-[#8B95A5]">
              Accedé a nuestra plataforma online independiente para consultar la disponibilidad de productos y armar tu lista de compra mayorista.
            </p>
          </div>

          <a
            href={COMPANY_INFO.ecommerceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00E599] hover:bg-[#10F4A8] text-[#090A0C] font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-[2px] transition-all duration-150 whitespace-nowrap shadow-sm shadow-[#00E599]/20"
          >
            <span>Ir a basecordoba.netlify.app</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
