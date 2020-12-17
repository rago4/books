import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "../context/theme";

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
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
