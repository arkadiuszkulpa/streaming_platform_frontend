import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC<{ searchQuery?: string; onSearch?: (query: string) => void }> = ({ searchQuery = '', onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="p-4 bg-netflix-dark flex justify-between items-center fixed top-0 w-full z-50">
      <Link to="/home" className="flex items-center text-white text-xl font-bold">
        <img src="/favicon.svg" alt="MyStream.AI Logo" className="h-8 w-8 mr-2" />
        MyStream.AI
      </Link>
      <form onSubmit={handleSearch} className="flex-grow max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch && onSearch(e.target.value)}
          placeholder="Search for movies or shows..."
          className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
        />
      </form>
      <Link
        to="/community"
        className="ml-4 text-white hover:underline"
      >
        Community
      </Link>
      <button
        onClick={() => navigate('/profiles')}
        className="ml-4 text-white hover:underline"
      >
        Profile
      </button>
    </header>
  );
};

export default Header;