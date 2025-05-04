import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MovieDetailPage from './pages/MovieDetailPage';
import WatchPage from './pages/WatchPage';
import MyListPage from './pages/MyListPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth routes without header/footer */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          
          {/* Routes with header and footer */}
          <Route
            path="/*"
            element={
              <div className="flex flex-col min-h-screen bg-netflix-black text-white">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies/:id" element={<MovieDetailPage />} />
                    <Route path="/my-list" element={<MyListPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;