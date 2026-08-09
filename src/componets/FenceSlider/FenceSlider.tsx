import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FenceSlider.css";
import { defaultSliderSettings } from "../../utils/defaultSliderSettings.ts";

type FenceSlide = {
  src: string;
  alt: string;
};

const images: FenceSlide[] = [
  {
    src: "/images/originals/Fences/fence-and-gate.webp",
    alt: "Modern custom fence and gate installation",
  },
  {
    src: "/images/originals/Fences/design-an-aluminum-decorative-fence-for-the-front-yard-of-modern-houses.webp",
    alt: "Decorative aluminum fence for a modern home",
  },
  {
    src: "/images/originals/Fences/Fence-chainlink.webp",
    alt: "Chain-link fence installation",
  },
  {
    src: "/images/originals/Fences/Fence-durafence.webp",
    alt: "Modern DuraFence privacy system",
  },
  {
    src: "/images/originals/Fences/String-Light-Fence.webp",
    alt: "Custom fence with outdoor string lighting",
  },
  {
    src: "/images/originals/Fences/1685460542_en-idei-club-p-fence-gate-dizain-instagram-2.webp",
    alt: "Modern residential fence and gate design",
  },
];

export const FenceSlider = () => {
  const goToFences = () => {
    window.location.href = "/fences";
  };

  return (
    <section className="fence-to-home">
      <h2>
        PROTECT <em>what matters most</em>
      </h2>

      <Slider {...defaultSliderSettings}>
        {images.map((img) => (
          <div
            key={img.src}
            className="slider-img"
            onClick={goToFences}
            role="link"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                goToFences();
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