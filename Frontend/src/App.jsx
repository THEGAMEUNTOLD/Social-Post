// ==============================
// IMPORTS
// ==============================

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

// React → Core library for building UI
// BrowserRouter → Enables routing/navigation in the app
// Main → Root component that contains all app pages/components


// ==============================
// ROOT APP COMPONENT
// ==============================

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Main />
      </div>
    </BrowserRouter>
  );
}

// BrowserRouter wraps the entire application
// → Allows navigation without page reload
// min-h-screen → Ensures full viewport height
// bg-black → Applies global background styling
// Main component → Central place for routes/pages


// ==============================
// EXPORT
// ==============================

export default App;

// Makes App available for rendering in index.js