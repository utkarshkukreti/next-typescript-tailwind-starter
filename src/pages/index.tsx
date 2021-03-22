import { GetServerSideProps } from 'next'
import { useState } from 'react'

type Props = {
  name: string
}

const Page = ({ name: initialName }: Props) => {
  const [name, setName] = useState(initialName)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">
          Hello, <span className="text-red-600">{name}</span>!
        </h1>
        <div className="mb-6" />
        <form action="/" className="flex items-center">
          <label htmlFor="name">Your Name:</label>
          <div className="mr-4" />
          <input
            className="w-48 md:w-64"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <div className="mr-4" />
          <input
            className="px-4 py-2 bg-gray-200 rounded-none focus:outline-none focus:ring-blue-600 focus:ring-2 active:bg-gray-300"
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const name =
    typeof context.query.name === 'string' ? context.query.name : 'Nexter'

  return {
    props: {
      name,
    },
  }
}

export default Page
