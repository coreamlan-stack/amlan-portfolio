/** @type {import('framer-motion').Variants} */
export const slideLeft = {
  initial: { x: '110%', opacity: 0.92 },
  enter: {
    x: '0%',
    opacity: 1,
    transition: { type: 'spring', stiffness: 115, damping: 22, mass: 1 },
  },
  exit: {
    x: '110%',
    opacity: 0.95,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
