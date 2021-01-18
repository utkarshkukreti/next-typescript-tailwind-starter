import { useState } from 'react'

import MainLayout from '@/layouts/Main'
import WithLayout from '@/layouts/WithLayout'

const Page = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        className="px-8 py-5 sm:px-12 sm:py-7 bg-blue-600 hover:bg-blue-500 text-blue-50 sm:text-xl rounded-full shadow focus:outline-none focus:ring-4 ring-blue-300 transition transform hover:-translate-y-1 hover:scale-105"
        onClick={() => setCounter(counter + 1)}
      >
        You've clicked this button {counter} times!
      </button>
    </div>
  )
}

export default WithLayout(Page, page => (
  <MainLayout title="Home" description="Home Page">
    {page}
  </MainLayout>
))
