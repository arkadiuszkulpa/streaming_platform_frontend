import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <Hero />
      <div className="mt-8 space-x-4">
        <Link to="/signup" className="bg-red-600 px-6 py-3 rounded text-white text-lg font-bold hover:bg-red-700 transition">Sign Up</Link>
        <Link to="/login" className="bg-gray-700 px-6 py-3 rounded text-white text-lg font-bold hover:bg-gray-800 transition">Sign In</Link>
      </div>
      <div className="mt-8">
        <About />
      </div>
      <footer className="mt-12 text-center text-sm text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={20} />
          </a>
        </div>
        <p>&copy; 2025 MyStream.AI. All rights reserved.</p>
        <p className="mt-2">
          <Link to="/contact-us" className="text-gray-300 hover:underline">Contact Us</Link>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;