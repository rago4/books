import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hello, my name is Rafal and I like reading books 📚"
        />
        <title>Books</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
