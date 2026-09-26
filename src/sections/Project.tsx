import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { featuredProject as project, profile } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import styles from './Project.module.css';

export function Project() {
  const { t } = useI18n();
  const previewRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: previewRef, offset: ['start end', 'end start'] });
  // O celular sobe um pouco mais rápido que a janela do navegador (paralaxe).
  const phoneY = useTransform(scrollYProgress, [0, 1], [48, -48]);

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
                {/* TODO: apontar para a página do estudo de caso quando existir */}
                <a href="#projetos" className="btn btn-outline btn-sm">
                  {t.project.caseStudy}
                </a>
              </div>
            </header>

            <div ref={previewRef} className={styles.preview}>
              <div className={styles.browser}>
                <div className={styles.browserBar}>
                  <span className={styles.dots} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className={styles.url}>
                    <Icon name="lock" size={12} strokeWidth={2} />
                    {project.domain}
                  </span>
                </div>
                <div className={styles.screen}>
                  {project.screenshots.desktop ? (
                    <img src={project.screenshots.desktop} alt={`${t.project.screenshot} · ${project.name}`} loading="lazy" />
                  ) : (
                    <>
                      <div className={styles.wfTop} aria-hidden="true">
                        <span />
                        <span className={styles.wfNav}>
                          <span />
                          <span />
                          <span />
                        </span>
                      </div>
                      <div className={styles.wfHero}>{t.project.screenshot} · Desktop</div>
                      <div className={styles.wfCards} aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <motion.div className={styles.phone} style={reduceMotion ? undefined : { y: phoneY }}>
                <div className={styles.phoneScreen}>
                  {project.screenshots.mobile ? (
                    <img src={project.screenshots.mobile} alt={`${t.project.screenshot} · Mobile`} loading="lazy" />
                  ) : (
                    <>
                      <span className={styles.notch} aria-hidden="true" />
                      <div className={styles.phoneHero}>Mobile</div>
                      <span className={styles.phoneCta} aria-hidden="true" />
                    </>
                  )}
                </div>
              </motion.div>
            </div>

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
