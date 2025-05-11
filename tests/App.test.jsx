import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from "../src/App";

describe('App Component', () => {
  test('renders Hero and About components on the home route', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Check for Navbar using a more specific query
    expect(screen.getByRole('heading', { name: /MyStream\.AI/i })).toBeInTheDocument();

    // Check for Hero
    expect(screen.getByText(/Movie Picks You’ll Actually Love/i)).toBeInTheDocument();

    // Check for About
    expect(screen.getByText(/About MyStream.AI/i)).toBeInTheDocument();
  });

  test('renders LoginPage on /login route', () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });

  test('renders SignupPage on /signup route', () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Signup Page/i)).toBeInTheDocument();
  });
});