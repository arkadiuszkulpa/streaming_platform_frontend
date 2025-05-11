import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer_HUD';

const MySettingsPage: React.FC = () => {
  return (
    <div className="bg-netflix-black min-h-screen text-white">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <p className="text-netflix-gray">Manage your account settings and preferences here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default MySettingsPage;