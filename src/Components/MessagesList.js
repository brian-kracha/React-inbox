import React from 'react'
import Message from './Message'
const MessagesList = ({messages, toggleRead, toggleCheck,labelsAppear,toggleStar}) => {
  return (
    <div>
      {messages.map(message =>(<Message key={message.id} message={message} toggleRead={toggleRead} toggleCheck={toggleCheck} labelsAppear={labelsAppear} toggleStar={toggleStar}/>))}
    </div>
  )
}
export default MessagesList
