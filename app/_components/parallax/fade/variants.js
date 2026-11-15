/** @type {import('framer-motion').Variants} */
export const fade = {
  initial: { opacity: 0, y: 34 },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 95, damping: 20, mass: 0.9 },
  },
  closed: { opacity: 0, y: 24 },
};
