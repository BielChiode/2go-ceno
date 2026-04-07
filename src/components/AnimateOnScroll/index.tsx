import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}

const directionVariants = {
  up: { y: 40, opacity: 0 },
  down: { y: -40, opacity: 0 },
  left: { x: 60, opacity: 0 },
  right: { x: -60, opacity: 0 },
  fade: { opacity: 0 },
};

export function AnimateOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
