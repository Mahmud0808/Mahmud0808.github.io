'use client';
import {
  TestimonialType,
  testimonialsSection,
} from '@/lib/content/testimonials';

import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';
import SpotlightCard from '@/components/ui/SpotlightCard';

import { getSectionAnimation } from '@/styles/animations';

import Icon from '@/components/ui/Icon';
import { CSSProperties, useEffect, useState } from 'react';

const clientKey = (t: TestimonialType) => `${t.name}|${t.meta}`;

const ISO_REGION_CODES =
  'ad ae af ag ai al am ao ar as at au aw ax az ba bb bd be bf bg bh bi bj bl bm bn bo bq br bs bt bw by bz ca cc cd cf cg ch ci ck cl cm cn co cr cu cv cw cx cy cz de dj dk dm do dz ec ee eg eh er es et fi fj fk fm fo fr ga gb gd ge gf gg gh gi gl gm gn gp gq gr gt gu gw gy hk hn hr ht hu id ie il im in io iq ir is it je jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md me mf mg mh mk ml mm mn mo mp mq mr ms mt mu mv mw mx my mz na nc ne nf ng ni nl no np nr nu nz om pa pe pf pg ph pk pl pm pn pr ps pt pw py qa re ro rs ru rw sa sb sc sd se sg sh si sk sl sm sn so sr ss st sv sx sy sz tc td tg th tj tk tl tm tn to tr tt tv tw tz ua ug us uy uz va vc ve vg vi vn vu wf ws ye yt za zm zw'.split(
    ' '
  );

const aliases: Record<string, string> = {
  usa: 'us',
  america: 'us',
  uk: 'gb',
  england: 'gb',
  uae: 'ae',
  russia: 'ru',
  'south korea': 'kr',
  vietnam: 'vn',
};

let countryMap: Record<string, string> | null = null;

const getCountryCode = (name: string) => {
  if (!countryMap) {
    countryMap = { ...aliases };
    try {
      const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
      for (const code of ISO_REGION_CODES) {
        const label = displayNames.of(code.toUpperCase());
        if (label) countryMap[label.toLowerCase()] = code;
      }
    } catch {
      countryMap = { ...aliases };
    }
  }
  return countryMap[name.toLowerCase()];
};

const MetaLine = ({ meta }: { meta: string }) => {
  const parts = meta.split('·').map((part) => part.trim());
  const country = parts[parts.length - 1];
  const code = country ? getCountryCode(country) : undefined;

  return (
    <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[11px] text-text">
      {parts.slice(0, -1).join(' · ')}
      {parts.length > 1 && ' · '}
      {code && (
        <Icon
          icon={`circle-flags:${code}`}
          width={12}
          height={12}
          aria-hidden="true"
        />
      )}
      {country}
    </p>
  );
};

const hasAdjacentDuplicates = (list: TestimonialType[]) => {
  for (let i = 0; i < list.length; i++) {
    const next = list[(i + 1) % list.length];
    if (clientKey(list[i]) === clientKey(next)) return true;
  }
  return false;
};

const constrainedShuffle = (items: TestimonialType[]) => {
  for (let attempt = 0; attempt < 50; attempt++) {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    if (!hasAdjacentDuplicates(shuffled)) return shuffled;
  }
  return items;
};

const Stars = () => (
  <div className="flex gap-1 text-accent" role="img" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }, (_, i) => (
      <Icon key={i} icon="tabler:star-filled" width={13} height={13} />
    ))}
  </div>
);

const TestimonialCard = ({
  testimonial,
  isRepeatClient,
}: {
  testimonial: TestimonialType;
  isRepeatClient: boolean;
}) => (
  <SpotlightCard className="mr-4 w-60 shrink-0 rounded-xl border border-slate-900/10 bg-white/60 shadow-soft backdrop-blur-sm dark:border-slate-50/10 dark:bg-transparent dark:shadow-2xl sm:w-72">
    <figure className="flex h-full flex-col gap-2.5 p-4">
      <div className="flex items-center justify-between gap-2">
        <Stars />
        {isRepeatClient && (
          <span className="rounded-full border border-slate-900/10 px-2 py-0.5 font-mono text-[10px] capitalize text-text dark:border-slate-50/10">
            repeat client
          </span>
        )}
      </div>
      <blockquote className="line-clamp-3 text-sm leading-relaxed">
        <Icon
          icon="tabler:quote"
          width={16}
          height={16}
          aria-hidden="true"
          className="mr-1.5 inline-block scale-x-[-1] align-[-3px] text-accent/60"
        />
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-auto border-t border-slate-900/10 pt-2.5 dark:border-slate-50/10">
        <p className="text-sm font-medium text-dark-2">{testimonial.name}</p>
        <MetaLine meta={testimonial.meta} />
      </figcaption>
    </figure>
  </SpotlightCard>
);

const MarqueeRow = ({
  items,
  repeatClients,
  reverse = false,
}: {
  items: TestimonialType[];
  repeatClients: Set<string>;
  reverse?: boolean;
}) => (
  <div className="marquee -my-16">
    <div
      className={`marquee-track py-16 ${reverse ? 'reverse' : ''}`}
      style={{ '--marquee-duration': `${items.length * 9}s` } as CSSProperties}
    >
      {items.map((testimonial, i) => (
        <TestimonialCard
          key={`${clientKey(testimonial)}-${i}`}
          testimonial={testimonial}
          isRepeatClient={repeatClients.has(clientKey(testimonial))}
        />
      ))}
      <div aria-hidden="true" className="flex">
        {items.map((testimonial, i) => (
          <TestimonialCard
            key={`dup-${clientKey(testimonial)}-${i}`}
            testimonial={testimonial}
            isRepeatClient={repeatClients.has(clientKey(testimonial))}
          />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const { title, testimonials } = testimonialsSection;
  const [shuffled, setShuffled] = useState(testimonials);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const showDesktop = windowWidth === 0 || windowWidth >= md;
  const showMobile = windowWidth === 0 || windowWidth < md;

  useEffect(() => {
    setShuffled(constrainedShuffle(testimonials));
  }, [testimonials]);

  const counts = new Map<string, number>();
  testimonials.forEach((t) => {
    const key = clientKey(t);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  const repeatClients = new Set(
    Array.from(counts.entries())
      .filter(([, n]) => n > 1)
      .map(([key]) => key)
  );

  const half = Math.ceil(shuffled.length / 2);
  const rowOne = shuffled.slice(0, half);
  const rowTwo = shuffled.slice(half);

  return (
    <Wrapper id="testimonials" {...getSectionAnimation}>
      <div className="mb-12 text-center">
        <h2 className="heading-secondary !mb-0">{title}</h2>
      </div>

      {showDesktop && (
        <div className="hidden md:block">
          <MarqueeRow items={shuffled} repeatClients={repeatClients} />
        </div>
      )}

      {showMobile && (
        <div className="flex flex-col gap-4 md:hidden">
          <MarqueeRow items={rowOne} repeatClients={repeatClients} />
          <MarqueeRow items={rowTwo} repeatClients={repeatClients} reverse />
        </div>
      )}
    </Wrapper>
  );
};

export default Testimonials;
