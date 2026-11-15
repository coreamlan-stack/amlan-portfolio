/** @type {import('framer-motion').Variants} */
export const reveal = {
  initial: { y: '115%', opacity: 0, rotate: 2 },
  open: i => ({
    y: '0%',
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      mass: 0.9,
      delay: Math.min(i * 0.024, 0.4),
    },
  }),
  closed: { y: '110%', opacity: 0 },
};
