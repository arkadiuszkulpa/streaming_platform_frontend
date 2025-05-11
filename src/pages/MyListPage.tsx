import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getMovieById } from '../data/movies';
import { Movie } from '../types/movie';
import MovieCard from '../components/movie/MovieCard';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer_HUD';

const MyListPage: React.FC = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const [watchlistMovies, setWatchlistMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      // Simulate API fetch delay
      const timer = setTimeout(() => {
        const movies = currentUser.watchlist
          .map(id => getMovieById(id))
          .filter((movie): movie is Movie => movie !== undefined);
        
        setWatchlistMovies(movies);
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [currentUser, isAuthenticated]);

  if (isLoading) {
    return (
      <div className="bg-netflix-black min-h-screen pt-24 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="bg-netflix-black min-h-screen pt-24 px-4">
        <div className="max-w-4xl mx-auto py-16 text-center">
          <h1 className="text-3xl text-white mb-4">Please Sign In</h1>
          <p className="text-netflix-gray mb-8">You need to be signed in to access your watchlist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-netflix-black min-h-screen text-white">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">My Watchlist</h1>
        <p className="text-netflix-gray">Your saved movies and shows will appear here.</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-white font-medium mb-8">My List</h1>
        
        {watchlistMovies.length === 0 ? (
          <div className="bg-netflix-dark p-8 rounded-md text-center">
            <h2 className="text-xl text-white mb-4">Your list is empty</h2>
            <p className="text-netflix-gray">Add movies and shows to your list to watch them later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {watchlistMovies.map(movie => (
              <div key={movie.id} className="flex justify-center">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyListPage;