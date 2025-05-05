import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-netflix-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" aria-label="Navbar">
      <div className="logo">
        <h1 className="text-2xl font-bold" aria-label="Navbar Logo">MyStream.AI</h1>
      </div>
      <div className="tagline text-center md:text-left">
        <p className="text-sm text-netflix-gray">Power to stream what YOU want.</p>
      </div>
      <div className="actions flex space-x-2">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;