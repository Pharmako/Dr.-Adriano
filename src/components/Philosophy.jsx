import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../config/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const textBlockRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Linha vertical dourada cresce suavemente no scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            end: 'center 52%',
            scrub: 0.6,
          },
        }
      );

      // Leve movimento parallax no bloco tipográfico
      gsap.fromTo(
        textBlockRef.current,
        { y: 28, opacity: 0.35 },
        {
          y: -18,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 20%',
            scrub: 0.7,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="como-trabalho"
      ref={sectionRef}
      className="relative overflow-hidden bg-navy py-24 sm:py-32 lg:py-40"
      aria-label="Filosofia de atendimento"
    >
      {/* Textura editorial sutil */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Luz ambiente radial sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,162,83,0.09)_0%,rgba(15,29,43,0)_62%)]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Linha vertical decorativa em #C8A253 */}
        <div className="mb-10 flex justify-center">
          <div
            ref={lineRef}
            aria-hidden="true"
            className="h-20 w-px origin-top bg-gradient-to-b from-gold/20 via-gold to-gold sm:h-24"
          />
        </div>

        {/* Bloco tipográfico com parallax suave */}
        <div ref={textBlockRef}>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-gold/80">
            COMO TRABALHO
          </p>

          <blockquote className="font-serif text-2xl font-medium leading-[1.45] tracking-[-0.01em] text-paper sm:text-3xl sm:leading-[1.42] lg:text-[2.35rem] lg:leading-[1.4]">
            “Viver com um imóvel sem escritura, enfrentar uma disputa de posse ou
            atravessar um momento delicado em família gera uma{' '}
            <strong className="font-semibold italic text-gold">
              angústia silenciosa
            </strong>{' '}
            que pesa todos os dias. Antes de olhar para processos e papéis,{' '}
            <strong className="font-semibold italic text-gold">
              eu escuto a sua história
            </strong>
            . Meu compromisso é traduzir o caminho jurídico sem rodeios, caminhar
            ao seu lado com transparência e devolver o{' '}
            <strong className="font-semibold italic text-gold">
              chão seguro
            </strong>{' '}
            que você precisa para seguir em frente.”
          </blockquote>

          <footer className="mt-10">
            <p className="text-sm font-medium tracking-[0.1em] text-paper/75 sm:text-base">
              — {siteConfig.brand.displayTitle} • {siteConfig.brand.oab}
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
