import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { skills } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import styles from './Skills.module.css';

function Chips({ items, size }: { items: string[]; size?: 'lg' | 'sm' }) {
  const sizeClass = size ? `chip-${size}` : '';
  return (
    <ul className={`${styles.chips} ${size === 'sm' ? styles.chipsTight : ''}`}>
      {items.map((name) => (
        <li key={name} className={`chip ${sizeClass}`}>
          {name}
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="competencias" className={styles.skills} aria-labelledby="competencias-titulo">
      <div className="container">
        <SectionHeading
          id="competencias-titulo"
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className={styles.grid}>
          <Reveal className={styles.featured}>
            <article className={`${styles.card} ${styles.featuredCard}`}>
              <div className={styles.stack}>
                <div className={styles.topRow}>
                  <span className={`${styles.iconBox} ${styles.iconBoxLg}`}>
                    <Icon name="server" size={26} />
                  </span>
                  <span className={styles.tag}>{t.skills.specialty}</span>
                </div>
                <div className={styles.titleGroup}>
                  <h3 className={styles.featuredTitle}>Back End</h3>
                  <p className={styles.featuredText}>{t.skills.backend}</p>
                </div>
                <Chips items={skills.backend} size="lg" />
              </div>
              <p className={styles.note}>
                <Icon name="checkCircle" size={20} strokeWidth={2} className={styles.noteIcon} />
                <span>
                  {t.skills.backendNote.before}
                  <strong>Spa Casa Bali</strong>
                  {t.skills.backendNote.after}
                </span>
              </p>
            </article>
          </Reveal>

          <Reveal className={styles.wide} delay={0.08}>
            <article className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.iconBox}>
                  <Icon name="code" size={22} />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>Front End</h3>
                  <p className={styles.cardText}>{t.skills.frontend}</p>
                </div>
              </div>
              <Chips items={skills.frontend} />
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className={styles.card}>
              <div className={`${styles.cardHead} ${styles.cardHeadStacked}`}>
                <span className={styles.iconBox}>
                  <Icon name="database" size={22} />
                </span>
                <h3 className={styles.cardTitleSm}>{t.skills.data}</h3>
              </div>
              <Chips items={skills.data} size="sm" />
            </article>
          </Reveal>

          <Reveal delay={0.24}>
            <article className={styles.card}>
              <div className={`${styles.cardHead} ${styles.cardHeadStacked}`}>
                <span className={styles.iconBox}>
                  <Icon name="cloud" size={22} />
                </span>
                <h3 className={styles.cardTitleSm}>{t.skills.deploy}</h3>
              </div>
              <Chips items={skills.deploy} size="sm" />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
