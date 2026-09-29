'use client';

import {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { navLinks } from '@/lib/content/portfolio';

const groups: Record<string, string> = {
  about: 'about',
  skills: 'about',
  experience: 'experience',
  work: 'work',
  testimonials: 'work',
  contact: 'contact',
};

const SectionNav = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('');
  const pastIntro = useRef(false);
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(
    null
  );

  useLayoutEffect(() => {
    const link = navRef.current?.querySelector<HTMLAnchorElement>(
      `a[href="#${current}"]`
    );
    setIndicator(link ? { x: link.offsetLeft, w: link.offsetWidth } : null);
  }, [current]);

  useEffect(() => {
    const intro = document.getElementById('intro');
    if (!intro) return;

    const introObserver = new IntersectionObserver(([entry]) => {
      pastIntro.current = !entry.isIntersecting;
      setVisible(pastIntro.current);
    });
    introObserver.observe(intro);

    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - lastY) > 6) {
          setVisible(pastIntro.current && y < lastY);
          lastY = y;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(groups[entry.target.id] ?? '');
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    Object.keys(groups).forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => {
      introObserver.disconnect();
      spy.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="pill"
      aria-label="Jump to section"
      data-state={visible ? 'shown' : 'hidden'}
      inert={!visible}
    >
      <span
        className="pill-indicator"
        aria-hidden="true"
        data-active={indicator ? 'true' : 'false'}
        style={
          {
            '--x': `${indicator?.x ?? 0}px`,
            '--w': `${indicator?.w ?? 0}px`,
          } as CSSProperties
        }
      />
      {navLinks.map(({ name, id }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-current={current === id ? 'true' : undefined}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};

export default SectionNav;
