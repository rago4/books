import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import cookies from 'next-cookies';
import { THEME } from '../utils/constants';

interface Props {
  theme: string;
}
class CustomDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const theme = cookies(ctx).theme || THEME.LIGHT;

    return { ...initialProps, theme };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className={this.props.theme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
