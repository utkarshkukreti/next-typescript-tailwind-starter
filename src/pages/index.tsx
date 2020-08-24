import { useState } from 'react';
import Head from 'next/head';
import MainLayout from '@/layouts/Main';
import WithLayout from '@/WithLayout';

const Index = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Head>
        <title>Untitled</title>
        <meta name="description" content="Untitled Page" />
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <button
          className="px-6 sm:px-10 py-5 bg-purple-600 hover:bg-purple-500 text-purple-50 sm:text-lg rounded-full shadow focus:outline-none transition duration-150 transform hover:-translate-y-1 hover:scale-105"
          onClick={() => setCounter(counter + 1)}
        >
          You've clicked this button {counter} times!
        </button>
      </div>
    </>
  );
};

export default WithLayout(Index, page => (
  <MainLayout title="Home">{page}</MainLayout>
));
