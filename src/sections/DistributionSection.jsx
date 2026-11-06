import React from 'react';
import { Warehouse, Store, ShoppingCart, Truck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { WORK_MODEL_POINTS, COMPANY_INFO } from '../data/content';

const modelIcons = [
  Warehouse,
  Store,
  ShoppingCart,
  Truck,
];

export default function DistributionSection() {
  return (
    <section id="distribucion" className="relative py-24 sm:py-32 bg-[#0A0C0E] border-b border-[#1B1E24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <SectionHeading
          tag="04 // Operación B2B"
          title="Distribución y Entregas"
          description="Una estructura operativa pensada para abastecer negocios de manera eficiente y transparente."
        />

        {/* Clear Notice Banner: Exclusively Depot Operation / No Public Counter */}
        <div className="bg-[#111317] border-l-4 border-l-[#00E599] border-y border-r border-[#1F242C] p-6 sm:p-8 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-[2px] bg-[#0F382A] border border-[#1C5944] flex items-center justify-center shrink-0 text-[#00E599]">
              <Warehouse className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Archivo'] font-bold text-base sm:text-lg text-white mb-1">
                Operación Exclusiva Mediante Depósito de Distribución
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                BASE Córdoba no dispone de local comercial de atención directa al público. Las instalaciones están organizadas exclusivamente para el acopio, ordenamiento y despacho mayorista destinado a ferreterías, comercios y revendedores.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Pillars (4 Points) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1F242C] border border-[#1F242C] mb-16">
          {WORK_MODEL_POINTS.map((point, index) => {
            const IconComp = modelIcons[index] || Warehouse;
            return (
              <div 
                key={point.number}
                className="bg-[#0D0F12] p-8 flex flex-col justify-between hover:bg-[#111317] transition-colors duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-['JetBrains_Mono'] text-xs font-semibold text-[#8B95A5]">
                      {point.number}
                    </span>
                    <IconComp className="w-4 h-4 text-[#00E599]" />
                  </div>

                  <h4 className="font-['Archivo'] font-bold text-lg text-white mb-3 tracking-tight">
                    {point.title}
                  </h4>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#171A20] flex items-center gap-1.5 text-[11px] font-['JetBrains_Mono'] uppercase tracking-wider text-[#8B95A5]">
                  <span>Pauta Operativa</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Clarification Note */}
        <div className="border border-[#1F242C] bg-[#090A0C] p-6 text-xs text-[#8B95A5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>
            * Las condiciones de entrega, modalidades de despacho y montos mínimos se coordinan en forma directa según las pautas comerciales vigentes.
          </p>
          <a
            href={COMPANY_INFO.ecommerceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E599] hover:underline font-semibold whitespace-nowrap"
          >
            Consultar condiciones en el e-commerce ↗
          </a>
        </div>

      </div>
    </section>
  );
}

