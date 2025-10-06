import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Megaphone, UserCircle, Home, Menu, X } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const [showRoles, setShowRoles] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRoleClick = (role) => {
    navigate(`/login/${role}`);
    setShowRoles(false);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-indigo-800 border-b-2 border-blue-900 px-6 py-4 shadow-sm relative">
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          Water Safety Portal
        </h1>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 font-semibold text-lg">
          <Link
            to="/"
            className="flex items-center text-white hover:text-blue-400 transition"
          >
            <Home size={18} className="mr-1" />
            Home
          </Link>

          <Link
            to="/announcements"
            className="flex items-center text-white hover:text-blue-400 transition"
          > 
          <Megaphone size={18} className="mr-1" />
          Announcements
          </Link>

          <Link
            to="/about"
            className="flex items-center text-white hover:text-amber-400 transition"
          >
            {/* <Megaphone size={18} className="mr-1" /> */}
            About
          </Link>

          {/* Role-based Login */}
          <div className="relative">
            <button
              onClick={() => setShowRoles(!showRoles)}
              className="flex items-center text-white hover:text-green-400 transition"
            >
              <UserCircle size={18} className="mr-1" />
              Login
            </button>

            {showRoles && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                <button
                  onClick={() => handleRoleClick("admin")}
                  className="w-full text-left px-4 py-2 hover:bg-indigo-100"
                >
                  Admin
                </button>
                <button
                  onClick={() => handleRoleClick("scientist")}
                  className="w-full text-left px-4 py-2 hover:bg-indigo-100"
                >
                  Scientist / NGO Login
                </button>
                <button
                  onClick={() => handleRoleClick("public")}
                  className="w-full text-left px-4 py-2 hover:bg-indigo-100"
                >
                  Public Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-3 font-semibold text-lg bg-indigo-700 p-4 rounded-lg lg:hidden">
          <Link
            to="/"
            className="flex items-center text-white hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            <Home size={18} className="mr-1" />
            Home
          </Link>

          <Link
            to="/announcements"
            className="text-white hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Announcements
          </Link>

          <Link
            to="/about"
            className="flex items-center text-white hover:text-amber-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            <Megaphone size={18} className="mr-1" />
            About
          </Link>

          {/* Role-based Login in Mobile */}
          <div className="relative">
            <button
              onClick={() => setShowRoles(!showRoles)}
              className="flex items-center text-white hover:text-green-400 transition w-full text-left"
            >
              <UserCircle size={18} className="mr-1" />
              Login
            </button>

            {showRoles && (
              <div className="mt-2 bg-white rounded-lg shadow-lg">
                <button
                  onClick={() => handleRoleClick("admin")}
                  className="w-full text-left px-4 py-2 hover:bg-indigo-100"
                >
                  Admin
                </button>
                <button
                  onClick={() => handleRoleClick("scientist")}
                  className="w-full text-left px-4 py-2 hover:bg-indigo-100"
                >
                  Scientist / NGO Login
                </button>
                <button
                  onClick={() => handleRoleClick("public")}
                  className="w-full text-left px-4 py-2 hover:bg-indigo-100"
                >
                  Public Login
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
