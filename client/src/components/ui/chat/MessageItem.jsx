import React from "react";
import NovislackImg from "/novislack.svg";

const MessageItem = ({ user, message }) => {
  // TODO : Add user prop in className

  return (
    <div
      className={`flex ${
        message.user === user ? "justify-end" : "justify-start"
      } items-start space-x-2 hover:bg-gray-100/50 px-4 py-2`}
    >
      <img
        src={NovislackImg}
        alt="User Avatar"
        className="w-auto h-8 rounded-full"
      />
      <div className="grid">
        <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
          {message.user}
        </h5>
        <div className="w-max grid">
          <div
            className={`px-3.5 py-2 ${
              message.user === user ? "bg-lime-100" : "bg-gray-100"
            }  rounded justify-start  items-center gap-3 inline-flex`}
          >
            <h5 className="text-gray-900 text-sm font-normal leading-snug">
              {message.text}
            </h5>
          </div>
          <div className="justify-end items-center inline-flex mb-2.5">
            <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
              23:41 PM
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
