import { FC } from "react";

interface Props {
  label: string;
  symbol: string;
}

const Emoji: FC<Props> = ({ label, symbol }) => (
  <span role="img" aria-hidden="true" aria-label={label}>
    {symbol}
  </span>
);

export default Emoji;
