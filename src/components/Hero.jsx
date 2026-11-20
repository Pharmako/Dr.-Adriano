import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import GreekColumnIcon from './GreekColumnIcon';
import WhatsAppIcon from './WhatsAppIcon';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const sectionRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-stagger', {
        opacity: 0,
        y: 24,
        duration: 0.85,
        stagger: 0.11,
        ease: 'power3.out',
        clearProps: 'transform',
      });

      gsap.from('.hero-photo-card', {
        opacity: 0,
        y: 28,
        scale: 0.97,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heroWhatsAppUrl = getWhatsAppUrl(siteConfig.defaultWhatsAppMessages.hero);

  return (
    <section
      id="topo"
      ref={sectionRef}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy py-14 sm:py-20 lg:py-24"
    >
      {/* Textura editorial sutil */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Gradiente radial sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_22%_35%,rgba(200,162,83,0.12)_0%,rgba(22,39,56,0.35)_42%,rgba(15,29,43,0)_76%)]"
      />

      {/* Marca d'água geométrica da coluna clássica em opacity-[0.04] */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 text-gold opacity-[0.04]"
      >
        <GreekColumnIcon className="h-[520px] w-[520px] sm:h-[640px] sm:w-[640px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid 2 colunas desktop (60% esquerda / 40% direita) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Coluna Esquerda (60% -> 7/12): Texto e Conversão */}
          <div className="lg:col-span-7">
            <div className="hero-stagger mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-navy-light/70 px-4 py-1.5 backdrop-blur-sm">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold"
                aria-hidden="true"
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs">
                {siteConfig.brand.locationBadge}
              </span>
            </div>

            <h1 className="hero-stagger font-serif text-4xl font-semibold leading-[1.12] tracking-[-0.015em] text-paper sm:text-5xl lg:text-[3.45rem] xl:text-[3.75rem]">
              {siteConfig.hero.headline}
            </h1>

            <p className="hero-stagger mt-6 max-w-2xl text-base leading-relaxed text-paper/80 sm:text-lg sm:leading-[1.7]">
              {siteConfig.hero.subtext}
            </p>

            <div className="hero-stagger mt-9 flex flex-col items-start gap-4">
              <MagneticButton
                id="cta-hero"
                ctaOrigin="hero"
                href={heroWhatsAppUrl}
                variant="gold"
                className="w-full px-7 py-4 text-sm sm:w-auto sm:px-8 sm:text-base"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>{siteConfig.hero.ctaLabel}</span>
              </MagneticButton>

              <p className="flex items-center gap-2 text-xs text-paper/65 sm:text-sm">
                <ShieldCheck className="h-4 w-4 shrink-0 text-gold/90" />
                <span>{siteConfig.hero.microGuarantee}</span>
              </p>
            </div>
          </div>

          {/* Coluna Direita (40% -> 5/12): Card Fotográfico Real */}
          <div className="lg:col-span-5">
            <div className="hero-photo-card relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-[#C8A253]/30 bg-[#162738] shadow-2xl lg:aspect-[4/5] lg:max-w-none">
              {!imgError ? (
                <img
                  src={siteConfig.hero.photoPath}
                  alt={siteConfig.hero.photoAlt}
                  onError={() => setImgError(true)}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_58%] scale-[1.15] contrast-[1.04] saturate-[0.94]"
                />
              ) : (
                /* Fallback elegante caso a imagem ainda não tenha sido inserida */
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-navy-light to-navy p-8 text-center">
                  <GreekColumnIcon className="mb-4 h-16 w-16 text-gold/70" />
                  <span className="font-serif text-2xl font-semibold tracking-[0.16em] text-gold">
                    {siteConfig.brand.monogram}
                  </span>
                  <span className="mt-2 text-xs uppercase tracking-[0.2em] text-paper/60">
                    {siteConfig.brand.oab}
                  </span>
                </div>
              )}

              {/* Overlay em gradiente na base */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F1D2B] via-[#0F1D2B]/30 to-transparent"
              />

              {/* Selo glassmorphism discreto na parte inferior interna */}
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-gold/25 bg-navy/70 px-4 py-3.5 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:px-5">
                <p className="font-serif text-base font-semibold text-paper sm:text-lg">
                  {siteConfig.brand.displayTitle}
                </p>
                <p className="mt-0.5 text-xs text-gold/90 sm:text-[13px]">
                  {siteConfig.hero.photoCaptionSub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
