import { useState, useEffect } from "react";

export function ChatMessage({ message, sender, id }) {

  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [id])

  const checkSender = sender === "user";

  return (
    <div className={`${checkSender ? "user-message-container":"robot-message-container"}`}>
      {!checkSender &&  <img src="src/assets/robot.png" width="50" />
          }

      {
        !checkSender && loading ? <p className='message-text'>Loading...</p> : <p className='message-text'>{message}</p>
      }
      {checkSender && <img src="src/assets/user.png" width="50" />}
    </div>
  )
}