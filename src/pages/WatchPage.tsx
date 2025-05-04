import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Pause, VolumeX, Volume2, Settings, Maximize } from 'lucide-react';
import { getMovieById } from '../data/movies';
import { Movie } from '../types/movie';

const WatchPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    // Simulate progress increase
    if (isPlaying && !isLoading && movie) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev < 100) return prev + 0.2;
          return 0;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying, isLoading, movie]);

  useEffect(() => {
    // Hide controls after 3 seconds of inactivity
    if (isControlsVisible) {
      const timer = setTimeout(() => {
        setIsControlsVisible(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isControlsVisible]);

  const handleMouseMove = () => {
    setIsControlsVisible(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (isLoading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-netflix-red border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-black min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="max-w-4xl mx-auto py-16 text-center">
          <h1 className="text-3xl text-white mb-4">Video Not Found</h1>
          <p className="text-netflix-gray mb-8">The video you're looking for doesn't exist or has been removed.</p>
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
    <div 
      className="bg-black min-h-screen relative"
      onMouseMove={handleMouseMove}
    >
      {/* Video display (placeholder with movie backdrop) */}
      <div className="w-full h-screen">
        <img 
          src={movie.backdropUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Controls overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
          isControlsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
          <Link to={`/movies/${movie.id}`} className="text-white hover:text-netflix-lightGray transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h2 className="text-white text-xl font-medium">{movie.title}</h2>
          <div className="w-6"></div> {/* Spacer for alignment */}
        </div>
        
        {/* Center play/pause button */}
        <button 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full p-6 hover:bg-white/30 transition-colors"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause size={36} className="text-white" />
          ) : (
            <Play size={36} className="text-white fill-current" />
          )}
        </button>
        
        {/* Bottom control bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-netflix-red"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Control buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                className="text-white hover:text-netflix-lightGray transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause size={24} />
                ) : (
                  <Play size={24} className="fill-current" />
                )}
              </button>
              
              <button 
                className="text-white hover:text-netflix-lightGray transition-colors"
                onClick={toggleMute}
              >
                {isMuted ? (
                  <VolumeX size={24} />
                ) : (
                  <Volume2 size={24} />
                )}
              </button>
              
              <span className="text-white text-sm">
                {Math.floor(progress / 100 * 120)}:00 / 2:00:00
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-netflix-lightGray transition-colors">
                <Settings size={20} />
              </button>
              
              <button className="text-white hover:text-netflix-lightGray transition-colors">
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;