// ==============================
// IMPORTS
// ==============================

import React from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../assets/profile.jpg";

// React → UI library
// Link → Client-side navigation (no page reload)
// useLocation → Detects current route for active styling
// profile → User avatar image


// ==============================
// SIDEBAR COMPONENT
// ==============================

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
    const location = useLocation();

    // location.pathname → Current URL path
    // Used to highlight active navigation item


    // ==============================
    // NAVIGATION ITEM COMPONENT
    // ==============================

    function NavItem({ icon, label, to }) {
        const isActive = location.pathname === to;

        return (
            <Link
                to={to}
                className={`w-full flex items-center ${isSidebarOpen ? "gap-4 px-4" : "justify-center"} py-2 transition-all duration-30`}>

                {/* Icon Container */}
                <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition ${isActive ? "bg-white text-black" : "hover:bg-white/5"}`}>
                    <i className={`${icon} text-xl`}></i>
                </div>

                {/* Label */}
                <span
                    className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${isSidebarOpen ? "opacity-100 max-w-[180px]" : "opacity-0 max-w-0"}`}>
                    {label}
                </span>
            </Link>
        );
    }

    // NavItem → Reusable navigation button
    // isActive → Highlights current page
    // Label hides when sidebar is collapsed


    return (
        <aside
            onMouseEnter={() => setIsSidebarOpen(true)}
            onMouseLeave={() => setIsSidebarOpen(false)}
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-black text-white border-r border-white/20 p-3 flex flex-col transition-all duration-300 ease-in-out z-40 ${isSidebarOpen ? "w-72" : "w-20 items-center"}`}>

            {/* ==============================
          NAVIGATION SECTION
      ============================== */}

            <nav className="w-full space-y-2">
                <NavItem icon="ri-home-5-fill" label="Home" to="/" />
                <NavItem icon="ri-compass-3-line" label="Explore" to="/explore" />
                <NavItem icon="ri-send-plane-line" label="Messages" to="/messages" />
                <NavItem icon="ri-heart-line" label="Notifications" to="/notifications" />
                <NavItem icon="ri-add-line" label="Create" to="/create" />
                <NavItem icon="ri-bookmark-fill" label="Library" to="/library" />
                <NavItem icon="ri-settings-5-line" label="Settings" to="/setting" />
            </nav>

            {/* Navigation → Main app pages
         Icons + labels
         Auto expands on hover */}


            {/* ==============================
          PROFILE SECTION
      ============================== */}

            <div className="mt-auto w-full pt-4">
                <Link
                    to="/profile"
                    className={`w-full flex items-center ${isSidebarOpen ? "gap-3 px-3 py-2" : "justify-center py-2"} rounded-xl hover:bg-white/5 transition`}>
                    <img
                        src={profile}
                        alt="User profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <span
                        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isSidebarOpen ? "opacity-100 max-w-[140px]" : "opacity-0 max-w-0"}`}>
                        Bharat
                    </span>
                </Link>
            </div>

            {/* Profile → User identity access
         Stays at bottom using mt-auto */}

        </aside>
    );
}


// ==============================
// EXPORT
// ==============================

export default Sidebar;

// Makes Sidebar available to Main layout