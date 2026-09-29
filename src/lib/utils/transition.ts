import { flushSync } from 'react-dom';

type TransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

export const withTransition = (update: () => void) => {
  const doc = document as TransitionDocument;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!doc.startViewTransition || reduced) {
    update();
    return;
  }
  doc.startViewTransition(() => flushSync(update));
};
