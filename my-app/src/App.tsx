import React from "react";
import CarpoolCard from "./CarpoolCard.tsx";
import "./index.css";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <CarpoolCard />
    </div>
  );
}

export default App;
