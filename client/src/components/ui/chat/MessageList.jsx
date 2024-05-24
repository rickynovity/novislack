import React, { useEffect, useRef } from "react";
import MessageItem from "./MessageItem";
import MessageItemMe from "./MessageItemMe";

const MessageList = ({ user, messages }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // scroll to bottom to make the last message visible
      container.scrollTo(0, container.scrollHeight);
    }
  }, [messages]);
  return (
    <div className="flex-grow overflow-y-auto bg-white">
      <div className="flex flex-col gap-2 mb-4">
        {/* Message components */}
        {messages.map((message) => (
          <MessageItem key={message.id} user={user} message={message} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
