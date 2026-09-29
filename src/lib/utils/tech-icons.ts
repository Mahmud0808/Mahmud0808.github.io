import {
  siFigma,
  siFirebase,
  siFlutter,
  siJetpackcompose,
  siKotlin,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPrisma,
  siReact,
  siSpringboot,
  siSqlite,
  siSupabase,
  siTypescript,
} from 'simple-icons';

import { ADOBE_ILLUSTRATOR, ADOBE_PHOTOSHOP } from './adobe-icons';

type TechIcon = { path: string; viewBox: string };

const simple = (icon: { path: string }): TechIcon => ({
  path: icon.path,
  viewBox: '0 0 24 24',
});

const icons: Record<string, TechIcon> = {
  Kotlin: simple(siKotlin),
  Java: simple(siOpenjdk),
  'Jetpack Compose': simple(siJetpackcompose),
  'Compose Multiplatform': simple(siJetpackcompose),
  Flutter: simple(siFlutter),
  'React Native': simple(siReact),
  Firebase: simple(siFirebase),
  SQLite: simple(siSqlite),
  TypeScript: simple(siTypescript),
  'Next.js': simple(siNextdotjs),
  React: simple(siReact),
  'Node.js': simple(siNodedotjs),
  'Spring Boot': simple(siSpringboot),
  Supabase: simple(siSupabase),
  Prisma: simple(siPrisma),
  Figma: simple(siFigma),
  Illustrator: { path: ADOBE_ILLUSTRATOR, viewBox: '0 0 128 128' },
  Photoshop: { path: ADOBE_PHOTOSHOP, viewBox: '0 0 128 128' },
};

export const techIcon = (name: string): TechIcon | undefined => icons[name];
