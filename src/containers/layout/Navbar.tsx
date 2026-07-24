'use client';
import { navbarSection } from '@/lib/content/navbar';
import { author } from '@/lib/content/portfolio';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, DarkModeButton, Link as CLink, NavButton } from '@/components';
import GradualBlur from '@/components/ui/GradualBlur';

import { fadeIn, slideIn } from '@/styles/animations';

import { m } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/**
 * Hides the navbar while scrolling down
 * @param {Object} config
 * @param {String} [config.id=navbar] - id of navbar
 * @param {Number} [config.offset=100] - offset of navbar in px
 */

const hideNavWhileScrolling = ({
  id = 'navbar',
  offset = 100,
  when = true,
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return () => {};

  let prevScrollPos = window.scrollY;

  const onScroll = () => {
    if (!when) return;
    const curScrollPos = window.scrollY;
    if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
    else nav.style.top = '0';
    prevScrollPos = curScrollPos;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
};

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({
  href,
  children,
  onClick,
  index,
  delay,
  active,
}: NavItemsProps) => {
  return (
    <m.li
      className="group"
      variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
      initial="hidden"
      animate="show"
    >
      <CLink
        href={href || `/#${children}`}
        className={`block p-2 duration-500 rounded-md ${
          active ? 'text-accent' : 'hover:text-accent'
        }`}
        onClick={onClick}
        withPadding
      >
        {children}
      </CLink>
    </m.li>
  );
};

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const navbarRef = useRef<HTMLDivElement>(null);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  useEffect(() => {
    return hideNavWhileScrolling({ when: !navbarCollapsed });
  }, [navbarCollapsed]);

  useEffect(() => {
    const sectionIds = navLinks.map(({ url }) => url.replace('/#', ''));
    const extraMappings: Record<string, string> = {
      'all-projects': 'projects',
    };
    const lastSectionId = sectionIds[sectionIds.length - 1];
    const allIds = [...sectionIds, ...Object.keys(extraMappings)];

    const updateActiveSection = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (atBottom) {
        setActiveSection(lastSectionId);
        return;
      }

      const probe = window.innerHeight * 0.4;
      let current = '';

      for (const id of allIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          current = extraMappings[id] ?? id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [navLinks]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setNavbarCollapsed(false);
      }
    };

    if (navbarCollapsed && windowWidth < md) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarCollapsed, windowWidth]);

  return (
    <m.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      ref={navbarRef}
      className="fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12"
    >
      <GradualBlur
        target="parent"
        position="top"
        height="6rem"
        strength={2.2}
        divCount={6}
        curve="ease-out"
        exponential={false}
        opacity={1}
        zIndex={-1}
        style={{
          opacity: scrollY > 0 ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      />
      <h1 className="relative text-2xl capitalize font-signature text-accent group top-1">
        <Link
          href="/#hero"
          className="block"
          onClick={() => setNavbarCollapsed(false)}
        >
          <p className="pr-1">{author.name}</p>
          <div className="absolute bottom-1.5 left-0 h-[1.5px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </Link>
      </h1>

      <NavButton
        name="Toggle Navigation"
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-soft-lg dark:shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none dark:md:shadow-none md:p-0 md:h-auto">
          <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                active={activeSection === url.replace('/#', '')}
                onClick={() => setNavbarCollapsed(false)}
              >
                {name}
              </NavItem>
            ))}

            <li className="flex items-center justify-between gap-5 xl:gap-6">
              {cta && (
                <Button
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                  className="border-[2px] bg-transparent hover:bg-sky-500/10 dark:hover:bg-sky-400/10"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => {}}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </li>
          </ul>
        </nav>
      )}
    </m.header>
  );
};

export default Navbar;
