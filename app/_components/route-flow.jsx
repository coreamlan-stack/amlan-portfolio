'use client';

import { useEffect, useRef } from 'react';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// The root layout persists. Keep the first-visit preloader separate and do not
// hide content behind a screen-sized transition overlay on route changes.
export function RouteFlow({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;

  }, [pathname, reduceMotion]);

  return (
    <>

        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0.92, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
          }
          style={{ minHeight: '100dvh' }}
        >
          {children}
        </motion.div>

    </>
  );
}
