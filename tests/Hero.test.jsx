import { render, screen } from '@testing-library/react';
import Hero from "../src/components/Hero";

describe('Hero Component', () => {
  test('renders the headline with correct text', () => {
    render(<Hero />);
    const headlineElement = screen.getByText(/Movie Picks You’ll Actually Love/i);
    expect(headlineElement).toBeInTheDocument();
  });

  test('renders the subheadline with correct text', () => {
    render(<Hero />);
    const subheadlineElement = screen.getByText(/MyStream.AI gives you full control over what to watch next/i);
    expect(subheadlineElement).toBeInTheDocument();
  });
});