import React from "react";
import "./ServicesGrid.css";

export interface ServiceItem {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: string;
  iconAlt?: string;
}

interface ServicesGridProps {
  services: ServiceItem[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  services,
}) => {
  return (
    <section
      className="services-grid"
      aria-label="Lauries Welding Group services"
    >
      {services.map((service) => (
        <article
          className="services-grid__card"
          key={service.title}
        >
          <div className="services-grid__icon-wrapper">
            <img
              src={service.icon}
              alt={service.iconAlt ?? ""}
              className="services-grid__icon"
              loading="lazy"
              decoding="async"
            />
          </div>

          <h3 className="services-grid__title">
            {service.title}
          </h3>

          <p className="services-grid__description">
            {service.description}
          </p>

          <a
            href={service.link}
            className="services-grid__link"
            aria-label={`${service.linkText} - ${service.title}`}
          >
            {service.linkText}

            <span aria-hidden="true">
              →
            </span>
          </a>
        </article>
      ))}
    </section>
  );
};