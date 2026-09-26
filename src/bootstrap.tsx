import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/sora/500.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import './styles/global.css';

import { LanguageProvider, type PageTitle } from './i18n/LanguageProvider';

/** Monta uma página do site com fontes, estilos globais e idioma. */
export function mount(page: ReactNode, title?: PageTitle) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider title={title}>{page}</LanguageProvider>
    </StrictMode>,
  );
}
