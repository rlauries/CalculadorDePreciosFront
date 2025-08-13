import React from 'react';
import PropTypes from 'prop-types';
import './BannerImageHalf.css';

export const BannerImageHalf = ({ image, title, subtitle, reversed}) => {
    return (
        <section className={`banner ${reversed ? 'reversed' : ''}`}>
            <div className="banner-content">
                <div className="text-container">
                    <h1>{title}<strong className='banner-strong'> | </strong></h1>
                    <p>{subtitle}</p>
                </div>
                <div className="image-container">
                    <img src={image} alt={title} />
                </div>
            </div>
        </section>
    );
}
BannerImageHalf.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    reversed: PropTypes.bool, // Esto controla si la imagen y el texto se invierten
    
};
BannerImageHalf.defaultProps = {
    reversed: false,
    buttonText: '',
    buttonLink: ''
};