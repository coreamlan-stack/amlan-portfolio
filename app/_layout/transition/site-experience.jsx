'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { useLenis } from '@/hooks';

import { Preloader } from './preloader';

// The root layout persists during client-side navigation, so this introduction
// is not remounted every time a page changes.
export function SiteExperience() {
  const [isLoading, setLoading] = useState(false);

  useLenis();

  useEffect(() => {
    // No artificial blocking intro: the hero and navigation can render immediately.
    setLoading(false);
    return undefined;
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? <Preloader key='initial-site-intro' /> : null}
    </AnimatePresence>
  );
}
