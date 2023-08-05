import React, { useState } from "react";
import "/home/john/CloudHacks-Team11/frontend/cloudhacks-2023/src/App.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleUserInput = (inputText) => {
    const userMessage = {
      text: inputText,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Simulate bot response (replace this with your actual bot logic)
    const botResponse = {
      text: "Hello, how can I assist you?",
      sender: "bot",
    };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 800);
  };

  return (
    <div>
      <h1>Input your question here</h1>
      <div className="chatbox">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "bot" ? "bot" : "user"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <input
        className="chatbox-input"
        type="text"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            handleUserInput(e.target.value.trim());
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default Chatbot;