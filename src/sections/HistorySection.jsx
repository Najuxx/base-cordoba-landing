import React from 'react';
import { Building2, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function HistorySection() {
  return (
    <section id="trayectoria" className="relative py-24 sm:py-32 bg-[#090A0C] border-b border-[#1B1E24]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <SectionHeading
          tag="03 // Origen & Respaldo"
          title="Historia y Trayectoria"
          description="La solidez de una firma consolidada en Córdoba unida a décadas de conocimiento y práctica en el rubro comercial."
        />

        {/* Dual Milestones — Clearly Separated */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Milestone 1: BASE Córdoba */}
          <div className="relative bg-[#0D0F12] border border-[#1F242C] p-8 sm:p-12 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-8">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.12em] text-[#8B95A5]">
                Hito Empresarial
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-[#0F382A] border border-[#1C5944] rounded-[2px] text-[#00E599]">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="font-['Archivo'] font-bold text-5xl sm:text-6xl text-white tracking-tight mb-2">
                22 Años
              </div>
              <h3 className="font-['Archivo'] font-semibold text-lg text-[#00E599] mb-4">
                Trayectoria de BASE Córdoba
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Más de dos décadas de actividad ininterrumpida como empresa mayorista en la plaza de Córdoba. Una estructura consolidada en el depósito y la logística de distribución, orientada a mantener vínculos comerciales estables y previsibles con negocios y ferreterías de la región.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1F242C] flex items-center gap-2 text-xs text-[#8B95A5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>Presencia y radicación continua en Córdoba</span>
            </div>
          </div>

          {/* Milestone 2: Fundador / Dueño Original */}
          <div className="relative bg-[#0D0F12] border border-[#1F242C] p-8 sm:p-12 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-8">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.12em] text-[#8B95A5]">
                Oficio & Experiencia
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-[#0F382A] border border-[#1C5944] rounded-[2px] text-[#00E599]">
                <Award className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="font-['Archivo'] font-bold text-5xl sm:text-6xl text-white tracking-tight mb-2">
                +57 Años
              </div>
              <h3 className="font-['Archivo'] font-semibold text-lg text-[#00E599] mb-4">
                Experiencia Comercial del Dueño Original
              </h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Más de medio siglo de ejercicio activo en la actividad comercial. Una trayectoria personal que aporta criterio riguroso en la selección de productos, conocimiento profundo de las necesidades del comerciante y una visión de negocios basada en el cumplimiento y la palabra.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1F242C] flex items-center gap-2 text-xs text-[#8B95A5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E599]" />
              <span>Conocimiento práctico del mostrador mayorista</span>
            </div>
          </div>

        </div>

        {/* Synthesis Callout */}
        <div className="bg-[#0F382A]/30 border border-[#1C5944] p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <h4 className="font-['Archivo'] font-bold text-lg sm:text-xl text-white mb-2">
                Experiencia comprobable al servicio del comerciante.
              </h4>
              <p className="text-sm sm:text-base text-[#A1ACB8] leading-relaxed">
                La combinación entre la vigencia moderna de BASE Córdoba y el oficio de más de 57 años de su fundador fundamenta una propuesta de trabajo seria, previsible y honesta para el canal mayorista.
              </p>
            </div>
            
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-[#111317] hover:bg-[#16191F] text-white border border-[#1F242C] hover:border-[#00E599]/40 text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-[2px] transition-all whitespace-nowrap shrink-0"
            >
              Contactar al Equipo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

