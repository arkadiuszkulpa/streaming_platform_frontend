import React, { useEffect } from 'react';
import { FaPlay, FaPlus, FaThumbsUp } from 'react-icons/fa';

const MovieDetail: React.FC<{ movie: any; onClose: () => void }> = ({ movie, onClose }) => {
  useEffect(() => {
    // Disable scrolling when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" data-testid="movie-detail-modal">
      <div className="bg-white text-black p-6 rounded relative max-w-3xl w-full" data-testid="movie-detail-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
        >
          X
        </button>

        {/* Movie Image */}
        <div className="mb-4">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-auto rounded"
          />
        </div>

        {/* Movie Title */}
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>

        {/* Movie Description */}
        <p className="text-gray-700 mb-4">{movie.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            <FaPlay /> Play
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
            <FaPlus /> Add to Watchlist
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">
            <FaThumbsUp /> Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;