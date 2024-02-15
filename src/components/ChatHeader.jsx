import React from "react";
import RSULogo from "../images/rsu_logo.jpg";
import Bin from "../images/bin.svg";

const ChatHeader = () => {
  return (
    <div className="mx-3 flex justify-between border-b border-gray-200 px-4 py-3">
      <img src={RSULogo} className="w-[120px] bg-white" alt="" />
      <button
        onClick={() => {
          window.localStorage.clear();
          window.location.reload();
        }}
        className="flex items-center justify-center gap-1 rounded-lg bg-red-800 px-2"
      >
        <img src={Bin} alt="" />
        <p className="text-white">Clear Session</p>
      </button>
    </div>
  );
};

export default ChatHeader;
