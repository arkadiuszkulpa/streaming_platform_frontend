import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useAuth } from '../context/AuthContext'; // Import useAuth for authentication context
import Hero from '../components/landing_page/Hero';
import About from '../components/landing_page/About';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const LandingPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation hook
  const { login } = useAuth(); // Access the login function from AuthContext

  // State variables for managing modal visibility
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isVerificationModalOpen, setVerificationModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false); // State for forgot password modal

  // Handle form submission for signup
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupModalOpen(false); // Close signup modal
    setVerificationModalOpen(true); // Open verification modal
  };

  // Temporary/Test Code: Directly navigate to profile selection screen without authentication
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login('test@example.com', 'password123'); // Test credentials
      setLoginModalOpen(false); // Close login modal
      navigate('/profiles'); // Navigate to the profile selection screen
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotPasswordModalOpen(false); // Close forgot password modal
    alert('Password reset instructions have been sent to your email.'); // Placeholder for actual functionality
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <Hero />

      {/* Call-to-Action Buttons */}
      <div className="mt-8 space-x-4">
        <button 
          onClick={() => setSignupModalOpen(true)} 
          className="bg-red-600 px-6 py-3 rounded text-white text-lg font-bold hover:bg-red-700 transition"
        >
          Sign Up
        </button>
        <button 
          onClick={() => setLoginModalOpen(true)} 
          className="bg-gray-700 px-6 py-3 rounded text-white text-lg font-bold hover:bg-gray-800 transition"
        >
          Sign In
        </button>
      </div>

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-black">Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              {/* Input fields for signup */}
              <Input type="text" label="Name" placeholder="Your name" required fullWidth />
              <Input type="email" label="Email" placeholder="Email address" required fullWidth />
              <Input type="password" label="Password" placeholder="Password (min. 6 characters)" required fullWidth />
              <Button type="submit" fullWidth className="mt-4">Sign Up</Button>
            </form>
            <button onClick={() => setSignupModalOpen(false)} className="mt-4 text-red-600 hover:underline">Cancel</button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-black">Sign In</h2>
            <form onSubmit={handleLoginSubmit}>
              {/* Input fields for login */}
              <Input type="email" label="Email" placeholder="Email address" required fullWidth />
              <Input type="password" label="Password" placeholder="Password" required fullWidth />
              <Button type="submit" fullWidth className="mt-4">Sign In</Button>
            </form>
            <div className="mt-4 flex justify-between text-netflix-gray text-sm">
              {/* Remember me checkbox and forgot password link */}
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
              <button
                onClick={() => setForgotPasswordModalOpen(true)} // Open forgot password modal
                className="text-netflix-gray hover:text-white"
              >
                Forgot password?
              </button>
            </div>

            <p className="mt-4 text-xs text-netflix-gray">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-white hover:underline">Learn more</a>.
            </p>
            <button onClick={() => setLoginModalOpen(false)} className="mt-4 text-red-600 hover:underline">Cancel</button>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {isForgotPasswordModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-black">Forgot Password</h2>
            <p className="mb-6 text-black">
              Enter your email address below, and we'll send you instructions to reset your password.
            </p>
            <form onSubmit={handleForgotPasswordSubmit}>
              <Input type="email" label="Email" placeholder="Email address" required fullWidth />
              <Button type="submit" fullWidth className="mt-4">Send Instructions</Button>
            </form>
            <button onClick={() => setForgotPasswordModalOpen(false)} className="mt-4 text-red-600 hover:underline">Cancel</button>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {isVerificationModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-black">Check Your Email</h2>
            <p className="mb-6 text-black">
              We have sent a verification link to your email. Please check your inbox and click the link to verify your account.
            </p>
            <Button onClick={() => setVerificationModalOpen(false)} fullWidth className="mt-4">Close</Button>
          </div>
        </div>
      )}

      {/* About Section */}
      <div className="mt-8">
        <About />
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-sm text-gray-400">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Youtube">
            <Youtube size={20} />
          </a>
        </div>
        <p>&copy; 2025 MyStream.AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;