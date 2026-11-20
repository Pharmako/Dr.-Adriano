import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export default function Specialties() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Container escuro esculpido: entrada sutil de escala e elevação
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.92, scale: 0.985, y: 24 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // 4 cards fotográficos entram em cascata (y: 36 -> 0, stagger: 0.1)
      gsap.fromTo(
        '.specialty-card',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.specialties-grid',
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
      id="especialidades"
      ref={sectionRef}
      className="sculpted-dark mx-2.5 my-4 rounded-[24px] py-14 shadow-sculpted ring-1 ring-white/10 sm:mx-5 sm:rounded-[28px] sm:py-20 lg:mx-8 lg:rounded-[36px] lg:py-24"
      aria-labelledby="especialidades-heading"
    >
      {/* Textura editorial sutil */}
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Cabeçalho Interno */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              ESPECIALIDADES
            </span>
            <h2
              id="especialidades-heading"
              className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.015em] text-white lg:text-5xl"
            >
              Atuação focada no que{' '}
              <em className="font-serif italic text-gold">sustenta</em> a sua
              vida.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-slate-300/80 md:text-right">
            Escolha a frente que corresponde ao seu momento e converse
            diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Grid Fixo Responsivo de 4 Cards Fotográficos Altos */}
        <div className="specialties-grid grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {siteConfig.specialties.map((card) => {
            const href = getWhatsAppUrl(card.whatsappMessage);

            if (card.variant === 'dark') {
              return (
                <a
                  key={card.id}
                  id={card.id}
                  data-cta-origin={card.origin}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="specialty-card group relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-navy-deep p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/65"
                >
                  {/* Imagem Full-Bleed */}
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Dramático */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#09131E] via-[#09131E]/60 to-black/25 transition-opacity duration-300 group-hover:via-[#09131E]/50"
                  />

                  <div className="relative z-10">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      {card.category}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto flex flex-col gap-4">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold leading-snug text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-200/90">
                        {card.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                        Orientar caso
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-gold-hover group-hover:shadow-[0_0_20px_rgba(212,175,90,0.6)]"
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            }

            /* Cards 1 e 3: Fundo Claro Editorial #F7F6F2 */
            return (
              <a
                key={card.id}
                id={card.id}
                data-cta-origin={card.origin}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="specialty-card group flex min-h-[430px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#F7F6F2] p-6 text-[#0D1B2A] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                    {card.category}
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-[#0D1B2A]">
                    {card.title}
                  </h3>

                  <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-200">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {card.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#0D1B2A] transition-all duration-300 group-hover:border-gold group-hover:bg-[#0D1B2A] group-hover:text-gold group-hover:shadow-[0_0_18px_rgba(212,175,90,0.45)]"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
