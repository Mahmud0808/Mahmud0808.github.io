'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Cursor = dynamic(() => import('./Cursor'), { ssr: false });

export default function CursorLoader() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(window.matchMedia('(pointer: fine) and (hover: hover)').matches);
  }, []);
  return show ? <Cursor /> : null;
}
