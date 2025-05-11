import React, { useState } from 'react';
import { Movie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie;
  onMovieClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group inline-block rounded-md overflow-hidden transition-transform duration-300"
      data-testid={`movie-card-${movie.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onMovieClick(movie)} // Trigger the onMovieClick prop
      style={{ aspectRatio: '16 / 9', width: '100%' }} // Enforce 16:9 aspect ratio
      aria-label={`Movie Card: ${movie.title}`}
    >
      <img 
        src={movie.posterUrl} 
        alt={movie.title} 
        className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} // Pop-out effect on hover
      />
    </div>
  );
};

export default MovieCard;