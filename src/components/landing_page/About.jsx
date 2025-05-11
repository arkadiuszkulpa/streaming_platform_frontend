import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      title: 'Personalized Discovery',
      description: 'Fine-tune your own settings or let our AI learn your taste over time.',
    },
    {
      title: 'Family-Safe Options',
      description: 'Curate a movie night that’s perfect for everyone.',
    },
    {
      title: 'Hidden Gems',
      description: 'Discover movies that match your unique preferences.',
    },
    {
      title: 'AI-Powered Personalization',
      description: 'Enjoy a platform that adapts to your viewing style.',
    },
  ];

  return (
    <section className="bg-hero-gradient text-center py-16 px-4 md:px-12" aria-label="About Section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-netflix-dark p-6 rounded-lg shadow-md" aria-label={`Feature Tile: ${feature.title}`}>
            <h3 className="text-xl font-semibold mb-2 text-netflix-red">{feature.title}</h3>
            <p className="text-base text-netflix-gray leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
