import type { Segment } from '../i18n/translations';
import styles from './RichText.module.css';

function toneClass(tone: Segment['tone']): string {
  if (tone === 'strong') return styles.strong;
  if (tone === 'accent') return styles.accent;
  return styles.base;
}

/** Parágrafo com palavras destacadas em cor, montado a partir de trechos. */
export function RichText({ segments, className = '' }: { segments: Segment[]; className?: string }) {
  return (
    <p className={`${styles.text} ${className}`}>
      {segments.map((segment, i) => (
        <span key={i} className={toneClass(segment.tone)}>
          {segment.text}
        </span>
      ))}
    </p>
  );
}
