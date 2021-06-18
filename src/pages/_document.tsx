import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="data:," />
        </Head>
        <body className="antialiased text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
