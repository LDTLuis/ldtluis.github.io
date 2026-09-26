export type Lang = 'pt' | 'en';

/** Trecho de texto; `tone` destaca palavras dentro de um parágrafo. */
export type Segment = { text: string; tone?: 'strong' | 'accent' };

const pt = {
  meta: {
    title: 'Luis Borges · Desenvolvedor Full Stack',
  },
  a11y: {
    skip: 'Pular para o conteúdo',
    home: 'Voltar ao início',
    language: 'Idioma',
    mainNav: 'Navegação principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    newTab: '(abre em nova aba)',
    resumeIn: 'Baixar currículo em',
  },
  nav: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Competências',
    projects: 'Projetos',
    contact: 'Contato',
  },
  resume: 'Currículo',
  hero: {
    hello: 'Olá, eu sou',
    role: 'Desenvolvedor Full Stack com foco em',
    and: 'e',
    lead: 'Desenvolvo aplicações web de ponta a ponta, com arquitetura bem definida, código sustentável e atenção à experiência do usuário, do planejamento à publicação em produção.',
    cta: 'Ver projetos',
    available: 'Disponível para oportunidades',
    rows: {
      role: 'Atuação',
      roleValue: 'Desenvolvimento Full Stack',
      stack: 'Stack principal',
      location: 'Localização',
      locationValue: 'Goiás, BR',
    },
  },
  about: {
    eyebrow: 'Perfil',
    title: 'Sobre mim',
    paragraph: [
      { text: 'Sou desenvolvedor full stack e atuo na construção de ' },
      { text: 'produtos digitais completos', tone: 'strong' },
      { text: ', do modelo de dados à interface. No back end, desenvolvo APIs seguras e escaláveis com ' },
      { text: 'Java e Spring Boot', tone: 'strong' },
      { text: '; no front end, crio interfaces performáticas com ' },
      { text: 'React e TypeScript', tone: 'strong' },
      { text: '. Valorizo código limpo, boas práticas de engenharia e soluções que geram ' },
      { text: 'resultado real para o negócio', tone: 'accent' },
      { text: '.' },
    ] as Segment[],
  },
  skills: {
    eyebrow: 'Habilidades',
    title: 'Competências técnicas',
    description: 'Tecnologias que utilizo no desenvolvimento de aplicações, da modelagem de dados ao deploy.',
    specialty: 'Especialidade',
    backend: 'APIs REST, autenticação, regras de negócio e integrações com serviços externos.',
    backendNote: {
      before: 'Aplicado em produção no ',
      after: ': integração com sistema de agenda, pagamentos e e-mails transacionais.',
    },
    frontend: 'Interfaces performáticas e tipadas',
    data: 'Dados e testes',
    deploy: 'Deploy e serviços',
  },
  project: {
    eyebrow: 'Portfólio',
    title: 'Projeto em destaque',
    description: 'Solução desenvolvida de ponta a ponta e atualmente em produção.',
    meta: 'Aplicação web',
    subtitle: 'Plataforma de agendamento online, vale-presente e pagamentos para uma rede de spas',
    visit: 'Acessar site',
    caseStudy: 'Estudo de caso',
    screenshot: 'Print do site',
    challenge: 'Desafio',
    challengeText:
      'Digitalizar o processo de agendamento de uma rede de spas com múltiplas unidades, catálogo de serviços e horários sincronizados com o sistema de gestão já utilizado pela equipe.',
    solution: 'Solução',
    solutionItems: [
      'Agendamento online por unidade',
      'Venda de vale-presente e pagamentos',
      'Notificações automáticas por e-mail',
    ],
    tech: 'Tecnologias',
    more: 'Novos projetos em desenvolvimento',
    follow: 'Acompanhe no GitHub',
  },
  caseStudy: {
    metaTitle: 'Spa Casa Bali · Estudo de caso · Luis Borges',
    back: 'Voltar ao portfólio',
    eyebrow: 'Estudo de caso',
    intro:
      'Plataforma de agendamento online, pagamentos e vale-presente para uma rede de spas, construída de ponta a ponta e em produção desde 2026.',
    facts: [
      { label: 'Atuação', value: 'Desenvolvimento full stack' },
      { label: 'Escopo', value: 'Produto, API, front end e deploy' },
      { label: 'Ano', value: '2026' },
      { label: 'Status', value: 'Em produção' },
    ],
    numbers: [
      { value: '2', label: 'unidades, cada uma com agenda, catálogo e preços próprios' },
      { value: '600+', label: 'testes automatizados, com PostgreSQL real via Testcontainers' },
      { value: '36', label: 'migrações de banco versionadas com Flyway' },
      { value: '5', label: 'integrações externas: pagamento, agendas, e-mail e imagens' },
    ],
    context: {
      eyebrow: 'Contexto',
      title: 'O ponto de partida',
      paragraphs: [
        'O Casa Bali é uma rede de spas com unidades em Goiânia e em Santos. A equipe já controlava a agenda do balcão em ferramentas como o Trinks e o Google Agenda, e o site precisava vender horários sem entrar em conflito com esse fluxo.',
        'O objetivo era permitir que o cliente escolhesse a unidade, conhecesse o catálogo com os preços daquela unidade, reservasse um horário realmente livre e pagasse online, além de comprar vales-presente e pacotes de horas.',
      ],
    },
    features: {
      eyebrow: 'Solução',
      title: 'O que foi construído',
      items: [
        {
          title: 'Catálogo por unidade',
          text: 'Serviços, pacotes e Day Spa organizados por categoria, com busca, filtros por preço e duração e valores da unidade escolhida.',
        },
        {
          title: 'Agendamento com horários reais',
          text: 'Horários calculados a partir da capacidade de cada unidade e da agenda do balcão, sem risco de dupla marcação.',
        },
        {
          title: 'Pagamento online',
          text: 'Checkout pelo Mercado Pago, confirmação por webhook e estorno pela API do gateway, com fila manual como rede de segurança.',
        },
        {
          title: 'Vale-presente e Club de Horas',
          text: 'Vales com um ou vários serviços e pacotes de horas compartilháveis, com resgate controlado pela equipe.',
        },
        {
          title: 'Conta do cliente',
          text: 'Cadastro com verificação de e-mail, recuperação de senha, histórico de reservas e vales em um só lugar.',
        },
        {
          title: 'Painel administrativo',
          text: 'Agenda do dia, baixa de vales e cadastro das faixas de capacidade de cada unidade, sem depender de suporte técnico.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura',
      title: 'Como as peças se conectam',
      text: 'Front end e API são projetos separados, publicados de forma independente. A API concentra as regras de negócio, e o front end consome um contrato documentado.',
      layers: [
        { name: 'Front end', detail: 'SPA em React 19 + TypeScript', items: ['Vite', 'React Router', 'TanStack Query'] },
        { name: 'API REST', detail: 'Java 21 + Spring Boot', items: ['Spring Security + JWT', 'JPA / Hibernate', 'OpenAPI'] },
        { name: 'Banco de dados', detail: 'PostgreSQL', items: ['Flyway', 'Constraints EXCLUDE', 'Testcontainers'] },
      ],
      integrationsLabel: 'Integrações',
      integrations: [
        { name: 'Mercado Pago', role: 'Pagamentos e estornos' },
        { name: 'Trinks', role: 'Agenda do balcão' },
        { name: 'Google Agenda', role: 'Agenda por unidade' },
        { name: 'Resend', role: 'E-mails transacionais' },
        { name: 'Cloudinary', role: 'Imagens do catálogo' },
      ],
      hosting: 'Hospedagem no Railway · DNS no Cloudflare · CI no GitHub Actions',
    },
    challenges: {
      eyebrow: 'Desafios técnicos',
      title: 'Problemas que exigiram mais do que CRUD',
      problemLabel: 'Problema',
      solutionLabel: 'Solução',
      items: [
        {
          tag: 'Pagamentos',
          title: 'Confirmar o pagamento pelo lugar certo',
          problem:
            'Voltar do checkout não significa que o pagamento foi aprovado. Além disso, o Mercado Pago usa um identificador para a cobrança e outro para o pagamento, e trocar um pelo outro não gera erro: a reserva paga simplesmente ficava pendente.',
          solution:
            'A confirmação vem só do webhook, que encontra a cobrança por uma referência própria gravada antes de criá-la, na mesma transação. A reserva segura o horário por 15 minutos, e a tela trata "pendente" como "aguardando confirmação", não como falha.',
        },
        {
          tag: 'Integração',
          title: 'Agenda sincronizada sem estourar a cota',
          problem:
            'O site consulta a agenda do balcão (Trinks) para não vender um horário já ocupado, mas essa API tem cota de 5.000 requisições por mês. Um robô variando datas conseguiria esgotá-la em poucas horas.',
          solution:
            'Três camadas de proteção: orçamento diário de consultas por unidade, limite de 30 consultas por minuto por IP e cache de uma hora para datas distantes. O comportamento foi verificado em produção, com resposta 429 e Retry-After.',
        },
        {
          tag: 'Segurança',
          title: 'Sessão com refresh token de uso único',
          problem:
            'Cada renovação de sessão gera um novo refresh token, e reapresentar um token já usado é tratado como roubo, o que derruba a sessão. Quando várias requisições expiravam juntas, o próprio site podia deslogar o usuário.',
          solution:
            'Rotação de tokens com detecção de reuso na API e, no front end, um cliente HTTP que serializa as renovações: só uma fica em andamento, e as demais requisições aguardam o novo token.',
        },
        {
          tag: 'Regras de negócio',
          title: 'Capacidade por período, garantida pelo banco',
          problem:
            'Cada unidade define quantos atendimentos podem acontecer ao mesmo tempo em cada faixa de horário, e um serviço só pode ser oferecido se couber inteiro na faixa. Sob concorrência, checar isso só no código não basta.',
          solution:
            'O cálculo de horários respeita a duração de cada serviço, e constraints EXCLUDE do PostgreSQL impedem faixas sobrepostas e reservas simultâneas na mesma vaga. Por isso os testes de integração rodam em PostgreSQL real, com Testcontainers.',
        },
      ],
    },
    quality: {
      eyebrow: 'Qualidade e entrega',
      title: 'Do código à produção',
      items: [
        {
          title: 'Testes automatizados',
          text: 'Mais de 600 testes com JUnit, incluindo testes de integração em PostgreSQL real com Testcontainers.',
        },
        {
          title: 'Integração contínua',
          text: 'GitHub Actions roda os testes da API e, no front end, auditoria de dependências, checagem de tipos e build.',
        },
        {
          title: 'Banco versionado',
          text: 'Toda mudança de esquema e de dados passa por uma migração Flyway, revisável e reproduzível.',
        },
        {
          title: 'Decisões documentadas',
          text: 'API descrita em OpenAPI e documentos que registram o porquê de cada integração, não só o como.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Telas',
      title: 'O produto em uso',
      home: 'Página inicial da unidade',
      catalog: 'Catálogo com filtros por categoria, preço e duração',
      club: 'Club de Horas, com pacotes de horas compartilháveis',
      mobile: 'Versão para celular',
    },
    learnings: {
      eyebrow: 'Aprendizados',
      title: 'O que levo deste projeto',
      items: [
        'Integração com terceiros precisa ser validada com dados reais: os defeitos mais graves do pagamento só apareceram com a primeira notificação verdadeira.',
        'Regra crítica fica no banco: constraints evitam inconsistências que o código sozinho não garante sob concorrência.',
        'Proteger recursos limitados faz parte do produto: sem a proteção da cota, o site ficaria semanas sem enxergar a agenda do balcão.',
      ],
    },
    cta: {
      title: 'Quer ver funcionando?',
      text: 'O site está no ar e aberto ao público.',
      visit: 'Acessar o site',
    },
  },
  contact: {
    eyebrow: 'Contato',
    titleA: 'Vamos trabalhar',
    titleB: 'juntos?',
    text: 'Estou disponível para oportunidades, parcerias e novos projetos. Entre em contato pelo e-mail ou pelos canais abaixo.',
    blocks: [
      {
        title: 'Oportunidades profissionais',
        text: 'Estou aberto a posições de desenvolvimento full stack, back end ou front end. Se sua empresa tem uma vaga alinhada ao meu perfil, será um prazer conversar.',
      },
      {
        title: 'Networking',
        text: 'Acredito na troca de conhecimento entre profissionais de tecnologia. Fique à vontade para se conectar comigo e acompanhar meu trabalho pelo LinkedIn.',
      },
      {
        title: 'Projetos e parcerias',
        text: 'Desenvolvo sistemas e aplicações web sob medida. Se você tem uma demanda, posso ajudar a transformá-la em um produto funcional e bem estruturado.',
      },
    ],
    email: 'E-mail',
    resumeMeta: 'PDF',
  },
  footer: {
    role: 'Desenvolvedor Full Stack',
    rights: 'Todos os direitos reservados.',
    backToTop: 'Voltar ao topo',
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  meta: {
    title: 'Luis Borges · Full Stack Developer',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Back to top',
    language: 'Language',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    newTab: '(opens in a new tab)',
    resumeIn: 'Download resume in',
  },
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  resume: 'Résumé',
  hero: {
    hello: "Hi, I'm",
    role: 'Full Stack Developer focused on',
    and: 'and',
    lead: 'I build end-to-end web applications with a well-defined architecture, maintainable code and a strong focus on user experience, from planning all the way to production.',
    cta: 'View projects',
    available: 'Open to opportunities',
    rows: {
      role: 'Role',
      roleValue: 'Full Stack Development',
      stack: 'Main stack',
      location: 'Location',
      locationValue: 'Goiás, BR',
    },
  },
  about: {
    eyebrow: 'Profile',
    title: 'About me',
    paragraph: [
      { text: "I'm a full stack developer who builds " },
      { text: 'complete digital products', tone: 'strong' },
      { text: ', from the data model to the interface. On the back end, I develop secure and scalable APIs with ' },
      { text: 'Java and Spring Boot', tone: 'strong' },
      { text: '; on the front end, I create high-performance interfaces with ' },
      { text: 'React and TypeScript', tone: 'strong' },
      { text: '. I value clean code, solid engineering practices and solutions that deliver ' },
      { text: 'real business results', tone: 'accent' },
      { text: '.' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Technical skills',
    description: 'The technologies I use to build applications, from data modeling to deployment.',
    specialty: 'Specialty',
    backend: 'REST APIs, authentication, business rules and integrations with external services.',
    backendNote: {
      before: 'Used in production at ',
      after: ': scheduling system integration, payments and transactional emails.',
    },
    frontend: 'Fast, type-safe interfaces',
    data: 'Data and testing',
    deploy: 'Deploy and services',
  },
  project: {
    eyebrow: 'Portfolio',
    title: 'Featured project',
    description: 'An end-to-end solution, currently live in production.',
    meta: 'Web application',
    subtitle: 'Online booking, gift card and payment platform for a spa chain',
    visit: 'Visit site',
    caseStudy: 'Case study',
    screenshot: 'Site screenshot',
    challenge: 'Challenge',
    challengeText:
      'Bring the booking process of a multi-location spa chain online, with a service catalog and time slots synced with the management system the team already used.',
    solution: 'Solution',
    solutionItems: ['Online booking by location', 'Gift card sales and payments', 'Automated email notifications'],
    tech: 'Technologies',
    more: 'New projects in progress',
    follow: 'Follow along on GitHub',
  },
  caseStudy: {
    metaTitle: 'Spa Casa Bali · Case study · Luis Borges',
    back: 'Back to portfolio',
    eyebrow: 'Case study',
    intro:
      'Online booking, payment and gift card platform for a spa chain, built end to end and live in production since 2026.',
    facts: [
      { label: 'Role', value: 'Full stack development' },
      { label: 'Scope', value: 'Product, API, front end and deployment' },
      { label: 'Year', value: '2026' },
      { label: 'Status', value: 'Live in production' },
    ],
    numbers: [
      { value: '2', label: 'locations, each with its own schedule, catalog and prices' },
      { value: '600+', label: 'automated tests, running against real PostgreSQL via Testcontainers' },
      { value: '36', label: 'versioned database migrations with Flyway' },
      { value: '5', label: 'external integrations: payments, calendars, email and images' },
    ],
    context: {
      eyebrow: 'Context',
      title: 'The starting point',
      paragraphs: [
        'Casa Bali is a spa chain with locations in Goiânia and Santos, Brazil. The team already managed the front desk schedule in tools like Trinks and Google Calendar, and the website had to sell time slots without conflicting with that workflow.',
        'The goal was to let customers pick a location, browse the catalog with that location’s prices, book a slot that is actually free and pay online, as well as buy gift cards and hour packages.',
      ],
    },
    features: {
      eyebrow: 'Solution',
      title: 'What was built',
      items: [
        {
          title: 'Catalog by location',
          text: 'Services, packages and Day Spa experiences grouped by category, with search, price and duration filters, and the selected location’s prices.',
        },
        {
          title: 'Booking with real availability',
          text: 'Time slots calculated from each location’s capacity and the front desk schedule, with no risk of double booking.',
        },
        {
          title: 'Online payments',
          text: 'Mercado Pago checkout, webhook confirmation and refunds through the gateway API, with a manual queue as a safety net.',
        },
        {
          title: 'Gift cards and Club de Horas',
          text: 'Gift cards covering one or several services and shareable hour packages, with redemption controlled by the team.',
        },
        {
          title: 'Customer account',
          text: 'Sign-up with email verification, password recovery, and booking and gift card history in one place.',
        },
        {
          title: 'Admin panel',
          text: 'Daily schedule, gift card redemption and capacity windows for each location, with no need for technical support.',
        },
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: 'How the pieces fit together',
      text: 'Front end and API are separate projects, deployed independently. The API owns the business rules, and the front end consumes a documented contract.',
      layers: [
        { name: 'Front end', detail: 'React 19 + TypeScript SPA', items: ['Vite', 'React Router', 'TanStack Query'] },
        { name: 'REST API', detail: 'Java 21 + Spring Boot', items: ['Spring Security + JWT', 'JPA / Hibernate', 'OpenAPI'] },
        { name: 'Database', detail: 'PostgreSQL', items: ['Flyway', 'EXCLUDE constraints', 'Testcontainers'] },
      ],
      integrationsLabel: 'Integrations',
      integrations: [
        { name: 'Mercado Pago', role: 'Payments and refunds' },
        { name: 'Trinks', role: 'Front desk schedule' },
        { name: 'Google Calendar', role: 'Per-location calendar' },
        { name: 'Resend', role: 'Transactional email' },
        { name: 'Cloudinary', role: 'Catalog images' },
      ],
      hosting: 'Hosted on Railway · DNS on Cloudflare · CI on GitHub Actions',
    },
    challenges: {
      eyebrow: 'Technical challenges',
      title: 'Problems that took more than CRUD',
      problemLabel: 'Problem',
      solutionLabel: 'Solution',
      items: [
        {
          tag: 'Payments',
          title: 'Confirming payment from the right source',
          problem:
            'Returning from checkout does not mean the payment was approved. On top of that, Mercado Pago uses one identifier for the charge and another for the payment, and mixing them up raises no error: paid bookings simply stayed pending.',
          solution:
            'Confirmation comes only from the webhook, which finds the charge through our own reference, saved before the charge is created in the same transaction. The booking holds the slot for 15 minutes, and the UI treats "pending" as "awaiting confirmation", not as a failure.',
        },
        {
          tag: 'Integration',
          title: 'A synced schedule without burning the quota',
          problem:
            'The site checks the front desk schedule (Trinks) so it never sells a taken slot, but that API has a quota of 5,000 requests per month. A bot cycling through dates could exhaust it in a few hours.',
          solution:
            'Three layers of protection: a daily query budget per location, a limit of 30 queries per minute per IP and a one-hour cache for distant dates. The behavior was verified in production, returning 429 with Retry-After.',
        },
        {
          tag: 'Security',
          title: 'Sessions with single-use refresh tokens',
          problem:
            'Every session refresh issues a new refresh token, and presenting a used token again is treated as theft, which kills the session. When several requests expired at once, the site itself could log the user out.',
          solution:
            'Token rotation with reuse detection on the API and, on the front end, an HTTP client that serializes refreshes: only one runs at a time, and the other requests wait for the new token.',
        },
        {
          tag: 'Business rules',
          title: 'Capacity per time window, enforced by the database',
          problem:
            'Each location sets how many appointments can run at the same time in each time window, and a service can only be offered if it fits entirely inside the window. Under concurrency, checking this in code alone is not enough.',
          solution:
            'Slot calculation respects each service’s duration, and PostgreSQL EXCLUDE constraints prevent overlapping windows and simultaneous bookings on the same slot. That is why integration tests run against real PostgreSQL with Testcontainers.',
        },
      ],
    },
    quality: {
      eyebrow: 'Quality and delivery',
      title: 'From code to production',
      items: [
        {
          title: 'Automated tests',
          text: 'Over 600 JUnit tests, including integration tests against real PostgreSQL with Testcontainers.',
        },
        {
          title: 'Continuous integration',
          text: 'GitHub Actions runs the API test suite and, on the front end, a dependency audit, type checking and the build.',
        },
        {
          title: 'Versioned database',
          text: 'Every schema and data change goes through a Flyway migration, reviewable and reproducible.',
        },
        {
          title: 'Documented decisions',
          text: 'The API is described in OpenAPI, and written docs record why each integration works the way it does, not just how.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Screens',
      title: 'The product in use',
      home: 'Location home page',
      catalog: 'Catalog with category, price and duration filters',
      club: 'Club de Horas, with shareable hour packages',
      mobile: 'Mobile version',
    },
    learnings: {
      eyebrow: 'Takeaways',
      title: 'What I take from this project',
      items: [
        'Third-party integrations must be validated with real data: the most serious payment bugs only showed up with the first real notification.',
        'Critical rules belong in the database: constraints prevent inconsistencies that code alone cannot guarantee under concurrency.',
        'Protecting limited resources is part of the product: without the quota protection, the site could go weeks without seeing the front desk schedule.',
      ],
    },
    cta: {
      title: 'Want to see it live?',
      text: 'The site is live and open to the public.',
      visit: 'Visit the site',
    },
  },
  contact: {
    eyebrow: 'Contact',
    titleA: "Let's work",
    titleB: 'together?',
    text: "I'm available for job opportunities, partnerships and new projects. Reach out by email or through the channels below.",
    blocks: [
      {
        title: 'Job opportunities',
        text: "I'm open to full stack, back end or front end development roles. If your company has a position that matches my profile, I'd be glad to talk.",
      },
      {
        title: 'Networking',
        text: 'I believe in sharing knowledge among tech professionals. Feel free to connect with me and follow my work on LinkedIn.',
      },
      {
        title: 'Projects and partnerships',
        text: 'I build custom systems and web applications. If you have a need, I can help turn it into a functional, well-structured product.',
      },
    ],
    email: 'Email',
    resumeMeta: 'PDF',
  },
  footer: {
    role: 'Full Stack Developer',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { pt, en };
