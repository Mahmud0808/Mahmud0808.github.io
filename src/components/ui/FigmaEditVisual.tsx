const FigmaEditVisual = () => {
  return (
    <div
      aria-hidden="true"
      className="relative w-[min(320px,85%)] select-none text-slate-500 dark:text-slate-400"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-[1.5px] border-slate-400/60 bg-white/40 shadow-xl dark:border-slate-500/50 dark:bg-slate-900/40">
        <div className="relative flex h-[13%] items-center gap-1.5 border-b-[1.5px] border-slate-400/60 px-3 dark:border-slate-500/50">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
          <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[9px] opacity-60">
            portfolio.fig
          </span>
        </div>

        <div className="relative h-[87%] bg-[radial-gradient(circle,rgba(100,116,139,0.1)_1px,transparent_1px)] [background-size:14px_14px]">
          <div className="absolute left-[8%] top-[12%] h-[40%] w-[38%] overflow-hidden rounded-md border border-slate-400/50 bg-bg-secondary/60 dark:border-slate-500/40">
            <div className="h-[55%] bg-gradient-to-br from-accent/50 to-accent-variant/40" />
            <div className="mx-[10%] mt-[8%] h-[7%] w-[70%] rounded-full bg-current opacity-40" />
            <div className="mx-[10%] mt-[6%] h-[7%] w-[50%] rounded-full bg-current opacity-25" />
          </div>

          <div className="absolute left-[54%] top-[16%] w-[38%] space-y-[9%]">
            <div className="h-[7px] w-full rounded-full bg-current opacity-40" />
            <div className="h-[7px] w-[80%] rounded-full bg-current opacity-30" />
            <div className="h-[7px] w-[90%] rounded-full bg-current opacity-20" />
          </div>

          <div className="absolute bottom-[12%] left-[8%] grid h-[14%] w-[30%] place-items-center rounded-full border border-accent/70 bg-accent/10">
            <div className="h-[5px] w-[55%] rounded-full bg-accent/70" />
          </div>

          <div className="absolute bottom-[12%] right-[8%] flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-400/90" />
          </div>

          <div className="figma-select pointer-events-none absolute border-[1.5px] border-accent">
            <span className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 border border-accent bg-bg-secondary" />
            <span className="absolute -right-[3px] -top-[3px] h-1.5 w-1.5 border border-accent bg-bg-secondary" />
            <span className="absolute -bottom-[3px] -left-[3px] h-1.5 w-1.5 border border-accent bg-bg-secondary" />
            <span className="absolute -bottom-[3px] -right-[3px] h-1.5 w-1.5 border border-accent bg-bg-secondary" />
            <span className="figma-dim-1 absolute -bottom-5 left-1/2 -translate-x-1/2 rounded bg-accent px-1.5 py-px font-mono text-[8px] leading-tight text-white dark:text-slate-900">
              132×110
            </span>
            <span className="figma-dim-2 absolute -bottom-5 left-1/2 -translate-x-1/2 rounded bg-accent px-1.5 py-px font-mono text-[8px] leading-tight text-white dark:text-slate-900">
              132×82
            </span>
            <span className="figma-dim-3 absolute -bottom-5 left-1/2 -translate-x-1/2 rounded bg-accent px-1.5 py-px font-mono text-[8px] leading-tight text-white dark:text-slate-900">
              104×46
            </span>
          </div>

          <div className="figma-cursor pointer-events-none absolute">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 3l14 7-6.2 1.8L9 18 5 3z"
                className="fill-accent stroke-white dark:stroke-slate-900"
                strokeWidth="1.2"
              />
            </svg>
            <span className="ml-3 block w-max rounded-full bg-accent px-2 py-0.5 font-mono text-[9px] leading-tight text-white dark:text-slate-900">
              Mahmud
            </span>
          </div>

          <div className="figma-cursor-2 pointer-events-none absolute">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 3l14 7-6.2 1.8L9 18 5 3z"
                className="fill-accent-variant stroke-white dark:stroke-slate-900"
                strokeWidth="1.2"
              />
            </svg>
            <span className="ml-2.5 block w-max rounded-full bg-accent-variant px-2 py-0.5 font-mono text-[9px] leading-tight text-white dark:text-slate-900">
              guest
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaEditVisual;
