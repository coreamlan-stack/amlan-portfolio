'use client';

import { motion } from 'framer-motion';

import { OffcanvasBackdrop } from './back-drop';
import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';

export function OffcanvasBody({ onClose }) {
  return (
    <motion.div
      id='portfolio-menu'
      role='dialog'
      aria-modal='true'
      aria-label='Site navigation'
      className='fixed inset-0 z-40'
      variants={slideLeft}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <button
        type='button'
        className='absolute inset-0 cursor-default bg-black/55'
        onClick={onClose}
        aria-label='Close navigation'
        tabIndex={-1}
      />
      <motion.div
        className='absolute inset-y-0 right-0 w-full overflow-hidden bg-foreground text-background sm:w-[min(600px,100vw)]'
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 145, damping: 24, mass: 0.9 }}
      >
        <OffcanvasBackdrop />
        <div className='relative flex h-dvh flex-col justify-between gap-6 overflow-y-auto overscroll-contain px-8 pb-8 pt-24 sm:px-16 sm:pb-12 sm:pt-28 lg:px-24'>
          <OffcanvasLinks onClose={onClose} />
          <OffcanvasFooter />
        </div>
      </motion.div>
    </motion.div>
  );
}
