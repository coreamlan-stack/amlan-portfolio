'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// This persists under the root layout. Navigation gets a soft curved sweep;
// the introductory language preloader is still controlled separately.
export function RouteFlow({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const previous = useRef(pathname);
  const [sweep, setSweep] = useState(null);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    if (reduceMotion) return;
    setSweep(pathname);
  }, [pathname, reduceMotion]);

  return (
    <>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 115, damping: 24, mass: 0.85 }
          }
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {sweep && !reduceMotion && (
          <motion.div
            key={sweep}
            aria-hidden='true'
            className='pointer-events-none fixed inset-0 z-[55] overflow-hidden'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='liquid-route-sweep absolute inset-x-0 top-0 h-[115dvh]'
              initial={{ y: '-115%' }}
              animate={{ y: '105%' }}
              transition={{ duration: 0.9, times: [0, 1], ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={() => setSweep(current => current === sweep ? null : current)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
