import type { ReactNode } from 'react';
import { Icon, type IconName } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { skills } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import styles from './Skills.module.css';

function Chips({ items, size }: { items: readonly string[]; size?: 'lg' | 'sm' }) {
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

/** Card de largura total ou dupla, com título e descrição ao lado do ícone. */
function WideCard({ icon, title, text, children }: { icon: IconName; title: string; text: string; children: ReactNode }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHead}>
        <span className={styles.iconBox}>
          <Icon name={icon} size={22} />
        </span>
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardText}>{text}</p>
        </div>
      </div>
      {children}
    </article>
  );
}

/** Card de uma coluna, com o ícone acima do título. */
function SmallCard({ icon, title, children }: { icon: IconName; title: string; children: ReactNode }) {
  return (
    <article className={styles.card}>
      <div className={`${styles.cardHead} ${styles.cardHeadStacked}`}>
        <span className={styles.iconBox}>
          <Icon name={icon} size={22} />
        </span>
        <h3 className={styles.cardTitleSm}>{title}</h3>
      </div>
      {children}
    </article>
  );
}

export function Skills() {
  const { t } = useI18n();
  const qaGroups = [
    { key: 'automation', items: skills.qa.automation },
    { key: 'unit', items: skills.qa.unit },
    { key: 'api', items: skills.qa.api },
    { key: 'manual', items: t.skills.qaManual },
  ] as const;

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
                <p className={styles.arch}>{t.skills.backendArch}</p>
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
            <WideCard icon="code" title="Front End" text={t.skills.frontend}>
              <Chips items={[...skills.frontend, t.skills.a11y]} />
            </WideCard>
          </Reveal>

          <Reveal className={styles.wide} delay={0.16}>
            <WideCard icon="plug" title={t.skills.integrations} text={t.skills.integrationsText}>
              <Chips items={skills.integrations} />
            </WideCard>
          </Reveal>

          <Reveal delay={0.08}>
            <SmallCard icon="database" title={t.skills.data}>
              <Chips items={skills.data} size="sm" />
            </SmallCard>
          </Reveal>

          <Reveal delay={0.16}>
            <SmallCard icon="cloud" title={t.skills.devops}>
              <Chips items={skills.devops} size="sm" />
            </SmallCard>
          </Reveal>

          <Reveal delay={0.24}>
            <SmallCard icon="kanban" title={t.skills.tools}>
              <Chips items={skills.tools} size="sm" />
            </SmallCard>
          </Reveal>

          <Reveal delay={0.32}>
            <SmallCard icon="globe" title={t.skills.languages}>
              <ul className={styles.languages}>
                {t.skills.languageItems.map(({ name, level }) => (
                  <li key={name} className={styles.language}>
                    <span>{name}</span>
                    <span className={styles.level}>{level}</span>
                  </li>
                ))}
              </ul>
            </SmallCard>
          </Reveal>

          <Reveal className={styles.full} delay={0.08}>
            <WideCard icon="shieldCheck" title={t.skills.qa} text={t.skills.qaText}>
              <div className={styles.qaGroups}>
                {qaGroups.map(({ key, items }) => (
                  <div key={key} className={styles.qaGroup}>
                    <h4 className={styles.qaGroupTitle}>{t.skills.qaGroups[key]}</h4>
                    <Chips items={items} size="sm" />
                  </div>
                ))}
              </div>
            </WideCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
