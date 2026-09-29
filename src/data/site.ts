import type { Dictionary } from '../i18n/translations';

/** Endereço base do site: '/' tanto no dev quanto no GitHub Pages. */
export const base = import.meta.env.BASE_URL;

/**
 * Dados pessoais e links. Troque os valores marcados com TODO pelos seus.
 */
export const profile = {
  name: 'Luis Borges',
  initials: 'LB',
  email: 'proff0lfob@gmail.com',
  github: 'https://github.com/LDTLuis',
  linkedin: 'https://www.linkedin.com/in/lfobproff',
  /** Currículo em PDF por idioma (arquivos em public/); o nome do idioma fica no próprio idioma. */
  resumes: [
    { lang: 'pt', short: 'PT', label: 'Português', href: `${base}curriculo-luis-borges-pt.pdf`, fileName: 'Currículo - Luis Borges.pdf' },
    { lang: 'en', short: 'EN', label: 'English', href: `${base}resume-luis-borges-en.pdf`, fileName: 'Resume - Luis Borges.pdf' },
  ] as const,
  mainStack: 'Java · Spring · React · TS',
};

export const navItems: ReadonlyArray<{ id: string; key: keyof Dictionary['nav'] }> = [
  { id: 'inicio', key: 'home' },
  { id: 'sobre', key: 'about' },
  { id: 'competencias', key: 'skills' },
  { id: 'projetos', key: 'projects' },
  { id: 'contato', key: 'contact' },
];

export const skills = {
  backend: [
    'Java 21',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'Hibernate',
    'REST APIs',
    'JWT',
    'OpenAPI / Swagger',
    'JavaScript',
    'Python',
  ],
  /** Acessibilidade (ARIA) é traduzida e fica em t.skills.a11y. */
  frontend: ['TypeScript', 'React', 'Vite', 'React Router', 'TanStack Query', 'CSS Modules'],
  integrations: ['Mercado Pago', 'Asaas', 'Google Calendar API', 'AWS SNS', 'Cloudinary', 'Resend', 'Webhooks'],
  data: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Flyway'],
  devops: ['Docker', 'Maven', 'GitHub Actions', 'Dependabot', 'Railway'],
  tools: ['Jira', 'TestRail', 'Scrum', 'Kanban'],
  /** Grupos do card de QA; títulos em t.skills.qaGroups. Os testes manuais ficam em t.skills.qaManual, pois são traduzidos. */
  qa: {
    automation: ['Cypress', 'Selenium'],
    unit: ['JUnit 5', 'Spring Boot Test', 'Testcontainers'],
    api: ['Postman', 'Insomnia'],
  },
};

export const featuredProject = {
  name: 'Spa Casa Bali',
  url: 'https://spacasabali.com',
  domain: 'spacasabali.com',
  caseStudyUrl: `${base}estudo-de-caso/spa-casa-bali/`,
  year: 2026,
  stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Railway'],
  screenshots: {
    desktop: `${base}projetos/spa-casa-bali-desktop.webp` as string | null,
    mobile: `${base}projetos/spa-casa-bali-mobile.webp` as string | null,
  },
  /** Telas do estudo de caso; `key` aponta para a legenda em t.caseStudy.gallery. */
  gallery: [
    { key: 'catalog', src: `${base}projetos/spa-casa-bali-catalogo.webp` },
    { key: 'club', src: `${base}projetos/spa-casa-bali-club-de-horas.webp` },
  ] as const,
};

/** "https://github.com/usuario" → "github.com/usuario" */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}
