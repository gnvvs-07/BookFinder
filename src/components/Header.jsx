import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full p-6 bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 shadow-lg rounded-b-3xl">
      {/* Left side - Logo / Home Link */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105">
          <span className="text-xl font-bold text-gray-800">A</span>
        </div>
        <p className="text-3xl font-semibold text-white hover:text-gray-200 transform transition-all duration-300 ease-in-out">
          Alex
        </p>
      </Link>
    </div>
  );
}
