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

/*
========================================
Imports Explanation
React → Core UI library
useState → Controls sidebar open/close state
Routes / Route → Client-side navigation
Navbar / Sidebar → Layout components
Page Components → Application screens
========================================
*/


// ==============================
// MAIN LAYOUT COMPONENT
// ==============================

function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /*
  ========================================
  Sidebar State Management
  isSidebarOpen → Boolean UI state
  setIsSidebarOpen → Updates sidebar visibility
  Centralized state shared by Navbar + Sidebar
  ========================================
  */

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* ==============================
          NAVIGATION AREA
      ============================== */}

      <Navbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      />

      {/*
      Navbar → Top navigation bar
      Sidebar → Expandable side navigation
      Both controlled by shared state
      Callbacks used instead of exposing setter directly
      */}


      {/* ==============================
          MAIN CONTENT AREA
      ============================== */}

      <main
        className={`
          flex-1
          transition-all duration-300
          ${isSidebarOpen ? "ml-72" : "ml-20"}
          pt-16
        `}
      >
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/library" element={<Library />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />

        </Routes>
      </main>

      {/*
      main → Primary page container
      flex-1 → Takes remaining layout space
      ml-72 / ml-20 → Responsive layout shift with sidebar
      pt-16 → Prevents navbar overlap
      transition-all → Smooth UI animation
      Routes → Defines application pages
      */}

    </div>
  );
}


// ==============================
// EXPORT
// ==============================

export default Main;

/*
========================================
Export Explanation
Allows Main layout to be used in App.jsx
Acts as root UI container for authenticated pages
========================================
*/