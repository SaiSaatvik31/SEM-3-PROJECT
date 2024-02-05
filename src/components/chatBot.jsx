import React, { useState } from "react";
import Navbar from "./Navbar";
function ChatBot() {
  const [messages, setMessages] = useState([]);

  const handleUserInput = async (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "user" },
    ]);

    const botResponse = await getBotResponse(message);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, type: "bot" },
    ]);
  };

  const getBotResponse = async (userMessage) => {
    try {
      const m_response = await fetch("/flask/chatBot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage }),
      });
      const data = await m_response.json();
      return data.response;
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Error occurred during response";
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          width: "100%",
          maxWidth: "100%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            marginBottom: "15px",
            overflowY: "auto",
            maxHeight: "calc(100% - 60px)",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                textAlign: msg.type === "user" ? "right" : "left",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  borderRadius: "15px",
                  backgroundColor: msg.type === "user" ? "#5cb85c" : "#337ab7",
                  color: "#fff",
                  display: "inline-block",
                  maxWidth: "70%",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <input
          className="mb-5"
          type="text"
          placeholder="Type your message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUserInput(e.target.value);
              e.target.value = "";
            }
          }}
          style={{
            width: "97%",
            padding: "10px",
            boxSizing: "border-box",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            outline: "none",
            position: "fixed",
            bottom: 0,
          }}
        />
      </div>
    </div>
  );
}

export default ChatBot;
