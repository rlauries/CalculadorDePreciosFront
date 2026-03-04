import React from 'react';
import './HeroBanner.css';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection.tsx';

export const HeroBanner = ({ title, subtitle, imageUrl,onButtonClick }) => {
  return (
    <AnimatedSection>
      <div className="hero-banner" 
          style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">{title} <strong className='hero-strong'> | </strong></h1>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-button" onClick={onButtonClick}>
              Contact Us
          </button>
          
        </div>
      </div>
    </AnimatedSection>
  );
};
