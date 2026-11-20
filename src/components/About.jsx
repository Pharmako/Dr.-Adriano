import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import PillCTA from './PillCTA';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Bloco esquerdo: entra suave de y: 28 -> 0
      gsap.fromTo(
        '.about-left',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Bloco direito (parágrafos + botão): stagger: 0.12 logo em seguida
      gsap.fromTo(
        '.about-right-item',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          delay: 0.12,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
      aria-labelledby="sobre-heading"
    >
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Coluna Esquerda (5 cols) */}
        <div className="about-left lg:col-span-5">
          <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white/70 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
            {siteConfig.about.eyebrow}
          </span>
          <h2
            id="sobre-heading"
            className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#0D1B2A] lg:text-5xl"
          >
            {siteConfig.about.title}
          </h2>
        </div>

        {/* Coluna Direita (7 cols) */}
        <div className="lg:col-span-7">
          <p className="about-right-item text-xl font-medium leading-snug text-[#0D1B2A] lg:text-2xl">
            {siteConfig.about.lead}
          </p>

          <p className="about-right-item mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
            {siteConfig.about.body}
          </p>

          <div className="about-right-item mt-8 flex flex-wrap items-center gap-6">
            <PillCTA
              id="cta-sobre"
              ctaOrigin="sobre"
              href={getWhatsAppUrl(siteConfig.defaultWhatsAppMessages.sobre)}
            >
              {siteConfig.about.ctaLabel}
            </PillCTA>

            <span className="text-sm font-medium text-neutral-500">
              {siteConfig.brand.displayTitle} • {siteConfig.brand.oab}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
