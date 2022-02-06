import _Document, { Head, Html, Main, NextScript } from 'next/document';

export class Document extends _Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/favicon/site.webmanifest" rel="manifest" />
          <link href="/favicon/favicon.ico" rel="shortcut icon" />
          <meta content="#000000" name="msapplication-TileColor" />
          <meta content="#000" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
