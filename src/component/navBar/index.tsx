import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="bg-black text-white px-6 py-5 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-8 h-8" />
          </div>
          <span className="text-2xl font-semibold">InnovaRealState</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg"
                : "px-4 py-2 rounded-lg hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg"
                : "px-4 py-2 rounded-lg hover:text-gray-300"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg"
                : "px-4 py-2 rounded-lg hover:text-gray-300"
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
                ? "text-gray-300 border-2 font-medium border-purple-500 px-4 py-2 rounded-lg"
                : "px-4 py-2 border-2 font-medium border-gray-600 rounded-lg hover:text-gray-300"
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
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <span className="text-2xl font-semibold">InnovaRealState</span>
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mt-10 flex flex-col items-center space-y-6">
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg"
                : "px-4 py-2 rounded-lg hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg"
                : "px-4 py-2 rounded-lg hover:text-gray-300"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/properties"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 border-b-2 border-purple-500 px-4 py-2 rounded-lg"
                : "px-4 py-2 rounded-lg hover:text-gray-300"
            }
          >
            Properties
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? "text-gray-300 bg-purple-600 px-5 py-2 text-sm font-medium rounded-lg"
                : "border border-gray-600 px-5 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
