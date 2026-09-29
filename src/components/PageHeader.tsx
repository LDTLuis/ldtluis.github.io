import { useEffect, useState } from 'react';
import { base, profile } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import { Icon } from './Icon';
import { LanguageSwitch } from './LanguageSwitch';
import header from './Header.module.css';
import styles from './PageHeader.module.css';

/** Cabeçalho das páginas internas: marca, volta ao portfólio e idioma. */
export function PageHeader({ backLabel }: { backLabel: string }) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${header.header} ${scrolled ? header.solid : ''}`}>
      <div className={header.inner}>
        <a href={base} className={header.brand} aria-label={t.a11y.home}>
          <span className={header.mark} aria-hidden="true">
            {profile.initials}
          </span>
          <span>{profile.name}</span>
        </a>

        <div className={header.actions}>
          <a href={`${base}#projetos`} className={styles.back}>
            <Icon name="arrowLeft" size={16} strokeWidth={2} />
            <span className={styles.backLabel}>{backLabel}</span>
          </a>
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
