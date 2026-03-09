import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./FeatureShowcaseCarousel.css";
import {defaultSliderSettings} from "../../utils/defaultSliderSettings.ts"; // Reutilizamos configuraciones comunes

interface FeatureItem {
  id: number;
  name: string;
  imageUrl: string;
  linkTo?: string; // Opcional, para redirigir a una página específica
}

interface FeatureShowcaseCarouselProps {
  title: string;
  subtitle: string;
  mainImage: string;
  items: FeatureItem[];
}

export const FeatureShowcaseCarousel: React.FC<FeatureShowcaseCarouselProps> = ({
  title,
  subtitle,
  mainImage,
  items,
}) => {
  const [selectedItem, setSelectedItem] = useState<FeatureItem | null>(null);
  const sliderRef = useRef<any>(null);



  const openModal = (item: FeatureItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="feature-showcase">
      <div className="feature-showcase-top">
        <div className="feature-showcase-text">
          <h2>{title}<strong> |</strong></h2>
          {subtitle && <em><p>{subtitle}</p></em>}
        </div>

        <div className="feature-showcase-main-image">
          <img src={mainImage} alt={title} />
        </div>
      </div>

      <div className="feature-showcase-carousel">
        <Slider ref={sliderRef} {...defaultSliderSettings}>
          {items.map((item) => (
            <div key={item.id} className="feature-showcase-slide-wrapper">
              <div
                className="feature-showcase-card"
                onClick={() => openModal(item)}
              >
                <img src={item.imageUrl} alt={item.name} />
                <div className="feature-showcase-card-overlay">
                  <a href={item.linkTo} target="_blank" rel="noopener noreferrer">
                    Click to view <strong>{item.name}</strong>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedItem && (
        <div className="feature-modal-overlay" onClick={closeModal}>
          <div
            className="feature-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="feature-modal-close" onClick={closeModal}>
              ×
            </button>

            <h2>
              {selectedItem.name} <strong>|</strong>
            </h2>

            <img src={selectedItem.imageUrl} alt={selectedItem.name} />
          </div>
        </div>
      )}
    </section>
  );
};