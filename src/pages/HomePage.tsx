import React, { useState } from 'react';
// Updated import paths to reflect better organization
import HeroBanner from '../components/movie/HeroBanner';
import MovieRow from '../components/movie/MovieRow';
import MovieDetail from '../components/movie/MovieDetail';
import Footer from '../components/layout/Footer_HUD';
import { getFeaturedMovie, movieCategories } from '../data/movies';
import { useNavigate, Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  // Fetch the featured movie for the hero banner
  const featuredMovie = getFeaturedMovie();
  const navigate = useNavigate();

  // State for search query input
  const [searchQuery, setSearchQuery] = useState('');
  // State for the currently selected movie (for displaying details)
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle movie click to show details
  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  // Close the movie detail modal
  const closeMovieDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-netflix-black min-h-screen" data-testid="home-page">
      {/* Hero banner showcasing the featured movie */}
      {/* <HeroBanner movie={featuredMovie} /> */}

      <div className="relative z-10 mt-8 md:mt-16">
        {/* Section for personalized recommendations */}
        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">My Recommendations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movieCategories[0]?.movies.map((movie) => (
              <MovieRow
                key={movie.id}
                category={{ id: 0, title: '', movies: [movie] }}
                onMovieClick={handleMovieClick}
              />
            ))}
          </div>
        </section>

        {/* Section for user's watchlist */}
        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">My Watchlists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movieCategories[0]?.movies.map((movie) => (
              <MovieRow
                key={movie.id}
                category={{ id: 0, title: '', movies: [movie] }}
                onMovieClick={handleMovieClick}
              />
            ))}
          </div>
        </section>

        {/* Section for new content */}
        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">What is New</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movieCategories[0]?.movies.map((movie) => (
              <MovieRow
                key={movie.id}
                category={{ id: 0, title: '', movies: [movie] }}
                onMovieClick={handleMovieClick}
              />
            ))}
          </div>
        </section>

        {/* Section for content your friends are watching */}
        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">Your Friends Are Watching</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movieCategories[0]?.movies.map((movie) => (
              <MovieRow
                key={movie.id}
                category={{ id: 0, title: '', movies: [movie] }}
                onMovieClick={handleMovieClick}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Modal for displaying movie details */}
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={closeMovieDetail} />
      )}

      <Footer />
    </div>
  );
};

export default MainPage;