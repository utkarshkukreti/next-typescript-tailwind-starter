import Head from 'next/head';

const Main = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <div>{children}</div>
  </>
);

export default Main;
