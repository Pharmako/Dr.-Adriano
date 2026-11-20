import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Botão CTA Padrão Pílula Premium:
 * rounded-full em #D4AF5A (hover #E2C170), texto #0D1B2A semibold,
 * micro-interação magnética com camada deslizante e círculo branco à direita
 * contendo ArrowUpRight com rotação suave no hover.
 */
export default function PillCTA({
  id,
  ctaOrigin,
  href,
  children,
  fullWidth = false,
  size = 'md',
  className = '',
}) {
  const sizeClasses =
    size === 'sm'
      ? 'pl-4 pr-1.5 py-1.5 text-xs sm:text-sm gap-2.5'
      : 'pl-6 pr-2 py-2 text-sm sm:text-[15px] gap-3.5';

  const circleClasses = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8';

  return (
    <a
      id={id}
      data-cta-origin={ctaOrigin}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`magnetic-pill group inline-flex items-center justify-between rounded-full bg-gold font-semibold text-navy shadow-gold-glow ${
        fullWidth ? 'w-full' : 'w-auto'
      } ${sizeClasses} ${className}`}
    >
      <span className="magnetic-pill-fill bg-gold-hover" aria-hidden="true" />
      <span className="relative z-10 whitespace-nowrap">{children}</span>
      <span
        className={`relative z-10 flex shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-sm transition-transform duration-300 group-hover:scale-105 ${circleClasses}`}
        aria-hidden="true"
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </a>
  );
}
