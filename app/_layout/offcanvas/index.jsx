'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { OffcanvasBody, OffcanvasToggle } from './components';

export function Offcanvas() {
  const [isOpen, setOpen] = useState(false);
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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = event => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
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
