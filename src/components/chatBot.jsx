import React, { useState } from "react";

function ChatBot() {
  const [messages, setMessages] = useState([]);

  const handleUserInput = (message) => {
    // Simulate a response from the chat bot
    const botResponse = getBotResponse(message);

    // Update the messages state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "user" },
      { text: botResponse, type: "bot" },
    ]);
  };

  const getBotResponse = (userMessage) => {
    // In a real application, you would send the user's message to a server for processing
    // and get a meaningful response. For simplicity, let's use a basic example.

    // Simulate a simple response based on user input
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I assist you?";
    } else if (userMessage.toLowerCase().includes("goodbye")) {
      return "Goodbye! Have a great day!";
    } else {
      return "I'm sorry, I didn't understand that.";
    }
  };

  return (
    <div>
      <h1>Chat BOT DEMONSTRATION</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          minHeight: "200px",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
            overflowY: "auto",
            maxHeight: "150px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                marginBottom: "5px",
                textAlign: msg.type === "user" ? "right" : "left",
              }}
            >
              <span
                style={{
                  padding: "5px",
                  backgroundColor: msg.type === "user" ? "#5cb85c" : "#337ab7",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUserInput(e.target.value);
              e.target.value = "";
            }
          }}
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>
    </div>
  );
}

export default ChatBot;
