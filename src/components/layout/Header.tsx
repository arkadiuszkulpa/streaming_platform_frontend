import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, Menu, X, Film, Home, Bookmark, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';

const Header: React.FC = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-netflix-black bg-opacity-95' : 'bg-gradient-to-b from-black to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Film className="h-8 w-8 text-netflix-red mr-2" />
          <span className="text-white font-bold text-2xl">NetflixClone</span>
        </Link>

        {/* Desktop Navigation */}
        {isAuthenticated && (
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm ${
                location.pathname === '/' ? 'text-white font-medium' : 'text-netflix-gray hover:text-white'
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className={`text-sm ${
                location.pathname.startsWith('/movies') ? 'text-white font-medium' : 'text-netflix-gray hover:text-white'
              } transition-colors`}
            >
              Movies
            </Link>
            <Link
              to="/my-list"
              className={`text-sm ${
                location.pathname === '/my-list' ? 'text-white font-medium' : 'text-netflix-gray hover:text-white'
              } transition-colors`}
            >
              My List
            </Link>
          </nav>
        )}

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center bg-netflix-dark border border-netflix-gray rounded-md overflow-hidden">
                    <input
                      type="text"
                      placeholder="Titles, people, genres"
                      className="bg-transparent text-white px-3 py-1 w-56 focus:outline-none"
                    />
                    <button
                      onClick={toggleSearch}
                      className="p-2 text-netflix-gray hover:text-white"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={toggleSearch}
                    className="p-2 text-netflix-gray hover:text-white"
                  >
                    <Search size={18} />
                  </button>
                )}
              </div>

              {/* Notifications */}
              <button className="p-2 text-netflix-gray hover:text-white relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 bg-netflix-red rounded-full w-2 h-2"></span>
              </button>

              {/* Profile */}
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <img
                    src={currentUser?.avatarUrl}
                    alt="Profile"
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-netflix-black border border-netflix-dark rounded-md shadow-lg py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-netflix-lightGray hover:bg-netflix-dark">
                    Profile
                  </Link>
                  <Link to="/account" className="block px-4 py-2 text-sm text-netflix-lightGray hover:bg-netflix-dark">
                    Account
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-netflix-lightGray hover:bg-netflix-dark"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-netflix-gray hover:text-white p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-netflix-black border-t border-netflix-dark">
          <div className="container mx-auto px-4 py-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center mb-4 pb-4 border-b border-netflix-dark">
                  <img
                    src={currentUser?.avatarUrl}
                    alt="Profile"
                    className="w-10 h-10 rounded-md object-cover mr-3"
                  />
                  <div>
                    <p className="text-white font-medium">{currentUser?.name}</p>
                    <p className="text-netflix-gray text-sm">{currentUser?.email}</p>
                  </div>
                </div>
                <nav className="space-y-4">
                  <Link
                    to="/"
                    className="flex items-center text-netflix-lightGray hover:text-white"
                    onClick={toggleMenu}
                  >
                    <Home size={18} className="mr-3" />
                    Home
                  </Link>
                  <Link
                    to="/movies"
                    className="flex items-center text-netflix-lightGray hover:text-white"
                    onClick={toggleMenu}
                  >
                    <Film size={18} className="mr-3" />
                    Movies
                  </Link>
                  <Link
                    to="/my-list"
                    className="flex items-center text-netflix-lightGray hover:text-white"
                    onClick={toggleMenu}
                  >
                    <Bookmark size={18} className="mr-3" />
                    My List
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center text-netflix-lightGray hover:text-white"
                    onClick={toggleMenu}
                  >
                    <User size={18} className="mr-3" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                    className="flex items-center text-netflix-lightGray hover:text-white w-full"
                  >
                    Sign Out
                  </button>
                </nav>
              </>
            ) : (
              <div className="space-y-4">
                <Link to="/login" onClick={toggleMenu}>
                  <Button variant="outline" fullWidth>Sign In</Button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <Button fullWidth>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;