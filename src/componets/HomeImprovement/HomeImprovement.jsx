import React from 'react'
import './HomeImprovement.css'
import Slider from 'react-slick';

export const HomeImprovement = () => {
    const images = [
        { src: "images/originals/HomeImprovement/front-porch.webp", alt: "Home Improvement 1" },
        { src: "images/originals/HomeImprovement/sofie-cladding.webp", alt: "Home Improvement 2" },
        { src: "images/originals/HomeImprovement/big-cladding.webp", alt: "Home Improvement 3" },
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
    <div className='home-improvment-container'>
        <div className='home-improvment-text'>
            <h2>SUCCESSFUL IMPROVEMENT</h2>
            <p>...we bring your vision to life</p>
        </div>
        <div className='home-improvment-image'>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className='slider-img' onClick={() => window.location.href = "/claddings"}>
                        <img src={img.src} alt={img.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}
