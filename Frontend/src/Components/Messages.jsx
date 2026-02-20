import React, { useState, useEffect, useRef } from "react";
import profile from "../assets/profile.jpg";

const Messages = () => {
  const [activeView, setActiveView] = useState("default");
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [note, setNote] = useState("");

  const bottomRef = useRef(null);

  const WORD_LIMIT = 20;
  const wordCount = note.trim() ? note.trim().split(/\s+/).length : 0;

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Satwik Raj",
      username: "stwkraj",
      img: "https://i.pravatar.cc/150?img=12",
      lastMsg: "You: Respected Sir, I am Bharat..",
      time: "17h",
      messages: [
        { fromMe: true, text: "Respected Sir, I am Bharat Choudhary..." },
        { fromMe: false, text: "Great to hear about your progress!" }
      ]
    },
    {
      id: 2,
      name: "Harsh Vandana Sharma",
      username: "harshdev",
      img: "https://i.pravatar.cc/150?img=33",
      lastMsg: "You: Thank you so",
      time: "1d",
      messages: [
        { fromMe: false, text: "Hey Bharat! How is your progress?" },
        { fromMe: true, text: "Going great sir, learning daily." }
      ]
    }
  ]);

  const openChat = (user) => {
    setSelectedUser(user);
    setActiveView("chat");
  };

  const sendMessage = () => {
    if (!messageInput.trim()) return;

    const updatedUsers = users.map((user) => {
      if (user.id === selectedUser.id) {
        return {
          ...user,
          lastMsg: `You: ${messageInput}`,
          messages: [
            ...user.messages,
            { fromMe: true, text: messageInput }
          ]
        };
      }
      return user;
    });

    setUsers(updatedUsers);

    const updatedSelected = updatedUsers.find((u) => u.id === selectedUser.id);
    setSelectedUser(updatedSelected);
    setMessageInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser?.messages]);

  return (
    <div className="flex h-screen mt-14 bg-black text-white">

      {/* LEFT SIDEBAR */}
      <div className="w-[380px] border border-white flex flex-col">

        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b border-gray-800'>
          <h2 className='font-semibold text-lg'>
            itbharatchoudhary <i class="ri-arrow-down-s-line"></i>
          </h2>
          <button className='text-gray-300 cursor-pointer hover:text-white text-xl'>
            <i class="ri-edit-box-line"></i>
          </button>
        </div>

        {/* Search */}
        <div className="p-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 px-4 py-2 rounded-lg outline-none  " />
        </div>

        {/* Notes Section */}
        <div className="px-4 pt-2 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              setActiveView("note");
              setSelectedUser(null);
            }}>
            <div className="relative">
              <div className="w-16 h-16 rounded-full cursor-pointer bg-gray-900 border border-gray-700 overflow-hidden flex items-center justify-center">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-3 left-8 bg-gray-800 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                Your thoughts go here...
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Your note..</p>
            </div>
          </div>
        </div>

        {/* Messages Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <h3 className="text-lg font-bold">Messages</h3>
          <button className="text-gray-400 cursor-pointer hover:text-white">
            Requests
          </button>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => openChat(user)}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-900
              ${selectedUser?.id === user.id ? "bg-gray-900" : ""}`}
            >
              <img src={user.img} className="w-12 h-12 rounded-full" />

              <div className="flex-1">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-400 truncate">
                  {user.lastMsg}
                </p>
              </div>

              <p className="text-xs text-gray-500">{user.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT-SECTION */}
      <div className="flex-1 ">

        {/* DEFAULT SCREEN */}
        {activeView === "default" && (
          <div className="h-full flex items-center justify-center text-center">
            <div>
              <div className="w-20 h-20 border-2 border-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-send-ins-line text-4xl"></i>
              </div>
              <h2 className="text-xl font-semibold">Your messages</h2>
              <p className="text-gray-400 mt-1">Send a message to start a chat.</p>
            </div>
          </div>
        )}

        {/*  NOTE */}
        {activeView === "note" && (
          <div className="h-full w-full bg-gradient-to-b from-black to-gray-900 flex flex-col">

            <div className="flex items-center justify-between border border-white px-6 py-4">
              <button
                onClick={() => setActiveView("default")}
                className=" cursor-pointer text-white text-2xl"
              >
                ✕
              </button>

              <h2 className="text-lg font-semibold">New note</h2>

              <button
                disabled={!note.trim()}
                className={` cursor-pointer font-semibold ${note.trim() ? "text-blue-600" : "text-blue-400"
                  }`}
              >
                Share
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">

              <div className="relative flex flex-col items-center">

                <div className="w-28 h-28 rounded-full bg-gray-800 overflow-hidden border border-gray-700 flex items-center justify-center">
                  <img
                    src={profile}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -top-10 bg-gray-800 px-6 py-3 rounded-2xl shadow-lg min-w-[220px]">
                  <input
                    value={note}
                    onChange={(e) => {
                      const value = e.target.value;
                      const words = value.trim() ? value.trim().split(/\s+/) : [];
                      if (words.length <= WORD_LIMIT) setNote(value);
                    }}
                    placeholder="Today's vibe..."
                    className="bg-transparent outline-none text-center w-full text-gray-200 placeholder-gray-500"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                </div>

                <p className="text-xs text-gray-500 mt-10">
                  {wordCount}/{WORD_LIMIT} words
                </p>
              </div>

              <button className="mt-6 w-10 h-10  cursor-pointer rounded-full bg-gray-800 flex items-center justify-center text-xl">
                🙂
              </button>
            </div>

            <div className="pb-12 text-center text-sm text-gray-400">
              Shared with followers you follow back
            </div>
          </div>
        )}

        {/* CHAT VIEW */}
        {activeView === "chat" && selectedUser && (
          <div className="h-full flex flex-col">

            {/* Header */}
            <div className="h-16 px-4 border-b border-gray-800 flex items-center gap-3">
              <img
                src={selectedUser.img}
                className="w-10 h-10 rounded-full cursor-pointer object-cover"
              />
              <div>
                <h2 className="font-semibold leading-none">{selectedUser.name}</h2>
                <p className="text-xs text-gray-400">Active now</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {selectedUser.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm leading-relaxed
                  ${msg.fromMe ? "bg-blue-600 ml-auto" : "bg-gray-800"}`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={bottomRef}></div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800 flex items-center gap-3">
              <input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-gray-900 px-4 py-2.5 rounded-full outline-none text-sm"
                placeholder="Message..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 px-5 py-2.5 cursor-pointer rounded-full text-sm font-medium"
              >
                Send
              </button>
            </div>

          </div>
        )}

      </div>
    </div >
  );
};
export default Messages;