import { useState } from "react"
import {Chatbot} from "supersimpledev"

export function ChatInput({ chatMessages, setChatMessages }) {

  const [inputText, setInputText] = useState("")

  function setMessage(event) {
    const message = event.target.value
    setInputText(message)
  }

  function sendMessage() {
    const newChatMessage = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID()
      }
    ]

    // setChatMessages(newChatMessage)

    const response = Chatbot.getResponse(inputText)

    setChatMessages([
      ...newChatMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ])

    setInputText("")
  }
  
  return (
    <div className='chat-input-container'>
      <input value={inputText} onChange={setMessage} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
