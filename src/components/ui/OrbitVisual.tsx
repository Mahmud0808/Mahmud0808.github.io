'use client';
import { SkillType } from '@/lib/types';

import { Icon } from '@iconify/react';
import { CSSProperties } from 'react';

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

type Props = {
  inner: SkillType[];
  outer: SkillType[];
  centerIcon?: string;
};

const OrbitVisual = ({ inner, outer, centerIcon = 'tabler:code' }: Props) => {
  return (
    <div
      aria-hidden="true"
      className="relative grid h-[300px] w-[300px] scale-75 select-none place-items-center xs:scale-[0.85] sm:h-[340px] sm:w-[340px] sm:scale-100"
    >
      <Ring items={outer} radius={150} duration={55} />
      <Ring items={inner} radius={88} duration={38} reverse />
      <div className="core-pulse relative z-10 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-variant text-white shadow-xl">
        <Icon icon={centerIcon} width={30} height={30} />
      </div>
    </div>
  );
};

export default OrbitVisual;
