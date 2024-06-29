import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import TextInput from './TextInput';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (username, message) => {
    const newMessage = {
      id: messages.length + 1,
      username,
      message,
      date: new Date().toISOString()
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            username={msg.username}
            message={msg.message}
            date={msg.date}
          />
        ))}
      </div>
      <TextInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
