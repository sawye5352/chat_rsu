import React, { useState } from "react";
import LoadingAnimation from "./LoadingAnimation.jsx";

const ChatInput = ({ setChatLog, setPrompt, isLoading }) => {
  const [input, setInput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if the input is empty before updating state
    if (input.trim() !== "" && !isLoading) {
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "user", message: input },
      ]);
      setPrompt(input);
      setInput("");
    }
  };

  return (
    <div>
      {/* Chat Input */}
      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        className="px-4 py-5"
      >
        {isLoading && <LoadingAnimation />}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            name="chatInput"
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
