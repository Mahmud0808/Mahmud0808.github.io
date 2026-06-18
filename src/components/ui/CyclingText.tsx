'use client';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
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
 * Until `startDelay` elapses (i.e. the hero reveal finishes) the first item
 * is shown statically, then the staggered animation kicks in.
 */
const CyclingText = ({
  items,
  interval = 2800,
  startDelay = 0,
  className = '',
}: Props) => {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

  // Hold the first item static until the hero reveal is done.
  useEffect(() => {
    const id = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(id);
  }, [startDelay]);

  // Start cycling only after the animation has begun.
  useEffect(() => {
    if (!started || items.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      interval
    );
    return () => clearInterval(id);
  }, [started, items.length, interval]);

  if (!started) {
    return (
      <span className={className} style={{ display: 'inline-block' }}>
        {items[0]}
      </span>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <StaggeredText
        key={index}
        text={items[index]}
        segmentBy="chars"
        blur
        delay={40}
        duration={0.4}
        className={className}
      />
    </AnimatePresence>
  );
};

export default CyclingText;
