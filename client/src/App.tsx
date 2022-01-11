import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-800">
      <Sidebar />
    </div>
  );
};

export default App;
