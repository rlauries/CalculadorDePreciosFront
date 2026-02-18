import React from "react";
import { AnimatedSection } from "../AnimatedSection/AnimatedSection.tsx";
import "./SectionIntro.css";

interface SectionIntroProps {
  title: string;
  subtitle?: string;
  description: string;
  
}

export const SectionIntro: React.FC<SectionIntroProps> = ({
  title,
  description,
  
}) => {
  return (
    <AnimatedSection>
      <div className="section-intro">
        <h2>
          {title} <strong>|</strong>
        </h2>
        
        <p>{description}</p>
      </div>
    </AnimatedSection>
  );
};
