import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import GreekColumnIcon from './GreekColumnIcon';
import WhatsAppIcon from './WhatsAppIcon';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-navy-deep/30'
          : 'bg-navy border-b border-white/[0.06]'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Esquerda: Marca ASP + Coluna Clássica */}
        <a
          href="#topo"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="ASP – Adriano de Souza Pereira – Voltar ao topo"
        >
          <GreekColumnIcon className="h-9 w-9 shrink-0 text-gold transition-transform duration-300 group-hover:scale-105" />
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl font-semibold tracking-[0.14em] text-paper sm:text-2xl">
              {siteConfig.brand.monogram}
            </span>
            <span
              className="hidden h-7 w-px bg-gold/35 sm:block"
              aria-hidden="true"
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-wide text-paper">
                {siteConfig.brand.shortName}
              </span>
              <span className="text-xs text-paper/65">
                {siteConfig.brand.subtitle}
              </span>
            </div>
          </div>
        </a>

        {/* Centro (Desktop): Links Âncora */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-paper/80 transition-colors duration-200 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direita: CTA WhatsApp + Menu Mobile */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <MagneticButton
            id="cta-navbar"
            ctaOrigin="navbar"
            href={whatsappHref}
            variant="outline-gold"
            className="hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>Falar no WhatsApp</span>
          </MagneticButton>

          {/* Botão WhatsApp sempre visível no mobile */}
          <a
            id="cta-navbar-mobile"
            data-cta-origin="navbar-mobile"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-gold/75 bg-gold/10 px-3.5 py-2 text-xs font-semibold text-gold transition-colors hover:bg-gold hover:text-navy sm:hidden"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 text-paper transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Drawer Mobile */}
      <div
        className={`overflow-hidden border-t border-gold/15 bg-navy/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6">
          <div className="mb-3 border-b border-white/10 pb-3 sm:hidden">
            <p className="text-sm font-semibold text-paper">
              {siteConfig.brand.fullName}
            </p>
            <p className="text-xs text-paper/65">
              {siteConfig.brand.subtitle} • {siteConfig.brand.oab}
            </p>
          </div>
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-paper/85 transition-colors hover:bg-navy-light hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
