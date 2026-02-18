import React from 'react';
import './HeroBanner.css';

export const HeroBanner = ({ title, subtitle, imageUrl,onButtonClick }) => {
  return (
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
  );
};
