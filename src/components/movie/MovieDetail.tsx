import React, { useEffect } from 'react';
import './MovieDetail.css';
import MovieRow from './MovieRow';
import { movieCategories } from '../../data/movies';

const MovieDetail: React.FC<{ movie: any; onClose: () => void }> = ({ movie, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="previewModal--container">
      <div className="previewModal--player_container">
        <div className="boxart-wrapper">
          <img src={movie?.boxArt || 'placeholder.jpg'} alt={movie?.title || 'Movie'} className="boxart" />
        </div>
        <div className="storyArt">
          <img src={movie?.storyArt || 'placeholder-story.jpg'} alt={movie?.title || 'Story Art'} className="story-art" />
        </div>
        <div className="titleTreatmentWrapper">
          <img src={movie?.titleLogo || 'placeholder-logo.jpg'} alt={movie?.title || 'Title Logo'} className="title-logo" />
          <div className="button-controls">
            <button className="play-button">Play</button>
            <button className="add-to-list-icon">+</button>
            <button className="thumbs-up-icon">👍</button>
          </div>
        </div>
      </div>
      <div className="modal-info">
        <div className="details-metadata">
          <div className="metadata-left">
            <div className="video-metadata">
              <span className="year">{movie?.year || '2025'}</span>
              <span className="duration">{movie?.duration || '2h'}</span>
              <span className="badge">HD</span>
            </div>
            <div className="age-rating">
              <span>Age Rating: {movie?.ageRating || 'PG-13'}</span>
            </div>
            <p className="synopsis">{movie?.synopsis || 'Placeholder synopsis for the movie.'}</p>
          </div>
        </div>
      </div>

      {/* Movie Collection Section */}
      <div className="movie-collection">
        <h3>{movie?.title || 'Movie'} Collection</h3>
        <MovieRow category={movieCategories[0]} onMovieClick={() => {}} />
      </div>

      {/* More Like This Section */}
      <div className="more-like-this">
        <h3>More Like This</h3>
        <MovieRow category={movieCategories[1]} onMovieClick={() => {}} />
      </div>

      {/* About Section */}
      <div className="about-movie">
        <h3>About {movie?.title || 'Movie'}</h3>
        <p><strong>Director:</strong> {movie?.director || 'Placeholder Director'}</p>
        <p><strong>Cast:</strong> {movie?.cast || 'Placeholder Cast'}</p>
        <p><strong>Writer:</strong> {movie?.writer || 'Placeholder Writer'}</p>
        <p><strong>Genres:</strong> {movie?.genres || 'Placeholder Genres'}</p>
        <p><strong>Age Rating:</strong> {movie?.ageRating || 'PG-13'}</p>
      </div>

      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default MovieDetail;