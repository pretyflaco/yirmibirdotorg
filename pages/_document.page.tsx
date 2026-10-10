import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Yirmibir Blog"
          href="/rss.xml"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
