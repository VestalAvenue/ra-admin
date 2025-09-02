import React from 'react'

import { Message } from '../data/dummy.jsx'

const Messages = () => {
  return (
    <div className="flex flex-col  bg-white shadow-md rounded-lg p-4 gap-2 dark:bg-stone-900  ">
      <h1 className="pl-3 font-bold text-gray-600">Messages</h1>
      {Message.map((message) => (
        <div key={message.id} className="flex items-center gap-2 ">
          <img src={message.image} alt={message.name} className="w-10 h-10 rounded-full" />
          <div className="max-w-full overflow-hidden truncate whitespace-nowrap">
            <p className="font-semibold">{message.name}</p>
            <p className="text-sm text-gray-500 truncate dark:text-white">{message.messages}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Messages
