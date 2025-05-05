import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider, useAuth } from "../src/context/AuthContext";
import React from 'react';

const TestComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <p data-testid="user">{user ? user.name : 'No user logged in'}</p>
      <button onClick={() => login({ name: 'Test User' })}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

describe('AuthContext', () => {
  test('provides default user as null', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const userElement = screen.getByTestId('user');
    expect(userElement.textContent).toBe('No user logged in');
  });

  test('allows login and updates user', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loginButton = screen.getByText('Login');

    // Provide valid credentials
    fireEvent.click(loginButton, {
      target: { email: 'test@example.com', password: 'password123' },
    });

    // Wait for the user state to update
    await screen.findByText('Test User');

    const userElement = screen.getByTestId('user');
    expect(userElement.textContent).toBe('Test User');
  });

  test('allows logout and resets user', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loginButton = screen.getByText('Login');
    loginButton.click();

    const logoutButton = screen.getByText('Logout');
    logoutButton.click();

    const userElement = screen.getByTestId('user');
    expect(userElement.textContent).toBe('No user logged in');
  });
});