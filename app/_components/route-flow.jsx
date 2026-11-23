'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// The root layout persists. Keep the first-visit preloader separate and do not
// hide content behind a screen-sized transition overlay on route changes.
export function RouteFlow({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const previous = useRef(pathname);
  const [wave, setWave] = useState(null);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    if (reduceMotion) return;
    setWave(pathname);
  }, [pathname, reduceMotion]);

  return (
    <>
      <AnimatePresence mode='sync' initial={false}>
        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.24, ease: [0.22, 1, 0.36, 1] }
          }
          style={{ minHeight: '100dvh' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {wave && !reduceMotion && (
          <motion.div
            key={wave}
            aria-hidden='true'
            className='pointer-events-none fixed inset-x-0 bottom-0 z-[55] h-24 overflow-hidden'
            initial={{ opacity: 0, y: 68, scaleY: 0.45 }}
            animate={{ opacity: [0, 0.55, 0], y: [-8, -22, -62], scaleY: [0.45, 1, 0.7] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
            onAnimationComplete={() => setWave(current => current === wave ? null : current)}
          >
            <div className='h-full w-full rounded-[50%_50%_0_0] bg-primary/20 blur-xl' />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
