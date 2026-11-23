'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * One responsive video behind the footer. The foreground and its GSAP
 * animations are deliberately left intact.
 */
export function CinematicBackground({ placement = 'footer' }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(true);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotionAllowed(!query.matches);
    update();
    query.addEventListener?.('change', update);
    return () => query.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (placement === 'page' || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { rootMargin: '200px' });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [placement]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let cancelled = false;
    if (motionAllowed && pageVisible && inView) {
      // A pending play() may settle after the tab becomes hidden or the
      // section leaves view. Never let that stale request keep decoding.
      const playback = video.play();
      playback?.then(() => {
        if (cancelled) video.pause();
      }).catch(() => {});
    } else {
      video.pause();
    }

    return () => {
      cancelled = true;
    };
  }, [motionAllowed, pageVisible, inView]);

  return (
    <div
      ref={containerRef}
      aria-hidden='true'
      className={`pointer-events-none inset-0 z-0 overflow-hidden bg-[#09090b] ${
        placement === 'page' ? 'fixed' : 'absolute'
      }`}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload='metadata'
        className={`absolute inset-0 size-full object-cover object-center ${
          placement === 'footer' ? 'opacity-80' : 'opacity-75'
        }`}
      >
        <source
          media='(max-width: 768px)'
          src='/wings-mobile-v8_540p.mp4'
          type='video/mp4'
        />
        <source
          media='(min-width: 1921px)'
          src='/wings-v8-2k.mp4'
          type='video/mp4'
        />
        <source src='/wings-v8_1080p.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-[#09090b]' />
    </div>
  );
}

export function CinematicVideoControl() {
  return null;
}
