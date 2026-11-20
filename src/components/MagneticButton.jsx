import React from 'react';

/**
 * Botão/link com micro-interação magnética e camada de preenchimento deslizante.
 */
export default function MagneticButton({
  href,
  id,
  ctaOrigin,
  variant = 'gold',
  className = '',
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
  onClick,
}) {
  const styles = {
    gold: {
      base: 'bg-gold text-navy font-semibold shadow-gold-glow border border-gold',
      fill: 'bg-gold-hover',
    },
    'outline-gold': {
      base: 'bg-transparent text-gold hover:text-navy border border-gold/70 hover:border-gold font-medium',
      fill: 'bg-gold',
    },
    navy: {
      base: 'bg-navy text-paper font-semibold border border-navy hover:text-navy',
      fill: 'bg-gold',
    },
  };

  const current = styles[variant] || styles.gold;

  return (
    <a
      id={id}
      href={href}
      target={target}
      rel={rel}
      data-cta-origin={ctaOrigin}
      onClick={onClick}
      className={`magnetic-btn group inline-flex items-center justify-center gap-2.5 rounded-full transition-colors duration-300 ${current.base} ${className}`}
    >
      <span className={`magnetic-btn-fill ${current.fill}`} aria-hidden="true" />
      <span className="relative z-10 inline-flex items-center justify-center gap-2.5">
        {children}
      </span>
    </a>
  );
}
