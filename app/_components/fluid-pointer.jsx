'use client';

import { useEffect, useRef, useState } from 'react';

// A lightweight tap/click response only. No trailing cursor, touch lens,
// pointermove listeners, or continuously running animation springs.
export function FluidPointer() {
  const [ripples, setRipples] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const starts = new Map();
    const timeouts = new Set();

    const onDown = event => {
      if (!event.isPrimary || event.button !== 0) return;
      starts.set(event.pointerId, { x: event.clientX, y: event.clientY });
    };

    const clearStart = event => starts.delete(event.pointerId);

    const onUp = event => {
      const start = starts.get(event.pointerId);
      starts.delete(event.pointerId);
      if (!start || !event.isPrimary || reducedMotion.matches) return;
      // Ignore drags, scrolling gestures and swipes.
      if (Math.hypot(event.clientX - start.x, event.clientY - start.y) > 11) return;

      const id = ++nextId.current;
      setRipples(previous => [...previous.slice(-2), { id, x: event.clientX, y: event.clientY }]);
      const timeout = window.setTimeout(() => {
        setRipples(previous => previous.filter(ripple => ripple.id !== id));
        timeouts.delete(timeout);
      }, 650);
      timeouts.add(timeout);
    };

    const onBlur = () => starts.clear();
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointercancel', clearStart, { passive: true });
    window.addEventListener('blur', onBlur);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', clearStart);
      window.removeEventListener('blur', onBlur);
      timeouts.forEach(window.clearTimeout);
      timeouts.clear();
      starts.clear();
    };
  }, []);

  return (
    <div aria-hidden='true' className='pointer-events-none fixed inset-0 z-[70] overflow-hidden'>
      {ripples.map(ripple => (
        <span key={ripple.id} className='fluid-touch-ripple' style={{ left: ripple.x, top: ripple.y }} />
      ))}
    </div>
  );
}
