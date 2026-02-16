import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Main = () => {
    
    const [open,setOpen] = useState(false)

  return (
    <div>
      <Navbar open={open} setOpen={setOpen}  />
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  )
}

export default Main
