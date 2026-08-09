import React from "react";
import "./About.css";

type AboutCardProps = {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  className: string;
};

function AboutCard({
  href,
  image,
  alt,
  title,
  description,
  className,
}: AboutCardProps) {
  return (
    <a
      href={href}
      className={`about-card-home ${className}`}
      aria-label={`View ${title}`}
    >
      <img
        className="about-card-image"
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
      />

      <div className="about-card-overlay" />

      <div className="card-home-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-grid-home">
        <AboutCard
          href="/fences"
          image="/images/originals/Fences/modern-yan-gate.webp"
          alt="Modern custom aluminum gate and fence"
          title="OUR LEGACY"
          description="Achieve your ideas."
          className="card-1"
        />

        <div className="about-card-home card-2">
          <div className="card-home-text">
            <h3>WHAT WE STAND FOR</h3>
            <p>The results we deliver.</p>
          </div>
        </div>

        <AboutCard
          href="/pergolas"
          image="/images/originals/Pergolas/big-pergola-hotel.webp"
          alt="Large custom pergola for an outdoor hospitality area"
          title="OUR APPROACH"
          description="Strategies that evolve with their goals."
          className="card-3"
        />

        <AboutCard
          href="/stairs"
          image="/images/originals/Stairs/composite-stair-outdoor.webp"
          alt="Custom aluminum and composite outdoor staircase"
          title="THE IMPACT"
          description="Informed decisions and structures built for long-term value."
          className="card-4"
        />

        <div className="about-card-home card-5">
          <div className="dot" />
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);