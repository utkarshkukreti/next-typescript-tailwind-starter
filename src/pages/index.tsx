import { useState } from 'react';
import Head from 'next/head';

export default () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Head>
        <title>Next TypeScript Tailwind Starter</title>
      </Head>
      <div className="flex-1 flex justify-center items-center">
        <button
          className="px-6 sm:px-10 py-5 bg-white text-purple-600 sm:text-lg rounded-full shadow-lg focus:outline-none transition duration-150 transform hover:-translate-y-1 hover:bg-gray-300 hover:scale-105"
          onClick={() => setCounter(counter + 1)}
        >
          You've clicked this button {counter} times!
        </button>
      </div>
    </>
  );
};
