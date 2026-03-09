import React, { useState,useRef } from "react";
import Slider from "react-slick";
import "./AnimatedShowCaseCarousel.css";
import {defaultSliderSettings} from "../../utils/defaultSliderSettings.ts"; // Reutilizamos configuraciones comunes

export interface HeroSlide {
  id: string | number;
  image: string;
  title?: string;
  caption?: string;
}
interface AnimatedShowCCaseCarouselProps {
  slides: HeroSlide[];
  eyebrow?: string;      // texto pequeño arriba
  headline: string;      // FANS, LIGHTING, etc.
  subheadline?: string;  // texto debajo
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export const AnimatedShowCaseCarousel: React.FC<AnimatedShowCCaseCarouselProps> = ({
  slides,
  eyebrow,
  headline,
  subheadline,
  buttonLabel = "Learn More",
  onButtonClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<any>(null);
  const currentSlide = slides[currentIndex];

  const thumbSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: Math.min(4, slides.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    // 🔁 cada vez que el slider cambia, actualizamos el índice
    beforeChange: (_oldIndex: number, nextIndex: number) => {
      setCurrentIndex(nextIndex % slides.length);
    },
  };


  return (
      <section className="hero-showcase">
        {/* Imagen grande */}
        <div
          className="hero-showcase-bg"
          style={{ backgroundImage: `url(${currentSlide.image})` }}
        />

        {/* Capa oscura */}
        <div className="hero-showcase-overlay" />

        {/* Contenido de texto principal */}
        <div className="hero-showcase-content">
          {eyebrow && (
            <p className="hero-showcase-eyebrow">
              {eyebrow} 
            </p>
          )}
          <h1 className="hero-showcase-headline">{headline}</h1>
          {subheadline && (
            <p className="hero-showcase-subheadline">{subheadline}</p>
          )}

          {buttonLabel && (
            <button
              className="hero-showcase-btn"
              onClick={onButtonClick}
              type="button"
            >
              {buttonLabel}
            </button>
          )}
        </div>

        {/* Carrusel pequeño abajo */}
        <div className="hero-showcase-thumbs">
          <Slider ref={sliderRef} {...thumbSettings}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-thumb-card ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div
                  className="hero-thumb-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    
  );
};