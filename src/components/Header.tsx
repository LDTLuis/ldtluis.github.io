import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { navItems, profile } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { useI18n } from '../i18n/LanguageProvider';
import { Icon } from './Icon';
import { LanguageSwitch } from './LanguageSwitch';
import { ResumeMenu } from './ResumeMenu';
import styles from './Header.module.css';

const SECTION_IDS = navItems.map((item) => item.id);

export function Header() {
  const { t } = useI18n();
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu ao voltar para a largura de desktop.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onChange = () => desktop.matches && setMenuOpen(false);
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  // Menu aberto: trava a rolagem da página e fecha com Esc.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled || menuOpen ? styles.solid : ''}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand} aria-label={t.a11y.home} onClick={closeMenu}>
          <span className={styles.mark} aria-hidden="true">
            {profile.initials}
          </span>
          <span>{profile.name}</span>
        </a>

        <nav className={styles.nav} aria-label={t.a11y.mainNav}>
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.navLink} ${isActive ? styles.navActive : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={styles.navIndicator}
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                )}
                {t.nav[item.key]}
              </a>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <ResumeMenu className={styles.resumeMenu} triggerClassName={styles.resume} />
          <LanguageSwitch />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="menu-celular"
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={20} strokeWidth={2} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />
            <motion.nav
              id="menu-celular"
              className={styles.mobileMenu}
              aria-label={t.a11y.mainNav}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${styles.mobileLink} ${active === item.id ? styles.mobileActive : ''}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {t.nav[item.key]}
                  <Icon name="arrowRight" size={20} strokeWidth={2} />
                </a>
              ))}
              <div className={styles.mobileResumes}>
                <p className={styles.mobileResumeTitle}>{t.resume}</p>
                <div className={styles.mobileResumeRow}>
                  {profile.resumes.map((resume) => (
                    <a
                      key={resume.lang}
                      href={resume.href}
                      download={resume.fileName}
                      hrefLang={resume.lang}
                      className={`btn btn-outline ${styles.mobileResume}`}
                      onClick={closeMenu}
                    >
                      <Icon name="download" size={16} strokeWidth={2} />
                      {resume.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
