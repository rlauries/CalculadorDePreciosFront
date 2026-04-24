import React from 'react';
import './BannerImageHalf.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const BannerImageHalf = ({ image, title, subtitle, reversed, link }) => {
    return (
        <section className={`banner ${reversed ? 'reversed' : ''}`}>
            <div className="banner-content">
                <div className="text-container">
                    <h1>
                        {title}
                        <strong className='banner-strong'> | </strong>
                    </h1>
                    <p>{subtitle}</p>
                </div>

                <div className="image-container">
                    {link ? (
                        <a href={link}>
                            <img src={image} alt={title} />
                        </a>
                    ) : (
                        <img src={image} alt={title} />
                    )}
                </div>
            </div>
        </section>
    );
};

BannerImageHalf.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    reversed: PropTypes.bool,
    link: PropTypes.string // 👈 nuevo
};

BannerImageHalf.defaultProps = {
    reversed: false,
    link: null
};