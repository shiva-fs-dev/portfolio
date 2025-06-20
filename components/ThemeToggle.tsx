'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

// Create context with proper default
const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

// Provider component
export default function ThemeToggle({ children }: { children: ReactNode }) {
  const [darkMode, setDarkModeState] = useState(false);
  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.toggle("dark");
  }, [darkMode]);
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.getElementsByTagName('body')[0].classList.add("dark");
  }, []);
  const setDarkMode = (value: boolean) => {
    setDarkModeState(value);
  };

  return (
    <div className={'dark:bg-zinc-900 bg-zinc-50 container lg:max-w-8xl lg:mx-auto'}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

// Custom hook to use theme easily
export const useTheme = () => useContext(ThemeContext);
