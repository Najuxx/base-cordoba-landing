import React from 'react';
import logoImg from '../assets/logo-b.png';

export default function Logo({ size = 'md', className = '' }) {
  const sizeMap = {
    sm: {
      img: 'w-7 h-7',
      title: 'text-lg',
      sub: 'text-[9px]',
      gap: 'gap-2.5',
    },
    md: {
      img: 'w-9 h-9',
      title: 'text-xl',
      sub: 'text-[10px]',
      gap: 'gap-3',
    },
    lg: {
      img: 'w-12 h-12',
      title: 'text-2xl',
      sub: 'text-xs',
      gap: 'gap-3.5',
    },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center ${currentSize.gap} select-none ${className}`}>
      {/* Official B Icon */}
      <img
        src={logoImg}
        alt="Logo BASE Córdoba"
        className={`${currentSize.img} object-contain rounded-[2px] border border-[#1F242C] bg-black shrink-0`}
      />

      {/* Brand Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-['Archivo'] font-extrabold ${currentSize.title} tracking-tight text-white`}>
            BASE
          </span>
          <span className="font-['Archivo'] font-semibold text-xs tracking-wider text-[#00E599] uppercase">
            Córdoba
          </span>
        </div>
        <span className={`font-['JetBrains_Mono'] ${currentSize.sub} uppercase tracking-[0.16em] text-[#8B95A5] mt-1 font-medium`}>
          Distribución Mayorista
        </span>
      </div>
    </div>
  );
}
