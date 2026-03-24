import React from 'react';
import './About.css';


const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-grid-home">
        
          <div
            className="about-card-home card-1"
            style={{ backgroundImage: "url('/images/originals/Fences/modern-yan-gate.png')" }}
            
          >
            <div className="card-home-text">
              <h3>OUR LEGACY</h3>
              <p>
                Achieve your ideas.
              </p>
            </div>
          </div>

        <div className="about-card-home card-2">
          <div className="card-home-text">
            <h3>WHAT WE STAND FOR</h3>
            <p>
              The results we deliver.
            </p>
          </div>
        </div>

        <div
          className="about-card-home card-3"
          style={{ backgroundImage: "url('/images/originals/Pergolas/big-pergola-hotel.png')" }}
        >
          <div className="card-home-text">
            <h3>OUR APPROACH</h3>
            <p>
              Strategies that evolve with their goals.
            </p>
          </div>
        </div>

        <div
          className="about-card-home card-4"
          style={{ backgroundImage: "url('/images/originals/Stairs/composite-stair-outdoor.png')" }}
        >
          <div className="card-home-text">
            <h3>THE IMPACT</h3>
            <p>
              Informed decisions, and stay financially resilient.
            </p>
          </div>
        </div>

        <div className="about-card-home card-5">
          <div className="dot" />
        </div>
      </div>
    </section>
  );
};

export default About;