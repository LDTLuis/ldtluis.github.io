import styles from './Background.module.css';

/** Grade fina e foco de luz no topo da página. */
export function Background() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.glow} />
    </div>
  );
}
