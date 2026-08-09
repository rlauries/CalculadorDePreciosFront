import { ArrowRight } from "lucide-react";
import "./ProjectsBanner.css";

type ProjectsBannerProps = {
  eyebrow?: string;
  title: string;
  features?: string[];
  buttonText?: string;
  buttonUrl?: string;
  backgroundImage: string;
  backgroundAlt?: string;
};

export function ProjectsBanner({
  eyebrow = "01 / COMPLETED PROJECT",
  title,
  features = [],
  buttonText = "VIEW PROJECT",
  buttonUrl = "#",
  backgroundImage,
  backgroundAlt = "",
}: ProjectsBannerProps) {
  return (
    <section className="projects-banner">
      <img
        className="projects-banner-background"
        src={backgroundImage}
        alt={backgroundAlt}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      <div className="projects-banner-overlay" />

      <div className="projects-banner-content">
        <span className="projects-banner-eyebrow">{eyebrow}</span>

        <h1>{title}</h1>

        {features.length > 0 && (
          <div className="projects-banner-features">
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        )}

        <a href={buttonUrl} className="projects-banner-button">
          {buttonText}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}