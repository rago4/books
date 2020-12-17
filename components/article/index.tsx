import { FC } from "react";
import ClientOnly from "../client-only";
import Emoji from "../emoji";
import { Content } from "../../utils/get-all-content";
import {
  Container,
  FinishedAt,
  Header,
  Link,
  Rating,
  Sentence,
  Title,
} from "./styles";

interface Props {
  content: Content;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Article: FC<Props> = ({ content }) => {
  const {
    goodreads,
    title,
    author,
    year,
    rating,
    finished,
    sentence,
  } = content;

  const getFormattedFinishedDate = (): string => {
    const date = new Date(finished);
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const stars = new Array(rating)
    .fill(undefined)
    .map((_, index) => (
      <Emoji key={`star-${index}`} label="Star emoji" symbol="⭐️" />
    ));

  return (
    <Container>
      <Header>
        <div>
          <Title>
            <ClientOnly>
              <Link target="_blank" rel="noreferrer noopener" href={goodreads}>
                {title} ({year})
              </Link>
            </ClientOnly>
          </Title>
          <span>by {author}</span>
        </div>
        <Rating>{stars}</Rating>
      </Header>
      <Sentence>{sentence}</Sentence>
      <FinishedAt>({getFormattedFinishedDate()})</FinishedAt>
    </Container>
  );
};

export default Article;
