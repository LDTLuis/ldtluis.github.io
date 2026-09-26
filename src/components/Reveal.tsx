import { motion, type HTMLMotionProps } from 'motion/react';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
};

/** Props de "sobe e aparece uma única vez" para usar em qualquer elemento motion (ex.: motion.li). */
export function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] as const },
  };
}

/** Sobe e aparece uma única vez quando entra na tela. */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div {...reveal(delay)} {...rest}>
      {children}
    </motion.div>
  );
}
