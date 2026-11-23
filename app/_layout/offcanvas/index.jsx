'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { OffcanvasBody, OffcanvasToggle } from './components';

export function Offcanvas() {
  const [isOpen, setOpen] = useState(false);
  const previousFocus = useRef(null);
  const [showToggle, setShowToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // The home hero provides its own desktop navigation. Show the compact
    // menu only after that full-screen section; keep it visible on subpages.
    if (pathname !== '/') {
      setShowToggle(true);
      return undefined;
    }

    const updateToggleVisibility = () => {
      setShowToggle(window.scrollY >= window.innerHeight * 0.9);
    };

    updateToggleVisibility();
    window.addEventListener('scroll', updateToggleVisibility, {
      passive: true,
    });
    window.addEventListener('resize', updateToggleVisibility);
    return () => {
      window.removeEventListener('scroll', updateToggleVisibility);
      window.removeEventListener('resize', updateToggleVisibility);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    previousFocus.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const menu = document.getElementById('portfolio-menu');
    const getFocusable = () => Array.from(menu?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') || []).filter(el => el.getClientRects().length);
    const first = getFocusable()[0];
    first?.focus();
    document.body.style.overflow = 'hidden';
    const onKeyDown = event => {
      if (event.key === 'Escape') { setOpen(false); return; }
      if (event.key !== 'Tab') return;
      const items = getFocusable();
      if (!items.length) { event.preventDefault(); return; }
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const focusInside = menu?.contains(document.activeElement);
      if (event.shiftKey && (!focusInside || document.activeElement === firstItem)) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && (!focusInside || document.activeElement === lastItem)) {
        event.preventDefault();
        firstItem.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus?.();
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isOpen ? <OffcanvasBody onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
      {(showToggle || isOpen) && (
        <OffcanvasToggle isOpen={isOpen} handleOpen={setOpen} />
      )}
    </>
  );
}
