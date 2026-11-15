'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { useLenis } from '@/hooks';

import { Preloader } from './preloader';

// The root layout persists during client-side navigation, so this introduction
// is not remounted every time a page changes.
export function SiteExperience() {
  const [isLoading, setLoading] = useState(true);

  useLenis();

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1700);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? <Preloader key='initial-site-intro' /> : null}
    </AnimatePresence>
  );
}
