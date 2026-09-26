# Portfólio · Luis Borges

**🔗 [portfolio-luis-borges.vercel.app](https://portfolio-luis-borges.vercel.app)**

Portfólio pessoal de Luis Borges, desenvolvedor full stack com foco em Java e React. O site está em português e inglês e reúne apresentação, competências, projetos e contato.

## Páginas

- [Início](https://portfolio-luis-borges.vercel.app): apresentação, sobre, competências, projeto em destaque e contato.
- [Estudo de caso do Spa Casa Bali](https://portfolio-luis-borges.vercel.app/estudo-de-caso/spa-casa-bali/): contexto, arquitetura, desafios técnicos e telas de uma plataforma de agendamento online, pagamentos e vale-presente em produção em [spacasabali.com](https://spacasabali.com).

## Tecnologias

- React 19 e TypeScript
- Vite, com uma entrada HTML por página
- Motion para as animações
- CSS Modules
- Hospedagem na Vercel

## Rodando localmente

Requer Node 20 ou mais novo.

```bash
npm install
npm run dev
```

| Comando | O que faz |
|---|---|
| `npm run dev` | servidor de desenvolvimento em `http://localhost:5173` |
| `npm run tipos` | checagem de tipos |
| `npm run build` | checa os tipos e gera o site em `dist/` |
| `npm run preview` | serve o conteúdo de `dist/` |

## Onde mexer

- Textos em português e inglês: `src/i18n/translations.ts`
- Contatos, links, currículos e dados do projeto: `src/data/site.ts`
- Prints do projeto e currículos em PDF: `public/`
