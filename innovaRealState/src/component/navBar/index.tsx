import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-bold text-white text-lg">U</span>
          </div>
          <span className="text-2xl font-semibold">Estatein</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
                : "px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
                : "px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
                : "px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
            }
          >
            Properties
          </NavLink>
        </div>
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 bg-purple-600 border-purple-500 px-5 py-2 text-sm font-medium rounded-lg focus:ring-2 focus:ring-purple-500"
                : "border border-gray-600 px-5 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white hover:border-gray-400 focus:ring-2 focus:ring-purple-500"
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div> 
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 space-y-4`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
              : "px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
              : "px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            isActive
              ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
              : "px-4 py-2 rounded-lg focus:ring-2 active:ring-2 focus:ring-purple-500 active:ring-purple-500"
          }
        >
          Properties
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-gray-300 bg-purple-600 border-purple-500 px-5 py-2 text-sm font-medium rounded-lg focus:ring-2 focus:ring-purple-500"
              : "border border-gray-600 px-5 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white hover:border-gray-400 focus:ring-2 focus:ring-purple-500"
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
