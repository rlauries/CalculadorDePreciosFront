import { Settings } from "react-slick";

export const defaultSliderSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  pauseOnHover: true,
  cssEase: "ease-in-out",
  centerMode: true,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
};