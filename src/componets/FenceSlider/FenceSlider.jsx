import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./FenceSlider.css";



export const FenceSlider = () => {
    const images = [
        { src: "images/originals/Fences/fence-and-gate.jpg", alt: "Steel Pergola" },
        { src: "images/originals/Fences/design-an-aluminum-decorative-fence-for-the-front-yard-of-modern-houses.jpg", alt: "Insulated Pergola" },
        { src: "images/originals/Fences/Fence-chainlink.jpg", alt: "Aluminum Wood Pergola" },
        { src: "images/originals/Fences/Fence-durafence.jpg", alt: "Cross Bar Pergola" },
        { src: "images/originals/Fences/String-Light-Fence.png", alt: "Insulated Pergola" },
        { src: "images/originals/Fences/1685460542_en-idei-club-p-fence-gate-dizain-instagram-2.jpg", alt: "Insulated Pergola" },
        
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
    <div className='fence-to-home'>
         <h2>
            PROTECT <em> what matters most</em>
        </h2>
        <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index} className='slider-img' onClick={() => window.location.href = "/fences"}>
                    <img src={img.src} alt={img.alt} />
                </div>
            ))}
        </Slider>
    </div>
  )
}
