import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/java.png"; // Corrected import path

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto max-w-7xl flex justify-between items-center py-3 px-4">
        <div>
          <Link to="/">
            <img src={logo} alt="BookStore Logo" className="h-10" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/all-books" className="hover:text-gray-300">All Books</Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-gray-300">Favorites</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
