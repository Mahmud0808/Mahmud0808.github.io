'use client';
import { contactSection } from '@/lib/content/contact';

import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import Icon from '@/components/ui/Icon';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  const email = link.replace('mailto:', '');
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = link;
    }
  };

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <div className="mt-12 flex items-center justify-center">
        <Button size="lg" onClick={copyEmail}>
          <span className="grid place-items-center">
            <span
              className={`col-start-1 row-start-1 flex items-center gap-2 transition-opacity duration-300 ${
                copied ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Icon icon="tabler:copy" width={16} height={16} aria-hidden="true" />
              copy email
            </span>
            <span
              className={`col-start-1 row-start-1 flex items-center gap-2 transition-opacity duration-300 ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Icon icon="tabler:check" width={16} height={16} aria-hidden="true" />
              copied!
            </span>
          </span>
        </Button>
        <span aria-live="polite" className="sr-only">
          {copied ? 'Email address copied to clipboard' : ''}
        </span>
      </div>
    </Wrapper>
  );
};

export default Contact;
