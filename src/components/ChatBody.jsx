import UserIcon from "../images/user-icon.png";
import chatRSUIcon from "../images/chatRSU-icon.png";
import Markdown from "markdown-to-jsx";
import { useEffect, useRef } from "react";

const ChatBody = ({ chatLog, isError }) => {
  const buttomOfPanelRef = useRef(null);

  useEffect(() => {
    if (buttomOfPanelRef.current) {
      buttomOfPanelRef.current.scrollIntoView();
    }
  }, [chatLog]);

  return (
    <div className="grow overflow-y-auto">
      <div className="space-y-4 px-4 py-10">
        {isError && (
          <div className="mt-[200px] text-center text-2xl">
            The service is unavaliable. Please try again.
          </div>
        )}
        {!isError &&
          chatLog.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.type === "user" ? (
                <>
                  <div className="max-w-sm rounded-lg bg-blue-500 p-2 text-white">
                    <Markdown>{message.message}</Markdown>
                  </div>
                  <img
                    src={UserIcon}
                    className="ml-2 h-10 w-10 rounded-full"
                    alt="User Icon"
                  />
                </>
              ) : (
                <>
                  <img
                    src={chatRSUIcon}
                    className="mr-2 h-10 w-10 rounded-full"
                    alt="chatRSUIcon"
                  />
                  <div className="max-w-6xl rounded-lg bg-gray-800 p-2 text-white">
                    <Markdown>{message.message}</Markdown>
                  </div>
                </>
              )}
            </div>
          ))}
        <div ref={buttomOfPanelRef}></div>
      </div>
    </div>
  );
};

export default ChatBody;
