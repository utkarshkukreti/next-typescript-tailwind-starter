import { useState } from 'react';

export default () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="py-8 flex justify-center">
      <button
        className="text-2xl text-center border-2 px-6 py-3 rounded-lg hover:underline"
        onClick={() => setCounter(counter + 1)}
      >
        You've clicked this button {counter} times!
      </button>
    </div>
  );
};
