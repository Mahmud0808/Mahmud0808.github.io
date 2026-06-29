'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { ExperienceType } from '@/lib/types';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

import { Link, ListItem } from '@/components';

import { AnimatePresence, m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  experiences: ExperienceType[];
};

const TabList = ({ experiences }: Props) => {
  const [activeExperience, setActiveExperience] = useState(0);
  const windowWidth = useWindowWidth();

  const { role, company, companyUrl, started, upto, tasks } =
    experiences[activeExperience];

  const sm = getBreakpointsWidth('sm');

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: `calc(${activeExperience}*120px)`,
        }
      : {
          top: `calc(${activeExperience}*2.5rem)`,
        };

  const sliderBackgroundStyle =
    windowWidth <= sm
      ? {
          width: `calc(${experiences.length}*120px)`,
        }
      : {};

  const measureRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    setContentHeight(el.offsetHeight);

    const ro = new ResizeObserver(() => {
      setContentHeight(el.offsetHeight);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10">
      {/* Sidebar */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px] no-scrollbar">
        {experiences.map(({ company }, i) => (
          <button
            key={i}
            className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
              i === activeExperience ? 'text-accent bg-accent-light' : ''
            }`}
            onClick={() => setActiveExperience(i)}
          >
            {company}
          </button>
        ))}
        {/* Slider */}
        <div
          style={sliderBackgroundStyle}
          className="absolute h-0.5 w-full sm:w-1 sm:h-full rounded-full md:rounded-none bottom-0 sm:inset-0 left-0 max-sm:right-0 bg-dark-3"
        ></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[120px] sm:w-1 sm:h-10 rounded-full md:rounded-none bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
        ></div>
      </div>

      <m.div
        animate={contentHeight !== undefined ? { height: contentHeight } : {}}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div ref={measureRef} className="p-1">
          <AnimatePresence mode="popLayout" initial={false}>
            <m.div
              key={activeExperience}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              className="space-y-5"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-medium capitalize text-dark-2">
                  {role}{' '}
                  <Link href={companyUrl} target="_blank" className="text-accent">
                    @{company}
                  </Link>
                </h3>
                <p className="font-mono text-xs capitalize">
                  <>
                    {started} - {upto}
                  </>
                </p>
              </div>

              <ul className="space-y-2">
                {tasks.map((task, i) => (
                  <ListItem key={i} multiLine>{task}</ListItem>
                ))}
              </ul>
            </m.div>
          </AnimatePresence>
        </div>
      </m.div>
    </div>
  );
};

export default TabList;
