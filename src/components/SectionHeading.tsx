import { Reveal } from './Reveal';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ id, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal className={`${styles.heading} ${centered ? styles.center : ''}`}>
      <div className={styles.titles}>
        <p className={styles.eyebrow}>
          <span className={styles.bar} aria-hidden="true" />
          {eyebrow}
          {centered && <span className={styles.bar} aria-hidden="true" />}
        </p>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </Reveal>
  );
}
