import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export default function Specialties() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.specialty-card',
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top 84%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTrack = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = Math.max(320, trackRef.current.clientWidth * 0.75);
    trackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

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

          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-slate-300/80 md:text-right">
              Escolha a frente que corresponde ao seu momento e converse
              diretamente pelo WhatsApp.
            </p>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollTrack('prev')}
                aria-label="Ver especialidade anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-all duration-200 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrack('next')}
                aria-label="Ver próxima especialidade"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white text-navy transition-all duration-200 hover:border-gold hover:bg-gold"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Vitrine de 4 Cards Fotográficos Altos (Ritmo Claro / Full-Bleed Escuro) */}
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 xl:grid xl:grid-cols-4 xl:overflow-visible"
        >
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
                  className="specialty-card group relative flex min-h-[430px] w-[82vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-navy-deep p-6 transition-all duration-300 hover:border-gold/60 sm:w-[340px] xl:w-auto"
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
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow-md transition-transform duration-300 group-hover:scale-105"
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
                className="specialty-card group flex min-h-[430px] w-[82vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#F7F6F2] p-6 text-[#0D1B2A] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-[340px] xl:w-auto"
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
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#0D1B2A] transition-all duration-300 group-hover:border-[#0D1B2A] group-hover:bg-[#0D1B2A] group-hover:text-gold"
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
