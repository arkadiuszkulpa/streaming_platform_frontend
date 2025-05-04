import React from 'react';
import HeroBanner from '../components/movie/HeroBanner';
import MovieRow from '../components/movie/MovieRow';
import { getFeaturedMovie, movieCategories } from '../data/movies';

const HomePage: React.FC = () => {
  const featuredMovie = getFeaturedMovie();

  return (
    <div className="bg-netflix-black min-h-screen">
      <HeroBanner movie={featuredMovie} />
      
      <div className="relative z-10 -mt-16 md:-mt-32">
        {movieCategories.map((category) => (
          <MovieRow key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;