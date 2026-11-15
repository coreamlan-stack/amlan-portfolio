'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Keep artwork present during loading; reveal it with a gentle mask only
// when it enters the viewport. Works with future real screenshots too.
export function MediaReveal({ children, className = '' }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0.65, clipPath: 'inset(11% 0 11% 0 round 20px)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0 round 20px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
