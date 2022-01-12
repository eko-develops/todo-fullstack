import React from "react";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Pomodoro from "./components/Pomodoro";
import Calendar from "./components/Calendar";
import { useTodosQuery, useUsersQuery } from "./generated/graphql";

const App: React.FC = () => {
  // const { loading, error, data } = useTodosQuery();
  const { loading, error, data } = useUsersQuery();

  console.log(loading, error, data);

  return (
    <div className="w-full h-screen font-poppins bg-gray-800 flex text-white">
      <Sidebar />
      <main className="bg-gray-900 w-5/6 h-5/6 m-auto rounded-lg shadow-xl">
        <div className="p-8 w-full h-full">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="todos" element={<Todos />}></Route>
            <Route path="pomodoro" element={<Pomodoro />}></Route>
            <Route path="calendar" element={<Calendar />}></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
