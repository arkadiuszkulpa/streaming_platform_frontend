import { render, screen } from '@testing-library/react';
import Navbar from "../src/components/Navbar";

describe('Navbar Component', () => {
  test('renders the logo with correct text', () => {
    render(<Navbar />);
    const logoElement = screen.getByText(/MyStream\.AI/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the tagline with correct text', () => {
    render(<Navbar />);
    const taglineElement = screen.getByText(/Power to stream what YOU want./i);
    expect(taglineElement).toBeInTheDocument();
  });

  test('renders Sign In and Sign Up buttons', () => {
    render(<Navbar />);
    const signInButton = screen.getByText(/Sign In/i);
    const signUpButton = screen.getByText(/Sign Up/i);
    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});