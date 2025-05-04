import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Info } from 'lucide-react';
import { Movie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group inline-block rounded-md overflow-hidden transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '240px', height: '360px' }}
    >
      {/* Static Card */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hovered Card */}
      <div 
        className={`absolute inset-0 bg-netflix-dark transform transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-110 shadow-xl z-10' : 'opacity-0'
        }`}
      >
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="w-full h-1/2 object-cover"
        />
        
        <div className="p-3">
          <div className="flex space-x-2 mb-3">
            <Link to={`/watch/${movie.id}`} className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
              <Play size={18} className="text-black fill-current" />
            </Link>
            <button className="bg-netflix-dark border-2 border-netflix-gray rounded-full p-2 hover:border-white transition-colors">
              <Plus size={18} className="text-white" />
            </button>
            <button className="bg-netflix-dark border-2 border-netflix-gray rounded-full p-2 hover:border-white transition-colors">
              <ThumbsUp size={18} className="text-white" />
            </button>
            <Link to={`/movies/${movie.id}`} className="ml-auto bg-netflix-dark border-2 border-netflix-gray rounded-full p-2 hover:border-white transition-colors">
              <Info size={18} className="text-white" />
            </Link>
          </div>
          
          <h3 className="text-white font-medium text-sm mb-1 line-clamp-1">{movie.title}</h3>
          
          <div className="flex items-center text-xs space-x-2 mb-2">
            <span className="text-green-500 font-medium">{movie.rating * 10}% Match</span>
            <span className="border border-netflix-gray px-1">{movie.maturityRating}</span>
            <span>{movie.duration}</span>
          </div>
          
          <div className="flex flex-wrap text-xs text-netflix-lightGray mb-2">
            {movie.genres.slice(0, 3).map((genre, index) => (
              <React.Fragment key={genre}>
                <span>{genre}</span>
                {index < Math.min(movie.genres.length, 3) - 1 && <span className="mx-1">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;