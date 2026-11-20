// ============================================================================
// CONFIGURAÇÃO CENTRALIZADA DO SITE — ASP (ADRIANO DE SOUZA PEREIRA)
// Qualquer ajuste de telefone, endereço, áreas ou depoimento é feito aqui.
// ============================================================================

export const siteConfig = {
  brand: {
    monogram: 'ASP',
    shortName: 'Adriano Souza Pereira',
    fullName: 'Adriano de Souza Pereira',
    displayTitle: 'Dr. Adriano de Souza Pereira',
    subtitle: 'Consultoria e Assessoria Jurídica',
    oab: 'OAB/MG 141.920',
    locationBadge: 'OAB/MG 141.920 • ATENDIMENTO EM NOVA LIMA E REGIÃO',
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
    },
  },

  defaultWhatsAppMessages: {
    navbar:
      'Olá, Dr. Adriano! Vim pelo site e gostaria de conversar sobre uma orientação jurídica.',
    hero: 'Olá, Dr. Adriano! Vim pelo site e gostaria de agendar um atendimento para falar sobre a minha situação.',
    float:
      'Olá, Dr. Adriano! Vim pelo site e gostaria de falar com o senhor pelo WhatsApp.',
  },

  navLinks: [
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Como Trabalho', href: '#como-trabalho' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    photoPath: '/assets/dr-adriano.jpg',
    photoAlt: 'Dr. Adriano de Souza Pereira — Advogado em Nova Lima, MG',
    headline:
      'Segurança jurídica para o seu patrimônio e tranquilidade para a sua família.',
    subtext:
      'Regularização fundiária, direito imobiliário, família e juizado especial em Nova Lima. Atendimento direto comigo, com escuta atenta, linguagem clara e foco em resolver o que tira a sua paz.',
    ctaLabel: 'Conversar com o Dr. Adriano no WhatsApp',
    microGuarantee:
      'Atendimento presencial no Centro de Nova Lima ou online • Sigilo absoluto',
    photoCaptionSub: 'OAB/MG 141.920 • Atendimento direto e humanizado',
  },

  practiceAreas: [
    {
      id: 'imobiliario',
      tabLabel: 'Imobiliário & Regularização Fundiária',
      shortTabLabel: 'Imobiliário & Regularização',
      title: 'Proteja o patrimônio que você construiu.',
      description:
        'Um imóvel ou terreno carrega anos de esforço e história — ele não pode ficar desprotegido no papel. Atuamos para tirar sua propriedade da informalidade e defender a sua posse com clareza e firmeza técnica.',
      tags: [
        'Regularização Fundiária',
        'Usucapião',
        'Reintegração de Posse',
        'Consultoria Imobiliária',
      ],
      ctaId: 'cta-aba-imobiliario',
      ctaOrigin: 'aba-imobiliario',
      ctaLabel: 'Quero orientar a situação do meu imóvel',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre direito imobiliário / regularização fundiária.',
    },
    {
      id: 'familia',
      tabLabel: 'Direito de Família',
      shortTabLabel: 'Direito de Família',
      title: 'Cuidado e firmeza nos momentos mais delicados.',
      description:
        'Questões dentro de casa mexem com a base da nossa vida. Conduzimos cada atendimento com respeito, sigilo e foco em proteger os direitos e o bem-estar de quem você ama.',
      tags: [
        'Divórcio',
        'Guarda',
        'Pensão Alimentícia',
        'Cobrança de Alimentos',
      ],
      ctaId: 'cta-aba-familia',
      ctaOrigin: 'aba-familia',
      ctaLabel: 'Preciso de orientação em Direito de Família',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação em Direito de Família.',
    },
    {
      id: 'juizado',
      tabLabel: 'Juizado Especial',
      shortTabLabel: 'Juizado Especial',
      title: 'Soluções objetivas para conflitos do dia a dia.',
      description:
        'Cobranças indevidas, contratos descumpridos ou problemas de consumo não precisam se arrastar tirando o seu sossego. Analisamos o seu cenário e orientamos o caminho jurídico mais direto.',
      tags: [
        'Causas Cíveis',
        'Relações de Consumo',
        'Defesa e Acompanhamento',
      ],
      ctaId: 'cta-aba-juizado',
      ctaOrigin: 'aba-juizado',
      ctaLabel: 'Quero tirar uma dúvida sobre minha causa',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e gostaria de tirar uma dúvida sobre Juizado Especial.',
    },
  ],

  pillars: [
    {
      id: 'atendimento-direto',
      title: 'Atendimento Direto',
      description:
        'Você conversa diretamente com o Dr. Adriano, sem robôs ou intermediários.',
      icon: 'UserCheck',
    },
    {
      id: 'escritorio-nova-lima',
      title: 'Escritório no Centro de Nova Lima',
      description:
        'Estrutura presencial de fácil acesso na Rua Bias Fortes, além de atendimento online.',
      icon: 'MapPin',
    },
    {
      id: 'etica-e-sigilo',
      title: 'Ética e Sigilo',
      description:
        'Atuação responsável, transparente e devidamente registrada na OAB/MG 141.920.',
      icon: 'ShieldCheck',
    },
  ],

  // Depoimento configurável para aprovação final do cliente
  testimonial: {
    quote:
      'Eu não fazia ideia de por onde começar para regularizar o imóvel da nossa família. O Dr. Adriano ouviu tudo com calma, explicou cada etapa sem termos complicados e trouxe a tranquilidade que faltava para resolvermos a situação.',
    author: 'Cliente atendido em Nova Lima – MG',
  },

  painPoints: [
    {
      id: 'cta-rodape-imobiliario',
      origin: 'rodape-imobiliario',
      title: 'Regularização de imóvel, Usucapião ou Posse',
      subtitle: 'Escritura, matrícula, usucapião ou defesa patrimonial',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação sobre regularização fundiária / direito imobiliário.',
    },
    {
      id: 'cta-rodape-familia',
      origin: 'rodape-familia',
      title: 'Divórcio, Guarda, Pensão ou Alimentos',
      subtitle: 'Atendimento sigiloso e humanizado para sua família',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e preciso de orientação em Direito de Família.',
    },
    {
      id: 'cta-rodape-juizado',
      origin: 'rodape-juizado',
      title: 'Juizado Especial ou outra dúvida jurídica',
      subtitle: 'Causas cíveis, consumo, contratos ou análise de cenário',
      whatsappMessage:
        'Olá, Dr. Adriano! Vim pelo site e gostaria de agendar uma conversa sobre uma questão jurídica.',
    },
  ],

  legalNotice:
    'Este site tem caráter exclusivamente informativo e institucional, em conformidade com o Código de Ética e Disciplina da OAB. A análise jurídica, viabilidade, prazos e honorários de cada caso são tratados somente mediante atendimento individualizado.',
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
