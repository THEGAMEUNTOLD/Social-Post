// ==============================
// IMPORTS
// ==============================

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Home from "./Home";
import Explore from "./Explore";
import Library from "./Library";
import Setting from "./Setting";
import Profile from "./Profile";
import Messages from "./Messages";

// React → UI library
// useState → Manages sidebar open/close state
// Routes & Route → Handles page navigation
// UI Components → Layout structure
// Page Components → Individual screens


// ==============================
// MAIN LAYOUT COMPONENT
// ==============================

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // isSidebarOpen → Controls sidebar visibility
  // setIsSidebarOpen → Function to toggle sidebar state

  return (
    <div className="flex">

      {/* ==============================
          NAVIGATION COMPONENTS
      ============================== */}

      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Navbar → Top navigation bar
         Sidebar → Side navigation panel
         Both receive state to control UI behavior */}


      {/* ==============================
          MAIN CONTENT AREA
      ============================== */}

      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-72" : "ml-20"} pt-16`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/library" element={<Library />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </main>

      {/* main → Primary content container
         ml-72 / ml-20 → Adjusts layout when sidebar expands/collapses
         pt-16 → Prevents overlap with navbar
         transition-all → Smooth animation for layout shift
         Routes → Defines application pages */}

    </div>
  );
}


// ==============================
// EXPORT
// ==============================

export default Main;

// Makes component usable in App.jsx