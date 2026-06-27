'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type Coords = { x: number; y: number };

const initialState = {
  isDarkMode: false,
  toggle: (_coords?: Coords) => {
    return;
  },
  enableDarkMode: (_: boolean) => {
    return;
  },
  disableDarkMode: (_: boolean) => {
    return;
  },
};

const ThemeContext = createContext(initialState);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('darkMode') || 'true')
      ? true
      : false
  );

  const applyTheme = useCallback((dark: boolean) => {
    localStorage.setItem('darkMode', JSON.stringify(dark));
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggle = useCallback(
    (coords?: Coords) => {
      const next = !isDarkMode;
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (!document.startViewTransition || prefersReducedMotion) {
        setIsDarkMode(next);
        return;
      }

      if (coords) {
        document.documentElement.style.setProperty('--vt-x', `${coords.x}px`);
        document.documentElement.style.setProperty('--vt-y', `${coords.y}px`);
      }

      document.startViewTransition(() => {
        setIsDarkMode(next);
      });
    },
    [isDarkMode]
  );

  const enableDarkMode = useCallback(() => {
    setIsDarkMode(true);
  }, []);

  const disableDarkMode = useCallback(() => {
    setIsDarkMode(false);
  }, []);

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode, applyTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggle,
        enableDarkMode,
        disableDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
