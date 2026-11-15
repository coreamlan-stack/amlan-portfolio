/** @type {import('framer-motion').Variants} */
export const slideLeft = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.28, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.28, ease: 'easeIn' },
  },
};
