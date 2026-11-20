// ============================================================================
// CONFIGURAÇÃO CENTRALIZADA DO SITE — ASP (ADRIANO DE SOUZA PEREIRA)
// Qualquer ajuste de telefone, endereço, áreas ou mensagens é feito aqui.
// ============================================================================

export const siteConfig = {
  brand: {
    monogram: 'ASP',
    shortName: 'Adriano Souza Pereira',
    fullName: 'Adriano de Souza Pereira',
    displayTitle: 'Dr. Adriano de Souza Pereira',
    subtitle: 'Consultoria e Assessoria Jurídica',
    oab: 'OAB/MG 141.920',
    heroBadge: 'OAB/MG 141.920 • NOVA LIMA – MG',
  },

  contact: {
    // IMPORTANTE: Confirmar com o cliente se o número principal do WhatsApp é o final 4975.
    whatsappNumber: '5531989194975',
    phones: [
      { label: '(31) 98919-4975', href: 'tel:+5531989194975' },
      { label: '(31) 99743-4227', href: 'tel:+5531997434227' },
    ],
    email: 'adriano.zp@gmail.com',
    address: {
      street: 'Rua Bias Fortes, 54 – Sala 3, Centro',
      cityState: 'Nova Lima – MG',
      zip: 'CEP 34.000-168',
      full: 'Rua Bias Fortes, 54 – Sala 3, Centro, Nova Lima – MG | CEP 34.000-168',
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Rua+Bias+Fortes,+54+-+Sala+3,+Centro,+Nova+Lima+-+MG,+34000-168',
      mapsEmbedUrl:
        'https://maps.google.com/maps?q=Rua%20Bias%20Fortes%2054,%20Centro,%20Nova%20Lima%20-%20MG&t=&z=16&ie=UTF8&iwloc=&output=embed',
    },
  },

  defaultWhatsAppMessages: {
    navbar:
      'Olá, Dr. Adriano! Vim pelo site e gostaria de conversar sobre uma orientação jurídica.',
    hero: 'Olá, Dr. Adriano! Vim pelo site e gostaria de iniciar um atendimento para falar sobre a minha situação.',
    sobre:
      'Olá, Dr. Adriano! Li sobre a forma como o senhor trabalha e gostaria de agendar uma conversa.',
    indice:
      'Olá, Dr. Adriano! Vim pelo site e gostaria de tirar uma dúvida jurídica com o senhor.',
    float:
      'Olá, Dr. Adriano! Vim pelo site e gostaria de falar com o senhor pelo WhatsApp.',
  },

  navLinks: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Demandas', href: '#demandas' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    photoPath: '/assets/dr-adriano.png',
    photoAlt: 'Dr. Adriano de Souza Pereira — Advogado em Nova Lima, MG',
    microNote: 'Atendimento presencial no Centro de Nova Lima ou online.',
    glassTitle: 'Atendimento Direto',
    glassText:
      'Regularização fundiária, direito imobiliário, família e juizado especial conduzidos com escuta humana e clareza técnica.',
    ctaLabel: 'Iniciar atendimento',
  },

  authorityBar: [
    {
      id: 'oab',
      icon: 'Scale',
      title: 'OAB/MG 141.920',
      subtitle: 'Registro regular e ativo',
    },
    {
      id: 'location',
      icon: 'MapPin',
      title: 'Centro de Nova Lima',
      subtitle: 'Rua Bias Fortes, 54 – Sala 3',
    },
    {
      id: 'direct',
      icon: 'UserCheck',
      title: 'Atendimento Direto',
      subtitle: 'Sem robôs ou intermediários',
    },
    {
      id: 'secrecy',
      icon: 'ShieldCheck',
      title: 'Sigilo Absoluto',
      subtitle: 'Ética e transparência total',
    },
  ],

  about: {
    eyebrow: 'SOBRE O ESCRITÓRIO',
    title: 'Construído na escuta, movido pela segurança.',
    lead: 'Viver com um imóvel sem escritura, enfrentar uma disputa de posse ou atravessar um momento delicado em família gera uma angústia silenciosa que pesa todos os dias.',
    body: 'Na ASP – Adriano de Souza Pereira – Consultoria e Assessoria Jurídica, o trabalho começa antes dos autos. Eu escuto a sua história com calma, traduzo cada etapa jurídica sem termos difíceis e atuo com firmeza para devolver o chão seguro que você e sua família precisam para seguir em frente.',
    ctaLabel: 'Agendar conversa no WhatsApp',
  },

  specialties: [
    {
      id: 'cta-card-fundiaria',
      origin: 'card-fundiaria',
      category: 'IMOBILIÁRIO',
      title: 'Regularização Fundiária',
      description:
        'Tire seu imóvel ou terreno da informalidade com segurança documental e proteção patrimonial.',
      image:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Arquitetura residencial simbolizando regularização fundiária',
      variant: 'light',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre Regularização Fundiária.',
    },
    {
      id: 'cta-card-usucapiao',
      origin: 'card-usucapiao',
      category: 'POSSE & PROPRIEDADE',
      title: 'Usucapião e Reintegração de Posse',
      description:
        'Defesa firme da sua posse e caminhos estruturados para consolidar a propriedade do seu bem.',
      image:
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Imóvel e terreno representando usucapião e reintegração de posse',
      variant: 'dark',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre Usucapião ou Reintegração de Posse.',
    },
    {
      id: 'cta-card-familia',
      origin: 'card-familia',
      category: 'DIREITO DE FAMÍLIA',
      title: 'Divórcio, Guarda e Pensão',
      description:
        'Condução discreta e humana em divórcios, guarda de filhos, pensão e cobrança de alimentos.',
      image:
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Família simbolizando atendimento humanizado em Direito de Família',
      variant: 'light',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação em Direito de Família (divórcio, guarda ou pensão).',
    },
    {
      id: 'cta-card-juizado',
      origin: 'card-juizado',
      category: 'CÍVEL',
      title: 'Juizado Especial',
      description:
        'Orientação objetiva para cobranças indevidas, contratos e causas cíveis de menor complexidade.',
      image:
        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Livros e símbolos jurídicos representando Juizado Especial Cível',
      variant: 'dark',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre uma causa no Juizado Especial.',
    },
  ],

  demands: [
    {
      id: 'cta-demanda-regularizacao',
      origin: 'demanda-regularizacao',
      title: 'Regularização Fundiária de Imóveis e Terrenos',
      area: 'Imobiliário',
      modality: 'Nova Lima & Online',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre Regularização Fundiária de imóvel ou terreno.',
    },
    {
      id: 'cta-demanda-usucapiao',
      origin: 'demanda-usucapiao',
      title: 'Ação de Usucapião (Judicial e Extrajudicial)',
      area: 'Imobiliário',
      modality: 'Nova Lima & Online',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e gostaria de orientação sobre Ação de Usucapião.',
    },
    {
      id: 'cta-demanda-posse',
      origin: 'demanda-posse',
      title: 'Reintegração e Defesa de Posse',
      area: 'Imobiliário',
      modality: 'Nova Lima & Online',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre Reintegração ou Defesa de Posse.',
    },
    {
      id: 'cta-demanda-divorcio',
      origin: 'demanda-divorcio',
      title: 'Divórcio Consensual ou Litigioso',
      area: 'Família',
      modality: 'Sigilo Absoluto',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sigilosa sobre Divórcio.',
    },
    {
      id: 'cta-demanda-guarda-pensao',
      origin: 'demanda-guarda-pensao',
      title: 'Guarda, Pensão e Cobrança de Alimentos',
      area: 'Família',
      modality: 'Sigilo Absoluto',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre Guarda, Pensão ou Cobrança de Alimentos.',
    },
    {
      id: 'cta-demanda-juizado',
      origin: 'demanda-juizado',
      title: 'Causas no Juizado Especial Cível',
      area: 'Juizado Especial',
      modality: 'Orientação Direta',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e gostaria de orientação sobre uma causa no Juizado Especial Cível.',
    },
  ],

  footerPainPoints: [
    {
      id: 'cta-footer-imobiliario',
      origin: 'footer-imobiliario',
      icon: 'Building2',
      title: 'Imóvel, Regularização, Usucapião ou Posse',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre regularização fundiária / direito imobiliário.',
    },
    {
      id: 'cta-footer-familia',
      origin: 'footer-familia',
      icon: 'Users',
      title: 'Divórcio, Guarda, Pensão ou Alimentos',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação em Direito de Família.',
    },
    {
      id: 'cta-footer-juizado',
      origin: 'footer-juizado',
      icon: 'Scale',
      title: 'Juizado Especial ou Outra Dúvida',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e gostaria de agendar uma conversa sobre Juizado Especial ou outra dúvida jurídica.',
    },
  ],

  legalNotice:
    'Este site possui caráter exclusivamente informativo e institucional, em conformidade com o Código de Ética e Disciplina da OAB. A análise jurídica, viabilidade, prazos e honorários de cada caso são tratados exclusivamente mediante atendimento individualizado.',
};

/**
 * Gera a URL oficial do WhatsApp com a mensagem codificada.
 * @param {string} message - Mensagem pré-preenchida para a conversa.
 * @returns {string}
 */
export function getWhatsAppUrl(message = siteConfig.defaultWhatsAppMessages.hero) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}
