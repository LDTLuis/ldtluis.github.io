import { motion } from 'motion/react';
import { Icon, type IconName } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { displayUrl, profile } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import styles from './Contact.module.css';

type ContactLink = {
  icon: IconName;
  label: string;
  meta: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export function Contact() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const links: ContactLink[] = [
    { icon: 'mail', label: t.contact.email, meta: profile.email, href: `mailto:${profile.email}` },
    { icon: 'github', label: 'GitHub', meta: displayUrl(profile.github), href: profile.github, external: true },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      meta: displayUrl(profile.linkedin).replace('linkedin.com/', ''),
      href: profile.linkedin,
      external: true,
    },
    { icon: 'file', label: t.resume, meta: t.contact.resumeMeta, href: profile.resumeUrl, download: true },
  ];

  return (
    <footer id="contato" className={styles.footer} aria-labelledby="contato-titulo">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.intro}>
          <p className={styles.eyebrow}>
            <span className={styles.bar} aria-hidden="true" />
            {t.contact.eyebrow}
          </p>
          <h2 id="contato-titulo" className={styles.title}>
            {t.contact.titleA}{' '}
            <br />
            <span className={styles.outline}>{t.contact.titleB}</span>
          </h2>
          <p className={styles.text}>{t.contact.text}</p>
          <a href={`mailto:${profile.email}`} className={styles.emailLink}>
            {profile.email}
            <Icon name="arrowUpRight" size={22} strokeWidth={2} />
          </a>
        </Reveal>

        <div className={styles.blocks}>
          {t.contact.blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.08}>
              <h3 className={styles.blockTitle}>{block.title}</h3>
              <p className={styles.blockText}>{block.text}</p>
            </Reveal>
          ))}
        </div>

        <ul className={styles.links}>
          {links.map((link, i) => (
            <motion.li
              key={link.icon}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <a
                  href={link.href}
                  className={styles.linkCard}
                  {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  {...(link.download ? { download: true } : {})}
                >
                  <span className={styles.linkMain}>
                    <span className={styles.linkIcon}>
                      <Icon name={link.icon} size={22} />
                    </span>
                    <span className={styles.linkText}>
                      <span className={styles.linkLabel}>{link.label}</span>
                      <span className={styles.linkMeta}>{link.meta}</span>
                    </span>
                  </span>
                  <Icon
                    name={link.download ? 'download' : 'arrowUpRight'}
                    size={18}
                    strokeWidth={2}
                    className={styles.linkArrow}
                  />
                  {link.external && <span className="sr-only">{t.a11y.newTab}</span>}
                </a>
            </motion.li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <p className={styles.signature}>
            <strong>{profile.name}</strong>
            {t.footer.role}
          </p>
          <p>
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <a href="#inicio" className={styles.backTop}>
            {t.footer.backToTop}
            <Icon name="arrowUp" size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
