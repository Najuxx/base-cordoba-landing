import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  showArrow = false,
  className = "",
  onClick,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-[2px] transition-all duration-150 select-none whitespace-nowrap";
  
  const variants = {
    primary: "bg-[#00E599] hover:bg-[#10F4A8] text-[#090A0C] shadow-sm shadow-[#00E599]/20",
    secondary: "bg-[#111317] hover:bg-[#16191F] text-[#CBD5E1] hover:text-white border border-[#1F242C] hover:border-[#2E3540]",
    outline: "bg-transparent hover:bg-[#0F382A]/30 text-[#00E599] border border-[#1C5944]",
    ghost: "bg-transparent hover:bg-[#16191F] text-[#CBD5E1] hover:text-white",
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={onClick}
        {...props}
      >
        <span>{children}</span>
        {showArrow && <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />}
    </button>
  );
}

