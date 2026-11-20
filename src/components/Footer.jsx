import React from 'react';
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Scale,
  Users,
} from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';
import GreekColumnIcon from './GreekColumnIcon';

const painIcons = {
  Building2,
  Users,
  Scale,
};

export default function Footer() {
  return (
    <footer
      id="contato"
      className="sculpted-dark mx-2.5 mb-5 mt-4 rounded-[24px] text-white shadow-sculpted ring-1 ring-white/10 sm:mx-5 sm:mb-8 sm:rounded-[28px] lg:mx-8 lg:rounded-[36px]"
      aria-labelledby="footer-heading"
    >
      {/* Textura editorial sutil */}
      <div className="noise-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-6 sm:pt-20 lg:px-12">
        {/* CAMADA SUPERIOR: Seletor de Dores em Grid Horizontal (3 colunas) */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            ATENDIMENTO DIRETO VIA WHATSAPP
          </p>
          <h2
            id="footer-heading"
            className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.015em] text-white lg:text-5xl"
          >
            Qual situação você precisa{' '}
            <em className="font-serif italic text-gold">resolver</em> agora?
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {siteConfig.footerPainPoints.map((item) => {
            const Icon = painIcons[item.icon] || Scale;
            return (
              <a
                key={item.id}
                id={item.id}
                data-cta-origin={item.origin}
                href={getWhatsAppUrl(item.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[150px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:border-[#D4AF5A]/70 hover:bg-white/[0.1]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <span className="font-serif text-lg font-semibold leading-snug text-white transition-colors group-hover:text-gold sm:text-xl">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* CAMADA INFERIOR: Dados Oficiais + Mini Card de Localização Interativo */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 border-t border-white/10 pt-10 lg:grid-cols-12">
          {/* Cols 1–4: Marca */}
          <div className="lg:col-span-4">
            <div className="flex items-start gap-3.5">
              <GreekColumnIcon className="h-10 w-10 shrink-0 text-gold" />
              <div>
                <p className="font-serif text-lg font-semibold leading-snug text-white">
                  {siteConfig.brand.monogram} – {siteConfig.brand.fullName}
                </p>
                <p className="mt-0.5 text-sm text-slate-300/80">
                  {siteConfig.brand.subtitle}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {siteConfig.brand.oab}
                </p>
              </div>
            </div>
          </div>

          {/* Cols 5–8: Endereço e Contatos */}
          <div className="space-y-3 text-sm text-slate-200/85 lg:col-span-4">
            <a
              href={siteConfig.contact.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2.5 transition-colors hover:text-gold"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="leading-relaxed underline decoration-gold/30 underline-offset-4 group-hover:decoration-gold">
                {siteConfig.contact.address.full}
              </span>
            </a>

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
                      <span className="text-white/25" aria-hidden="true">
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

          {/* Cols 9–12: Mini Card de Localização Interativo */}
          <div className="lg:col-span-4">
            <div className="h-36 overflow-hidden rounded-2xl border border-white/10 bg-navy-deep">
              <iframe
                title="Localização do Escritório ASP em Nova Lima – MG"
                src={siteConfig.contact.address.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 opacity-90 contrast-[1.05] grayscale-[40%] transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Aviso Legal OAB */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="max-w-5xl text-xs leading-relaxed text-slate-400">
            {siteConfig.legalNotice}
          </p>
          <p className="mt-3 text-[11px] text-slate-500">
            © {new Date().getFullYear()} {siteConfig.brand.monogram} –{' '}
            {siteConfig.brand.fullName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
