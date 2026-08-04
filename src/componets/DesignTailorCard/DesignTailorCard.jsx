import React from 'react';
import './DesignTailorCard.css';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection.tsx';


export const DesignTailorCard = () => {
  return (
    <AnimatedSection>      
      <span className='design-tailored-card'>
          <div class="design-tailored-card-bg"></div>
          <img onClick={()=>window.location.href="/tools/truss"}className='banner-image' src="images/design-tailor-img.webp" alt="HeroBanner" />
          
          <div className='second-banner-info'>
              <h1>Designs Tailored to You <strong> |</strong></h1>
              <p>
                Whether you're planning a custom pergola, fence, or a full backyard transformation — our expert team will create precise, professional architectural drawings tailored to your project. Save time, avoid design mistakes, and ensure your ideas meet local regulations.
            🛠️ We   turn your ideas into build-ready plans.
              </p>
              <button className='second-banner-button' onClick={()=>window.location.href="/contactus"}>
                Contact Us
              </button>
          </div>
      </span>
    </AnimatedSection>
  
  )
}
