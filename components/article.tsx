import { Emoji } from './emoji';
import { Content } from '../utils/get-all-content';

interface Props {
  data: Content;
}

export const Article = ({ data }: Props) => {
  const date = new Date(data.finished).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="sm:mt-7 mt-6">
      <div className="sm:flex justify-between">
        <div>
          <h2 className="sm:text-3xl text-2xl font-bold mb-1">
            <a href={data.goodreads} className="hover:underline outline">
              <span>{data.title} </span>
              <span>({data.year})</span>
            </a>
          </h2>
          <span className="text">by {data.author}</span>
        </div>
        <div className="flex sm:mt-1 -ml-2">
          {Array.from({ length: Number(data.rating) }, (_, index) => (
            <Emoji
              key={`${data.title}-star-${index}`}
              className="text ml-2"
              label="Star emoji"
              sign="⭐️"
            />
          ))}
        </div>
      </div>
      <p className="text my-1">{data.sentence}</p>
      <span className="text italic">({date})</span>
    </article>
  );
};
