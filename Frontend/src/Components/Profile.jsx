// ======================================================
// PROFILE COMPONENT - Instagram Style
// ======================================================
// This component displays a user's profile like Instagram.
// Features:
// 1. Profile header: avatar, username, verified badge, stats, bio
// 2. Story highlights (scrollable, like Instagram)
// 3. Tabs navigation: Posts, Saved, Reels, Tagged
// 4. Dynamic content grid based on selected tab
// ======================================================

import React, { useState } from "react";
import { FaTh, FaBookmark, FaUserTag, FaFilm, FaCheckCircle } from "react-icons/fa";
import { user, postsData, savedData, reelsData, taggedData } from "../Database/data";
import profileImage from "../assets/profile.jpg"; // Your local profile image

const Profile = () => {
  // ======================================================
  // STATE - Active tab to show content
  // ======================================================
  const [activeTab, setActiveTab] = useState("posts");

  // ======================================================
  // FUNCTION - Render Tab Content dynamically
  // ======================================================
  const renderTabContent = () => {
    let data = [];
    let isVideo = false;

    switch (activeTab) {
      case "posts":
        data = postsData;
        break;
      case "saved":
        data = savedData;
        break;
      case "reels":
        data = reelsData;
        isVideo = true;
        break;
      case "tagged":
        data = taggedData;
        break;
      default:
        data = [];
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {data.map((item) => (
          <div
            key={item.id}
            className="aspect-square bg-gray-900 overflow-hidden group cursor-pointer relative"
          >
            {isVideo ? (
              <video
                src={item.video}
                controls
                className="w-full h-full object-cover group-hover:opacity-80 transition"
              />
            ) : (
              <img
                src={item.image}
                alt={`${activeTab} ${item.id}`}
                className="w-full h-full object-cover group-hover:opacity-80 transition"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ================================================== */}
      {/* PROFILE HEADER */}
      {/* Displays avatar, username, verified badge, stats, bio */}
      {/* ================================================== */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-700">
            <img
              src={profileImage}
              alt={`${user.username} profile`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            {/* Username + Verified + Buttons */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <FaCheckCircle className="text-blue-500" />
              <button className="px-5 py-1.5 bg-gray-800 rounded-md text-sm hover:bg-gray-700">
                Edit profile
              </button>
              <button className="px-5 py-1.5 bg-gray-800 rounded-md text-sm hover:bg-gray-700">
                View archive
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-4 text-sm flex-wrap">
              <span><strong>{user.posts}</strong> posts</span>
              <span className="cursor-pointer"><strong>{user.followers}</strong> followers</span>
              <span className="cursor-pointer"><strong>{user.following}</strong> following</span>
            </div>

            {/* Bio */}
            <div className="text-sm whitespace-pre-line text-gray-300">
              <p className="font-semibold text-white">{user.fullName}</p>
              {user.bio}
            </div>
          </div>
        </div>
      </div>

      {/* ================================================== */}
      {/* STORY HIGHLIGHTS */}
      {/* Instagram-style story highlights */}
      {/* ================================================== */}
      <div className="max-w-5xl mx-auto px-6 mt-10 flex gap-6 overflow-x-auto scrollbar-hide">
        {/* Add New Story */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center text-2xl text-gray-400">
            +
          </div>
          <span className="text-xs text-gray-400">New</span>
        </div>

        {/* User Highlights */}
        {user.highlights?.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full border border-gray-700 overflow-hidden">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs text-gray-400">{story.title}</span>
          </div>
        ))}
      </div>

      {/* ================================================== */}
      {/* TABS NAVIGATION */}
      {/* Posts | Saved | Reels | Tagged */}
      {/* ================================================== */}
      <div className="max-w-5xl mx-auto mt-10 border-t border-gray-800">
        <div className="flex justify-center gap-10 text-sm py-4 text-gray-400">
          {[
            { key: "posts", icon: <FaTh />, label: "POSTS" },
            { key: "saved", icon: <FaBookmark />, label: "SAVED" },
            { key: "reels", icon: <FaFilm />, label: "REELS" },
            { key: "tagged", icon: <FaUserTag />, label: "TAGGED" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`flex items-center gap-2 pt-4 ${
                activeTab === tab.key ? "text-white border-t border-white" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================================================== */}
      {/* TAB CONTENT */}
      {/* Dynamic grid content based on active tab */}
      {/* ================================================== */}
      <div className="max-w-5xl mx-auto px-6 pb-20 mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Profile;