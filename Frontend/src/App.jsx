import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Main'

const App = () => {
  return (
    <Router>
      <div className="h-auto bg-black">
        <Main />
      </div>
    </Router>
  )
}

export default App
