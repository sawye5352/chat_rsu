import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody.jsx";
import ChatInput from "./components/ChatInput";
import { getChatResponse } from "./services/chat.js";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    body: {
      history: chatHistory,
      prompt: prompt,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchChatResponse = async () => {
    setIsLoading(true);
    try {
      const response = await getChatResponse(options);
      setChatHistory([
        ...chatHistory,
        {
          role: "user",
          parts: [prompt],
        },
        {
          role: "model",
          parts: [response],
        },
      ]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex h-dvh flex-col rounded-lg">
      <ChatHeader />
      <ChatBody
        prompt={prompt}
        chatHistory={chatHistory}
        isLoading={isLoading}
      />
      <ChatInput
        prompt={prompt}
        setPrompt={setPrompt}
        isLoading={isLoading}
        fetchChatResponse={fetchChatResponse}
      />
    </div>
  );
}

export default App;
