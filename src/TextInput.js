import React, { useState, useRef } from 'react';

const TextInput = ({ onSendMessage }) => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (file) {
      onSendMessage(username, file.name);
    } else {
      onSendMessage(username, message);
    }
    setUsername('');
    setMessage('');
    fileInputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім'я користувача"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Повідомлення"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="file"
        ref={fileInputRef}
      />
      <button type="submit">Відправити</button>
    </form>
  );
};

export default TextInput;
