'use client';
import { Icon as OfflineIcon, addCollection } from '@iconify/react/dist/offline';

import collections from '@/lib/utils/icon-bundle.json';

import type { IconifyJSON } from '@iconify/react';
import type { ComponentProps } from 'react';

// Register every icon used by the site at module load, so <Icon /> renders
// synchronously (including during static export) instead of being fetched
// from api.iconify.design at runtime.
// Regenerate the bundle with: node scripts/generate-icon-bundle.mjs
for (const collection of collections) {
  addCollection(collection as unknown as IconifyJSON);
}

type IconProps = ComponentProps<typeof OfflineIcon>;

// A stable `id` keeps the SVG's internal ids (gradients, masks) identical
// between the server and client render; without it Iconify numbers them
// with a global counter and hydration mismatches.
const StableIcon = (props: IconProps) => {
  const id =
    typeof props.icon === 'string'
      ? `i-${props.icon.replace(/[^a-zA-Z0-9]/g, '_')}`
      : undefined;
  return <OfflineIcon id={id} {...props} />;
};

export default StableIcon;
