'use client';

import { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    // Keep the same scroll physics on desktop and touch.
    const lenis = new Lenis({
      duration: 1.15,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchInertiaMultiplier: 18,
    });

    let frameId = 0;
    const raf = time => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = 0;
    };
    const onVisibility = () => {
      // Avoid burning frames in a background tab. On return, Lenis resumes
      // from a fresh timestamp without reinitializing the scroll instance.
      if (document.hidden) {
        stop();
      } else if (!frameId) {
        frameId = requestAnimationFrame(raf);
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    if (!document.hidden) frameId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      stop();
      lenis.destroy();
    };
  }, []);
}
