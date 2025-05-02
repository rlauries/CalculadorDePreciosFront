import React from 'react';
import '../styles/DesignTailorCard.css';
export const DesignTailorCard = () => {
  return (
    <span className='design-tailored-card'>
          <img className='banner-image' src="images/20250430_1812_Arquitectura Moderna con Piscina_simple_compose_01jt4c18frez2v7ww98k0x6j55.png" alt="HeroBanner" />
          
          <div className='second-banner-info'>
              <h1>Designs Tailored to You</h1>
              <p>
                Whether you're planning a custom pergola, fence, or a full backyard transformation — our expert team will create precise, professional architectural drawings tailored to your project. Save time, avoid design mistakes, and ensure your ideas meet local regulations.
            🛠️ We   turn your ideas into build-ready plans.
              </p>
              <button className='second-banner-button' onClick={()=>window.location.href="/contactus"}>
                Contact Us
              </button>
          </div>
        </span>
  )
}
