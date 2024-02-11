import UserIcon from "../images/soe_gyi.jpg";
import GPTIcon from "../images/chatgpt-icon.svg";
import Markdown from "markdown-to-jsx";

const ChatBody = ({ chatLog }) => {
  return (
    <div className="grow overflow-y-auto">
      <div className="space-y-4 px-4 py-10">
        {chatLog.map((message, index) => (
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
                  src={GPTIcon}
                  className="mr-2 h-10 w-10 rounded-full"
                  alt="GPT Icon"
                />
                <div className="max-w-5xl rounded-lg bg-gray-800 p-2 text-white">
                  <Markdown>{message.message}</Markdown>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBody;
