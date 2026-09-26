import { marqueeItems } from '../data/site';
import styles from './Marquee.module.css';

/** Faixa decorativa: as mesmas tecnologias aparecem listadas na seção de competências. */
export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.band} aria-hidden="true">
      <div className={styles.track}>
        {items.map((name, i) => (
          <span key={i} className={styles.item}>
            {name}
            <span className={styles.diamond} />
          </span>
        ))}
      </div>
    </div>
  );
}
