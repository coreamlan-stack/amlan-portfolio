'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { CinematicBackground } from '@/app/_components/cinematic-background';
import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='relative isolate overflow-hidden bg-[#10161b] text-[#f5f3eb]'
      style={{ y: transformY }}
    >
      <CinematicBackground />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_76%_28%,rgba(198,255,83,0.12),transparent_19rem),linear-gradient(90deg,rgba(6,9,11,0.9)_0%,rgba(6,9,11,0.74)_48%,rgba(6,9,11,0.58)_100%)]'
      />
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent'
      />
      <div
        className='relative z-10'
        style={{ paddingBlock: 'clamp(3.25rem, 9vh, 9rem)' }}
      >
        <UserDetails transformX={transformX} />
        <SocialInfo />
      </div>
    </motion.footer>
  );
}
