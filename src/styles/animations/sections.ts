import { slideUp } from '.';
import { Variants } from 'framer-motion';

export const sectionVariants = slideUp({
  delay: 0.15,
  duration: 0.65,
  offset: 30,
});

export const getSectionAnimation = {
  variants: sectionVariants,
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true },
};

export const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.65,
      delay: 0.15 + 0.1 * i,
    },
  }),
};
