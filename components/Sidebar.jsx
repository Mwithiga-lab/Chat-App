import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 font-bold text-lg">Chat App</div>
      <nav className="flex-1 px-2">
        <NavLink to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
          Chat
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;