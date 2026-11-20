import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ShieldCheck, UserCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  UserCheck,
  MapPin,
  ShieldCheck,
};

export default function TrustAndProof() {
  const sectionRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.pillar-card', {
        opacity: 0,
        y: 22,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: '.pillars-grid',
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from(testimonialRef.current, {
        opacity: 0,
        y: 26,
        duration: 1.1,
        ease: 'power2.out',
        clearProps: 'transform',
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 84%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-paper py-20 sm:py-28 lg:py-32"
      aria-label="Pilares de confiança e depoimento"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bloco Superior: 3 Pilares Objetivos */}
        <div className="pillars-grid grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {siteConfig.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="pillar-card rounded-2xl border border-ink/10 bg-paper-elevated p-7 transition-colors duration-300 hover:border-gold/50 sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bloco Inferior: Depoimento Monumental */}
        <div
          ref={testimonialRef}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-ink/10 bg-paper-elevated px-7 py-10 text-center shadow-editorial sm:mt-24 sm:px-12 sm:py-14 lg:px-16"
        >
          <span
            aria-hidden="true"
            className="block font-serif text-7xl leading-none text-gold select-none sm:text-8xl"
          >
            “
          </span>

          <blockquote className="-mt-4 font-serif text-xl font-medium italic leading-relaxed text-ink sm:text-2xl sm:leading-[1.55] lg:text-[1.7rem]">
            {siteConfig.testimonial.quote}
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted sm:text-sm">
              {siteConfig.testimonial.author}
            </p>
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
