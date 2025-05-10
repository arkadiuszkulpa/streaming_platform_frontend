import React, { useState } from 'react';
import HeroBanner from '../components/movie/HeroBanner';
import MovieRow from '../components/movie/MovieRow';
import MovieDetail from '../components/movie/MovieDetail';
import { getFeaturedMovie, movieCategories } from '../data/movies';
import { useNavigate } from 'react-router-dom';

const MainPage: React.FC = () => {
  const featuredMovie = getFeaturedMovie();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleMovieClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-netflix-black min-h-screen" data-testid="home-page">
      <header className="p-4 bg-netflix-dark flex justify-between items-center">
        <form onSubmit={handleSearch} className="flex-grow max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies or shows..."
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-netflix-red"
          />
        </form>
        <button
          onClick={() => navigate('/community')}
          className="ml-4 text-white hover:underline"
        >
          Community
        </button>
        <button
          onClick={() => navigate('/profiles')}
          className="ml-4 text-white hover:underline"
        >
          Profile
        </button>
      </header>

      <HeroBanner movie={featuredMovie} />

      <div className="relative z-10 mt-8 md:mt-16">
        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">My Recommendations</h2>
          <div className="text-center text-netflix-gray">No recommendations available yet.</div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">My Watchlists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movieCategories[0]?.movies.map((movie) => (
              <MovieRow key={movie.id} category={{ id: 0, title: '', movies: [movie] }} onMovieClick={handleMovieClick} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">What is New</h2>
          <div className="text-center text-netflix-gray">No new content available yet.</div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">Your Friends Are Watching</h2>
          <div className="text-center text-netflix-gray">No data available yet.</div>
        </section>
      </div>

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={closeMovieDetail} />
      )}
    </div>
  );
};

export default MainPage;