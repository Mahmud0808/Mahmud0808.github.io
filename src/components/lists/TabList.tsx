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

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [sliderRect, setSliderRect] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const btn = buttonRefs.current[activeExperience];
    if (!btn) return;

    const update = () => {
      setSliderRect({
        top: btn.offsetTop,
        left: btn.offsetLeft,
        width: btn.offsetWidth,
        height: btn.offsetHeight,
      });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(btn);
    if (btn.parentElement) ro.observe(btn.parentElement);
    return () => ro.disconnect();
  }, [activeExperience, windowWidth]);

  const sliderStyle =
    windowWidth <= sm
      ? {
          left: sliderRect.left,
          width: sliderRect.width,
        }
      : {
          top: sliderRect.top,
          height: sliderRect.height,
        };

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
      <div className="font-mono text-xs sm:text-sm flex justify-start overflow-x-auto sm:overflow-visible sm:min-w-[180px] no-scrollbar">
        <div className="relative flex justify-start sm:flex-col w-max sm:w-full">
          {experiences.map(({ company }, i) => (
            <button
              key={i}
              ref={(el) => {
                buttonRefs.current[i] = el;
              }}
              className={`min-h-[2.5rem] min-w-[120px] py-2 px-4 whitespace-nowrap sm:whitespace-normal sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
                i === activeExperience ? 'text-accent bg-accent-light' : ''
              }`}
              onClick={() => setActiveExperience(i)}
            >
              {company}
            </button>
          ))}
          {/* Slider */}
          <div className="absolute h-0.5 w-full sm:w-1 sm:h-full rounded-full md:rounded-none bottom-0 sm:inset-y-0 left-0 bg-dark-3"></div>
          <div
            style={sliderStyle}
            className="absolute h-0.5 sm:h-auto sm:w-1 rounded-full md:rounded-none bg-accent bottom-0 sm:bottom-auto left-0 transition-all duration-250 delay-100 in-scroll"
          ></div>
        </div>
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
