import { render, screen } from '@testing-library/react';
import About from "../src/components/About";

describe('About Component', () => {
  test('renders the heading with correct text', () => {
    render(<About />);
    const headingElement = screen.getByText(/About MyStream.AI/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the description with correct text', () => {
    render(<About />);
    const descriptionElement = screen.getByText(/MyStream.AI is a personalized movie discovery engine/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});