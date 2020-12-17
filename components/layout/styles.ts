import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "../../constants/theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  html {
    font-size: 16px;

    ${({ theme }) => theme.media.min.sm} {
      font-size: 20px;
    }
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font}; 
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    transition: background-color .2s ease, color .2s ease;
  }

  p {
    line-height: 1.8;
  }

  a, button {
    outline: 0;

    &:focus {
      border-radius: 5px;
      box-shadow: 0 0 0 4px ${({ theme }) =>
        `${theme.palette.azureRadiance}50`};
    }
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 35em;
  width: 100%;
  padding: 0 1em;
  margin: 0 auto;
`;
