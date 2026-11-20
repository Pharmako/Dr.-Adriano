import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Scale, ShieldCheck, UserCheck } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import Navbar from './Navbar';
import GreekColumnIcon from './GreekColumnIcon';
import PillCTA from './PillCTA';

gsap.registerPlugin(ScrollTrigger);

const authorityIcons = {
  Scale,
  MapPin,
  UserCheck,
  ShieldCheck,
};

export default function Hero() {
  const sectionRef = useRef(null);
  const portraitImgRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Navbar interna: entra suave de y: -14, opacity: 0
      tl.fromTo(
        '.hero-navbar',
        { opacity: 0, y: -14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          clearProps: 'transform,opacity',
        },
        0
      );

      // 2. Badge + H1 + micro-texto escalonados (stagger: 0.1, y: 26 -> 0)
      tl.fromTo(
        '.hero-reveal',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          clearProps: 'transform,opacity',
        },
        0.1
      );

      // 3. Retrato em arco: respiro cinematográfico (scale: 1.05 -> 1, opacity: 0 -> 1, duration: 1.0)
      tl.fromTo(
        '.hero-portrait',
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          clearProps: 'transform,opacity',
        },
        0.12
      );

      // 4. Card Glassmorphism + Botão CTA deslizam juntos (y: 22 -> 0)
      tl.fromTo(
        '.hero-right-block',
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          clearProps: 'transform,opacity',
        },
        0.28
      );

      // 5. Barra Inferior de Autoridade (4 itens, stagger: 0.08, y: 16 -> 0)
      tl.fromTo(
        '.hero-authority-item',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          clearProps: 'transform,opacity',
        },
        0.42
      );

      // Micro-parallax no Scroll na imagem dentro do arco (yPercent: 6, scrub: true)
      if (portraitImgRef.current) {
        gsap.fromTo(
          portraitImgRef.current,
          { yPercent: 0 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heroWhatsAppUrl = getWhatsAppUrl(siteConfig.defaultWhatsAppMessages.hero);

  return (
    <section
      id="topo"
      ref={sectionRef}
      className="sculpted-dark mx-2.5 mt-3 rounded-[24px] shadow-sculpted ring-1 ring-white/10 sm:mx-5 sm:mt-4 sm:rounded-[28px] lg:mx-8 lg:rounded-[36px]"
    >
      {/* Textura editorial sutil */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navbar Interna Flutuante */}
      <Navbar />

      {/* Palco Principal da Hero */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-0 pt-8 sm:px-6 lg:px-12 lg:pt-10">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Coluna Esquerda (5 cols): Badge + H1 Monumental + Micro-texto */}
          <div className="pb-2 lg:col-span-5 lg:pb-12">
            <div className="hero-reveal inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                {siteConfig.brand.heroBadge}
              </span>
            </div>

            <h1 className="hero-reveal mt-6 font-serif text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.5rem]">
              Segurança jurídica para o seu{' '}
              <em className="font-serif italic text-gold">patrimônio</em> e paz
              para a sua{' '}
              <em className="font-serif italic text-gold">família.</em>
            </h1>

            <p className="hero-reveal mt-5 flex items-center gap-2.5 text-sm text-slate-300/85">
              <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
              <span>{siteConfig.hero.microNote}</span>
            </p>

            {/* CTA imediato no mobile (primeira dobra Google Ads) */}
            <div className="hero-reveal mt-6 lg:hidden">
              <PillCTA
                id="cta-hero-mobile"
                ctaOrigin="hero-mobile"
                href={heroWhatsAppUrl}
                fullWidth
                pulse
              >
                {siteConfig.hero.ctaLabel}
              </PillCTA>
            </div>
          </div>

          {/* Coluna Central (4 cols): Protagonismo do Retrato */}
          <div className="relative flex justify-center lg:col-span-4">
            {/* Halo radial sutil atrás do retrato */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#254A70]/45 blur-3xl"
            />

            {/* Marca d'água SVG da coluna clássica */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-gold opacity-[0.06]"
            >
              <GreekColumnIcon className="h-72 w-72 sm:h-80 sm:w-80" />
            </div>

            {/* Card fotográfico vertical com arco editorial */}
            <div className="hero-portrait relative z-10 aspect-[4/5] w-full max-w-[330px] overflow-hidden rounded-b-2xl rounded-t-[130px] border border-[#D4AF5A]/25 bg-navy-deep shadow-2xl sm:max-w-[360px] lg:max-w-none">
              {!imgError ? (
                <img
                  ref={portraitImgRef}
                  src={siteConfig.hero.photoPath}
                  alt={siteConfig.hero.photoAlt}
                  onError={() => setImgError(true)}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-top will-change-transform"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-navy-light to-navy-deep p-8 text-center">
                  <GreekColumnIcon className="mb-4 h-16 w-16 text-gold/70" />
                  <span className="font-serif text-2xl font-semibold tracking-[0.16em] text-gold">
                    {siteConfig.brand.monogram}
                  </span>
                </div>
              )}

              {/* Gradiente suave apenas na base integrando o paletó ao palco escuro */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09131E] via-[#09131E]/40 to-transparent"
              />
            </div>
          </div>

          {/* Coluna Direita (3 cols): Card Glassmorphism + CTA Principal */}
          <div className="hero-right-block flex flex-col gap-4 pb-8 lg:col-span-3 lg:pb-12">
            <div className="glass-card-sheen space-y-3 rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-xl">
              <div className="relative z-10 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Scale className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">
                  {siteConfig.hero.glassTitle}
                </span>
              </div>
              <p className="relative z-10 text-sm leading-relaxed text-slate-200">
                {siteConfig.hero.glassText}
              </p>
            </div>

            <div className="hidden lg:block">
              <PillCTA
                id="cta-hero"
                ctaOrigin="hero"
                href={heroWhatsAppUrl}
                fullWidth
                pulse
              >
                {siteConfig.hero.ctaLabel}
              </PillCTA>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Autoridade (Ancorada na base interna do container da Hero) */}
      <div className="relative z-10 border-t border-white/10 bg-black/25 px-5 py-6 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {siteConfig.authorityBar.map((item) => {
            const Icon = authorityIcons[item.icon] || Scale;
            return (
              <div
                key={item.id}
                className="hero-authority-item flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white sm:text-[15px]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-300/75">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
