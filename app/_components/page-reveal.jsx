'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function PageReveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -50px 0px' }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 100, damping: 20, mass: 0.9, delay }
      }
    >
      {children}
    </motion.div>
  );
}
