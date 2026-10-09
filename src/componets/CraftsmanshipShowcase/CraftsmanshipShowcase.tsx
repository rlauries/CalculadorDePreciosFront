import React from "react";
import { Link } from "react-router-dom-v5-compat";
import "./CraftsmanshipShowcase.css";

export interface CraftsmanshipFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CraftsmanshipImage {
  src: string;
  alt: string;
  position?: string;
}

interface CraftsmanshipShowcaseProps {
  eyebrow?: string;
  title: string;
  description: string;

  features?: CraftsmanshipFeature[];

  images: CraftsmanshipImage[];

  buttonText?: string;
  buttonLink?: string;
}

export const CraftsmanshipShowcase: React.FC<
  CraftsmanshipShowcaseProps
> = ({
  eyebrow = "BUILT IN-HOUSE. INSTALLED BY PROFESSIONALS.",
  title,
  description,
  features = [],
  images,
  buttonText = "LEARN MORE ABOUT US",
  buttonLink = "/contactus",
}) => {
  return (
    <section
      className="craft-showcase"
      aria-label="Lauries Welding Group craftsmanship"
    >
      {/* BLACK CONTENT PANEL */}

      <div className="craft-showcase__content">
        <div className="craft-showcase__content-inner">

          {eyebrow && (
            <p className="craft-showcase__eyebrow">
              {eyebrow}
            </p>
          )}

          <h2 className="craft-showcase__title">
            {title}
          </h2>

          <p className="craft-showcase__description">
            {description}
          </p>

          {features.length > 0 && (
            <div className="craft-showcase__features">

              {features.map((feature) => (
                <div
                  className="craft-showcase__feature"
                  key={feature.title}
                >
                  <img
                    src={feature.icon}
                    alt=""
                    className="craft-showcase__feature-icon"
                    loading="lazy"
                    decoding="async"
                  />

                  <div>
                    <h3>{feature.title}</h3>

                    <p>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          )}

          {buttonText && buttonLink && (
            <Link
              to={buttonLink}
              className="craft-showcase__button"
            >
              {buttonText}

              <span aria-hidden="true">
                →
              </span>
            </Link>
          )}

        </div>
      </div>


      {/* IMAGE PANELS */}

      <div className="craft-showcase__images">

        {images.slice(0, 3).map((image, index) => (
          <div
            className={`craft-showcase__image-panel craft-showcase__image-panel--${
              index + 1
            }`}
            key={`${image.src}-${index}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="craft-showcase__image"
              style={{
                objectPosition: image.position ?? "center",
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}

      </div>
    </section>
  );
};