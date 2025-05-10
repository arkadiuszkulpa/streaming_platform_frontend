import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainPage from './pages/HomePage'; // Updated import to reflect renaming
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WatchPage from './pages/WatchPage';
import MyListPage from './pages/MyListPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LandingPage from './pages/LandingPage';
import ProfilesScreen from './pages/ProfilesScreen';
import ProfileCreationPage from './pages/ProfileCreationPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-netflix-black text-white">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Protected routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">
                      <MainPage />
                    </main>
                    <Footer />
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-list"
              element={
                <ProtectedRoute>
                  <MyListPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/watch/:id"
              element={
                <ProtectedRoute>
                  <WatchPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profiles"
              element={
                <ProtectedRoute>
                  <ProfilesScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile-creation"
              element={
                <ProtectedRoute>
                  <ProfileCreationPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;