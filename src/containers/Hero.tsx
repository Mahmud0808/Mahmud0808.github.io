'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HERO_TITLE_DELAY } from '@/lib/utils/config';
import Image from 'next/image';

const Hero = () => {
  const { ctas, subtitle, title, tagline, description, specialText } =
    heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  const taglineSequence = tagline.flatMap((str) => [str, HERO_TITLE_DELAY]);

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 xs:gap-5"
    >
      <div className="relative col-span-2 z-10">
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <div
            className="absolute bottom-full right-full -mr-48 lg:-mr-72 -m-64 w-[530px] h-[530px] opacity-50 pointer-events-none bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/glassify/blur-cyan.png)',
            }}
          ></div>
        </motion.div>
        <div className="flex flex-col gap-6 xs:gap-5 mt-5">
          <div className="max-w-4xl font-bold tracking-tighter text-3xl md:text-5xl lg:text-7xl">
            <motion.p
              variants={slideUp({ delay: getAnimationDelay(0) })}
              initial="hidden"
              animate="show"
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-variant inline-block leading-[1.2]"
            >
              {subtitle}
            </motion.p>
            <motion.h1
              variants={slideUp({ delay: getAnimationDelay(1) })}
              initial="hidden"
              animate="show"
              className="text-slate-900 dark:text-slate-200 leading-[1.1]"
            >
              {title}
            </motion.h1>
            <motion.h1
              variants={slideUp({ delay: getAnimationDelay(2) })}
              initial="hidden"
              animate="show"
              className="leading-[1.2] mb-2 max-sm:mb-1"
            >
              <TypeAnimation
                sequence={taglineSequence}
                speed={50}
                cursor={false}
                repeat={Infinity}
                className="type"
                style={{
                  color: 'inherit',
                  fontWeight: 'bold',
                  display: 'inline-block',
                }}
              />
            </motion.h1>
          </div>
          <motion.p
            variants={slideUp({ delay: getAnimationDelay(3) })}
            initial="hidden"
            animate="show"
            className="max-w-3xl text-base md:text-lg text-justify"
            style={{ whiteSpace: 'pre-line' }}
          >
            {description}
          </motion.p>
          <motion.p
            variants={slideUp({ delay: getAnimationDelay(4) })}
            initial="hidden"
            animate="show"
            className="font-mono text-xs md:text-sm text-accent leading-relaxed"
          >
            {specialText}
          </motion.p>
          <div className="flex flex-row mt-2 md:mt-5">
            {ctas &&
              ctas.map((cta, index) => (
                <Button
                  key={index}
                  size="lg"
                  type="link"
                  variants={slideUp({ delay: getAnimationDelay(5) })}
                  initial="hidden"
                  animate="show"
                  href={cta?.url ?? '#'}
                  className={`mr-2 md:mr-3 ${
                    cta.hideInDesktop ? 'md:hidden' : ''
                  } ${cta.hideInMobile ? 'hidden md:block' : ''}`}
                  sameTab={cta?.sameTab}
                >
                  {cta.title}
                </Button>
              ))}
          </div>
        </div>
      </div>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <div className="relative lg:static xl:pl-10">
          <div className="lg:max-w-lg absolute inset-x-[-50vw] -top-60 -bottom-24 [mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-bottom-40 lg:mt-64 lg:mb-48">
            <svg
              aria-hidden="true"
              viewBox="0 0 668 1069"
              width="668"
              height="1069"
              fill="none"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"
            >
              <defs>
                <clipPath id=":R1l6:-clip-path">
                  <path
                    fill="#fff"
                    transform="rotate(-180 334 534.4)"
                    d="M0 0h668v1068.8H0z"
                  />
                </clipPath>
              </defs>
              <g opacity=".4" clipPath="url(#:R1l6:-clip-path)" strokeWidth="4">
                <path
                  opacity=".3"
                  d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <path
                  d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <path
                  d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="83.5"
                  cy="384.1"
                  r="10.438"
                  transform="rotate(-180 83.5 384.1)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="83.5"
                  cy="200.399"
                  r="10.438"
                  transform="rotate(-180 83.5 200.399)"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="83.5"
                  cy="81.412"
                  r="10.438"
                  transform="rotate(-180 83.5 81.412)"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="183.699"
                  cy="375.75"
                  r="10.438"
                  transform="rotate(-180 183.699 375.75)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="183.699"
                  cy="563.625"
                  r="10.438"
                  transform="rotate(-180 183.699 563.625)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="384.1"
                  cy="651.3"
                  r="10.438"
                  transform="rotate(-180 384.1 651.3)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="484.301"
                  cy="574.062"
                  r="10.438"
                  transform="rotate(-180 484.301 574.062)"
                  fill="#0EA5E9"
                  fillOpacity=".42"
                  stroke="#0EA5E9"
                />
                <circle
                  cx="384.1"
                  cy="749.412"
                  r="10.438"
                  transform="rotate(-180 384.1 749.412)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="384.1"
                  cy="1027.05"
                  r="10.438"
                  transform="rotate(-180 384.1 1027.05)"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="283.9"
                  cy="924.763"
                  r="10.438"
                  transform="rotate(-180 283.9 924.763)"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="183.699"
                  cy="870.487"
                  r="10.438"
                  transform="rotate(-180 183.699 870.487)"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="283.9"
                  cy="738.975"
                  r="10.438"
                  transform="rotate(-180 283.9 738.975)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="83.5"
                  cy="695.138"
                  r="10.438"
                  transform="rotate(-180 83.5 695.138)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="83.5"
                  cy="484.3"
                  r="10.438"
                  transform="rotate(-180 83.5 484.3)"
                  fill="#0EA5E9"
                  fillOpacity=".42"
                  stroke="#0EA5E9"
                />
                <circle
                  cx="484.301"
                  cy="432.112"
                  r="10.438"
                  transform="rotate(-180 484.301 432.112)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="584.5"
                  cy="432.112"
                  r="10.438"
                  transform="rotate(-180 584.5 432.112)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="584.5"
                  cy="642.95"
                  r="10.438"
                  transform="rotate(-180 584.5 642.95)"
                  fill="#CED2D9"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="484.301"
                  cy="851.699"
                  r="10.438"
                  transform="rotate(-180 484.301 851.699)"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
                <circle
                  cx="384.1"
                  cy="256.763"
                  r="10.438"
                  transform="rotate(-180 384.1 256.763)"
                  className="stroke-[#A4AAB3] dark:stroke-[#334155]"
                />
              </g>
            </svg>
          </div>
          <div className="relative">
            <div
              className="absolute -top-96 -right-72 w-[530px] h-[530px] opacity-80 dark:opacity-100 pointer-events-none bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/glassify/blur-cyan.png)',
              }}
            ></div>
            <div
              className="absolute -bottom-8 -right-52 w-[567px] h-[567px] opacity-80 dark:opacity-100 pointer-events-none bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url(/images/glassify/blur-indigo.png)',
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Hero;
