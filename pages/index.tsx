import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Article } from '../components/article';
import { Emoji } from '../components/emoji';
import { ThemeToggler } from '../components/theme-toggler';
import { APP_PATHS } from '../utils/constants';
import { getAllContent, Content } from '../utils/get-all-content';

interface Props {
  content: Content[];
}

const Index: NextPage<Props> = ({ content }) => (
  <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-50 transition-colors">
    <div className="max-w-3xl mx-auto sm:py-8 py-6 px-4">
      <header>
        <div className="sm:mb-5 mb-3 flex items-center justify-between">
          <h1 className="sm:text-4xl text-3xl font-bold">
            <Link href={APP_PATHS.HOME}>
              <a className="outline">
                <span>Books </span>
                <Emoji label="Pile of books emoji" sign="📚" />
              </a>
            </Link>
          </h1>
          <ThemeToggler />
        </div>
        <p className="text">
          List of the books that I&apos;ve recently read. Each of the books is
          rated in a 5-star scale and reviewed in one short sentence.
        </p>
      </header>
      <main>
        {content.map(article => (
          <Article key={article.title} data={article} />
        ))}
      </main>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const content = await getAllContent();

  return {
    props: { content },
  };
};

export default Index;
