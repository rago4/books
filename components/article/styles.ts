import styled from "styled-components";

export const Container = styled.article`
  margin-bottom: 1.75em;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.media.min.sm} {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  font-size: 1.4em;
  margin: 0 0 0.3em;
`;

export const Link = styled.a`
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const Rating = styled.div`
  margin-top: 0.25em;

  span {
    margin-right: 0.25em;

    &:last-child {
      margin-right: 0;
    }
  }

  ${({ theme }) => theme.media.min.sm} {
    margin-top: 0;
  }
`;

export const Sentence = styled.p`
  margin: 0.75em 0 0;
`;

export const FinishedAt = styled.span`
  display: block;
  font-style: italic;
  margin-top: 0.5em;
`;
