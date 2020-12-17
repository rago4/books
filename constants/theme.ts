const styles = {
  palette: {
    azureRadiance: "#008cff",
    mineShaft: "#333333",
    white: "#ffffff",
  },
  font:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  media: {
    min: {
      sm: "@media screen and (min-width: 576px)",
    },
  },
};

export const THEME_DARK = {
  ...styles,
  text: styles.palette.white,
  background: styles.palette.mineShaft,
  togglerBackground: `${styles.palette.white}20`,
} as const;

export const THEME_LIGHT = {
  ...styles,
  text: styles.palette.mineShaft,
  background: styles.palette.white,
  togglerBackground: `${styles.palette.mineShaft}10`,
} as const;

export type Theme = typeof THEME_LIGHT;
