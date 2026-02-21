// ==============================
// IMPORTS
// ==============================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// React → Core library
// ReactDOM → Renders React app into browser DOM
// App → Root component of application
// index.css → Global styles (Tailwind or custom CSS)


// ==============================
// ROOT DOM ELEMENT
// ==============================

const rootElement = document.getElementById("root");

// Selects the HTML container where React will mount the app
// This div exists inside index.html


// ==============================
// CREATE ROOT + RENDER APP
// ==============================

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// createRoot → React 18 rendering API
// StrictMode → Development tool that detects potential issues
// App → Starting point of entire UI