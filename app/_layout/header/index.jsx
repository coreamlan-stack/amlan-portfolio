'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';
import AeroShards from '../../_components/aero-shards';
import TechText from '../../_components/tech-text';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-background text-foreground'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div aria-hidden='true' className='absolute inset-0 opacity-75'>
        <AeroShards
          shardColor='#d8ff67'
          accentColor='#a3ff12'
          placement='full'
          material='glass'
          markers='plus'
          count={900}
          depthOfField={0.75}
          vignette={0.3}
          mouseInteraction
          pulseOnClick
          holdToGather
          lightMode={false}
          shardSize={1}
          spread={1}
          twist={1}
          billow={1}
          speed={1}
          scale={1}
          glow={0.35}
          grain={0.06}
          intro
          mouseStrength={0.6}
          parallax={0.5}
          paused={false}
          dpr={1.5}
        />
      </div>
      <div
        aria-hidden='true'
        className='hero-grid absolute inset-0 opacity-70'
      />
      <div
        aria-hidden='true'
        className='absolute right-[-10vw] top-[13vh] h-[32vw] w-[32vw] rounded-full border border-primary/60 shadow-[0_0_120px_rgba(200,255,92,0.14)]'
      />
      <div className='relative h-full'>
        <div className='absolute inset-x-0 top-[53%] h-[clamp(9rem,25vw,22rem)] -translate-y-1/2'>
          <h1 className='h-full' aria-label='Amlan Kumar Bhowmik'>
            <TechText
              text='Amlan Kumar Bhowmik'
              fontWeight={600}
              fontSize={150}
              letterSpacing={-0.05}
              reveal='letter'
              dashLength={4}
              dashGap={2}
              strokeWidth={1.5}
              reach={200}
              softness={0.7}
              bounce={0.4}
              speed={1}
              draggable={false}
              color='currentColor'
              accentColor='currentColor'
            />
          </h1>
        </div>
        {false && (
          <h1 className='text-[clamp(4rem,9vw,10rem)] leading-[0.9]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Amlan Kumar Bhowmik <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        )}
        <div className='absolute right-8 top-[55%] md:right-36 md:top-[62%]'>
          <div>
            <div className='mb-4 md:mb-12'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>
            <h4 className='text-[clamp(1.35rem,2.5vw,2.75rem)] leading-tight'>
              <span className='block'>Software Developer</span>
              <span className='block text-primary'>&amp; UI/UX Designer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
