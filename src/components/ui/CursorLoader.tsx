'use client';
import { getBreakpointsWidth } from '@/lib/utils/helper';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Cursor = dynamic(() => import('./Cursor'), { ssr: false });

export default function CursorLoader() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hasFinePointer = window.matchMedia(
      '(pointer: fine) and (hover: hover)'
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const lg = getBreakpointsWidth('lg');
    const check = () =>
      setShow(
        hasFinePointer && !prefersReducedMotion && window.innerWidth >= lg
      );
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);
  return show ? <Cursor /> : null;
}
