import { Movie, MovieCategory } from '../types/movie';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    posterUrl: "https://images.pexels.com/photos/18956622/pexels-photo-18956622/free-photo-of-city-relaxation-person-people.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2016,
    duration: "50m",
    genres: ["Sci-Fi", "Horror", "Drama"],
    rating: 8.7,
    maturityRating: "TV-14",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    director: "The Duffer Brothers",
    isTrending: true,
    isNewRelease: false
  },
  {
    id: 2,
    title: "The Queen's Gambit",
    description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    posterUrl: "https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2020,
    duration: "55m",
    genres: ["Drama"],
    rating: 8.6,
    maturityRating: "TV-MA",
    cast: ["Anya Taylor-Joy", "Thomas Brodie-Sangster", "Harry Melling"],
    director: "Scott Frank",
    isTrending: true,
    isNewRelease: false
  },
  {
    id: 3,
    title: "The Witcher",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than monsters and beasts.",
    posterUrl: "https://images.pexels.com/photos/5275028/pexels-photo-5275028.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/8107206/pexels-photo-8107206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2019,
    duration: "1h 0m",
    genres: ["Fantasy", "Action", "Adventure"],
    rating: 8.2,
    maturityRating: "TV-MA",
    cast: ["Henry Cavill", "Freya Allan", "Anya Chalotra"],
    director: "Lauren Schmidt Hissrich",
    isTrending: false,
    isNewRelease: true
  },
  {
    id: 4,
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
    posterUrl: "https://images.pexels.com/photos/18548519/pexels-photo-18548519/free-photo-of-man-in-white-shirt-sitting-on-chair-in-studio.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/590858/pexels-photo-590858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2008,
    duration: "49m",
    genres: ["Crime", "Drama", "Thriller"],
    rating: 9.5,
    maturityRating: "TV-MA",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    director: "Vince Gilligan",
    isTrending: false,
    isNewRelease: false
  },
  {
    id: 5,
    title: "Money Heist",
    description: "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.",
    posterUrl: "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/5058740/pexels-photo-5058740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2017,
    duration: "50m",
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.3,
    maturityRating: "TV-MA",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
    director: "Álex Pina",
    isTrending: true,
    isNewRelease: false
  },
  {
    id: 6,
    title: "The Crown",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    posterUrl: "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2016,
    duration: "58m",
    genres: ["Drama", "History", "Biography"],
    rating: 8.7,
    maturityRating: "TV-MA",
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
    director: "Peter Morgan",
    isTrending: false,
    isNewRelease: true
  },
  {
    id: 7,
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    posterUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2021,
    duration: "55m",
    genres: ["Action", "Drama", "Mystery"],
    rating: 8.0,
    maturityRating: "TV-MA",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
    director: "Hwang Dong-hyuk",
    isTrending: true,
    isNewRelease: true
  },
  {
    id: 8,
    title: "Dark",
    description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    posterUrl: "https://images.pexels.com/photos/371207/pexels-photo-371207.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2017,
    duration: "53m",
    genres: ["Crime", "Drama", "Mystery"],
    rating: 8.7,
    maturityRating: "TV-MA",
    cast: ["Louis Hofmann", "Lisa Vicari", "Maja Schöne"],
    director: "Baran bo Odar",
    isTrending: false,
    isNewRelease: false
  }
];

export const movieCategories: MovieCategory[] = [
  {
    id: 1,
    title: "Trending Now",
    movies: movies.filter(movie => movie.isTrending)
  },
  {
    id: 2,
    title: "New Releases",
    movies: movies.filter(movie => movie.isNewRelease)
  },
  {
    id: 3,
    title: "Sci-Fi & Fantasy",
    movies: movies.filter(movie => movie.genres.some(genre => ["Sci-Fi", "Fantasy"].includes(genre)))
  },
  {
    id: 4,
    title: "Drama",
    movies: movies.filter(movie => movie.genres.includes("Drama"))
  },
  {
    id: 5,
    title: "Crime & Thrillers",
    movies: movies.filter(movie => movie.genres.some(genre => ["Crime", "Thriller"].includes(genre)))
  }
];

export const getFeaturedMovie = (): Movie => {
  return movies.find(movie => movie.id === 1) || movies[0];
};

export const getMovieById = (id: number): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const getWatchlistedMovies = (): Movie[] => {
  return movies.filter(movie => movie.isTrending); // Placeholder logic for watchlisted movies
};