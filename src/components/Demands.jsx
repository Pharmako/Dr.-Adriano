import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import PillCTA from './PillCTA';

gsap.registerPlugin(ScrollTrigger);

export default function Demands() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.demand-row',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.demands-list',
            start: 'top 84%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="demandas"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
      aria-labelledby="demandas-heading"
    >
      {/* Cabeçalho */}
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white/70 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
            COMO POSSO AJUDAR
          </span>
          <h2
            id="demandas-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.015em] text-[#0D1B2A] lg:text-5xl"
          >
            Demandas que resolvemos no dia a dia.
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <p className="max-w-sm text-sm leading-relaxed text-neutral-600 lg:text-right">
            Clique na situação mais próxima da sua para abrir o WhatsApp com o
            assunto já encaminhado.
          </p>
          <PillCTA
            id="cta-indice"
            ctaOrigin="indice"
            href={getWhatsAppUrl(siteConfig.defaultWhatsAppMessages.indice)}
          >
            Tirar uma dúvida agora
          </PillCTA>
        </div>
      </div>

      {/* Lista Editorial Estilo Tabela Interativa */}
      <div className="demands-list mt-12">
        {/* Cabeçalho discreto da tabela em desktop */}
        <div className="hidden grid-cols-12 border-b border-neutral-300 pb-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 md:grid">
          <div className="col-span-6">Demanda</div>
          <div className="col-span-3">Área</div>
          <div className="col-span-2">Modalidade</div>
          <div className="col-span-1 text-right">Ação</div>
        </div>

        <div className="divide-y divide-neutral-300/80 md:divide-y-0">
          {siteConfig.demands.map((item) => (
            <a
              key={item.id}
              id={item.id}
              data-cta-origin={item.origin}
              href={getWhatsAppUrl(item.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="demand-row group -mx-4 flex flex-col items-start gap-3 rounded-xl border-b border-neutral-300/80 px-4 py-5 transition-all duration-200 hover:bg-white hover:shadow-sm md:grid md:grid-cols-12 md:items-center md:gap-2"
            >
              <div className="w-full md:col-span-6">
                <span className="font-serif text-lg font-semibold text-[#0D1B2A] transition-colors group-hover:text-navy-light sm:text-xl">
                  {item.title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:col-span-3">
                <span className="inline-flex items-center rounded-full border border-neutral-300 bg-[#F4F3EF] px-3 py-1 text-xs font-semibold text-[#0D1B2A] transition-colors group-hover:border-gold/60 group-hover:bg-gold/15">
                  {item.area}
                </span>
                <span className="text-xs font-medium text-neutral-500 md:hidden">
                  {item.modality}
                </span>
              </div>

              <div className="hidden text-sm font-medium text-neutral-600 md:col-span-2 md:block">
                {item.modality}
              </div>

              <div className="hidden justify-end md:col-span-1 md:flex">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#0D1B2A] transition-all duration-300 group-hover:border-[#0D1B2A] group-hover:bg-[#0D1B2A] group-hover:text-gold"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
