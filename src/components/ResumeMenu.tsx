import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useId, useRef, useState } from 'react';
import { profile } from '../data/site';
import { useDismiss } from '../hooks/useDismiss';
import { useI18n } from '../i18n/LanguageProvider';
import { Icon } from './Icon';
import styles from './ResumeMenu.module.css';

/** Botão "Currículo" que abre a escolha entre o PDF em português e em inglês. */
export function ResumeMenu({ className = '', triggerClassName = '' }: { className?: string; triggerClassName?: string }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, rootRef, triggerRef);

  return (
    <div ref={rootRef} className={`${styles.root} ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name="download" size={16} strokeWidth={2} />
        {t.resume}
        <Icon name="chevronDown" size={14} strokeWidth={2.2} className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={menuId}
            className={styles.menu}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {profile.resumes.map((resume) => (
              <li key={resume.lang}>
                <a
                  href={resume.href}
                  download={resume.fileName}
                  hrefLang={resume.lang}
                  className={styles.option}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.short} aria-hidden="true">
                    {resume.short}
                  </span>
                  <span className={styles.label}>{resume.label}</span>
                  <Icon name="download" size={16} strokeWidth={2} className={styles.optionIcon} />
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
