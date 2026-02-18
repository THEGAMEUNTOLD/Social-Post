import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Home from './Home'
import Explore from './Explore';
import Library from './Library';
import Setting from './Setting';
import Profile from './Profile';
import Messages from './Messages';

const Main = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />

      {/* Content spacing to avoid overlap with Navbar + Sidebar */}
      <div className={` transition-all duration-300 ${open ? "ml-72" : "ml-20"}`}>
        <Routes>
          <Route path="/" element={<Home open={open} />} />
          <Route path="/Explore" element={<Explore open={open} />} />
          <Route path="/Library" element={<Library open={open} />} />
          <Route path="/Setting" element={<Setting open={open} />} />
          <Route path="/Profile" element={<Profile open={open} />} />
          <Route path="/Messages" element={<Messages open={open} />} />
        </Routes>

      </div>
    </div>
  )
}

export default Main
