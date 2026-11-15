'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-background text-foreground'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div
        aria-hidden='true'
        className='hero-grid absolute inset-0 opacity-80'
      />
      <div
        aria-hidden='true'
        className='absolute right-[-10vw] top-[13vh] h-[32vw] w-[32vw] rounded-full border border-primary/60 shadow-[0_0_120px_rgba(200,255,92,0.14)]'
      />
      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(5.25em,13vw)] leading-[0.86] sm:text-[max(7em,14vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Amlan Kumar Bhowmik <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>
        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>
            <h4 className='text-[clamp(1.35em,2.5vw,2.75em)]'>
              <span className='block'>Software Developer</span>
              <span className='block text-primary'>&amp; UI/UX Designer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
