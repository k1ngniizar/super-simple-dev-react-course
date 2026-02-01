import { useRef, useEffect } from "react"
import { ChatMessage } from "./ChatMessage"

export function ChatMessages({ chatMessages }) {
  
  const chatMessagesRef = useRef(null)

  useEffect(()=>{

    const containerElem = chatMessagesRef.current

    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight
    }

  },[chatMessages])

  return (
    <div ref={chatMessagesRef} className='chat-messages-container'>
      {
        chatMessages.map(chatMessage => {
          return (
            <ChatMessage key={chatMessage.id} message={chatMessage.message} sender={chatMessage.sender} />
          )
        })
      }
    </div>
  )
}
