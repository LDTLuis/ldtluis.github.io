import { DevicePreview } from '../components/DevicePreview';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { featuredProject as project, profile } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import styles from './Project.module.css';

export function Project() {
  const { t } = useI18n();

  return (
    <section id="projetos" className={styles.projects} aria-labelledby="projetos-titulo">
      <div className="container">
        <SectionHeading
          id="projetos-titulo"
          eyebrow={t.project.eyebrow}
          title={t.project.title}
          description={t.project.description}
        />

        <Reveal>
          <article className={styles.card} aria-labelledby="projeto-nome">
            <header className={styles.top}>
              <div>
                <p className={styles.meta}>
                  {t.project.meta} · {project.year}
                </p>
                <h3 id="projeto-nome" className={styles.name}>
                  {project.name}
                </h3>
                <p className={styles.subtitle}>{t.project.subtitle}</p>
              </div>
              <div className={styles.links}>
                <a href={project.url} className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
                  <Icon name="arrowUpRight" size={18} strokeWidth={2} />
                  {t.project.visit}
                  <span className="sr-only">{t.a11y.newTab}</span>
                </a>
                <a href={project.caseStudyUrl} className="btn btn-outline btn-sm">
                  {t.project.caseStudy}
                </a>
              </div>
            </header>

            <DevicePreview
              domain={project.domain}
              desktop={project.screenshots.desktop}
              mobile={project.screenshots.mobile}
              label={t.project.screenshot}
            />

            <div className={styles.details}>
              <div className={styles.detail}>
                <h4 className={styles.label}>{t.project.challenge}</h4>
                <p className={styles.detailText}>{t.project.challengeText}</p>
              </div>
              <div className={styles.detail}>
                <h4 className={styles.label}>{t.project.solution}</h4>
                <ul className={styles.list}>
                  {t.project.solutionItems.map((text) => (
                    <li key={text}>
                      <Icon name="check" size={16} strokeWidth={2.4} className={styles.check} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.detail}>
                <h4 className={styles.label}>{t.project.tech}</h4>
                <ul className={styles.stack}>
                  {project.stack.map((name) => (
                    <li key={name} className="chip chip-round">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal className={styles.more}>
          <p className={styles.moreText}>
            <span className={styles.blinkDot} aria-hidden="true" />
            {t.project.more}
          </p>
          <a href={profile.github} className={styles.moreLink} target="_blank" rel="noreferrer">
            {t.project.follow}
            <Icon name="arrowUpRight" size={16} strokeWidth={2} />
            <span className="sr-only">{t.a11y.newTab}</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
