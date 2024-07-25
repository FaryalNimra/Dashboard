import React, { useState } from 'react';
import './Element3.scss';

const Element3 = () => {
  const [messages, setMessages] = useState([
    { text: "Hello there, i need some advice about halloween.", sender: "me", time: "09:00 AM" },
    { text: "Of course! I'd be happy to help you with Halloween advice. What specifically do you need assistance with?, feel free to let me know how I can assist you!", sender: "other", time: "09:01 AM" },
    { text: "i need idea about what costume i wear in halloween. can you give me some suggestion?", sender: "me", time: "09:00 AM" },
    { text: "Certainly! Choosing a Halloween costume can be a lot of fun. Here are some costume ideas across different themes, and you can pick one based on your interests?", sender: "other", time: "09:01 AM" },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "me", time: "Just now" }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        <div className="timestamp">Today, 09:00 AM</div>
        <br />
        {messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.sender === "me" ? "message-me" : "message-other"}`}>
            {msg.sender === "other" && (
              <div className="message-icon">
                <img src="/Assests/illustration.png" alt="Icon" className="icon-other" />
              </div>
            )}
            <div className={`message-bubble ${msg.sender === "me" ? "message-bubble-me" : "message-bubble-other"}`}>
              <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
              <div className="message-time">{msg.time}</div>
              {msg.sender === "me" && <div className="message-line"></div>}
              {msg.sender === "me" && (
                <div className="message-image">
                  <img src="/Assests/line.png" alt="Message Image" />
                </div>
              )}
            </div>
            {msg.sender === "me" && (
              <div className="message-options">
                <img src="/Assests/edit.png" alt="Edit" className="option-icon" />
              </div>
            )}
            {msg.sender === "other" && (
              <div className="message-options-left">
                <img src="/Assests/like.png" alt="Thumb Up" className="option-icon" />
                <img src="/Assests/unlike.png" alt="Thumb Down" className="option-icon" />
                <img src="/Assests/copy.png" alt="Copy" className="option-icon" />
                <img src="/Assests/more.png" alt="More" className="option-icon" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          className="message-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ask me Anything..."
        />
        <div className="icon-container">
          <img src="/Assests/image.png" alt="Icon 1" className="input-icon" />
          <img src="/Assests/mic.png" alt="Icon 2" className="input-icon" />
        </div>
        <button className="send-button" onClick={handleSendMessage}>
          <img src="/Assests/recording.png" alt="Send Icon" className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default Element3;
