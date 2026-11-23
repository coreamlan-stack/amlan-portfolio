'use client';

import { motion } from 'framer-motion';

import { CinematicBackground } from '@/app/_components/cinematic-background';

import { SocialInfo, UserDetails } from './components';

export function Contact() {
  return (
    <motion.footer className='relative isolate min-h-svh overflow-hidden bg-[#10161b] text-[#f5f3eb]'>
      <CinematicBackground />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_78%_30%,rgba(198,255,83,0.12),transparent_22rem),linear-gradient(180deg,rgba(6,9,11,0.58)_0%,rgba(6,9,11,0.36)_45%,rgba(6,9,11,0.58)_78%,rgb(6,9,11)_100%)]'
      />
      <div
        className='relative z-10 flex min-h-svh flex-col'
        style={{
          padding: 'clamp(6rem, 16vh, 11rem) 0 clamp(2.5rem, 5vh, 4.5rem)',
        }}
      >
        <UserDetails />
        <div className='mt-auto'>
          <SocialInfo />
        </div>
      </div>
    </motion.footer>
  );
}
