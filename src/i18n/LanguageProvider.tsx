import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { dictionaries, type Dictionary, type Lang } from './translations';

const STORAGE_KEY = 'idioma';

/** Título da aba em cada idioma; sem ele, vale o título do portfólio. */
export type PageTitle = (t: Dictionary) => string;

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Escolha salva > idioma do navegador (pt-* abre em português, o resto em inglês). */
function detectLanguage(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    // localStorage bloqueado: segue para o idioma do navegador
  }
  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  return browserLangs.some((l) => l.toLowerCase().startsWith('pt')) ? 'pt' : 'en';
}

export function LanguageProvider({ children, title }: { children: ReactNode; title?: PageTitle }) {
  const [lang, setLangState] = useState<Lang>(detectLanguage);
  const t = dictionaries[lang];

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // sem persistência, mas a troca funciona
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = title ? title(t) : t.meta.title;
  }, [lang, t, title]);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useI18n precisa estar dentro de <LanguageProvider>');
  return context;
}
