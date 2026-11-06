import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/content';

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="relative bg-[#07080A] border-t border-[#1B1E24] pt-16 pb-28 sm:pb-16 text-[#8B95A5]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#171A20]">
          
          {/* Brand & Purpose Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo />
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm pt-2">
              Distribuidora mayorista en Córdoba orientada exclusivamente al abastecimiento de ferreterías, comercios y revendedores.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[#00E599] font-medium pt-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Operación exclusiva mediante depósito logístico</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-['Archivo'] font-bold text-xs uppercase tracking-wider text-white mb-4">
              Navegación Institucional
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Presentación de la Empresa
                </a>
              </li>
              <li>
                <a href="#rubros" className="hover:text-white transition-colors">
                  Rubros Comerciales
                </a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-white transition-colors">
                  Historia y Trayectoria
                </a>
              </li>
              <li>
                <a href="#distribucion" className="hover:text-white transition-colors">
                  Distribución y Entregas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto y Pedidos
                </a>
              </li>
            </ul>
          </div>

          {/* External Platform & Categories (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-['Archivo'] font-bold text-xs uppercase tracking-wider text-white mb-4">
              Plataforma Digital B2B
            </h4>
            <p className="text-xs text-[#8B95A5] leading-relaxed mb-4">
              Acceso a la plataforma web independiente para realizar pedidos y consultas de artículos disponibles:
            </p>
            <a
              href={COMPANY_INFO.ecommerceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#00E599] hover:text-[#10F4A8] border border-[#1C5944] bg-[#0F382A]/40 px-3.5 py-2 rounded-[2px] transition-colors"
            >
              <span>basecordoba.netlify.app</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="pt-4 text-xs text-[#8B95A5]">
              Córdoba, Argentina · 22 años de presencia empresarial.
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B95A5]">
          <div>
            © {CURRENT_YEAR} {COMPANY_INFO.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>Canal Mayorista Exclusivo</span>
            <span>·</span>
            <span>Córdoba, Argentina</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
