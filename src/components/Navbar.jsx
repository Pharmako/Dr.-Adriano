import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import GreekColumnIcon from './GreekColumnIcon';
import PillCTA from './PillCTA';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const whatsappHref = getWhatsAppUrl(siteConfig.defaultWhatsAppMessages.navbar);

  return (
    <header className="hero-navbar relative z-30 mx-auto w-full max-w-7xl px-5 pt-5 sm:px-6 sm:pt-6 lg:px-12">
      <div className="flex items-center justify-between gap-4">
        {/* Esquerda: Coluna Clássica + ASP + Adriano Souza Pereira */}
        <a
          href="#topo"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="ASP – Adriano de Souza Pereira – Início"
        >
          <GreekColumnIcon className="h-8 w-8 shrink-0 text-gold transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9" />
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="font-serif text-lg font-semibold tracking-[0.14em] text-white sm:text-xl">
              {siteConfig.brand.monogram}
            </span>
            <span
              className="hidden h-6 w-px bg-gold/35 sm:block"
              aria-hidden="true"
            />
            <span className="hidden text-xs font-medium tracking-wide text-slate-200/90 sm:block lg:text-sm">
              {siteConfig.brand.shortName}
            </span>
          </div>
        </a>

        {/* Centro (Desktop): Pílula translúcida flutuante */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/[0.08] px-6 py-2.5 backdrop-blur-md lg:flex"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200/90 transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direita: Botão Pílula Dourado + Menu Mobile */}
        <div className="flex items-center gap-2.5">
          <PillCTA
            id="cta-navbar"
            ctaOrigin="navbar"
            href={whatsappHref}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Falar no WhatsApp
          </PillCTA>

          <PillCTA
            id="cta-navbar-mobile"
            ctaOrigin="navbar-mobile"
            href={whatsappHref}
            size="sm"
            className="sm:hidden"
          >
            WhatsApp
          </PillCTA>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:border-gold/60 hover:text-gold lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Limpo */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          menuOpen ? 'mt-4 max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-deep/90 p-3 backdrop-blur-xl"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/[0.07] hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
