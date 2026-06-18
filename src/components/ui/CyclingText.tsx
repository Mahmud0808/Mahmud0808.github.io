'use client';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import StaggeredText from './StaggeredText';

type Props = {
  items: string[];
  /** Time each item stays before swapping, in milliseconds. */
  interval?: number;
  /** Delay before the cycling animation begins, in milliseconds. */
  startDelay?: number;
  className?: string;
};

/**
 * Cycles through `items`, revealing each with a staggered blur animation.
 * Self-contained state so the parent does not re-render on every swap.
 *
 * The first item is shown statically (no entrance) until `startDelay`
 * elapses, then it blurs out and the cycle begins — so the very first
 * tagline also gets the vanish animation.
 */
const CyclingText = ({
  items,
  interval = 2800,
  startDelay = 0,
  className = '',
}: Props) => {
  const [index, setIndex] = useState(0);
  // Only the first paint skips the entrance reveal; every later mount animates.
  const animatedOnce = useRef(false);

  useEffect(() => {
    if (items.length <= 1) return;
    let intervalId: ReturnType<typeof setInterval>;
    const advance = () => {
      animatedOnce.current = true;
      setIndex((i) => (i + 1) % items.length);
    };
    const startId = setTimeout(() => {
      advance(); // first swap once the hero reveal is done
      intervalId = setInterval(advance, interval);
    }, startDelay);

    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [items.length, interval, startDelay]);

  return (
    <AnimatePresence mode="wait">
      <StaggeredText
        key={index}
        text={items[index]}
        segmentBy="chars"
        blur
        delay={40}
        duration={0.4}
        animateIn={animatedOnce.current}
        className={className}
      />
    </AnimatePresence>
  );
};

export default CyclingText;
