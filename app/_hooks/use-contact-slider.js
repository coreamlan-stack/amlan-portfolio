'use client';

import { useScroll, useSpring, useTransform } from 'framer-motion';

/** @param {import('react').MutableRefObject<HTMLElement>} element */
export function useContactSlider(element) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    mass: 0.65,
  });
  const transformX = useTransform(smoothProgress, [0, 1], [-28, 28]);
  const transformY = useTransform(smoothProgress, [0, 1], [-35, 35]);

  return { transformX, transformY };
}
