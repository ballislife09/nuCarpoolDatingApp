import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // This must exist for TailwindCSS
import App from "./App.tsx"; // Ensure App.tsx exists in src folder

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
