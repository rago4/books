import { FC, useEffect, useState } from "react";
import Emoji from "../emoji";
import { LOCAL_STORAGE } from "../../constants/local-storage";
import { Button } from "./styles";

enum Theme {
  light = "light",
  dark = "dark",
}

const isClient = process.browser;

const { THEME } = LOCAL_STORAGE;

const ThemeToggler: FC = () => {
  const [hasMounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(
    isClient && localStorage.getItem(THEME) === Theme.dark
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const emojiLabel = isDark ? "Sun emoji" : "Moon emoji";
  const emojiSymbol = isDark ? "☀️" : "🌙";

  const toggleTheme = () => {
    setIsDark(!isDark);
    // @ts-ignore - `changeTheme` is applied to the window object in external file
    window.changeTheme(!isDark ? Theme.dark : Theme.light);
  };

  return (
    <Button aria-label="Toggle theme" onClick={toggleTheme}>
      <Emoji label={emojiLabel} symbol={emojiSymbol} />
    </Button>
  );
};

export default ThemeToggler;
