import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProfilesScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateProfile = () => {
    navigate('/profile-creation');
  };

  const handleProfileClick = () => {
    navigate('/home'); // Navigate to HomePage when a profile is clicked
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold mb-6">Who's Watching?</h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* Placeholder for profiles */}
          <div className="flex flex-col items-center" onClick={handleProfileClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleProfileClick()}>
            <div className="w-24 h-24 bg-gray-700 rounded-full mb-2"></div>
            <p className="text-sm">Profile 1</p>
          </div>
          <div className="flex flex-col items-center" onClick={handleProfileClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleProfileClick()}>
            <div className="w-24 h-24 bg-gray-700 rounded-full mb-2"></div>
            <p className="text-sm">Profile 2</p>
          </div>
          {/* Add more profiles as needed */}
        </div>
        <button
          onClick={handleCreateProfile}
          className="mt-8 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Add Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilesScreen;