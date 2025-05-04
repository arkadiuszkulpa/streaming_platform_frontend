import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-netflix-black text-netflix-gray py-10">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex space-x-6 mb-6">
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

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="space-y-3">
            <Link to="#" className="block text-sm hover:underline">Audio Description</Link>
            <Link to="#" className="block text-sm hover:underline">Investor Relations</Link>
            <Link to="#" className="block text-sm hover:underline">Legal Notices</Link>
          </div>
          <div className="space-y-3">
            <Link to="#" className="block text-sm hover:underline">Help Center</Link>
            <Link to="#" className="block text-sm hover:underline">Jobs</Link>
            <Link to="#" className="block text-sm hover:underline">Cookie Preferences</Link>
          </div>
          <div className="space-y-3">
            <Link to="#" className="block text-sm hover:underline">Gift Cards</Link>
            <Link to="#" className="block text-sm hover:underline">Terms of Use</Link>
            <Link to="#" className="block text-sm hover:underline">Corporate Information</Link>
          </div>
          <div className="space-y-3">
            <Link to="#" className="block text-sm hover:underline">Media Center</Link>
            <Link to="#" className="block text-sm hover:underline">Privacy</Link>
            <Link to="#" className="block text-sm hover:underline">Contact Us</Link>
          </div>
        </div>

        {/* Service Code */}
        <div className="mb-6">
          <button className="border border-netflix-gray text-sm px-3 py-1 rounded-md hover:text-white">
            Service Code
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs">
          <p>&copy; 2025 NetflixClone. All Rights Reserved.</p>
          <p className="mt-2">
            This application is built for educational purposes only. It is not affiliated with or endorsed by Netflix, Inc.
          </p>
        </div>

        {/* Help */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-netflix-red p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors">
            <HelpCircle size={24} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;