import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer_HUD';
import MainPage from './pages/HomePage'; // Updated import to reflect renaming
import WatchPage from './pages/WatchPage';
import MyListPage from './pages/MyListPage';
import Hero from './components/landing_page/Hero';
import About from './components/landing_page/About';
import LandingPage from './pages/LandingPage';
import ProfilesScreen from './pages/ProfilesScreen';
import CommunityPage from './pages/CommunityPage';

// ProtectedRoute component ensures that only authenticated users can access certain routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Check authentication status from AuthContext
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />; // Redirect to landing page if not authenticated
};

function App() {
  return (
    // Router wraps the entire application to enable routing
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* AuthProvider provides authentication context to the app */}
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-netflix-black text-white">
          {/* Define application routes */}
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />

            {/* Protected routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  {/* Main layout for authenticated users */}
                  <div className="flex flex-col min-h-screen">
                    <Header /> {/* Header component */}
                    <main className="flex-grow">
                      <MainPage /> {/* Main content */}
                    </main>
                    <Footer /> {/* Footer component */}
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-list"
              element={
                <ProtectedRoute>
                  <MyListPage /> {/* My List page for authenticated users */}
                </ProtectedRoute>
              }
            />
            <Route
              path="/watch/:id"
              element={
                <ProtectedRoute>
                  <WatchPage /> {/* Watch page for viewing specific content */}
                </ProtectedRoute>
              }
            />
            <Route
              path="/profiles"
              element={
                <ProtectedRoute>
                  <ProfilesScreen /> {/* Profiles management screen */}
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <CommunityPage /> {/* Community page for authenticated users */}
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;