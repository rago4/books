interface Props {
  label: string;
  sign: string;
  className?: string;
}

export const Emoji = ({ label, sign, className }: Props) => (
  <span aria-hidden="true" aria-label={label} className={className}>
    {sign}
  </span>
);
