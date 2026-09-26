import { motion, type HTMLMotionProps } from 'motion/react';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
};

/** Sobe e aparece uma única vez quando entra na tela. */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
