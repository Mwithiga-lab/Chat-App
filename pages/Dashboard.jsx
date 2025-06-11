import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ChatPage from "../components/ChatPage";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4 overflow-y-auto flex-1">
          <Routes>
            <Route path="" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;