import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-netflix-black text-netflix-gray py-4 text-center" data-testid="footer">
      <Link to="/my-list" className="text-white hover:underline mx-4">Watchlists</Link>
      <Link to="/my-settings" className="text-white hover:underline mx-4">My Settings</Link>
      <Link to="/my-algorithm" className="text-white hover:underline mx-4">My Algorithm</Link>
    </footer>
  );
};

export default Footer;