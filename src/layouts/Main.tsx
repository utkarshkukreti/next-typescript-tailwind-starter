import Head from 'next/head';

const Main = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>{children}</div>
  </>
);

export default Main;
