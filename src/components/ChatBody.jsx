import UserIcon from "../images/user-icon.png";
import ChatRSUIcon from "../images/chatRSU-icon.png";
import Markdown from "markdown-to-jsx";
import { useEffect, useRef } from "react";
import TypingAnimation from "./TypingAnimation";

const ChatBody = ({ chatHistory, isLoading }) => {
  const bottomOfPanelRef = useRef(null);

  useEffect(() => {
    if (bottomOfPanelRef.current) {
      bottomOfPanelRef.current.scrollIntoView();
    }
  }, [chatHistory]);

  const renderMessage = (message, index) => {
    const isUserMessage = message.role === "user";

    return (
      <div
        key={index}
        className={`flex ${isUserMessage ? "justify-end" : "justify-start"}`}
      >
        {isUserMessage ? (
          <UserMessage message={message} />
        ) : (
          <RSUMessage message={message} />
        )}
      </div>
    );
  };

  const UserMessage = ({ message }) => (
    <>
      <div ref={bottomOfPanelRef}></div>
      <div className="max-w-sm rounded-lg bg-blue-500 p-2.5 text-white">
        <Markdown>{message.parts[0]}</Markdown>
      </div>
      <img
        src={UserIcon}
        className="ml-2 h-10 w-10 rounded-full"
        alt="User Icon"
      />
    </>
  );

  const RSUMessage = ({ message }) => (
    <>
      <div ref={bottomOfPanelRef}></div>
      <img
        src={ChatRSUIcon}
        className="mr-2 h-10 w-10 rounded-full"
        alt="chatRSUIcon"
      />
      <div className="max-w-6xl rounded-lg bg-gray-800 p-2.5 text-white">
        <Markdown>{message.parts[0]}</Markdown>
      </div>
    </>
  );

  return (
    <div className="grow overflow-y-auto">
      <div className="space-y-4 px-4 py-10">
        {chatHistory.map(renderMessage)}
        {isLoading && (
          <div className="flex items-center">
            <img
              src={ChatRSUIcon}
              className="mr-2 h-10 w-10 rounded-full"
              alt="chatRSUIcon"
            />
            <TypingAnimation />
          </div>
        )}
        <div ref={bottomOfPanelRef}></div>
      </div>
    </div>
  );
};

export default ChatBody;
