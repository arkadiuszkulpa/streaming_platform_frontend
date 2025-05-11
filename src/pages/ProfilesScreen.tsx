import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilesScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [ageRestriction, setAgeRestriction] = useState('');
  const [parentalControls, setParentalControls] = useState(false);

  const handleProfileClick = () => {
    navigate('/home');
  };

  const handleCreateProfile = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setName('');
    setAgeRestriction('');
    setParentalControls(false);
  };

  const handleSaveProfile = () => {
    // Logic to save the profile can be added here
    console.log({ name, ageRestriction, parentalControls });
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center py-12">
        {/* Page title */}
        <h1 className="text-4xl font-bold mb-6">Who's Watching?</h1>

        {/* Profiles grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {/* Profile 1 */}
          <div
            className="flex flex-col items-center"
            onClick={handleProfileClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleProfileClick()} // Accessibility for keyboard users
          >
            <div className="w-24 h-24 bg-gray-700 rounded-full mb-2"></div>
            <p className="text-sm">Profile 1</p>
          </div>

          {/* Profile 2 */}
          <div
            className="flex flex-col items-center"
            onClick={handleProfileClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleProfileClick()} // Accessibility for keyboard users
          >
            <div className="w-24 h-24 bg-gray-700 rounded-full mb-2"></div>
            <p className="text-sm">Profile 2</p>
          </div>

          {/* Add more profiles as needed */}
        </div>

        {/* Add Profile button */}
        <button
          onClick={handleCreateProfile}
          className="mt-8 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Add Profile
        </button>

        {/* Modal for creating a profile */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded relative max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Create Profile</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-gray-200 border border-gray-300 focus:outline-none"
                  placeholder="Enter profile name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Age Restriction</label>
                <input
                  type="number"
                  value={ageRestriction}
                  onChange={(e) => setAgeRestriction(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-gray-200 border border-gray-300 focus:outline-none"
                  placeholder="Enter age restriction"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={parentalControls}
                    onChange={(e) => setParentalControls(e.target.checked)}
                    className="mr-2"
                  />
                  Enable Parental Controls
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleModalClose}
                  className="px-4 py-2 bg-gray-300 text-black rounded mr-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilesScreen;