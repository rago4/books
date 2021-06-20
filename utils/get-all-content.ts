import matter from 'gray-matter';

export interface Content {
  goodreads: string;
  title: string;
  author: string;
  year: string;
  rating: string;
  finished: string;
  sentence: string;
}

const toUnix = (value: string): number => new Date(value).getTime();

export async function getAllContent(): Promise<Content[]> {
  const context = require.context('../content', false, /\.md$/);
  const content: Content[] = [];

  for (const key of context.keys()) {
    const fileName = key.slice(2);
    const file = await import(`../content/${fileName}`);
    const meta = matter(file.default);

    content.push({
      goodreads: meta.data.goodreads,
      title: meta.data.title,
      author: meta.data.author,
      year: meta.data.year,
      rating: meta.data.rating,
      finished: meta.data.finished,
      sentence: meta.content,
    });

    content.sort(({ finished: a }, { finished: b }) => toUnix(b) - toUnix(a));
  }

  return content;
}
