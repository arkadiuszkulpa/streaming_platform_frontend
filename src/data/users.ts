import { UserProfile } from '../types/user';

export const users: UserProfile[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    watchlist: [1, 3, 5],
    preferences: {
      genres: ['Action', 'Sci-Fi', 'Thriller'],
      maturitySettings: 'TV-MA'
    }
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
    watchlist: [2, 6, 8],
    preferences: {
      genres: ['Drama', 'Romance', 'Documentary'],
      maturitySettings: 'TV-14'
    }
  }
];

export const getCurrentUser = (): UserProfile => {
  return users[0];
};