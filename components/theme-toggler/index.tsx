import { FC } from "react";
import Emoji from "../emoji";
import { useTheme } from "../../context/theme";
import { Button } from "./styles";

const ThemeToggler: FC = () => {
  const { isLight, toggleTheme } = useTheme();

  const emojiLabel = isLight ? "Moon emoji" : "Sun emoji";
  const emojiSymbol = isLight ? "🌙" : "☀️";

  return (
    <Button aria-label="Toggle theme" onClick={toggleTheme}>
      <Emoji label={emojiLabel} symbol={emojiSymbol} />
    </Button>
  );
};

export default ThemeToggler;
