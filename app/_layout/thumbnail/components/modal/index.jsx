'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(function ThumbnailModal(
  { variants, active, index, ...props },
  ref,
) {
  return (
    <MotionComponent
      ref={ref}
      className='pointer-events-none fixed left-1/2 top-1/2 size-80 overflow-hidden rounded-xl border border-primary/40 bg-card shadow-2xl shadow-black/50'
      variants={variants}
      initial='initial'
      animate={active ? 'enter' : 'closed'}
      {...props}
    >
      <div
        className='relative size-full'
        style={{
          top: `${index * -100}%`,
          transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        {thumbnailOptions.map(({ title, accent }, itemIndex) => (
          <Center
            key={title}
            className={`size-full bg-gradient-to-br ${accent}`}
          >
            <div className='flex h-[68%] w-[68%] flex-col justify-between border border-white/60 p-5 text-zinc-950'>
              <span className='text-xs uppercase tracking-[0.2em]'>
                0{itemIndex + 1}
              </span>
              <span className='text-2xl leading-none'>{title}</span>
            </div>
          </Center>
        ))}
      </div>
    </MotionComponent>
  );
});
