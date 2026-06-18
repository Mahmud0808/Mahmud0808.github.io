'use client';
import { motion, Variants } from 'framer-motion';
import { useMemo } from 'react';

type SegmentBy = 'chars' | 'words' | 'lines';
type StaggerDirection = 'forward' | 'reverse' | 'center';

type Props = {
  text: string;
  /** How to split the text for the staggered reveal. */
  segmentBy?: SegmentBy;
  /** Enable the blur effect in the reveal. */
  blur?: boolean;
  /** Delay between each segment, in milliseconds. */
  delay?: number;
  /** Duration of each segment animation, in seconds. */
  duration?: number;
  /** Delay before the first segment starts, in seconds. */
  startDelay?: number;
  /** Direction the stagger propagates. */
  staggerDirection?: StaggerDirection;
  className?: string;
};

const splitText = (text: string, by: SegmentBy): string[] => {
  if (by === 'chars') return Array.from(text);
  if (by === 'lines') return text.split('\n');
  return text.split(' ');
};

// Per-segment offset (in steps) based on stagger direction.
const offsetSteps = (i: number, count: number, dir: StaggerDirection) => {
  if (dir === 'reverse') return count - 1 - i;
  if (dir === 'center') return Math.abs(i - (count - 1) / 2);
  return i;
};

const StaggeredText = ({
  text,
  segmentBy = 'words',
  blur = true,
  delay = 80,
  duration = 0.6,
  startDelay = 0,
  staggerDirection = 'forward',
  className = '',
}: Props) => {
  const segments = useMemo(
    () => splitText(text, segmentBy),
    [text, segmentBy]
  );
  const step = delay / 1000; // ms -> s
  const blurAmount = blur ? 'blur(8px)' : 'blur(0px)';

  // `custom` carries each segment's offset so delays can be computed per item.
  const item: Variants = {
    hidden: { opacity: 0, y: '0.3em', filter: blurAmount },
    show: (steps: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay: startDelay + steps * step,
        ease: 'easeOut',
      },
    }),
    exit: (steps: number) => ({
      opacity: 0,
      y: '-0.3em',
      filter: blurAmount,
      transition: {
        duration: duration * 0.6,
        delay: steps * step * 0.5,
        ease: 'easeIn',
      },
    }),
  };

  return (
    <motion.span
      className={className}
      style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
      initial="hidden"
      animate="show"
      exit="exit"
      aria-label={text}
    >
      {segments.map((seg, i) => {
        const steps = offsetSteps(i, segments.length, staggerDirection);
        const content = seg === ' ' || seg === '' ? ' ' : seg;
        return (
          <motion.span
            key={`${i}-${seg}`}
            custom={steps}
            variants={item}
            aria-hidden
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity, filter',
            }}
          >
            {content}
            {segmentBy === 'words' && i < segments.length - 1 ? ' ' : ''}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default StaggeredText;
