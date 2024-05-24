import React, { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import MessageItemMe from "./MessageItemMe";

const MessageList = ({ user, message }) => {
  return (
    <div className="flex-grow overflow-y-auto bg-white">
      <div className="flex flex-col gap-2 mb-4">
        {/* Message components */}
        <MessageItem user={user} message={message} />
        <MessageItemMe user={user} message={message} />
      </div>
    </div>
  );
};

export default MessageList;
