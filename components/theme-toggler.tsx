import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Emoji } from './emoji';
import { THEME } from '../utils/constants';

const { DARK, LIGHT } = THEME;

export const ThemeToggler = () => {
  const [isMounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  const isDark = resolvedTheme === DARK;
  const sign = isDark ? '☀️' : '🌙';
  const label = isDark ? 'Sun emoji' : 'Moon emoji';

  const handleClick = () => {
    setTheme(resolvedTheme === DARK ? LIGHT : DARK);
  };

  return (
    <button
      className="w-9 h-9 flex items-center justify-center rounded text outline transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
      onClick={handleClick}>
      <Emoji label={label} sign={sign} />
    </button>
  );
};
