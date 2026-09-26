import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useMemo, useRef } from 'react';
import type { Segment } from '../i18n/translations';
import styles from './ScrollRevealText.module.css';

type Word = { text: string; tone?: Segment['tone'] };

function toWords(segments: Segment[]): Word[] {
  return segments.flatMap((segment) =>
    segment.text
      .split(/(\s+)/)
      .filter(Boolean)
      .map((text) => ({ text, tone: segment.tone })),
  );
}

function toneClass(tone: Segment['tone']): string {
  if (tone === 'strong') return styles.strong;
  if (tone === 'accent') return styles.accent;
  return styles.base;
}

/** Parágrafo que "acende" palavra por palavra conforme a página rola. */
export function ScrollRevealText({ segments, className = '' }: { segments: Segment[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = useMemo(() => toWords(segments), [segments]);
  const total = words.filter((word) => word.text.trim()).length;

  let index = 0;
  return (
    <p ref={ref} className={`${styles.text} ${className}`}>
      {words.map((word, i) => {
        if (!word.text.trim()) return word.text;
        if (reduceMotion) {
          return (
            <span key={i} className={toneClass(word.tone)}>
              {word.text}
            </span>
          );
        }
        const start = index / total;
        index += 1;
        return (
          <RevealWord key={i} progress={scrollYProgress} range={[start, index / total]} className={toneClass(word.tone)}>
            {word.text}
          </RevealWord>
        );
      })}
    </p>
  );
}

function RevealWord({
  progress,
  range,
  className,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  className: string;
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  return (
    <motion.span className={className} style={{ opacity }}>
      {children}
    </motion.span>
  );
}
