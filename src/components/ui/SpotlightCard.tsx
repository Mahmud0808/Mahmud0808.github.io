'use client';
import { cn } from '@/lib/utils/helper';

import { MouseEvent, ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const SpotlightCard = ({ children, className = '' }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn('spotlight-card', className)}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
