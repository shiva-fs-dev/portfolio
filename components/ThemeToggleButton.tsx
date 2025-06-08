'use client';
import { useTheme } from '@/components/ThemeToggle';
export default function ThemeToggleButton() {
  const theme = useTheme();
  return (
    <div
      className="block px-4 py-2 mt-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
      onClick={() => {
        theme.setDarkMode(!theme.darkMode);
      }}
    >
      {theme.darkMode ? 'Dark Mode' : 'Light Mode'}
    </div>
  );
}
