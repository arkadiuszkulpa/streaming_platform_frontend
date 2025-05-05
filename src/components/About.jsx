import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about bg-netflix-lightGray text-center py-16 px-6">
      <h2 className="text-3xl font-bold text-netflix-red">About MyStream.AI</h2>
      <p className="text-base text-netflix-dark mt-4 leading-relaxed">
        MyStream.AI is a personalized movie discovery engine for people who want to take back control from the default algorithms. Instead of being fed what's trending or promoted, you fine-tune your own settings—or let our AI learn your taste over time. Whether you’re curating a family-safe movie night or seeking that next hidden gem just for you, MyStream.AI adapts to your preferences and grows with your habits. From simple controls to chatbot-powered personalization, the platform is built to match your unique viewing style—on your terms.
      </p>
    </section>
  );
};

export default About;
