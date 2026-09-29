import styles from './Background.module.css';
import { GravityStars } from './GravityStars';

/** Estrelas atraídas pelo cursor e foco de luz no topo da página. */
export function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.glow} />
      <GravityStars className={styles.stars} />
    </div>
  );
}
