import React, { useState, useContext } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { Film } from 'lucide-react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useAuth, AuthContext } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const TEST_MODE = import.meta.env.VITE_TEST_MODE === 'true';

    if (TEST_MODE) {
      navigate('/profiles'); // Directly navigate to ProfilesScreen in test mode
      return;
    }
    
    try {
      const success = await login(email, password);
      
      if (success) {
        navigate('/profiles');
      } else {
        setError('Invalid email or password. Please try again.');
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
        <h1 className="text-white text-3xl font-bold mb-8">Sign In</h1>
        
        {error && (
          <div className="bg-red-900 bg-opacity-50 text-white p-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
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
            placeholder="Password"
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
                Signing In...
              </span>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>
        
        <div className="mt-4 flex justify-between text-netflix-gray text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" />
            Remember me
          </label>
          <a href="#" className="text-netflix-gray hover:text-white">Need help?</a>
        </div>
        
        <div className="mt-12 text-netflix-gray">
          <p>
            New to NetflixClone? <Link to="/signup" className="text-white hover:underline">Sign up now</Link>.
          </p>
          <p className="mt-4 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;