import { useState } from 'react';
import Head from 'next/head';

export default () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Head>
        <title>Next TypeScript Tailwind Starter</title>
      </Head>
      <div className="flex justify-center items-center min-h-screen">
        <button
          className="px-6 sm:px-10 py-5 bg-purple-600 hover:bg-purple-500 text-purple-50 sm:text-lg rounded-full shadow focus:outline-none transition duration-150 transform hover:scale-105"
          onClick={() => setCounter(counter + 1)}
        >
          You've clicked this button {counter} times!
        </button>
      </div>
    </>
  );
};
