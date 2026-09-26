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
    photo: 'Sua foto',
    available: 'Disponível para oportunidades',
    rows: {
      role: 'Atuação',
      roleValue: 'Desenvolvimento Full Stack',
      stack: 'Stack principal',
      location: 'Localização',
      locationValue: '[Cidade, UF]',
    },
    live: 'Em produção',
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
    photo: 'Your photo',
    available: 'Open to opportunities',
    rows: {
      role: 'Role',
      roleValue: 'Full Stack Development',
      stack: 'Main stack',
      location: 'Location',
      locationValue: '[City, State]',
    },
    live: 'Live in production',
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
