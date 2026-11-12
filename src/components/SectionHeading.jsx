import React from 'react';

export default function SectionHeading({
  tag,
  title,
  description,
  action,
  className = "",
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#2c2c2c] ${className}`}>
      <div className="max-w-2xl">
        {tag && (
          <div className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.12em] text-[#34C77B] font-bold mb-3">
            {tag}
          </div>
        )}
        <h2 className="font-['Archivo_Black'] text-2xl sm:text-4xl text-[#F4F4F2] tracking-tight leading-tight">
          {title}
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {description && (
          <p className="text-sm sm:text-base text-[#9A9A9A] max-w-md leading-relaxed">
            {description}
          </p>
        )}
        {action}
      </div>
    </div>
  );
}
