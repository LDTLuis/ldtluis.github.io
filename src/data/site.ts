import type { Dictionary } from '../i18n/translations';

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
    { lang: 'pt', short: 'PT', label: 'Português', href: '/curriculo-luis-borges-pt.pdf', fileName: 'Currículo - Luis Borges.pdf' },
    { lang: 'en', short: 'EN', label: 'English', href: '/resume-luis-borges-en.pdf', fileName: 'Resume - Luis Borges.pdf' },
  ] as const,
  photoUrl: null as string | null, // TODO: ex. '/foto.jpg' (arquivo em public/)
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
  backend: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA / Hibernate', 'REST APIs', 'OpenAPI', 'Maven'],
  frontend: ['TypeScript', 'React', 'React Router', 'TanStack Query', 'Vite', 'HTML', 'CSS'],
  data: ['PostgreSQL', 'Flyway', 'JUnit', 'Testcontainers'],
  deploy: ['Git & GitHub', 'Railway', 'Cloudflare', 'Cloudinary'],
};

export const marqueeItems = [
  'Java',
  'Spring Boot',
  'TypeScript',
  'React',
  'PostgreSQL',
  'Vite',
  'Spring Security',
  'TanStack Query',
  'Flyway',
  'Testcontainers',
  'Railway',
  'Git',
];

export const featuredProject = {
  name: 'Spa Casa Bali',
  url: 'https://spacasabali.com',
  domain: 'spacasabali.com',
  caseStudyUrl: '/estudo-de-caso/spa-casa-bali/',
  year: 2026,
  stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Vite', 'Railway'],
  screenshots: {
    desktop: '/projetos/spa-casa-bali-desktop.webp' as string | null,
    mobile: '/projetos/spa-casa-bali-mobile.webp' as string | null,
  },
  /** Telas do estudo de caso; `key` aponta para a legenda em t.caseStudy.gallery. */
  gallery: [
    { key: 'catalog', src: '/projetos/spa-casa-bali-catalogo.webp' },
    { key: 'club', src: '/projetos/spa-casa-bali-club-de-horas.webp' },
  ] as const,
};

/** "https://github.com/usuario" → "github.com/usuario" */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}
