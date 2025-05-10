import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { MovieCategory } from '../../types/movie';

interface MovieRowProps {
  category: MovieCategory;
  onMovieClick: (movie: any) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ category, onMovieClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollAmount = 1000;

  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const { scrollLeft } = sliderRef.current;
    const newPosition = direction === 'left' 
      ? scrollLeft - scrollAmount 
      : scrollLeft + scrollAmount;
    
    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="mb-8" data-testid={`movie-row-${category.id}`}>
      <h2 className="text-xl text-white font-medium mb-4 ml-4 md:ml-12">{category.title}</h2>
      
      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
        )}
        
        {/* Movie Slider */}
        <div 
          ref={sliderRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pl-4 md:pl-12 pr-4 touch-pan-x"
          onScroll={handleScroll}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {category.movies.map((movie) => (
            <div 
              key={movie.id} 
              className="flex-shrink-0 pb-8"
            >
              <MovieCard movie={movie} onMovieClick={onMovieClick} />
            </div>
          ))}
        </div>
        
        {/* Right Arrow */}
        {showRightArrow && (
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;