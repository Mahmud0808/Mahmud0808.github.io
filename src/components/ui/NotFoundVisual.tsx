import { CSSProperties } from 'react';

const NotFoundVisual = () => {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto grid aspect-[4/3] w-full max-w-md select-none place-items-center overflow-hidden rounded-2xl border border-slate-900/10 bg-[radial-gradient(circle,rgba(100,116,139,0.12)_1px,transparent_1px)] [background-size:16px_16px] dark:border-slate-50/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--panel-glow),transparent_70%)]" />

      <span className="absolute left-3 top-2 font-mono text-sm text-slate-400/60 dark:text-slate-500/50">
        +
      </span>
      <span className="absolute right-3 top-2 font-mono text-sm text-slate-400/60 dark:text-slate-500/50">
        +
      </span>
      <span className="absolute bottom-2 left-3 font-mono text-sm text-slate-400/60 dark:text-slate-500/50">
        +
      </span>
      <span className="absolute bottom-2 right-3 font-mono text-sm text-slate-400/60 dark:text-slate-500/50">
        +
      </span>

      <div className="absolute h-52 w-52 rounded-full border border-dashed border-slate-400/40 dark:border-slate-500/30 sm:h-64 sm:w-64" />
      <div
        className="orbit-spin absolute h-52 w-52 sm:h-64 sm:w-64"
        style={{ '--orbit-duration': '10s' } as CSSProperties}
      >
        <span className="absolute left-1/2 top-0 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full bg-accent shadow-md" />
      </div>

      <div className="float-y absolute left-[10%] top-[14%] w-16 rounded-md border border-slate-400/50 p-2 opacity-70 dark:border-slate-500/40">
        <div className="h-1.5 w-full rounded-full bg-current opacity-30" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-current opacity-20" />
      </div>

      <div
        className="float-y absolute bottom-[16%] right-[10%] w-20 space-y-1.5 opacity-70"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="h-1.5 w-full rounded-full bg-current opacity-30" />
        <div className="h-1.5 w-4/5 rounded-full bg-current opacity-25" />
        <div className="h-1.5 w-3/5 rounded-full bg-current opacity-20" />
      </div>

      <div className="figma-cursor-2 pointer-events-none absolute z-20">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 3l14 7-6.2 1.8L9 18 5 3z"
            className="fill-accent-variant stroke-white dark:stroke-slate-900"
            strokeWidth="1.2"
          />
        </svg>
        <span className="ml-2.5 block w-max rounded-full bg-accent-variant px-2 py-0.5 font-mono text-[9px] leading-tight text-white dark:text-slate-900">
          lost?
        </span>
      </div>

      <span
        data-text="404"
        className="glitch relative z-10 font-mono text-7xl font-bold leading-none text-dark-1 sm:text-8xl"
      >
        404
      </span>

      <p className="absolute bottom-3 font-mono text-[10px] text-text">
        {'// ERR: route_not_found'}
      </p>
    </div>
  );
};

export default NotFoundVisual;
