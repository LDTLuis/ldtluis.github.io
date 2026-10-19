import { DevicePreview } from '../components/DevicePreview';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { profile, projects } from '../data/site';
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

        <div className={styles.cards}>
          {projects.map((project) => {
            const text = t.project.items[project.id];
            const headingId = `projeto-${project.id}`;
            return (
              <Reveal key={project.id}>
                <article className={styles.card} aria-labelledby={headingId}>
                  <header className={styles.top}>
                    <div>
                      <p className={styles.meta}>
                        {text.meta} · {project.year}
                      </p>
                      <h3 id={headingId} className={styles.name}>
                        {project.name}
                      </h3>
                      <p className={styles.subtitle}>{text.subtitle}</p>
                    </div>
                    <div className={styles.links}>
                      {project.actions.map((action) => (
                        <a
                          key={action.label}
                          href={action.href}
                          className={`btn btn-${action.variant} btn-sm`}
                          {...(action.external && { target: '_blank', rel: 'noreferrer' })}
                        >
                          {action.variant === 'primary' && <Icon name="arrowUpRight" size={18} strokeWidth={2} />}
                          {t.project.actions[action.label]}
                          {action.external && <span className="sr-only">{t.a11y.newTab}</span>}
                        </a>
                      ))}
                    </div>
                  </header>

                  <DevicePreview
                    domain={project.domain}
                    desktop={project.screenshots.desktop}
                    mobile={project.screenshots.mobile}
                    label={text.screenshot}
                  />

                  <div className={styles.details}>
                    <div className={styles.detail}>
                      <h4 className={styles.label}>{t.project.challenge}</h4>
                      <p className={styles.detailText}>{text.challengeText}</p>
                    </div>
                    <div className={styles.detail}>
                      <h4 className={styles.label}>{t.project.solution}</h4>
                      <ul className={styles.list}>
                        {text.solutionItems.map((item) => (
                          <li key={item}>
                            <Icon name="check" size={16} strokeWidth={2.4} className={styles.check} />
                            {item}
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
            );
          })}
        </div>

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
