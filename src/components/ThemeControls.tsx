'use client';

import { CSSProperties, useSyncExternalStore } from 'react';

import { ACCENTS, DEFAULT_HUE } from '@/lib/utils/config';
import { withTransition } from '@/lib/utils/transition';

import { MoonIcon, SunIcon } from './Icons';

const CHANGE = 'theme-change';

const save = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    return;
  }
};

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE, onChange);
  return () => window.removeEventListener(CHANGE, onChange);
};

const readHue = () => {
  const value = Number(
    document.documentElement.style.getPropertyValue('--h').trim()
  );
  return ACCENTS.some((accent) => accent.hue === value) ? value : DEFAULT_HUE;
};

const readDark = () => document.documentElement.dataset.theme !== 'light';

const syncThemeColor = () => {
  window.setTimeout(() => {
    const color = getComputedStyle(document.body).backgroundColor;
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute('content', color));
  }, 550);
};

const ThemeControls = () => {
  const hue = useSyncExternalStore(subscribe, readHue, () => DEFAULT_HUE);
  const dark = useSyncExternalStore(subscribe, readDark, () => true);

  const pickHue = (value: number) => {
    withTransition(() => {
      document.documentElement.style.setProperty('--h', String(value));
      window.dispatchEvent(new Event(CHANGE));
    });
    save('accent', String(value));
    syncThemeColor();
  };

  const toggleMode = () => {
    const next = readDark() ? 'light' : 'dark';
    withTransition(() => {
      if (next === 'light') document.documentElement.dataset.theme = 'light';
      else delete document.documentElement.dataset.theme;
      window.dispatchEvent(new Event(CHANGE));
    });
    save('theme', next);
    syncThemeColor();
  };

  return (
    <div className="controls">
      <fieldset className="seed">
        <legend className="sr-only">Accent colour</legend>
        {ACCENTS.map((accent) => (
          <span key={accent.hue}>
            <input
              type="radio"
              name="accent"
              id={`accent-${accent.hue}`}
              value={accent.hue}
              checked={hue === accent.hue}
              onChange={() => pickHue(accent.hue)}
            />
            <label
              htmlFor={`accent-${accent.hue}`}
              title={accent.name}
              style={{ '--sw': accent.hue } as CSSProperties}
            >
              <span className="sr-only">{accent.name}</span>
            </label>
          </span>
        ))}
      </fieldset>
      <button
        type="button"
        className="mode"
        onClick={toggleMode}
        aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeControls;
