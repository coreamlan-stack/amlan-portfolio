'use client';

import { motion } from 'framer-motion';

// Decorative SVG stays inside the panel so it never spills across the page.
export function OffcanvasBackdrop() {
  return (
    <motion.div
      aria-hidden='true'
      className='pointer-events-none absolute -right-24 top-1/3 size-64 rounded-full border border-background/15 sm:size-96'
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 23 }}
    />
  );
}
