'use client';

import { useEffect, useRef, useState } from 'react';

const CopyEmail = ({ email }: { email: string }) => {
  const [label, setLabel] = useState('Copy');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel('Copied');
    } catch {
      const target = document.getElementById('email-address');
      if (target) {
        const range = document.createRange();
        range.selectNodeContents(target);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setLabel('Selected');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel('Copy'), 2000);
  };

  return (
    <>
      <button type="button" className="btn copy" onClick={copy}>
        {label}
      </button>
      <span className="sr-only" aria-live="polite">
        {label === 'Copied' ? 'Email address copied' : ''}
      </span>
    </>
  );
};

export default CopyEmail;
