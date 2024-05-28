import React, { useState } from "react";

const MessageInput = ({ selectedChannel, onSend }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("ON_SEND");
      onSend(event.target.value);
      console.log("TEXT : ", event.target.value);
      // event.target.value = "";
      setInputValue("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ON_SEND");
    onSend(inputValue);
    console.log("TEXT : ", inputValue);
    // event.target.value = "";
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-t border-gray-200 p-4 border-r rounded-br-xl"
    >
      <input
        type="text"
        placeholder={`Envoyer un message ${
          selectedChannel
            ? selectedChannel === "general"
              ? "# général"
              : ` # ${selectedChannel}`
            : ""
        }`}
        className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring focus:ring-sky-200/90 focus:border-sky-500 relative"
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* Add WYSIWYG functionality here */}
      <button
        type="submit"
        className={`absolute right-6 bottom-6 p-2 text-gray-600 rounded-full cursor-pointer ${
          inputValue ? "text-sky-500 hover:text-sky-600" : ""
        }`}
      >
        <svg
          className="w-5 h-5 rotate-90 rtl:-rotate-90"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
        </svg>
      </button>
    </form>
  );
};

export default MessageInput;
