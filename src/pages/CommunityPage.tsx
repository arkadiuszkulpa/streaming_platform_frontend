import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer_HUD';

const CommunityPage: React.FC = () => {
  return (
    <div className="bg-netflix-black min-h-screen text-white">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Community</h1>
        <p className="text-netflix-gray mb-8">This is a placeholder for the community page. Here, users will be able to interact, share reviews, and discuss their favorite movies and shows.</p>
        <div className="bg-netflix-dark p-4 rounded-md">
          <h2 className="text-xl font-medium mb-2">Coming Soon</h2>
          <p className="text-netflix-gray">Stay tuned for exciting community features!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;