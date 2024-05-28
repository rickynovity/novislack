import React, { useState } from "react";
import NovislackImg from "/novislack.svg";
import MeImg from "/me.png";
import { MessageInput, MessageList } from "../ui/chat";
import {
  useAddChannel,
  useAddMessage,
  useChannels,
  useMessages,
  useDeleteChannel,
} from "../../lib/graphql/hooks";
import Modal from "react-modal";

const NoviSlackChat = ({ user, onLogout }) => {
  const [selectedChannel, setSelectedChannel] = useState("formation");
  const { channels, loading, error } = useChannels();
  const { addChannel } = useAddChannel();
  const { deleteChannel } = useDeleteChannel();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");

  const handleChannelChange = (channel) => {
    setSelectedChannel(channel);
  };

  const handleAddChannel = async (channelName) => {
    console.log("Ajout du canal:", channelName);
    await addChannel(channelName);
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddChannel(newChannelName);
  };

  const { messages } = useMessages();
  const { addMessage } = useAddMessage();

  const handleSend = async (text) => {
    const message = await addMessage(text);
    console.log("Message added:", message);
  };

  const handleDeleteChannel = async (channelId) => {
    console.log("CCHHCHCH : ", channelId);
    await deleteChannel(channelId);
    if (selectedChannel === channelId) {
      setSelectedChannel("general");
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ajouter un nouveau canal"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Ajouter un nouveau canal</h2>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="channelName"
                className="block text-sm font-medium text-gray-700"
              >
                Nom du canal
              </label>
              <input
                type="text"
                id="channelName"
                value={newChannelName}
                onChange={(e) => setNewChannelName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Entrez le nom du canal"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </Modal>
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
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
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
                <button
                  onClick={openModal}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none hover:bg-gray-200 rounded-lg p-2"
                >
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
                {channels.map((channel) => (
                  <li
                    key={channel.id}
                    className={`text-gray-800 rounded-lg p-1 cursor-pointer ${
                      selectedChannel === channel.name
                        ? "bg-[#97D660]/25"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleChannelChange(channel.name)}
                  >
                    <i className="ri-hashtag mr-2"></i>
                    {channel.name}
                    <i
                      className="ri-close-fill float-right cursor-pointer"
                      onClick={() => handleDeleteChannel(channel.id)}
                    ></i>
                  </li>
                ))}
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
                    {selectedChannel === "general"
                      ? "général"
                      : selectedChannel}
                  </a>
                  {/* <i className="ri-arrow-down-s-line"></i> */}
                </div>
              </div>
              <div className="relative">
                <img
                  className="w-12 h-auto rounded-lg mr-2"
                  src={MeImg}
                  alt=""
                />
                <span className="absolute bottom-0 left-10 transform translate-y-1/4 w-4 h-4 bg-green-400 border-[4px] border-white rounded-full"></span>
              </div>
            </div>

            {/* Messages */}
            <MessageList user={user} messages={messages} />

            {/* Message input */}
            <MessageInput
              selectedChannel={selectedChannel}
              onSend={handleSend}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoviSlackChat;
