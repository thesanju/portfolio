import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/ibm-plex-mono";

const Navbar = React.memo(function Navbar({ isActive }) {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-50">
      <div className="bg-[rgba(188,188,188,1)] text-black rounded-lg py-1 px-6 flex justify-between items-center h-10">
        <Link
          to="/"
          className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
        >
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-b-[9px] border-b-gray-500 border-r-[6px] border-r-transparent transform rotate-180"></div>
        </Link>
        <div className="flex space-x-8 text-sm">
          <NavLink to="/about" isActive={isActive}>
            About
          </NavLink>
          <NavLink to="/projects" isActive={isActive}>
            Projects
          </NavLink>
          <NavLink to="/blog" isActive={isActive}>
            Blog
          </NavLink>
          <NavLink to="/contact" isActive={isActive}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
});

const NavLink = React.memo(function NavLink({ to, children, isActive }) {
  return (
    <Link
      to={to}
      className={`hover:text-gray-600 ${
        isActive && isActive(to) ? "font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
});

export default Navbar;
