'use client';

import { useEffect } from 'react';

const TRIGGERS = ['pointerdown', 'keydown', 'wheel', 'touchstart'] as const;

const RenderSections = () => {
  useEffect(() => {
    const root = document.documentElement;
    const renderAll = () => root.classList.add('sections-ready');

    const hash = decodeURIComponent(window.location.hash.slice(1));
    const target = hash ? document.getElementById(hash) : null;
    if (target) {
      renderAll();
      target.scrollIntoView({ behavior: 'instant' as ScrollBehavior });
      return;
    }

    const hasIdle = 'requestIdleCallback' in window;
    let handle = 0;
    const cleanup = () => {
      TRIGGERS.forEach((type) => window.removeEventListener(type, run));
      if (hasIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
    const run = () => {
      renderAll();
      cleanup();
    };

    handle = hasIdle
      ? window.requestIdleCallback(run, { timeout: 2500 })
      : window.setTimeout(run, 1500);
    TRIGGERS.forEach((type) =>
      window.addEventListener(type, run, { passive: true })
    );

    return cleanup;
  }, []);

  return null;
};

export default RenderSections;
