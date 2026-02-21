// ==============================
// IMPORTS
// ==============================

import React from "react";
import "remixicon/fonts/remixicon.css";
import profile from "../assets/profile.jpg";

// React → UI library
// Remix Icon → Icon font library
// profile → User avatar image


// ==============================
// NAVBAR COMPONENT
// ==============================

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-black text-white border-b border-white/20 backdrop-blur-xl z-50">

      {/* ==============================
          LEFT SECTION (LOGO + MENU)
      ============================== */}

      <div className="flex items-center gap-4">

        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(prev => !prev)}
          className="text-2xl opacity-80 hover:opacity-100 transition"
          aria-label="Toggle sidebar"
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* App Logo / Title */}
        <div className="font-semibold text-lg tracking-wide">
          Social-Post
        </div>

      </div>

      {/* Toggle button → Opens/closes sidebar
         Logo → Branding or app name */}


      {/* ==============================
          SEARCH SECTION
      ============================== */}

      <div className="w-[400px] max-w-[40vw] hidden md:block">
        <div className="flex items-center gap-3 border border-white/30 rounded-xl px-4 py-2 bg-white/5 backdrop-blur-md">
          <i className="ri-search-line opacity-60"></i>

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-sm placeholder:text-white/50"
          />
        </div>
      </div>

      {/* Responsive search bar
         Hidden on small screens
         Styled input container */}


      {/* ==============================
          RIGHT SECTION (ACTIONS + USER)
      ============================== */}

      <div className="flex items-center gap-6">

        {/* Create Post Button */}
        <button
          className="text-xl opacity-80 hover:opacity-100 transition"
          aria-label="Create post"
        >
          <i className="ri-add-large-fill"></i>
        </button>

        {/* User Avatar */}
        <div
          className={`
            flex items-center
            ${isSidebarOpen ? "gap-3 px-3 py-2" : "justify-center"}
            rounded-xl hover:bg-white/5 transition
          `}
        >
          <img
            src={profile}
            alt="User profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

      </div>

      {/* Action button → Example primary action
         Avatar → User identity / profile access */}

    </header>
  );
}


// ==============================
// EXPORT
// ==============================

export default Navbar;

// Allows Navbar to be used inside Main layout