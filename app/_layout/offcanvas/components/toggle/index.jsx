'use client';

import { motion } from 'framer-motion';

import { cn } from '@/utils';

import classes from './index.module.css';

/** @param {{ isOpen: boolean, handleOpen: (next: boolean) => void }} props */
export function OffcanvasToggle({ isOpen, handleOpen }) {
  return (
    <motion.button
      type='button'
      className={classes.wrapper}
      initial={false}
      animate={{ scale: isOpen ? 0.96 : 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls='portfolio-menu'
      onClick={() => handleOpen(!isOpen)}
    >
      <span className={cn(classes.burger, isOpen && classes.burgerActive)} aria-hidden='true' />
    </motion.button>
  );
}
