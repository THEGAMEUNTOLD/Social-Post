// ======================================================
// IMPORTS
// ======================================================

// Core React library (required for JSX)
import React from "react";

// Router provider for client-side navigation
import { BrowserRouter } from "react-router-dom";

// Root layout / route controller of the application
import Main from "./components/Main";

/*
This section imports:
• React → Enables component creation and JSX rendering
• BrowserRouter → Handles navigation without page reload
• Main → Central component where routes and pages live
*/


// ======================================================
// ROOT APPLICATION COMPONENT
// ======================================================

function App() {
  return (
    <BrowserRouter>
      {/* 
        Router wrapper enables SPA navigation.
        All pages/components inside can use routing features.
      */}

      <div className="min-h-screen bg-black">
        {/*
          Layout container:
          • min-h-screen → Full viewport height
          • bg-black → Global background color
        */}

        <Main />
        {/*
          Main component acts as:
          • Route manager
          • Page renderer
          • Core UI structure
        */}
      </div>

    </BrowserRouter>
  );
}

/*
App Component Responsibilities:
• Provides global routing context
• Defines global layout styling
• Renders application entry UI
*/


// ======================================================
// EXPORT
// ======================================================

export default App;

/*
Export allows this component to be used in:
index.js → ReactDOM renders <App /> into the DOM
*/