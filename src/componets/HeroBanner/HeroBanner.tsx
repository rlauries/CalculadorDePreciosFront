import React from "react";
import "./HeroBanner.css";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onButtonClick?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  imageUrl,
  onButtonClick,
}) => {
  return (
    <div className="hero-banner">
      <img
        className="hero-banner-image"
        src={imageUrl}
        alt={title}
        loading="eager"
        decoding="async"
      />

      <div className="hero-overlay">
        <h1 className="hero-title">
          {title} <strong className="hero-strong">|</strong>
        </h1>

        <p className="hero-subtitle">
          {subtitle}
        </p>

        <button
          type="button"
          className="hero-button"
          onClick={onButtonClick}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};