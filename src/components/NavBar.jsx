import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">BookStore</Link>
        </div>
        <div className="nav-links">
          <Link to="/all-books">All Books</Link>
       
          <Link to="/about-us">About Us</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i> {/* Example cart icon */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;