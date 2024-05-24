import React, { useState } from "react";
import NovislackImg from "/novislack.svg";
import MeImg from "/me.png";
import { MessageInput, MessageList } from "../ui/chat";

const NoviSlackChat = ({ user, onLogout }) => {
  const [selectedChannel, setSelectedChannel] = useState("formation");

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
  };

  const message = "Hello la team ...";

  return (
    <div className="flex-col bg-gradient-to-tl from-yellow-200 via-emerald-200 to-yellow-200">
      {/* Top section */}
      <div className="flex h-12 items-center justify-center space-x-4 py-2 relative">
        <div className="space-x-1 text-[23px]">
          <i className="ri-arrow-left-line hover:bg-slate-500/35 p-2 hover:cursor-pointer rounded-lg"></i>
          <i className="ri-arrow-right-line hover:bg-slate-500/35 p-2 hover:cursor-pointer rounded-lg"></i>
          <i className="ri-time-line hover:bg-slate-500/35 p-2 hover:cursor-pointer rounded-lg"></i>
        </div>
        {/* Search */}
        <div className="relative w-1/2">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>
          <input
            type="text"
            id="Search"
            placeholder="Rechercher dans NoviSlack"
            className="w-full rounded-md border-gray-200 py-1 px-3 shadow-sm sm:text-md bg-slate-500/50 text-gray-800 placeholder:text-gray-800 focus:outline-none focus:ring focus:ring-white/90"
          />
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
        {Boolean(user) && (
          <div
            className="absolute right-2 top-2 text-2xl text-gray-800 hover:cursor-pointer space-x-2"
            onClick={onLogout}
          >
            {/* <i className="ri-question-line"></i> */}
            <i className="ri-logout-circle-r-line"></i>
          </div>
        )}
      </div>

      {/* Channels & Direct Messages */}
      <div className="flex h-full" style={{ height: `calc(100vh - 3rem)` }}>
        {/* Dock Apps */}
        <div className="flex-col w-[80px] bg-transparent border-r border-gray-200">
          {/* Dock Apps content */}
          <div className="p-2">
            {/* Dock Apps header */}
            <div className="flex items-center justify-center mb-6 cursor-pointer">
              <img
                src={NovislackImg}
                alt="NoviSlack logo"
                className="w-8 h-8"
              />
            </div>
            {/* Main menu list */}
            <ul className="">
              <li className="text-gray-800 cursor-pointer flex-col justify-center items-center text-center mb-4">
                <div className="group">
                  <i className="ri-home-4-line text-2xl block rounded-lg group-hover:bg-slate-500/50 mx-3"></i>
                  <span className="text-[12px] font-bold">Accueil</span>
                </div>
              </li>
              <li className="text-gray-800 cursor-pointer flex-col justify-center items-center text-center mb-4">
                <div className="group">
                  <i className="ri-wechat-line text-2xl block group-hover:bg-slate-500/50 rounded-lg mx-3"></i>
                  <span className="text-[12px] font-bold">
                    Messages directs
                  </span>
                </div>
              </li>
              <li className="text-gray-800 cursor-pointer flex-col justify-center items-center text-center mb-6">
                <div className="group">
                  <i className="ri-more-fill text-2xl block group-hover:bg-slate-500/50 rounded-lg mx-3"></i>
                  <span className="text-[12px] font-bold">Plus</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden sm:block flex-none w-1/5 max-w-[400px] bg-white/80 rounded-tl-xl rounded-bl-xl border-gray-200 mb-1">
          {/* Sidebar content */}
          <div className="p-4">
            {/* Sidebar header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold ml-2">Cannaux</h2>
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none hover:bg-gray-200 rounded-lg p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H1a1 1 0 1 1 0-2h8V1a1 1 0 0 1 1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Channel list */}
            <ul className="space-y-2">
              <li
                className={`text-gray-800 rounded-lg p-1 cursor-pointer ${
                  selectedChannel === "formation"
                    ? "bg-[#97D660]/25"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleChannelChange("formation")}
              >
                <i className="ri-hashtag mr-2"></i>
                formation
              </li>
              <li
                className={`text-gray-800 rounded-lg p-1 cursor-pointer ${
                  selectedChannel === "general"
                    ? "bg-[#97D660]/25"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleChannelChange("general")}
              >
                <i className="ri-hashtag mr-2"></i>
                général
              </li>
              {/* Add more channels as needed */}
            </ul>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-grow flex flex-col mr-1 mb-1 shadow-xl origin-left">
          {/* Toolbar */}
          <div className="bg-white border-b border-gray-200 p-2 flex items-center justify-between rounded-tr-xl">
            <div className="flex items-center space-x-4">
              {/* Current channel */}
              <div className="flex items-center hover:bg-gray-100 space-x-1 p-2 rounded-lg text-xl font-bold">
                <i className="ri-hashtag"></i>
                <a className="transition" href="#">
                  {selectedChannel === "general" ? "général" : selectedChannel}
                </a>
                {/* <i className="ri-arrow-down-s-line"></i> */}
              </div>
            </div>
            <div className="relative">
              <img className="w-12 h-auto rounded-lg mr-2" src={MeImg} alt="" />
              <span className="absolute bottom-0 left-10 transform translate-y-1/4 w-4 h-4 bg-green-400 border-[4px] border-white rounded-full"></span>
            </div>
          </div>

          {/* Messages */}
          <MessageList user={user} message={message} />

          {/* Message input */}
          <MessageInput selectedChannel={selectedChannel} />
        </div>
      </div>
    </div>
  );
};

export default NoviSlackChat;
