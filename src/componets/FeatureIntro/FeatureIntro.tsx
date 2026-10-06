import React from "react";
import "./FeatureIntro.css";

interface FeatureIntroProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent?: string;
  imagePosition?: "left" | "right";
}

export const FeatureIntro: React.FC<FeatureIntroProps> = ({
  title,
  description,
  image,
  imageAlt,
  accent = "#f1683a",
  imagePosition = "right",
}) => {
  return (
    <section
      className={`feature-intro ${
        imagePosition === "left" ? "feature-intro--reverse" : ""
      }`}
    >
      <div className="feature-intro__content">
        <div className="feature-intro__title-wrapper">
          <h2 className="feature-intro__title">
            {title}
          </h2>

          <span
            className="feature-intro__accent-right"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
        </div>

        <p className="feature-intro__description">
          {description}
        </p>
      </div>

      <div className="feature-intro__image-wrapper">
        <img
          src={image}
          alt={imageAlt}
          className="feature-intro__image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};