import { FC, createContext, useContext, useState } from "react";
import { LOCAL_STORAGE } from "../constants/local-storage";

enum Theme {
  light = "light",
  dark = "dark",
}

const { THEME } = LOCAL_STORAGE;

const isClient = process.browser;
const isDarkModePreffered =
  isClient && window.matchMedia("(prefers-color-scheme: dark)").matches;

const ThemeContext = createContext<{
  isLight: boolean;
  toggleTheme: () => void;
}>({
  isLight: true,
  toggleTheme: () => {},
});

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (isClient && (localStorage.getItem(THEME) as Theme)) ||
      (isDarkModePreffered ? Theme.dark : Theme.light)
  );

  const isLight = theme === Theme.light;

  const toggleTheme = () => {
    const newTheme = isLight ? Theme.dark : Theme.light;

    setTheme(newTheme);
    isClient && localStorage.setItem(THEME, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
