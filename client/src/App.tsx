import React from "react";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="w-full h-screen font-poppins bg-gray-800 flex text-white">
      <Sidebar />
      <main className="bg-gray-900 w-5/6 h-5/6 m-auto rounded-lg shadow-xl">
        <div className="p-8 w-full bg-[red]">
          <Home />
        </div>
      </main>
    </div>
  );
};

export default App;
