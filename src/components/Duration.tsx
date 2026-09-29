'use client';

import { useSyncExternalStore } from 'react';

import { formatDuration } from '@/lib/utils/helper';

const subscribe = () => () => {};

const Duration = ({ start, initial }: { start: string; initial: string }) => {
  const text = useSyncExternalStore(
    subscribe,
    () => formatDuration(start),
    () => initial
  );

  return <>{text}</>;
};

export default Duration;
