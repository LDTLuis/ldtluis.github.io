import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useId, useRef, useState } from 'react';
import { profile } from '../data/site';
import { useCopyEmail } from '../hooks/useCopyEmail';
import { useDismiss } from '../hooks/useDismiss';
import { useI18n } from '../i18n/LanguageProvider';
import { Icon } from './Icon';
import styles from './EmailMenu.module.css';

/** Ícone de e-mail que abre as opções de copiar o endereço ou abrir o app de e-mail. */
export function EmailMenu({ triggerClassName = '' }: { triggerClassName?: string }) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const close = useCallback(() => setOpen(false), []);
  const { copied, copy } = useCopyEmail();
  useDismiss(open, close, rootRef, triggerRef);

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        aria-label={t.contact.email}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name="mail" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            className={styles.menu}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <p className={styles.address}>{profile.email}</p>
            <button type="button" className={styles.option} onClick={copy}>
              <Icon name={copied ? 'check' : 'copy'} size={16} strokeWidth={2} className={styles.optionIcon} />
              <span className={styles.label} aria-live="polite">
                {copied ? t.contact.emailCopied : t.contact.copyEmail}
              </span>
            </button>
            <a href={`mailto:${profile.email}`} className={styles.option} onClick={close}>
              <Icon name="mail" size={16} strokeWidth={2} className={styles.optionIcon} />
              <span className={styles.label}>{t.contact.sendEmail}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
