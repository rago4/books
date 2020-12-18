import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../constants/theme";
import { Container, GlobalStyle } from "./styles";

const Layout: FC = ({ children }) => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    <Container>{children}</Container>
  </ThemeProvider>
);

export default Layout;
