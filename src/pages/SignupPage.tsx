import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film, CheckCircle2 } from 'lucide-react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Email validation
    if (!email.endsWith('@example.com')) {
      // For demo purposes, force email to end with @example.com
      setEmail(prev => {
        const parts = prev.split('@');
        return parts.length > 1 
          ? `${parts[0]}@example.com` 
          : `${prev}@example.com`;
      });
    }
    
    // Basic password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }
    
    try {
      // In a real app, you would register the user first
      // For this demo, we'll just log them in
      const success = await login(email, password);
      
      if (success) {
        navigate('/');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/8297220/pexels-photo-8297220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }}
    >
      <div className="absolute top-0 left-0 right-0 p-4">
        <Link to="/" className="flex items-center">
          <Film className="h-8 w-8 text-netflix-red mr-2" />
          <span className="text-white font-bold text-2xl">NetflixClone</span>
        </Link>
      </div>
      
      <div className="bg-black bg-opacity-80 p-8 rounded-md w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-8">Sign Up</h1>
        
        {error && (
          <div className="bg-red-900 bg-opacity-50 text-white p-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            fullWidth
          />
          
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            fullWidth
          />
          
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (min. 6 characters)"
            required
            fullWidth
          />
          
          <Button 
            type="submit"
            disabled={isLoading}
            fullWidth
            className="mt-4"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                Creating Account...
              </span>
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>
        
        <div className="mt-8 text-netflix-gray">
          <div className="mb-4">
            <h3 className="text-white text-lg mb-2">Included in all plans:</h3>
            <ul className="space-y-2">
              {['Watch all you want. Ad-free.', 'Recommendations just for you.', 'Change or cancel your plan anytime.'].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 size={18} className="text-netflix-red mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p>
            Already have an account? <Link to="/login" className="text-white hover:underline">Sign in now</Link>.
          </p>
          <p className="mt-4 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;