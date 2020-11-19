import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="antialiased text-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
