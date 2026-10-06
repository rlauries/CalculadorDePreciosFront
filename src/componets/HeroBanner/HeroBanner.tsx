import React from "react";
import "./HeroBanner.css";

interface HeroBannerProps {
  image: string;
  title?: string;
  subtitle?: string;
  services?: string[];
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showContent?: boolean;
  ariaLabel?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  image,
  title = "CUSTOM OUTDOOR STRUCTURES",
  subtitle = "BUILT TO LAST. DESIGNED FOR YOU.",
  services = [
    "PERGOLAS",
    "FENCES & GATES",
    "STAIRS & RAILINGS",
    "CLADDING",
  ],
  primaryButtonText = "GET A FREE ESTIMATE",
  primaryButtonLink = "/contactus",
  secondaryButtonText = "VIEW OUR PROJECTS",
  secondaryButtonLink = "/gallery",
  showContent = true,
  ariaLabel = "Custom outdoor structures by Lauries Welding Group",
}) => {
  return (
    <section className="hero-banner" aria-label={ariaLabel}>
      <img
        src={image}
        alt=""
        className="hero-banner-image"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {showContent && (
        <div className="hero-banner-overlay">
          <div className="hero-banner-content">

            <h1>{title}</h1>

            <h2>{subtitle}</h2>

            <p className="hero-banner-services">
              {services.map((service, index) => (
                <React.Fragment key={service}>
                  <span className="hero-banner-service-span">{service}</span>

                  {index < services.length - 1 && (
                    <span
                      className="hero-service-separator"
                      aria-hidden="true"
                    >
                      •
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>

            <div className="hero-banner-buttons">
              <a
                href={primaryButtonLink}
                className="hero-button hero-button-primary"
              >
                {primaryButtonText}
              </a>

              <a
                href={secondaryButtonLink}
                className="hero-button hero-button-secondary"
              >
                {secondaryButtonText}
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};