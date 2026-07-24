/**
 * Generates src/lib/utils/icon-bundle.json with the icon data for every
 * Iconify icon referenced in src/, so icons render offline instead of
 * being fetched from api.iconify.design at runtime.
 *
 * Run whenever icons are added or removed:
 *   node scripts/generate-icon-bundle.mjs
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'src');
const outFile = join(srcDir, 'lib', 'utils', 'icon-bundle.json');

// Icons referenced with dynamic names that the source scan cannot see.
// circle-flags codes come from testimonial countries (Testimonials.tsx).
const EXTRA_ICONS = [
  'circle-flags:ng',
  'circle-flags:hr',
  'circle-flags:sa',
  'circle-flags:us',
];

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return walk(full);
    return /\.(ts|tsx)$/.test(name) && !full.endsWith('icon-bundle.json')
      ? [full]
      : [];
  });

const iconPattern = /["'`]([a-z0-9]+(?:-[a-z0-9]+)*):([a-z0-9]+(?:-[a-z0-9]+)*)["'`]/g;

const found = new Set(EXTRA_ICONS);
for (const file of walk(srcDir)) {
  const text = readFileSync(file, 'utf8');
  for (const match of text.matchAll(iconPattern)) {
    found.add(`${match[1]}:${match[2]}`);
  }
}

const byPrefix = new Map();
for (const icon of found) {
  const [prefix, name] = icon.split(':');
  if (!byPrefix.has(prefix)) byPrefix.set(prefix, new Set());
  byPrefix.get(prefix).add(name);
}

const collections = [];
for (const [prefix, names] of [...byPrefix.entries()].sort()) {
  const url = `https://api.iconify.design/${prefix}.json?icons=${[...names]
    .sort()
    .join(',')}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`skip ${prefix}: HTTP ${res.status} (not an icon set?)`);
    continue;
  }
  const data = await res.json();
  if (data === 404 || !data.icons) {
    console.warn(`skip ${prefix}: not an Iconify collection`);
    continue;
  }
  const missing = [...names].filter(
    (n) => !data.icons[n] && !(data.aliases && data.aliases[n])
  );
  for (const name of missing) {
    console.warn(`missing icon: ${prefix}:${name}`);
  }
  if (Object.keys(data.icons).length === 0) continue;
  collections.push(data);
  console.log(
    `${prefix}: ${Object.keys(data.icons).length} icons` +
      (data.aliases ? ` + ${Object.keys(data.aliases).length} aliases` : '')
  );
}

writeFileSync(outFile, JSON.stringify(collections));
console.log(
  `\nwrote ${outFile} (${collections.length} collections, ${(statSync(outFile).size / 1024).toFixed(1)} KB)`
);
