import styled from "styled-components";

export const Button = styled.button`
  padding: 0;
  border: 0;
  border-radius: 4px;
  font-size: 1em;
  display: block;
  width: 2em;
  height: 2em;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--toggler);
  }
`;
