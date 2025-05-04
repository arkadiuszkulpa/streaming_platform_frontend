export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  watchlist: number[]; // Array of movie IDs
  preferences: {
    genres: string[];
    maturitySettings: string;
  };
}