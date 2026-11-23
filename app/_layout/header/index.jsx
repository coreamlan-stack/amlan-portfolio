'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { Globe, MoveDownRight } from 'lucide-react';

import { slideUp } from './variants';
import AeroShards from '../../_components/aero-shards';
import TechText from '../../_components/tech-text';

const MOBILE_QUERY = '(max-width: 767px)';

function getHeroQuality() {
  const mobile = window.matchMedia(MOBILE_QUERY).matches;
  const connection = navigator.connection || navigator.mozConnection;
  const cores = navigator.hardwareConcurrency || 8;
  const memory = navigator.deviceMemory || 8;
  const constrained =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    connection?.saveData ||
    cores <= 4 ||
    memory <= 4;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'mobile-lite';
  if (!mobile) return constrained ? 'desktop-lite' : 'desktop';
  return constrained ? 'mobile-lite' : 'mobile';
}

const SCENE_QUALITY = {
  desktop: {
    count: 900,
    dpr: 1.5,
    speed: 1,
    glow: 0.35,
    intro: true,
    interactive: true,
  },
  'desktop-lite': {
    count: 250,
    dpr: 1,
    speed: 0.15,
    glow: 0.25,
    intro: false,
    interactive: false,
  },
  mobile: {
    count: 320,
    dpr: 0.8,
    speed: 0.42,
    glow: 0.6,
    intro: false,
    interactive: false,
  },
  'mobile-lite': {
    count: 150,
    dpr: 0.6,
    speed: 0,
    glow: 0.5,
    intro: false,
    interactive: false,
  },
};

export function Header() {
  const [quality, setQuality] = useState(null);

  useEffect(() => {
    const updateQuality = () => setQuality(getHeroQuality());
    const mobileMedia = window.matchMedia(MOBILE_QUERY);
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    updateQuality();
    mobileMedia.addEventListener('change', updateQuality);
    motionMedia.addEventListener('change', updateQuality);
    return () => {
      mobileMedia.removeEventListener('change', updateQuality);
      motionMedia.removeEventListener('change', updateQuality);
    };
  }, []);

  const scene = quality ? SCENE_QUALITY[quality] : null;
  const isMobile = quality?.startsWith('mobile');

  return (
    <motion.header
      className='relative min-h-[100svh] overflow-hidden bg-background text-foreground'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {scene && (
        <div
          aria-hidden='true'
          className={`hero-scene absolute inset-0 opacity-75 ${
            isMobile ? 'scale-[1.08] blur-[1.25px]' : ''
          }`}
        >
          <AeroShards
            shardColor='#d8ff67'
            accentColor='#a3ff12'
            placement='full'
            material='glass'
            markers='plus'
            count={scene.count}
            depthOfField={isMobile ? 1 : 0.75}
            vignette={isMobile ? 0.5 : 0.3}
            mouseInteraction={scene.interactive}
            pulseOnClick={scene.interactive}
            holdToGather={scene.interactive}
            lightMode={false}
            shardSize={isMobile ? 1.15 : 1}
            spread={isMobile ? 1.05 : 1}
            twist={1}
            billow={1}
            speed={scene.speed}
            scale={isMobile ? 1.08 : 1}
            glow={scene.glow}
            grain={isMobile ? 0.03 : 0.06}
            intro={scene.intro}
            mouseStrength={scene.interactive ? 0.6 : 0}
            parallax={scene.interactive ? 0.5 : 0}
            paused={scene.speed === 0}
            dpr={scene.dpr}
          />
        </div>
      )}
      <div
        aria-hidden='true'
        className='absolute right-[-10vw] top-[13vh] h-[32vw] w-[32vw] rounded-full border border-primary/60 shadow-[0_0_120px_rgba(200,255,92,0.14)]'
      />
      <div className='relative h-full'>
        <div className='absolute inset-x-6 top-[58%] -translate-y-1/2 md:left-0 md:right-[18%] md:top-[60%] md:h-[clamp(9rem,25vw,22rem)] md:translate-x-[-3vw]'>
          <h1
            className='text-[clamp(2.7rem,11vw,3.85rem)] font-medium leading-[0.9] tracking-[-0.055em] md:hidden'
            aria-label='Core Amlan'
          >
            <span className='brand-wordmark block'>Core</span>
            <span className='brand-wordmark block'>Amlan</span>
          </h1>
          <h1 className='hidden h-full md:block' aria-label='Core Amlan'>
            <TechText
              text='CORE AMLAN'
              fontFamily='Obsidian Vector, Arial, sans-serif'
              fontWeight={400}
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
        <div className='absolute inset-x-6 top-[71%] md:left-auto md:right-36 md:top-[62%] md:translate-y-28'>
          <div className='flex items-center gap-4 md:gap-6'>
            <MoveDownRight
              className='shrink-0 text-primary'
              size={30}
              strokeWidth={1.6}
              aria-hidden='true'
            />
            <h4 className='text-[clamp(1.1rem,4.5vw,1.35rem)] leading-tight md:text-[clamp(1.35rem,2.5vw,2.75rem)]'>
              <span className='block'>Software Developer</span>
              <span className='block text-primary'>&amp; UI/UX Designer</span>
            </h4>
          </div>
        </div>
        <div className='absolute bottom-16 left-0 z-10 rounded-r-[2rem] bg-foreground px-6 py-4 text-background shadow-[0_14px_34px_rgba(0,0,0,0.2)] md:bottom-20 md:px-8 md:py-5'>
          <div className='flex items-center gap-5'>
            <p className='text-base font-medium leading-[1.12] tracking-[-0.035em] md:text-lg'>
              <span className='block'>Based in</span>
              <span className='block'>Tripura, India</span>
            </p>
            <span
              className='grid size-14 shrink-0 place-items-center rounded-full bg-background/15 text-background md:size-[4.5rem]'
              aria-hidden='true'
            >
              <Globe size={30} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
