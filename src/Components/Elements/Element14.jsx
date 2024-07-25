import React, { useState } from 'react';
import './Element14.scss';

const Element14 = () => {
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      console.log('Message sent:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-header">
        <img src="/Assests/newA.png" alt="Icon" className="header-icon" />
        <div className="header-text">
          <h5 className="header-heading">Test AI</h5>
          <p className="header-paragraph">Replies Instantly...</p>
        </div>
      </div>
      <div className="whatsapp-body">
        <p className="whatsapp-message">Hey!<br />How can I help you today?</p>
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

export default Element14;
