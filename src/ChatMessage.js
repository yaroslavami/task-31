import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ username, message, date }) => {
  return (
    <div className="chat-message">
      <p><strong>{username}</strong>: {message}</p>
      <span className="date">{new Date(date).toLocaleString()}</span>
    </div>
  );
};

export default ChatMessage;
