import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

type Props = {};

class Document extends NextDocument<Props> {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps & Props> {
    const initialProps = await NextDocument.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
