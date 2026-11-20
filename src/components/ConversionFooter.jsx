import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import GreekColumnIcon from './GreekColumnIcon';
import WhatsAppIcon from './WhatsAppIcon';

export default function ConversionFooter() {
  return (
    <footer
      id="contato"
      className="relative overflow-hidden bg-navy text-paper"
      aria-labelledby="conversion-heading"
    >
      {/* Textura editorial sutil */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Gradiente sutil de topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        {/* CAMADA 1: O Seletor de Dores (Formulário Mudo) */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            ATENDIMENTO DIRETO VIA WHATSAPP
          </p>
          <h2
            id="conversion-heading"
            className="mt-3 font-serif text-3xl font-semibold leading-tight text-paper sm:text-4xl lg:text-[2.65rem]"
          >
            Qual situação está tirando a sua tranquilidade hoje?
          </h2>
          <p className="mt-4 text-base text-paper/75 sm:text-lg">
            Escolha o assunto abaixo para iniciar a conversa no WhatsApp já com a
            mensagem pronta:
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 sm:mt-12">
          {siteConfig.painPoints.map((item) => (
            <a
              key={item.id}
              id={item.id}
              data-cta-origin={item.origin}
              href={getWhatsAppUrl(item.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#C8A253]/25 bg-[#162738] px-6 py-5 transition-all duration-300 hover:border-[#C8A253] hover:bg-[#1a2f44] hover:shadow-editorial-dark sm:px-7 sm:py-6"
            >
              <div className="flex items-start gap-4 sm:items-center">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy sm:mt-0">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <span className="block font-serif text-lg font-semibold text-paper transition-colors group-hover:text-gold sm:text-xl">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-paper/65 sm:text-sm">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 group-hover:translate-x-1.5 group-hover:border-gold group-hover:bg-gold/10">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          ))}
        </div>

        {/* CAMADA 2: Informações Oficiais e Aviso OAB */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Marca */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3.5">
                <GreekColumnIcon className="h-10 w-10 shrink-0 text-gold" />
                <div>
                  <p className="font-serif text-lg font-semibold text-paper sm:text-xl">
                    {siteConfig.brand.monogram} – {siteConfig.brand.fullName}
                  </p>
                  <p className="text-xs text-paper/70 sm:text-sm">
                    {siteConfig.brand.subtitle} —{' '}
                    <span className="font-semibold text-gold">
                      {siteConfig.brand.oab}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contato e Endereço */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Escritório Presencial
                </p>
                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-paper/80 transition-colors hover:text-gold"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="underline decoration-gold/30 underline-offset-4 transition-colors group-hover:decoration-gold">
                    {siteConfig.contact.address.full}
                  </span>
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Canais Diretos
                </p>
                <div className="mt-3 flex flex-col gap-2.5 text-sm text-paper/80">
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      {siteConfig.contact.phones.map((phone, idx) => (
                        <React.Fragment key={phone.label}>
                          <a
                            href={phone.href}
                            className="transition-colors hover:text-gold"
                          >
                            {phone.label}
                          </a>
                          {idx < siteConfig.contact.phones.length - 1 && (
                            <span className="text-paper/30" aria-hidden="true">
                              |
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-gold"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Aviso Legal Obrigatório OAB */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="max-w-5xl text-xs leading-relaxed text-paper/55">
              {siteConfig.legalNotice}
            </p>
            <p className="mt-4 text-xs text-paper/40">
              © {new Date().getFullYear()} {siteConfig.brand.monogram} –{' '}
              {siteConfig.brand.fullName}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
