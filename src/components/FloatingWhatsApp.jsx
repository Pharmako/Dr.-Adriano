import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <div className="group fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="pointer-events-none hidden translate-x-2 rounded-full border border-white/15 bg-navy/95 px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:inline-block"
      >
        Falar no WhatsApp
      </span>

      <a
        id="cta-float"
        data-cta-origin="floating-button"
        href={getWhatsAppUrl(siteConfig.defaultWhatsAppMessages.float)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Dr. Adriano no WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/25 transition-transform duration-300 hover:scale-105 hover:bg-whatsapp-hover focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-paper"
      >
        {/* Anel expansivo orgânico controlado (0.45 -> 0 em 2.4s) */}
        <span
          aria-hidden="true"
          className="whatsapp-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-whatsapp"
        />
        <WhatsAppIcon className="relative z-10 h-7 w-7" />
      </a>
    </div>
  );
}
