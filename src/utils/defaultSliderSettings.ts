import { Settings } from "react-slick";

export const defaultSliderSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToShow: Math.min(4),
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  centerMode: true,
  centerPadding: "60px",
};