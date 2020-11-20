import { useState } from 'react'

import MainLayout from '@/layouts/Main'
import WithLayout from '@/WithLayout'

const Index = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        className="px-6 sm:px-10 py-5 bg-fuchsia-600 hover:bg-fuchsia-500 text-fuchsia-50 sm:text-lg rounded-full shadow focus:outline-none focus:ring-4 ring-fuchsia-300 transition transform hover:-translate-y-1 hover:scale-105"
        onClick={() => setCounter(counter + 1)}
      >
        You've clicked this button {counter} times!
      </button>
    </div>
  )
}

export default WithLayout(Index, page => (
  <MainLayout title="Home" description="Home Page">
    {page}
  </MainLayout>
))
