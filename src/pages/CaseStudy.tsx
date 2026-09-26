import { MotionConfig, motion, type Variants } from 'motion/react';
import { Background } from '../components/Background';
import { DevicePreview } from '../components/DevicePreview';
import { Icon } from '../components/Icon';
import { PageHeader } from '../components/PageHeader';
import { Reveal, reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { featuredProject as project } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import { Contact } from '../sections/Contact';
import styles from './CaseStudy.module.css';

const ease = [0.2, 0.7, 0.2, 1] as const;

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function CaseStudy() {
  const { t } = useI18n();
  const cs = t.caseStudy;

  return (
    // "user": respeita a opção "reduzir movimento" do sistema
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#conteudo">
        {t.a11y.skip}
      </a>
      <PageHeader backLabel={cs.back} />

      <main id="conteudo" style={{ position: 'relative' }}>
        <Background />

        <section id="inicio" className={styles.hero} aria-labelledby="estudo-titulo">
          <motion.div className={`container ${styles.heroInner}`} variants={list} initial="hidden" animate="show">
            <motion.p variants={item} className={styles.eyebrow}>
              <span className={styles.bar} aria-hidden="true" />
              {cs.eyebrow} · {project.year}
            </motion.p>
            <motion.h1 variants={item} id="estudo-titulo" className={styles.title}>
              {project.name}
              <span className={styles.dot}>.</span>
            </motion.h1>
            <motion.p variants={item} className={styles.intro}>
              {cs.intro}
            </motion.p>
            <motion.div variants={item} className={styles.heroActions}>
              <a href={project.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                <Icon name="arrowUpRight" size={18} strokeWidth={2} />
                {project.domain}
                <span className="sr-only">{t.a11y.newTab}</span>
              </a>
            </motion.div>

            <motion.dl variants={item} className={styles.facts}>
              {cs.facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            className={`container ${styles.showcase}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
          >
            <DevicePreview
              domain={project.domain}
              desktop={project.screenshots.desktop}
              mobile={project.screenshots.mobile}
              label={cs.gallery.home}
            />
          </motion.div>
        </section>

        <div className={styles.numbersSection}>
          <ul className={`container ${styles.numbers}`}>
            {cs.numbers.map((n, i) => (
              <motion.li key={n.label} {...reveal(i * 0.06)} className={styles.number}>
                <span className={styles.numberValue}>{n.value}</span>
                <span className={styles.numberLabel}>{n.label}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <section className={styles.section} aria-labelledby="contexto-titulo">
          <div className={`container ${styles.split}`}>
            <SectionHeading id="contexto-titulo" eyebrow={cs.context.eyebrow} title={cs.context.title} />
            <Reveal className={styles.prose}>
              {cs.context.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="solucao-titulo">
          <div className="container">
            <SectionHeading id="solucao-titulo" eyebrow={cs.features.eyebrow} title={cs.features.title} />
            <ul className={styles.features}>
              {cs.features.items.map((feature, i) => (
                <motion.li key={feature.title} {...reveal((i % 3) * 0.06)} className={styles.feature}>
                  <span className={styles.featureIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="arquitetura-titulo">
          <div className="container">
            <SectionHeading
              id="arquitetura-titulo"
              eyebrow={cs.architecture.eyebrow}
              title={cs.architecture.title}
              description={cs.architecture.text}
            />
            <Reveal className={styles.diagram}>
              <ol className={styles.layers}>
                {cs.architecture.layers.map((layer, i) => (
                  <li key={layer.name} className={styles.layer}>
                    <span className={styles.layerIcon} aria-hidden="true">
                      <Icon name={(['code', 'server', 'database'] as const)[i]} size={20} />
                    </span>
                    <div className={styles.layerText}>
                      <h3 className={styles.layerName}>{layer.name}</h3>
                      <p className={styles.layerDetail}>{layer.detail}</p>
                    </div>
                    <ul className={styles.layerItems}>
                      {layer.items.map((name) => (
                        <li key={name} className="chip chip-sm">
                          {name}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>

              <div className={styles.integrations}>
                <p className={styles.integrationsLabel}>{cs.architecture.integrationsLabel}</p>
                <ul className={styles.integrationList}>
                  {cs.architecture.integrations.map((integration) => (
                    <li key={integration.name} className={styles.integration}>
                      <span className={styles.integrationName}>{integration.name}</span>
                      <span className={styles.integrationRole}>{integration.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className={styles.hosting}>{cs.architecture.hosting}</p>
            </Reveal>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="desafios-titulo">
          <div className="container">
            <SectionHeading id="desafios-titulo" eyebrow={cs.challenges.eyebrow} title={cs.challenges.title} />
            <ol className={styles.challenges}>
              {cs.challenges.items.map((challenge, i) => (
                <motion.li key={challenge.title} {...reveal()} className={styles.challenge}>
                  <div className={styles.challengeHead}>
                    <span className={styles.challengeIndex}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.challengeTag}>{challenge.tag}</span>
                  </div>
                  <h3 className={styles.challengeTitle}>{challenge.title}</h3>
                  <div className={styles.challengeBody}>
                    <div>
                      <h4 className={styles.challengeLabel}>{cs.challenges.problemLabel}</h4>
                      <p>{challenge.problem}</p>
                    </div>
                    <div>
                      <h4 className={`${styles.challengeLabel} ${styles.challengeLabelAccent}`}>
                        {cs.challenges.solutionLabel}
                      </h4>
                      <p>{challenge.solution}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="qualidade-titulo">
          <div className="container">
            <SectionHeading id="qualidade-titulo" eyebrow={cs.quality.eyebrow} title={cs.quality.title} />
            <ul className={styles.quality}>
              {cs.quality.items.map((q, i) => (
                <motion.li key={q.title} {...reveal(i * 0.06)} className={styles.qualityItem}>
                  <Icon name="checkCircle" size={22} className={styles.qualityIcon} />
                  <h3 className={styles.qualityTitle}>{q.title}</h3>
                  <p className={styles.qualityText}>{q.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="telas-titulo">
          <div className="container">
            <SectionHeading id="telas-titulo" eyebrow={cs.gallery.eyebrow} title={cs.gallery.title} />
            <div className={styles.gallery}>
              {project.gallery.map((shot, i) => (
                <Reveal key={shot.key} delay={i * 0.08}>
                  <figure className={styles.shot}>
                    <div className={styles.shotFrame}>
                      <img src={shot.src} alt={cs.gallery[shot.key]} loading="lazy" />
                    </div>
                    <figcaption className={styles.shotCaption}>{cs.gallery[shot.key]}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="aprendizados-titulo">
          <div className={`container ${styles.split}`}>
            <SectionHeading id="aprendizados-titulo" eyebrow={cs.learnings.eyebrow} title={cs.learnings.title} />
            <ul className={styles.learnings}>
              {cs.learnings.items.map((text, i) => (
                <motion.li key={text} {...reveal(i * 0.06)} className={styles.learning}>
                  <Icon name="arrowRight" size={18} strokeWidth={2} className={styles.learningIcon} />
                  <p>{text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-titulo">
          <Reveal className={`container ${styles.cta}`}>
            <div>
              <h2 id="cta-titulo" className={styles.ctaTitle}>
                {cs.cta.title}
              </h2>
              <p className={styles.ctaText}>{cs.cta.text}</p>
            </div>
            <div className={styles.ctaActions}>
              <a href={project.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                <Icon name="arrowUpRight" size={18} strokeWidth={2} />
                {cs.cta.visit}
                <span className="sr-only">{t.a11y.newTab}</span>
              </a>
              <a href="/#projetos" className="btn btn-outline">
                <Icon name="arrowLeft" size={18} strokeWidth={2} />
                {cs.back}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Contact />
    </MotionConfig>
  );
}
