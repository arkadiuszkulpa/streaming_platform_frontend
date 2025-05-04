export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  releaseYear: number;
  duration: string;
  genres: string[];
  rating: number;
  maturityRating: string;
  trailerUrl?: string;
  videoUrl?: string;
  cast: string[];
  director: string;
  isTrending?: boolean;
  isNewRelease?: boolean;
}

export interface MovieCategory {
  id: number;
  title: string;
  movies: Movie[];
}