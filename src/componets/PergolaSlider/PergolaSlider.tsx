import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PergolaSlider.css";
import { defaultSliderSettings } from "../../utils/defaultSliderSettings.ts";

type PergolaSlide = {
  src: string;
  alt: string;
};

const images: PergolaSlide[] = [
  {
    src: "/images/originals/Pergolas/IMG_7746.webp",
    alt: "Custom wood pergola with exposed beams",
  },
  {
    src: "/images/originals/Pergolas/Targa-Large-main.webp",
    alt: "Modern aluminum pergola with adjustable roof",
  },
  {
    src: "/images/originals/Pergolas/Designer-Shade-Solutions.webp",
    alt: "Modern pergola shade system for an outdoor patio",
  },
  {
    src: "/images/originals/Pergolas/aluminum-modern-pergola.webp",
    alt: "Modern aluminum pergola installed over an outdoor living area",
  },
  {
    src: "/images/originals/Pergolas/Smart-Technology-Customization-for-Ultimate-Control.webp",
    alt: "Motorized pergola with smart roof controls",
  },
  {
    src: "/images/originals/Pergolas/Why-StruXure-is-the-Go-To-Pergola-Brand-Over-All-Others.webp",
    alt: "Luxury louvered pergola system for a residential patio",
  },
];

export const PergolaSlider = () => {
  const goToPergolas = () => {
    window.location.href = "/pergolas";
  };

  return (
    <section className="pergolas-to-home">
      <h2>
        ELEVATE <em>your outdoor life</em>
      </h2>

      <Slider {...defaultSliderSettings}>
        {images.map((img) => (
          <div
            key={img.src}
            className="slider-img"
            onClick={goToPergolas}
            role="link"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                goToPergolas();
              }
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};