'use client';

import { ReactNode, useId, useState } from 'react';

import { withTransition } from '@/lib/utils/transition';

type Props = {
  name: string;
  moreLabel: string;
  lessLabel: string;
  children: ReactNode;
};

const ShowMore = ({ name, moreLabel, lessLabel, children }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="show-more">
      <div id={id} className="show-more-content" hidden={!open}>
        {children}
      </div>
      <button
        type="button"
        className="btn more-toggle"
        aria-expanded={open}
        aria-controls={id}
        style={{ viewTransitionName: `${name}-toggle` } as React.CSSProperties}
        onClick={() => withTransition(() => setOpen((value) => !value))}
      >
        {open ? lessLabel : moreLabel}
      </button>
    </div>
  );
};

export default ShowMore;
