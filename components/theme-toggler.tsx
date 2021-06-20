import { useState } from 'react';
import { Emoji } from './emoji';
import { COOKIES, THEME } from '../utils/constants';

interface Props {
  theme: string;
}

export const ThemeToggler = ({ theme }: Props) => {
  const [currentTheme, setTheme] = useState(theme);

  const isDark = currentTheme === THEME.DARK;
  const label = isDark ? 'Sun emoji' : 'Moon emoji';
  const sign = isDark ? '☀️' : '🌙';

  const handleClick = () => {
    const newTheme = isDark ? THEME.LIGHT : THEME.DARK;
    const cookieExpire = new Date(2038, 0, 1).toUTCString();

    setTheme(newTheme);
    document.body.className = newTheme;
    document.cookie = `${COOKIES.THEME}=${newTheme};expires=${cookieExpire}`;
  };

  return (
    <button
      className="w-9 h-9 flex items-center justify-center rounded text outline transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      name="theme-toggler"
      onClick={handleClick}>
      <Emoji label={label} sign={sign} />
    </button>
  );
};
