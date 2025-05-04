import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-netflix-black text-white py-4 px-6 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-2xl font-bold">MyStream.AI</h1>
      </div>
      <div className="tagline">
        <p className="text-sm text-netflix-gray">Power to stream what YOU want.</p>
      </div>
      <div className="actions">
        <button className="btn-signin">Sign In</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;