'use client';

import { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';

export function useLenis() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis = null;
    let frameId = 0;

    const raf = time => {
      frameId = 0;
      if (!lenis || document.hidden) return;
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const onVisibility = () => {
      if (document.hidden || !lenis) {
        stop();
      } else if (!frameId) {
        frameId = requestAnimationFrame(raf);
      }
    };

    const onPreference = () => {
      if (preference.matches) {
        stop();
        lenis?.destroy();
        lenis = null;
        return;
      }

      if (!lenis) {
        // Preserve existing scroll physics on desktop and touch.
        lenis = new Lenis({
          duration: 1.15,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: true,
          syncTouchLerp: 0.075,
          touchInertiaMultiplier: 18,
        });
      }
      onVisibility();
    };

    document.addEventListener('visibilitychange', onVisibility);
    if (preference.addEventListener) {
      preference.addEventListener('change', onPreference);
    } else {
      preference.addListener(onPreference);
    }
    onPreference();

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      if (preference.removeEventListener) {
        preference.removeEventListener('change', onPreference);
      } else {
        preference.removeListener(onPreference);
      }
      stop();
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}
