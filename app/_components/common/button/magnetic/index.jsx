'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useMagnetic } from '@/hooks';
import { cn } from '@/utils';

import { MagneticItem } from './index.styled';
import { magneticVariance } from './index.variance';

/** @param {import('react').ButtonHTMLAttributes<HTMLButtonElement> & { variant: 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outline'; size: 'default' | 'md' | 'lg' | 'xl';}} */
export function MagneticButton({
  children,
  className,
  variant,
  size,
  ...props
}) {
  /** @type {import('react').MutableRefObject<HTMLButtonElement>} */
  const elementRef = useRef(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size, className }))}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 16,
        stiffness: 180,
        mass: 0.45,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      {...props}
    >
      <MagneticItem>{children}</MagneticItem>
    </motion.button>
  );
}
