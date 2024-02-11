import React from "react";
import RSULogo from "../images/rsu_logo.jpg";

const ChatHeader = () => {
  return (
    <div className="flex justify-center items-end space-x-3 border-b border-gray-200 px-4 py-3">
      <img src={RSULogo} className="w-[120px] bg-white" alt="" />
    </div>
  );
};

export default ChatHeader;
