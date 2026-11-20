import React from 'react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <div className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6">
      {/* Tooltip suave no desktop */}
      <span
        aria-hidden="true"
        className="pointer-events-none hidden translate-x-2 rounded-full border border-gold/25 bg-navy/95 px-4 py-2 text-xs font-medium text-paper opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:inline-block"
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
        className="flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp p-3.5 text-white shadow-lg shadow-black/25 transition-all duration-300 hover:scale-105 hover:bg-whatsapp-hover focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy sm:h-14 sm:w-14"
      >
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
