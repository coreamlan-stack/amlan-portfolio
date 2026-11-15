'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';

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
  const lastTouchTrail = useRef(0);
  const touchStart = useRef(null);
  const lastTouchPoint = useRef(null);

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

    const addEffect = (point, type = 'tap', angle = 0) => {
      const id = ++rippleId.current;
      setRipples(previous => [
        ...previous.slice(-9),
        { id, x: point.clientX, y: point.clientY, type, angle },
      ]);
      const timeout = window.setTimeout(() => {
        setRipples(previous => previous.filter(effect => effect.id !== id));
        timers.current.delete(timeout);
      }, type === 'trail' ? 380 : 680);
      timers.current.add(timeout);
    };

    const onMove = event => {
      if (event.pointerType === 'touch' && event.isPrimary && !reducedMotion.matches) {
        const start = touchStart.current;
        if (!start || start.id !== event.pointerId) return;
        const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y);
        if (distance > 12) start.moved = true;
        if (!start.moved) return;
        const now = performance.now();
        if (now - lastTouchTrail.current >= 55) {
          const last = lastTouchPoint.current || { x: start.x, y: start.y };
          const angle = Math.atan2(event.clientY - last.y, event.clientX - last.x) * 180 / Math.PI;
          lastTouchTrail.current = now;
          addEffect(event, 'trail', angle);
          lastTouchPoint.current = { x: event.clientX, y: event.clientY };
        }
        return;
      }
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
      if (event.pointerType !== 'touch' || !event.isPrimary || reducedMotion.matches) return;
      touchStart.current = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        moved: false,
      };
      lastTouchPoint.current = { x: event.clientX, y: event.clientY };
      lastTouchTrail.current = performance.now();
    };
    const onUp = event => {
      const start = touchStart.current;
      if (event.pointerType !== 'touch' || !start || start.id !== event.pointerId) return;
      if (!start.moved && Math.hypot(event.clientX - start.x, event.clientY - start.y) < 12 && !reducedMotion.matches) {
        addEffect(event, 'tap');
      }
      touchStart.current = null;
      lastTouchPoint.current = null;
    };
    const onCancel = () => {
      touchStart.current = null;
      lastTouchPoint.current = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointercancel', onCancel, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    const pendingTimers = timers.current;
    return () => {
      finePointer.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', onCancel);
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
            className={ripple.type === 'trail' ? 'fluid-touch-streak' : 'fluid-touch-ripple'}
            style={{ left: ripple.x, top: ripple.y, '--trail-angle': `${ripple.angle}deg` }}
          />
        ))}
      </div>
    </>
  );
}
