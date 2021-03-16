import { useState } from 'react'

const Page = () => {
  const [message, setMessage] = useState('')

  const [messages, setMessages] = useState([
    'How do you write a web application?',
    'First you write the code and then you go to "Save As..." to save it on the web.',
    'Which language should use?',
    'That depends on your business.',
    "I'm in finance.",
    'Then you should use FORTRAN.',
  ])

  return (
    <div className="max-w-2xl mx-auto p-6 h-screen flex flex-col">
      <div className="mt-auto flex flex-col-reverse gap-y-3 overflow-scroll">
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-xl max-w-3/4 ${
                (messages.length - index) % 2 === 0
                  ? 'self-start bg-gray-100'
                  : 'self-end bg-green-100'
              }`}
              style={{ maxWidth: '75%' }}
            >
              {message}
            </div>
          ))}
      </div>
      <div className="mb-6" />
      <form
        className="flex items-center"
        onSubmit={event => {
          event.preventDefault()
          if (!message.trim()) return
          setMessages([...messages, message])
          setMessage('')
        }}
      >
        <input
          className="flex-1"
          type="text"
          placeholder="Type something here..."
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <div className="mr-4" />
        <input
          className="px-4 py-2 bg-gray-200 rounded-none focus:outline-none focus:ring-blue-600 focus:ring-2 active:bg-gray-300"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  )
}

export default Page
