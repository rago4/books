import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";
import { useTheme } from "../../context/theme";
import { Container, GlobalStyle } from "./styles";

const Layout: FC = ({ children }) => {
  const { isLight } = useTheme();

  const theme = isLight ? THEME_LIGHT : THEME_DARK;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
