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
import { profile } from '../data/site';
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
          <motion.div variants={item} className={styles.intro}>
            <p className={styles.hello}>{t.hero.hello}</p>
            <h1 id="hero-title" className={styles.name}>
              Luis{' '}
              <br />
              Borges<span className={styles.dot}>.</span>
            </h1>
          </motion.div>

          <motion.p variants={item} className={styles.role}>
            {t.hero.role} <span className={styles.accent}>Java</span> {t.hero.and}{' '}
            <span className={styles.accent}>React</span>.
          </motion.p>

          <motion.p variants={item} className={styles.lead}>
            {t.hero.lead}
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
          <motion.div className={styles.card} style={tilt.style}>
            <div className={styles.cardTop}>
              <span className={styles.monogram} aria-hidden="true">
                {profile.initials}
              </span>
              <p className={styles.badge}>
                <span className={styles.pulse} aria-hidden="true" />
                {t.hero.available}
              </p>
            </div>

            <dl className={styles.rows}>
              <div className={styles.row}>
                <dt>{t.hero.rows.role}</dt>
                <dd>{t.hero.rows.roleValue}</dd>
              </div>
              <div className={styles.row}>
                <dt>{t.hero.rows.stack}</dt>
                <dd>{profile.mainStack}</dd>
              </div>
              <div className={styles.row}>
                <dt>{t.hero.rows.location}</dt>
                <dd>{t.hero.rows.locationValue}</dd>
              </div>
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
