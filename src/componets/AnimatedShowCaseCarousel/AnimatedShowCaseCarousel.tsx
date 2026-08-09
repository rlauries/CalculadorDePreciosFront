import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./AnimatedShowCaseCarousel.css";

export interface HeroSlide {
  id: string | number;
  image: string;
  title?: string;
  caption?: string;
  projectUrl?: string;
}

interface AnimatedShowCaseCarouselProps {
  slides: HeroSlide[];
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export const AnimatedShowCaseCarousel:
  React.FC<AnimatedShowCaseCarouselProps> = ({
    slides,
    eyebrow,
    headline,
    subheadline,
    buttonLabel = "Learn More",
    onButtonClick,
  }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  const goToProject = (projectUrl?: string) => {
    if (projectUrl) {
      window.location.href = projectUrl;
    }
  };

  const thumbSettings = {
    dots: false,
    infinite: slides.length > 1,
    speed: 1200,
    slidesToShow: Math.min(4, slides.length),
    slidesToScroll: 1,
    autoplay: slides.length > 1,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,

    beforeChange: (_oldIndex: number, nextIndex: number) => {
      setCurrentIndex(nextIndex % slides.length);
    },
  };

  return (
    <section className="hero-showcase">

      {/* Imagen grande */}
      <div
        className="hero-showcase-bg-wrapper"
        onClick={() => goToProject(currentSlide.projectUrl)}
        role={currentSlide.projectUrl ? "link" : undefined}
        tabIndex={currentSlide.projectUrl ? 0 : undefined}
        onKeyDown={(event) => {
          if (
            currentSlide.projectUrl &&
            (event.key === "Enter" || event.key === " ")
          ) {
            goToProject(currentSlide.projectUrl);
          }
        }}
      >
        <img
          className="hero-showcase-bg"
          src={currentSlide.image}
          alt={
            currentSlide.title ??
            currentSlide.caption ??
            `${headline} project`
          }
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Capa oscura */}
      <div className="hero-showcase-overlay" />

      {/* Contenido */}
      <div className="hero-showcase-content">
        {eyebrow && (
          <p className="hero-showcase-eyebrow">
            {eyebrow}
          </p>
        )}

        <h2 className="hero-showcase-headline">
          {headline}
        </h2>

        {subheadline && (
          <p className="hero-showcase-subheadline">
            {subheadline}
          </p>
        )}

        {buttonLabel && onButtonClick && (
          <button
            className="hero-showcase-btn"
            onClick={onButtonClick}
            type="button"
          >
            {buttonLabel}
          </button>
        )}
      </div>

      {/* Miniaturas */}
      <div className="hero-showcase-thumbs">
        <Slider
          ref={sliderRef}
          {...thumbSettings}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-thumb-card ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToProject(slide.projectUrl)}
              role={slide.projectUrl ? "link" : undefined}
              tabIndex={slide.projectUrl ? 0 : undefined}
              onKeyDown={(event) => {
                if (
                  slide.projectUrl &&
                  (event.key === "Enter" || event.key === " ")
                ) {
                  goToProject(slide.projectUrl);
                }
              }}
            >
              <img
                className="hero-thumb-image"
                src={slide.image}
                alt={
                  slide.title ??
                  slide.caption ??
                  `${headline} project ${index + 1}`
                }
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};