import React from 'react';
import { Building2, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function HistorySection() {
  return (
    <section id="trayectoria" className="relative py-24 sm:py-32 bg-[#000000] border-b border-[#2c2c2c]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <SectionHeading
          tag="03 // Origen & Respaldo"
          title="Historia y Trayectoria"
          description="La solidez de una firma consolidada en Córdoba unida a décadas de conocimiento y práctica en el rubro comercial."
        />

        {/* Dual Milestones — Clearly Separated with Different Textures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Milestone 1: BASE Córdoba */}
          <div className="relative bg-[#0D0F12] border border-[#2c2c2c] p-8 sm:p-12 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-8">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.12em] text-[#9A9A9A] font-semibold">
                Hito Empresarial
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] border border-[#2c2c2c] rounded-[3px] text-[#34C77B]">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="font-['Archivo_Black'] text-5xl sm:text-6xl lg:text-7xl text-[#F4F4F2] tracking-tight mb-2">
                22 Años
              </div>
              <h3 className="font-['Archivo_Black'] text-lg text-[#34C77B] mb-4">
                Trayectoria de BASE Córdoba
              </h3>
              <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
                Más de dos décadas de actividad ininterrumpida como empresa mayorista en la plaza de Córdoba. Una estructura consolidada en el depósito y la logística de distribución, orientada a mantener vínculos comerciales estables y previsibles con negocios y ferreterías de la región.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1F242C] flex items-center gap-2 text-xs text-[#9A9A9A]">
              <span className="w-2 h-2 rounded-full bg-[#34C77B]" />
              <span>Presencia y radicación continua en Córdoba</span>
            </div>
          </div>

          {/* Milestone 2: Fundador / Dueño Original (Corporate Green) */}
          <div className="relative bg-[#0F7B4A]/15 border border-[#1C5944] p-8 sm:p-12 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-8">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.12em] text-[#34C77B] font-semibold">
                Oficio & Experiencia
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-[#0F7B4A] border border-[#1C5944] rounded-[3px] text-[#F4F4F2]">
                <Award className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="font-['Archivo_Black'] text-5xl sm:text-6xl lg:text-7xl text-[#F4F4F2] tracking-tight mb-2">
                +57 Años
              </div>
              <h3 className="font-['Archivo_Black'] text-lg text-[#34C77B] mb-4">
                Experiencia Comercial del Dueño Original
              </h3>
              <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
                Más de medio siglo de ejercicio activo en la actividad comercial. Una trayectoria personal que aporta criterio riguroso en la selección de productos, conocimiento profundo de las necesidades del comerciante y una visión de negocios basada en el cumplimiento y la palabra.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1C5944]/60 flex items-center gap-2 text-xs text-[#9A9A9A]">
              <span className="w-2 h-2 rounded-full bg-[#34C77B]" />
              <span>Conocimiento práctico del mostrador mayorista</span>
            </div>
          </div>

        </div>

        {/* Synthesis Callout */}
        <div className="bg-[#1A1A1A] border border-[#2c2c2c] p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <h4 className="font-['Archivo_Black'] text-lg sm:text-xl text-[#F4F4F2] mb-2">
                Experiencia comprobable al servicio del comerciante.
              </h4>
              <p className="text-sm sm:text-base text-[#9A9A9A] leading-relaxed">
                La combinación entre la vigencia moderna de BASE Córdoba y el oficio de más de 57 años de su fundador fundamenta una propuesta de trabajo seria, previsible y honesta para el canal mayorista.
              </p>
            </div>
            
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-[#0F7B4A] hover:bg-[#0D6A40] text-[#F4F4F2] font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-[3px] transition-all whitespace-nowrap shrink-0 shadow-[0_4px_14px_rgba(15,123,74,0.4)]"
            >
              Contactar al Equipo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
