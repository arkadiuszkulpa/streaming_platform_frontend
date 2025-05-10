import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 Streaming Platform. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          <a href="/help-center" className="text-gray-400 hover:text-white mx-2">Help Center</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;