import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'motion/react';
import type { PointerEvent } from 'react';
import { EmailMenu } from '../components/EmailMenu';
import { Icon } from '../components/Icon';
import { LocalClock } from '../components/LocalClock';
import { featuredProject as project, profile } from '../data/site';
import { useI18n } from '../i18n/LanguageProvider';
import styles from './Hero.module.css';

const ease = [0.2, 0.7, 0.2, 1] as const;

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

/** Inclina o cartão levemente seguindo o mouse (só com mouse e sem "reduzir movimento"). */
function useTilt() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 180, damping: 22 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), spring);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { style: { rotateX, rotateY }, handlers: { onPointerMove, onPointerLeave } };
}

export function Hero() {
  const { t } = useI18n();
  const tilt = useTilt();

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <motion.div className={styles.text} variants={list} initial="hidden" animate="show">
          <motion.div variants={item} className={styles.status}>
            <p className={styles.badge}>
              <span className={styles.pulse} aria-hidden="true" />
              {t.hero.available}
            </p>
            <LocalClock className={styles.clock} />
          </motion.div>

          <motion.div variants={item} className={styles.intro}>
            <h1 id="hero-title" className={styles.name}>
              {profile.name}
              <span className={styles.dot}>.</span>
            </h1>
            <p className={styles.role}>
              {t.hero.role} <span className={styles.sep}>&amp;</span> <span className={styles.nowrap}>{t.hero.qa}</span>
            </p>
          </motion.div>

          <motion.p variants={item} className={styles.lead}>
            {t.hero.lead.map((segment, i) =>
              segment.tone === 'strong' ? <strong key={i}>{segment.text}</strong> : <span key={i}>{segment.text}</span>,
            )}
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a href="#projetos" className={`btn btn-primary ${styles.primary}`}>
              {t.hero.cta}
              <Icon name="arrowRight" size={18} strokeWidth={2} />
            </a>
            <span className={styles.divider} aria-hidden="true" />
            <div className={styles.socials}>
              <EmailMenu triggerClassName="icon-btn" />
              <a href={profile.github} className="icon-btn" aria-label={`GitHub ${t.a11y.newTab}`} target="_blank" rel="noreferrer">
                <Icon name="github" />
              </a>
              <a href={profile.linkedin} className="icon-btn" aria-label={`LinkedIn ${t.a11y.newTab}`} target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.cardWrap}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          {...tilt.handlers}
        >
          <motion.a href={project.caseStudyUrl} className={styles.card} style={tilt.style}>
            {project.screenshots.desktop && (
              <div className={styles.shot}>
                <img src={project.screenshots.desktop} alt="" width={1440} height={900} />
              </div>
            )}

            <div className={styles.cardBody}>
              <div className={styles.cardHead}>
                <div>
                  <p className={styles.eyebrow}>{t.hero.featured}</p>
                  <p className={styles.projectName}>{project.name}</p>
                </div>
                <span className={styles.caseLink}>
                  {t.project.caseStudy}
                  <Icon name="arrowUpRight" size={16} strokeWidth={2} />
                </span>
              </div>

              <dl className={styles.stats}>
                {t.hero.stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className={styles.tags}>
                {project.stack.slice(0, 5).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
