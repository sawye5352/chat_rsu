import React, { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useQuery } from "react-query";
import axios from "axios";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody.jsx";
import ChatInput from "./components/ChatInput";

function App() {
  const [chatLog, setChatLog] = useLocalStorage("chatLog", []);
  const [prompt, setPrompt] = useState("");

  const { isLoading, isError, data } = useQuery(
    ["chatsLogs", prompt],
    () =>
      axios
        .get(`https://rsu-ai-chat-api.onrender.com/?prompt=${prompt}`)
        .then((res) => res.data),
    {
      enabled: !!prompt,
    },
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
    <div className="flex h-dvh  flex-col rounded-lg">
      <ChatHeader />
      <ChatBody chatLog={chatLog} isError={isError} />
      <ChatInput
        setChatLog={setChatLog}
        setPrompt={setPrompt}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
