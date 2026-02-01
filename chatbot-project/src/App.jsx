import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([])

  return (
    <div className='app-container'>
      
      <ChatMessages chatMessages={chatMessages} />
      {chatMessages.length === 0 && <p>Welcome to the chatbot project! Send a message using the textbox above.</p>}
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  )
} 

export default App
