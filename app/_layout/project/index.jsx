'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { projectOptions } from '@/data';
import { useProjectSlider } from '@/hooks';

import { ProjectSlider } from './slider';

export function Project() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } =
    useProjectSlider(containerRef);

  const firstSlider = projectOptions.first.map(({ label, tone }) => (
    <ProjectSlider key={label} label={label} tone={tone} />
  ));

  const secondSlider = projectOptions.second.map(({ label, tone }) => (
    <ProjectSlider key={label} label={label} tone={tone} />
  ));

  return (
    <section ref={containerRef} aria-label='Technology stack' className='relative z-10 mt-14'>
      <div className='mx-auto max-w-[1440px] px-6 pb-10 sm:px-12 lg:px-20'>
        <p className='text-xs uppercase tracking-[.24em] text-primary'>Tools & technologies</p>
        <h2 className='mt-3 max-w-2xl text-2xl tracking-tight sm:text-4xl'>From interfaces to the infrastructure behind them.</h2>
      </div>
      <div className='grid items-center'>
        <div className='bg-background'>
          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

        <motion.div
          className='w-screen bg-background'
          style={{
            height: transformY,
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>
    </section>
  );
}
