'use client';

import { motion, useReducedMotion } from 'framer-motion';

// Per-route entrance for inner pages. The home hero stays untouched.
export function PageShell({ children }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 115, damping: 23, mass: 0.9 }
      }
    >
      {children}
    </motion.div>
  );
}
