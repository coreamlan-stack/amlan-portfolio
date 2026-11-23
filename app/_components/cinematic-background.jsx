'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * One continuous video behind the homepage. The foreground and its GSAP
 * animations are deliberately left intact.
 */
export function CinematicBackground() {
  const videoRef = useRef(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotionAllowed(!query.matches);
    update();
    query.addEventListener?.('change', update);
    return () => query.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (motionAllowed && !paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [motionAllowed, paused]);

  return (
    <div aria-hidden='true' className='pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#09090b]'>
      <video
        ref={videoRef}
        autoPlay={motionAllowed && !paused}
        muted
        loop
        playsInline
        preload='metadata'
        poster='/cinematic-wings-poster.jpg'
        className='absolute inset-0 h-full w-full object-cover object-center opacity-75'
      >
        <source src='/cinematic-wings.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-black/80' />
    </div>
  );
}

export function CinematicVideoControl() {
  return null;
}
