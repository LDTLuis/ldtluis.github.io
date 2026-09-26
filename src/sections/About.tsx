import { ScrollRevealText } from '../components/ScrollRevealText';
import { SectionHeading } from '../components/SectionHeading';
import { useI18n } from '../i18n/LanguageProvider';
import styles from './About.module.css';

export function About() {
  const { t } = useI18n();

  return (
    <section id="sobre" className={styles.about} aria-labelledby="sobre-titulo">
      <div className={`container ${styles.inner}`}>
        <SectionHeading id="sobre-titulo" eyebrow={t.about.eyebrow} title={t.about.title} align="center" />
        <ScrollRevealText segments={t.about.paragraph} className={styles.paragraph} />
      </div>
    </section>
  );
}
