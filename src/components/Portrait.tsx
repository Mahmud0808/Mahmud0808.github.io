'use client';

import { useEffect, useState } from 'react';

import small from '@/assets/_generated/p-320.webp';
import large from '@/assets/_generated/p-640.webp';

const Portrait = ({ label }: { label: string }) => {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let objectUrl: string | null = null;
    let cancelled = false;
    const source = window.devicePixelRatio > 1 ? large.src : small.src;

    fetch(source, { priority: 'high' } as RequestInit)
      .then((response) => response.blob())
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setUrl(objectUrl);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <div
      className="portrait-img"
      role="img"
      aria-label={label}
      data-ready={url ? 'true' : 'false'}
      style={url ? { backgroundImage: `url(${url})` } : undefined}
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    />
  );
};

export default Portrait;
