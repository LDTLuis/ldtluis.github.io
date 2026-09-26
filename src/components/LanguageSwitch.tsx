import { motion } from 'motion/react';
import { useI18n } from '../i18n/LanguageProvider';
import type { Lang } from '../i18n/translations';
import { Icon } from './Icon';
import styles from './LanguageSwitch.module.css';

const options: ReadonlyArray<{ value: Lang; label: string; name: string }> = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
];

export function LanguageSwitch() {
  const { lang, setLang, t } = useI18n();

  return (
    <div className={styles.switch} role="group" aria-label={t.a11y.language}>
      <span className={styles.globe}>
        <Icon name="globe" size={16} />
      </span>
      {options.map((option) => {
        const selected = option.value === lang;
        return (
          <button
            key={option.value}
            type="button"
            lang={option.value === 'pt' ? 'pt-BR' : 'en'}
            className={`${styles.option} ${selected ? styles.selected : ''}`}
            aria-pressed={selected}
            aria-label={option.name}
            onClick={() => setLang(option.value)}
          >
            {selected && (
              <motion.span
                layoutId="language-indicator"
                className={styles.indicator}
                transition={{ type: 'spring', stiffness: 500, damping: 38 }}
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
