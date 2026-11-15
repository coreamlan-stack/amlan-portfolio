'use client';

import { motion } from 'framer-motion';

import { FixedOverlay } from '@/components';

import { OffcanvasBackdrop } from './back-drop';
import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';

const MotionComponent = motion(FixedOverlay);

export function OffcanvasBody({ onClose }) {
  return (
    <MotionComponent
      id='portfolio-menu'
      className='z-40 overflow-hidden'
      variants={slideLeft}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <OffcanvasBackdrop />

      <div className='absolute right-0 top-0 h-[100dvh] w-full overflow-y-auto overscroll-contain bg-foreground text-background sm:w-[min(600px,100vw)]'>
        <div className='flex min-h-full flex-col justify-between gap-12 px-7 pb-8 pt-24 sm:p-16 lg:p-24'>
          <OffcanvasLinks onClose={onClose} />
          <OffcanvasFooter />
        </div>
      </div>
    </MotionComponent>
  );
}
