import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <meta name="theme-color" content="#0d0d0d" />
      <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
