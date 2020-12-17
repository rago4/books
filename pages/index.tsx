import { NextPage } from "next";
import Article from "../components/article";
import ClientOnly from "../components/client-only";
import Emoji from "../components/emoji";
import Layout from "../components/layout";
import ThemeToggler from "../components/theme-toggler";
import { Header, Nav, Brand, Intro } from "../pages-styles";
import { getAllContent, Content } from "../utils/get-all-content";

interface Props {
  content: Content[];
}

const Index: NextPage<Props> = ({ content }) => (
  <Layout>
    <Header>
      <Nav>
        <Brand>
          <Emoji label="Pile of books emoji" symbol="📚" />
          <span> Books</span>
        </Brand>
        <ClientOnly>
          <ThemeToggler />
        </ClientOnly>
      </Nav>
      <Intro>
        List of the books that I've recently read. Each of the books is rated in
        a 5-star scale and reviewed in one short sentence.
      </Intro>
    </Header>
    <main>
      {content.map((data, index) => (
        <Article key={`article-${index}`} content={data} />
      ))}
    </main>
  </Layout>
);

export default Index;

export async function getStaticProps() {
  const content = await getAllContent();

  return {
    props: { content },
  };
}
