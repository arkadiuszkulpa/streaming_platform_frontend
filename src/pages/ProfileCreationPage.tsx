import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCreationPage: React.FC = () => {
  const [name, setName] = useState('');
  const [ageRestriction, setAgeRestriction] = useState('');
  const [parentalControls, setParentalControls] = useState(false);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleBack = () => {
    navigate('/profiles');
  };

  const handleNext = () => {
    // Logic to save profile details can be added here
    navigate('/profiles'); // Navigate back to ProfilesScreen
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Create Profile</h1>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter profile name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Age Restriction</label>
          <input
            type="number"
            value={ageRestriction}
            onChange={(e) => setAgeRestriction(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter age restriction"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={parentalControls}
            onChange={(e) => setParentalControls(e.target.checked)}
            className="mr-2"
          />
          <label className="text-sm">Enable Parental Controls</label>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Profile Picture</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-700 file:text-white hover:file:bg-gray-600"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileCreationPage;