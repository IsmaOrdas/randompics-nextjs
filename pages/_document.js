import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Random Pics</title>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
              type="text/css"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
