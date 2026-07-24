'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
};

const formatNumber = (n: number) => n.toLocaleString('en-US');

const CountUp = ({ to, suffix = '', duration = 1400 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        const prefersReduced = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReduced) {
          setValue(to);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(to * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  const final = `${formatNumber(to)}${suffix}`;

  return (
    <span
      ref={ref}
      aria-label={final}
      className="relative inline-block tabular-nums"
    >
      <span aria-hidden="true" className="invisible">
        {final}
      </span>
      <span aria-hidden="true" className="absolute inset-y-0 right-0">
        {formatNumber(value)}
        {suffix}
      </span>
    </span>
  );
};

export default CountUp;
