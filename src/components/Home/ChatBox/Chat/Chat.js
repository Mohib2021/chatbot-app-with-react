import React from 'react'
import style from "./Chat.module.css"
const Chat = ({msg}) => {
  return (
    <>
    <div className='p-2'>
        <div className="text-end">
            <strong className={`mb-3 d-inline-block ${style.userMessage}`}>{msg.userMessage}</strong>
        </div>
        <div className="text-start">
            <strong className={` bg-dark text-white d-inline-block ${style.chatbotMessage}`}> {msg.chatbotMessage}</strong>
        </div>
    </div>
    </>
  )
}

export default Chat;