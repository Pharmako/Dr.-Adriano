import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, Building2, Scale, Users } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import WhatsAppIcon from './WhatsAppIcon';
import MagneticButton from './MagneticButton';

const areaIcons = {
  imobiliario: Building2,
  familia: Users,
  juizado: Scale,
};

export default function PracticeAreas() {
  const [activeId, setActiveId] = useState(siteConfig.practiceAreas[0].id);
  const panelRef = useRef(null);
  const isFirstRender = useRef(true);

  const activeArea =
    siteConfig.practiceAreas.find((area) => area.id === activeId) ||
    siteConfig.practiceAreas[0];

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced || !panelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'transform' }
      );
    }, panelRef);

    return () => ctx.revert();
  }, [activeId]);

  const ActiveIcon = areaIcons[activeArea.id] || Scale;

  return (
    <section
      id="areas"
      className="bg-paper py-20 sm:py-28 lg:py-32"
      aria-labelledby="areas-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-muted">
            ÁREAS DE ATUAÇÃO
          </p>
          <h2
            id="areas-heading"
            className="mt-3 font-serif text-3xl font-semibold leading-[1.18] tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.65rem]"
          >
            Orientação clara para o momento que você está vivendo.
          </h2>
        </div>

        {/* Mobile: Abas horizontais tocáveis (pills) */}
        <div
          role="tablist"
          aria-label="Selecione uma área de atuação"
          className="mt-8 flex gap-2.5 overflow-x-auto pb-2 lg:hidden"
        >
          {siteConfig.practiceAreas.map((area) => {
            const isActive = area.id === activeId;
            return (
              <button
                key={area.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${area.id}`}
                onClick={() => setActiveId(area.id)}
                className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'border-navy bg-navy text-paper shadow-md'
                    : 'border-ink/15 bg-paper-elevated text-ink-muted hover:border-gold/60 hover:text-ink'
                }`}
              >
                {area.shortTabLabel}
              </button>
            );
          })}
        </div>

        {/* Layout Desktop: Menu lateral à esquerda + Card elevado à direita */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Menu Lateral Desktop */}
          <div
            role="tablist"
            aria-label="Áreas de atuação"
            aria-orientation="vertical"
            className="hidden flex-col gap-3 lg:col-span-4 lg:flex"
          >
            {siteConfig.practiceAreas.map((area, index) => {
              const isActive = area.id === activeId;
              const Icon = areaIcons[area.id] || Scale;
              return (
                <button
                  key={area.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${area.id}`}
                  onClick={() => setActiveId(area.id)}
                  className={`group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border px-6 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-navy bg-navy text-paper shadow-editorial'
                      : 'border-ink/10 bg-paper-elevated text-ink hover:border-gold/50 hover:bg-white'
                  }`}
                >
                  {/* Barra lateral dourada no estado ativo */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-y-0 left-0 w-1.5 bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-50'
                    }`}
                  />

                  <div className="flex items-center gap-4 pl-1">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? 'bg-gold/15 text-gold'
                          : 'bg-ink/[0.04] text-ink-muted group-hover:text-navy'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${
                          isActive ? 'text-gold' : 'text-ink-muted/70'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span className="mt-0.5 block text-base font-semibold leading-snug">
                        {area.tabLabel}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isActive
                        ? 'translate-x-0 text-gold'
                        : '-translate-x-1 text-ink-muted/40 group-hover:translate-x-0 group-hover:text-gold'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Painel Direito: Card de Conteúdo Elevado */}
          <div className="lg:col-span-8">
            <div
              id={`panel-${activeArea.id}`}
              role="tabpanel"
              ref={panelRef}
              className="rounded-3xl border border-ink/10 bg-paper-elevated p-7 shadow-editorial sm:p-10 lg:p-12"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-muted">
                  {activeArea.tabLabel}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl lg:text-[2.1rem]">
                {activeArea.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-[1.75] text-ink-muted sm:text-lg">
                {activeArea.description}
              </p>

              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {activeArea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-gold/35 bg-paper px-4 py-1.5 text-xs font-semibold tracking-wide text-ink sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divisor sutil + CTA WhatsApp */}
              <div className="mt-9 border-t border-ink/10 pt-8">
                <MagneticButton
                  id={activeArea.ctaId}
                  ctaOrigin={activeArea.ctaOrigin}
                  href={getWhatsAppUrl(activeArea.whatsappMessage)}
                  variant="navy"
                  className="w-full px-7 py-4 text-sm sm:w-auto sm:text-base"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  <span>{activeArea.ctaLabel}</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
