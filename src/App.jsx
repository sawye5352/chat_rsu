import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch"; // Adjust the path to your actual file
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody.jsx";
import ChatInput from "./components/ChatInput";

function App() {
  const [chatLog, setChatLog] = useState([]);
  const [prompt, setPrompt] = useState("");

  const { data, isLoading } = useFetch(
    prompt ? `https://rsu-ai-chat-api.onrender.com/?prompt=${prompt}` : null,
  );

  useEffect(() => {
    if (data) {
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "GPT", message: data },
      ]);
    }
  }, [data]);

  return (
    <div className="flex flex-col h-dvh rounded-lg">
      <ChatHeader />
      <ChatBody chatLog={chatLog} isLoading={isLoading} />
      <ChatInput
        setChatLog={setChatLog}
        setPrompt={setPrompt}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
