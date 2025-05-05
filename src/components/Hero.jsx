import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-hero-gradient text-center py-20 px-4" aria-label="Hero Section">
      <h1 className="headline text-4xl font-bold text-netflix-red" aria-label="Hero Headline">Movie Picks You’ll Actually Love</h1>
      <p className="subheadline text-lg text-netflix-gray mt-4">
        MyStream.AI gives you full control over what to watch next—across all streaming services—using personalized settings, smart suggestions, and evolving AI tools.
      </p>
    </section>
  );
};

export default Hero;