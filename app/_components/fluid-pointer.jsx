'use client';

import { useEffect, useRef, useState } from 'react';

import { useMotionValue, useSpring, motion } from 'framer-motion';

// One pointer system for desktop and mobile: a spring-following halo on mice,
// and brief contact ripples on touch screens (no fake cursor blocking gestures).
export function FluidPointer() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 145, damping: 22, mass: 0.65 });
  const springY = useSpring(y, { stiffness: 145, damping: 22, mass: 0.65 });
  const dotX = useSpring(x, { stiffness: 620, damping: 38, mass: 0.28 });
  const dotY = useSpring(y, { stiffness: 620, damping: 38, mass: 0.28 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [ripples, setRipples] = useState([]);
  const timers = useRef(new Set());
  const rippleId = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
      if (reducedMotion.matches) setRipples([]);
    };
    update();
    finePointer.addEventListener('change', update);
    reducedMotion.addEventListener('change', update);

    const onMove = event => {
      if (event.pointerType !== 'mouse' || !finePointer.matches || reducedMotion.matches) return;
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest('a, button, [role="button"], input, textarea, select'));
      setInteractive(previous => previous === isInteractive ? previous : isInteractive);
    };
    const onLeave = () => setVisible(false);
    const onDown = event => {
      if (event.pointerType === 'mouse' || reducedMotion.matches) return;
      const id = ++rippleId.current;
      setRipples(previous => [...previous.slice(-3), { id, x: event.clientX, y: event.clientY }]);
      const timeout = window.setTimeout(() => {
        setRipples(previous => previous.filter(ripple => ripple.id !== id));
        timers.current.delete(timeout);
      }, 650);
      timers.current.add(timeout);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    const pendingTimers = timers.current;
    return () => {
      finePointer.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerdown', onDown);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      pendingTimers.forEach(window.clearTimeout);
      pendingTimers.clear();
    };
  }, [x, y]);

  return (
    <>
      {enabled && (
        <div aria-hidden='true' className='pointer-events-none fixed inset-0 z-[70] overflow-hidden'>
          <motion.div
            className='absolute left-0 top-0'
            style={{ x: springX, y: springY }}
          >
            <motion.div
              className='fluid-cursor-halo'
              initial={false}
              animate={{ scale: interactive ? 1.7 : 1, opacity: visible ? 1 : 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            />
          </motion.div>
          <motion.div className='absolute left-0 top-0' style={{ x: dotX, y: dotY }}>
            <motion.div
              className='fluid-cursor-dot'
              initial={false}
              animate={{ opacity: visible ? 1 : 0, scale: interactive ? 0.6 : 1 }}
              transition={{ duration: 0.18 }}
            />
          </motion.div>
        </div>
      )}
      <div aria-hidden='true' className='pointer-events-none fixed inset-0 z-[70] overflow-hidden'>
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className='fluid-touch-ripple'
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </div>
    </>
  );
}
