'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';

// Mouse: spring-following cursor. Touch: a single, soft liquid lens that
// stretches as it follows the finger; a separate splash only on a genuine tap.
export function FluidPointer() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 145, damping: 22, mass: 0.65 });
  const springY = useSpring(y, { stiffness: 145, damping: 22, mass: 0.65 });
  const dotX = useSpring(x, { stiffness: 620, damping: 38, mass: 0.28 });
  const dotY = useSpring(y, { stiffness: 620, damping: 38, mass: 0.28 });
  const touchX = useMotionValue(-100);
  const touchY = useMotionValue(-100);
  const fluidX = useSpring(touchX, { stiffness: 235, damping: 27, mass: 0.5 });
  const fluidY = useSpring(touchY, { stiffness: 235, damping: 27, mass: 0.5 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [touchActive, setTouchActive] = useState(false);
  const [touchMoving, setTouchMoving] = useState(false);
  const [direction, setDirection] = useState(0);
  const [stretch, setStretch] = useState(1);
  const [ripples, setRipples] = useState([]);
  const touchStart = useRef(null);
  const lastMotion = useRef(null);
  const lastShapeUpdate = useRef(0);
  const timers = useRef(new Set());
  const rippleId = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
      if (reducedMotion.matches) {
        setRipples([]);
        setTouchActive(false);
      }
    };
    update();
    finePointer.addEventListener('change', update);
    reducedMotion.addEventListener('change', update);

    const addTap = event => {
      const id = ++rippleId.current;
      setRipples(previous => [...previous.slice(-2), { id, x: event.clientX, y: event.clientY }]);
      const timeout = window.setTimeout(() => {
        setRipples(previous => previous.filter(ripple => ripple.id !== id));
        timers.current.delete(timeout);
      }, 650);
      timers.current.add(timeout);
    };

    const onMove = event => {
      if (event.pointerType === 'touch') {
        const start = touchStart.current;
        if (!event.isPrimary || !start || start.id !== event.pointerId || reducedMotion.matches) return;
        const distance = Math.hypot(event.clientX - start.x, event.clientY - start.y);
        if (distance > 11) {
          start.moved = true;
          setTouchMoving(true);
        }
        if (!start.moved) return;
        touchX.set(event.clientX);
        touchY.set(event.clientY);
        const now = performance.now();
        const previous = lastMotion.current;
        if (previous && now - lastShapeUpdate.current > 35) {
          const dx = event.clientX - previous.x;
          const dy = event.clientY - previous.y;
          const elapsed = Math.max(now - previous.time, 8);
          const speed = Math.hypot(dx, dy) / elapsed;
          if (Math.hypot(dx, dy) > 2) {
            setDirection(Math.atan2(dy, dx) * 180 / Math.PI);
            setStretch(Math.min(1.8, 1 + speed * 0.32));
          }
          lastShapeUpdate.current = now;
        }
        lastMotion.current = { x: event.clientX, y: event.clientY, time: now };
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

    const onDown = event => {
      if (event.pointerType !== 'touch' || !event.isPrimary || reducedMotion.matches) return;
      touchStart.current = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        moved: false,
      };
      touchX.set(event.clientX);
      touchY.set(event.clientY);
      lastMotion.current = { x: event.clientX, y: event.clientY, time: performance.now() };
      setStretch(1);
      setTouchMoving(false);
      setTouchActive(true);
    };

    const finishTouch = (event, cancelled = false) => {
      const start = touchStart.current;
      if (!start || (event && start.id !== event.pointerId)) return;
      if (
        !cancelled &&
        !start.moved &&
        Math.hypot(event.clientX - start.x, event.clientY - start.y) < 11 &&
        !reducedMotion.matches
      ) addTap(event);
      touchStart.current = null;
      lastMotion.current = null;
      setTouchActive(false);
      setTouchMoving(false);
      setStretch(1);
    };

    const onUp = event => {
      if (event.pointerType === 'touch') finishTouch(event);
    };
    const onCancel = event => {
      if (event.pointerType === 'touch') finishTouch(event, true);
    };
    const onLeave = () => setVisible(false);
    const onBlur = () => {
      setTouchActive(false);
      setTouchMoving(false);
      touchStart.current = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointercancel', onCancel, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('blur', onBlur);
    const pendingTimers = timers.current;
    return () => {
      finePointer.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', onCancel);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('blur', onBlur);
      pendingTimers.forEach(window.clearTimeout);
      pendingTimers.clear();
    };
  }, [x, y, touchX, touchY]);

  return (
    <>
      {enabled && (
        <div aria-hidden='true' className='pointer-events-none fixed inset-0 z-[70] overflow-hidden'>
          <motion.div className='absolute left-0 top-0' style={{ x: springX, y: springY }}>
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
        <motion.div className='absolute left-0 top-0' style={{ x: fluidX, y: fluidY }}>
          <motion.div
            className='fluid-touch-lens'
            initial={false}
            animate={{
              opacity: touchActive && touchMoving ? 1 : 0,
              scaleX: touchActive ? stretch : 0.65,
              scaleY: touchActive ? 1 / Math.sqrt(stretch) : 0.65,
              rotate: direction,
            }}
            transition={{
              opacity: { duration: 0.22 },
              scaleX: { type: 'spring', stiffness: 210, damping: 25 },
              scaleY: { type: 'spring', stiffness: 210, damping: 25 },
              rotate: { duration: 0.12 },
            }}
          />
        </motion.div>
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
