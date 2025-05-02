import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/PergolaSlider.css";


export const PergolaSlider = () => {
    
    const images = [
        { src: "images/IMG_7746.jpg", alt: "Steel Pergola" },
        { src: "images/Targa-Large-main.webp", alt: "Aluminum Wood Pergola" },
        { src: "images/Designer-Shade-Solutions.jpg", alt: "Cross Bar Pergola" },
        { src: "images/aluminum-modern-pergola.jpeg", alt: "Insulated Pergola" },
        { src: "images/Smart-Technology-Customization-for-Ultimate-Control.jpeg", alt: "Insulated Pergola" },
        { src: "images/Why-StruXure-is-the-Go-To-Pergola-Brand-Over-All-Others.jpeg", alt: "Insulated Pergola" },
        
      ];

    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
        {
        breakpoint: 768,
        settings: {
        slidesToShow: 1
        }
        }
    ]
    };
  return (
    <div className='pergolas-to-home'>
      <h2>
        Discover the perfect blend of style, functionality, and comfort with our modern pergolas
      </h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slider-img" onClick={() => window.location.href = "/pergolas"}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
