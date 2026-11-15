'use client';

import { useEffect, useState } from 'react';

import { motion, useReducedMotion } from 'framer-motion';

// Desktop uses a cinematic image mask; mobile uses composited opacity/translate
// instead of repainting large clip-paths while scrolling.
export function MediaReveal({ children, className = '' }) {
  const reduceMotion = useReducedMotion();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const initial = reduceMotion
    ? false
    : mobile
      ? { opacity: 0.65, y: 20 }
      : { opacity: 0.6, clipPath: 'inset(10% 0 10% 0 round 20px)' };
  const end = mobile
    ? { opacity: 1, y: 0 }
    : { opacity: 1, clipPath: 'inset(0% 0 0% 0 round 20px)' };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={end}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: mobile ? 0.6 : 0.9, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
