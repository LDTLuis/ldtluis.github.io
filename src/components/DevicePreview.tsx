import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Icon } from './Icon';
import styles from './DevicePreview.module.css';

type DevicePreviewProps = {
  domain: string;
  desktop: string | null;
  mobile: string | null;
  /** Texto alternativo e rótulo do espaço reservado enquanto não há print. */
  label: string;
  className?: string;
};

/** Janela de navegador com o print desktop e, se houver print mobile, um celular sobreposto. */
export function DevicePreview({ domain, desktop, mobile, label, className = '' }: DevicePreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // O celular sobe um pouco mais rápido que a janela do navegador (paralaxe).
  const phoneY = useTransform(scrollYProgress, [0, 1], [48, -48]);

  return (
    <div ref={ref} className={`${styles.preview} ${mobile ? '' : styles.solo} ${className}`}>
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <span className={styles.dots} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className={styles.url}>
            <Icon name="lock" size={12} strokeWidth={2} />
            <span className={styles.urlText}>{domain}</span>
          </span>
        </div>
        <div className={styles.screen}>
          {desktop ? (
            <img src={desktop} alt={`${label} · Desktop`} loading="lazy" />
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
              <div className={styles.wfHero}>{label} · Desktop</div>
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

      {mobile && (
        <motion.div className={styles.phone} style={reduceMotion ? undefined : { y: phoneY }}>
          <div className={styles.phoneScreen}>
            <img src={mobile} alt={`${label} · Mobile`} loading="lazy" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
