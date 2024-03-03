import React from "react";

const ChatInput = ({ prompt, setPrompt, isLoading, fetchChatResponse }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isLoading || prompt.trim() === "") return;
    fetchChatResponse();
    setPrompt("");
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        autoComplete="off"
        className="px-4 py-5"
      >
        <div className="flex items-center space-x-2">
          <input
            type="text"
            name="chatInput"
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
          />
          <button
            type="submit"
            className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-500/50 disabled:hover:bg-blue-500/50"
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
