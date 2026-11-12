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
    <section id="rubros" className="relative py-24 sm:py-32 bg-[#000000] border-b border-[#2c2c2c]">
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
              className="group inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#222222] border border-[#2c2c2c] hover:border-[#34C77B]/50 text-[#F4F4F2] px-4 py-2.5 rounded-[3px] text-xs font-bold uppercase tracking-wider transition-all duration-150 shrink-0"
            >
              <span>Catálogo Completo en E-Commerce</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#34C77B] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        {/* 6 Official Categories Grid (Architectural Index Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2c2c2c] border border-[#2c2c2c] mb-12">
          {RUBROS.map((rubro) => {
            const IconComponent = rubroIconMap[rubro.icon] || Wrench;
            return (
              <a
                key={rubro.id}
                href={rubro.ecommerceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0D0F12] hover:bg-[#14171E] p-8 flex flex-col justify-between transition-colors duration-150"
              >
                <div>
                  {/* Top technical line */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1F242C] group-hover:border-[#1C5944]/40 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#34C77B]">
                        {rubro.number}
                      </span>
                      <span className="text-[#3A424E] text-xs font-mono">/</span>
                      <span className="font-['JetBrains_Mono'] text-[11px] text-[#9A9A9A] uppercase tracking-wider">
                        CAT-{rubro.id.slice(0, 3).toUpperCase()}
                      </span>
                    </div>

                    <div className="w-8 h-8 flex items-center justify-center bg-[#1A1A1A] border border-[#2c2c2c] group-hover:border-[#1C5944] group-hover:bg-[#0F7B4A] rounded-[3px] transition-colors duration-150 text-[#9A9A9A] group-hover:text-[#F4F4F2]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Category Title in Archivo Black */}
                  <h3 className="font-['Archivo_Black'] text-xl text-[#F4F4F2] tracking-tight mb-3 group-hover:text-[#34C77B] transition-colors">
                    {rubro.name}
                  </h3>

                  {/* Official Category Description */}
                  <p className="text-sm text-[#9A9A9A] leading-relaxed mb-8">
                    {rubro.description}
                  </p>
                </div>

                {/* Direct Action Hook to E-Commerce */}
                <div className="pt-4 border-t border-[#1F242C] flex items-center justify-between text-xs font-bold text-[#9A9A9A] group-hover:text-[#34C77B] transition-colors">
                  <span className="uppercase tracking-wider">Consultar en E-Commerce</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Notice & Direct Order Gateway */}
        <div className="bg-[#1A1A1A] border border-[#2c2c2c] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-['Archivo_Black'] text-base sm:text-lg text-[#F4F4F2] mb-1">
              ¿Buscás artículos o códigos específicos para tu negocio?
            </h4>
            <p className="text-sm text-[#9A9A9A]">
              Accedé a nuestra plataforma online independiente para consultar la disponibilidad de productos con precio por bulto e IVA a la vista.
            </p>
          </div>

          <a
            href={COMPANY_INFO.ecommerceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0F7B4A] hover:bg-[#0D6A40] text-[#F4F4F2] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-[3px] transition-all duration-150 whitespace-nowrap shadow-[0_4px_14px_rgba(15,123,74,0.4)]"
          >
            <span>Ir a basecordoba.netlify.app</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
