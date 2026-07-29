'use client';
import { SkillType } from '@/lib/types';

import Icon from '@/components/ui/Icon';
import { CSSProperties, ReactNode } from 'react';

type RingProps = {
  items: SkillType[];
  radius: number;
  duration: number;
  reverse?: boolean;
};

const Ring = ({ items, radius, duration, reverse = false }: RingProps) => {
  const size = radius * 2;

  return (
    <>
      <div
        className="absolute rounded-full border border-dashed border-slate-400/40 dark:border-slate-500/30"
        style={{ width: size, height: size }}
      />
      <div
        className={`orbit-spin absolute ${reverse ? 'reverse' : ''}`}
        style={
          {
            width: size,
            height: size,
            '--orbit-duration': `${duration}s`,
          } as CSSProperties
        }
      >
        {items.map(({ name, icon }, i) => {
          const angle = (360 / items.length) * i;
          return (
            <div
              key={name}
              className="absolute left-1/2 top-1/2 -ml-5 -mt-5"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
              }}
            >
              <div
                className={`orbit-spin ${reverse ? '' : 'reverse'}`}
                style={{ '--orbit-duration': `${duration}s` } as CSSProperties}
              >
                <div
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-bg-secondary shadow-md dark:border-slate-50/10"
                  title={name}
                >
                  <Icon icon={icon} width={22} height={22} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const Core = ({ children }: { children: ReactNode }) => (
  <div className="core-pulse relative z-10 grid place-items-center rounded-full">
    <span className="pointer-events-none absolute -inset-6 rounded-full bg-accent/12 blur-2xl" />
    <div className="relative grid h-[84px] w-[84px] place-items-center rounded-full border border-slate-900/10 bg-bg-secondary/80 shadow-[0_8px_18px_-10px_rgba(0,0,0,.35)] backdrop-blur-sm dark:border-slate-50/10">
      {children}
    </div>
  </div>
);

type Props = {
  inner: SkillType[];
  outer: SkillType[];
  variant?: 'orbit' | 'device';
};

const OrbitVisual = ({ inner, outer, variant = 'orbit' }: Props) => {
  return (
    <div
      aria-hidden="true"
      className="relative grid h-[300px] w-[300px] scale-75 select-none place-items-center xs:scale-[0.85] sm:h-[340px] sm:w-[340px] sm:scale-100"
    >
      <Ring items={outer} radius={150} duration={55} />
      <Ring items={inner} radius={88} duration={38} reverse />

      <Core>
        {variant === 'device' ? (
          <svg
            viewBox="0 0 48 48"
            className="relative h-[40px] w-[40px] text-accent"
          >
            <defs>
              <linearGradient id="orbit-tile" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-accent)" />
                <stop offset="100%" stopColor="var(--color-accent-variant)" />
              </linearGradient>
            </defs>
            <rect
              x="6"
              y="6"
              width="16"
              height="16"
              rx="5.5"
              fill="currentColor"
              opacity=".28"
            />
            <rect
              x="26"
              y="6"
              width="16"
              height="16"
              rx="5.5"
              fill="currentColor"
              opacity=".45"
            />
            <rect
              x="6"
              y="26"
              width="16"
              height="16"
              rx="5.5"
              fill="currentColor"
              opacity=".45"
            />
            <rect
              x="26"
              y="26"
              width="16"
              height="16"
              rx="5.5"
              fill="url(#orbit-tile)"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 48 48"
            className="relative h-[40px] w-[40px] text-accent"
          >
            <defs>
              <linearGradient id="orbit-slab" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-accent)" />
                <stop offset="100%" stopColor="var(--color-accent-variant)" />
              </linearGradient>
            </defs>
            <g fill="currentColor">
              <path d="M24 4 44 13 24 22 4 13z" opacity=".3" />
              <path d="M24 17 44 26 24 35 4 26z" opacity=".5" />
            </g>
            <path d="M24 30 44 39 24 48 4 39z" fill="url(#orbit-slab)" />
          </svg>
        )}
      </Core>
    </div>
  );
};

export default OrbitVisual;
