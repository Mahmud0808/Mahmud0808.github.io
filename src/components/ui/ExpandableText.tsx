'use client';
import { useCallback, useEffect, useId, useRef, useState } from 'react';

type Props = {
  text: string;
  lines?: number;
  className?: string;
};

const FALLBACK_LINE_HEIGHT = 13 * 1.625;

const ExpandableText = ({ text, lines = 2, className = '' }: Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [lineHeight, setLineHeight] = useState(FALLBACK_LINE_HEIGHT);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const id = useId();

  const measure = useCallback(() => {
    const el = textRef.current;
    if (!el) return;
    const computed = parseFloat(getComputedStyle(el).lineHeight);
    if (!Number.isNaN(computed) && computed > 0) setLineHeight(computed);
    setFullHeight(el.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    measure();
    const el = textRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure, text]);

  const collapsedHeight = lineHeight * lines;
  const overflows = fullHeight === null || fullHeight > collapsedHeight + 1;

  return (
    <>
      <div
        id={id}
        className="overflow-hidden transition-[height] duration-300 ease-out motion-reduce:transition-none"
        style={{
          height:
            expanded && fullHeight !== null ? fullHeight : collapsedHeight,
        }}
      >
        <p ref={textRef} className={className}>
          {text}
        </p>
      </div>
      {overflows && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={id}
          className="relative z-10 mt-1 flex w-fit items-center gap-0.5 rounded-sm text-xs font-medium text-accent duration-200 hover:underline"
        >
          {expanded ? 'less' : 'more'}
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            aria-hidden="true"
            className={`transition-transform duration-300 motion-reduce:transition-none ${
              expanded ? 'rotate-180' : ''
            }`}
          >
            <path
              d="m6 9 6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ExpandableText;
