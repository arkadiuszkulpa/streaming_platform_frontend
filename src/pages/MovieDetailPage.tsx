import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, ThumbsUp, Share2, ArrowLeft } from 'lucide-react';
import { getMovieById } from '../data/movies';
import { Movie } from '../types/movie';
import Button from '../components/common/Button';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Simulate API fetch delay
      const timer = setTimeout(() => {
        const foundMovie = getMovieById(parseInt(id, 10));
        setMovie(foundMovie || null);
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-netflix-black min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-netflix-black min-h-screen pt-24 px-4 md:px-12">
        <div className="max-w-4xl mx-auto py-16 text-center">
          <h1 className="text-3xl text-white mb-4">Movie Not Found</h1>
          <p className="text-netflix-gray mb-8">The movie you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-netflix-black min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative w-full" style={{ height: '70vh' }}>
        <img 
          src={movie.backdropUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-black/30" />
        
        <Link to="/" className="absolute top-4 left-4 text-white hover:text-netflix-lightGray">
          <ArrowLeft size={24} />
        </Link>
        
        <div className="absolute bottom-0 left-0 p-4 md:p-12 w-full md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{movie.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <Link to={`/watch/${movie.id}`}>
              <Button className="flex items-center gap-2">
                <Play size={18} className="fill-current" /> Play
              </Button>
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <Plus size={18} /> My List
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <ThumbsUp size={18} /> Rate
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 size={18} /> Share
            </Button>
          </div>
        </div>
      </div>
      
      {/* Movie Details */}
      <div className="p-4 md:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center text-sm space-x-4 mb-4">
              <span className="text-green-500 font-bold">{movie.rating * 10}% Match</span>
              <span className="text-netflix-lightGray">{movie.releaseYear}</span>
              <span className="border border-netflix-gray px-1 text-netflix-lightGray">{movie.maturityRating}</span>
              <span className="text-netflix-lightGray">{movie.duration}</span>
            </div>
            
            <p className="text-netflix-lightGray mb-6">{movie.description}</p>
            
            <div className="mb-6">
              <p className="text-netflix-gray">
                <span className="text-netflix-lightGray font-medium">Cast: </span>
                {movie.cast.join(', ')}
              </p>
              <p className="text-netflix-gray">
                <span className="text-netflix-lightGray font-medium">Director: </span>
                {movie.director}
              </p>
              <p className="text-netflix-gray">
                <span className="text-netflix-lightGray font-medium">Genres: </span>
                {movie.genres.join(', ')}
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src={movie.posterUrl} 
              alt={movie.title} 
              className="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
        
        {/* More Like This - Placeholder */}
        <div className="mt-12">
          <h2 className="text-xl text-white font-medium mb-4">More Like This</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="aspect-[2/3] bg-netflix-dark rounded-md animate-pulse-subtle"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;