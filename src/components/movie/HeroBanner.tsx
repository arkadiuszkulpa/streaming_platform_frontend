import React from 'react';
import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import Button from '../common/Button';

interface HeroBannerProps {
  movie: Movie;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movie }) => {
  return (
    <div className="relative w-full" style={{ height: '80vh', minHeight: '300px', maxHeight: '100vh' }} aria-label="Hero Banner">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={movie.backdropUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-10 md:pb-24 px-4 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8" aria-label="Movie Title">{movie.title}</h1>
        
        <div className="flex items-center text-sm space-x-4 mb-6">
          <span className="text-green-500 font-bold">{movie.rating * 10}% Match</span>
          <span className="text-netflix-lightGray">{movie.releaseYear}</span>
          <span className="border border-netflix-gray px-1 text-netflix-lightGray">{movie.maturityRating}</span>
          <span className="text-netflix-lightGray">{movie.duration}</span>
        </div>
        
        <p className="text-netflix-lightGray mb-8 line-clamp-3 md:line-clamp-none">
          {movie.description}
        </p>
        
        <div className="flex flex-wrap gap-3 z-10">
          <Link to={`/watch/${movie.id}`}>
            <Button 
              className="flex items-center gap-2" 
              size="lg"
            >
              <Play size={20} className="fill-current" /> Play
            </Button>
          </Link>
          <Link to={`/movies/${movie.id}`}>
            <Button 
              variant="secondary" 
              className="flex items-center gap-2" 
              size="lg"
            >
              <Info size={20} /> More Info
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;