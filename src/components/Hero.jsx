import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-hero-gradient text-center py-20 px-4">
      <h1 className="headline text-4xl font-bold text-netflix-red">Movie Picks You’ll Actually Love</h1>
      <p className="subheadline text-lg text-netflix-gray mt-4">
        MyStream.AI gives you full control over what to watch next—across all streaming services—using personalized settings, smart suggestions, and evolving AI tools.
      </p>
    </section>
  );
};

export default Hero;