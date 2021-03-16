import { useState } from 'react'

const Page = () => {
  const [name, setName] = useState('Human')

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center">
        <label htmlFor="name">Your Name:</label>
        <div className="mr-4" />
        <input
          className="w-64"
          type="text"
          id="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="mb-6" />
      <h1 className="text-3xl">
        Hello, <span className="text-blue-600">{name}</span>!
      </h1>
    </div>
  )
}

export default Page
