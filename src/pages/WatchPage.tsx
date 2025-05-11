import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getWatchlistedMovies } from '../data/movies';
import { Movie } from '../types/movie';
import Header from '../components/layout/Header';

const MyWatchlistsPage: React.FC = () => {
  const [watchlistedMovies, setWatchlistedMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const movies = getWatchlistedMovies(); // Removed filtering by 'isWatched' as it does not exist
      setWatchlistedMovies(movies);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (watchlistedMovies.length === 0) {
    return (
      <div className="bg-black min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto py-16 text-center">
          <h1 className="text-3xl text-white mb-4">No Watchlisted Items</h1>
          <p className="text-netflix-gray mb-8">You have no items in your watchlist that are yet to be watched.</p>
          <Link to="/">
            <button className="bg-netflix-red text-white px-6 py-2 rounded-md hover:bg-red-700">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-24 px-4">
      <Header />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl text-white mb-8">My Watchlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {watchlistedMovies.map(movie => (
            <Link to={`/movies/${movie.id}`} key={movie.id} className="group">
              <div className="relative">
                <img 
                  src={movie.posterUrl} 
                  alt={movie.title} 
                  className="w-full h-auto object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-2">{movie.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWatchlistsPage;