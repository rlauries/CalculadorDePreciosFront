import { ArrowRight } from "lucide-react";
import "./ProjectsBanner.css";

type ProjectsBannerProps = {
  eyebrow?: string;
  title: string;
  features?: string[];
  buttonText?: string;
  buttonUrl?: string;
  backgroundImage: string;
};

export function ProjectsBanner({
  eyebrow = "01 / COMPLETED PROJECT",
  title,
  features = [],
  buttonText = "VIEW PROJECT",
  buttonUrl = "#",
  backgroundImage,
}: ProjectsBannerProps) {
  return (
    <section
      className="projects-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="projects-banner-overlay" />

      <div className="projects-banner-content">
        <span className="projects-banner-eyebrow">{eyebrow}</span>

        <h1>{title}</h1>

        {features.length > 0 && (
          <div className="projects-banner-features">
            {features.map((feature, index) => (
              <span key={index}>{feature}</span>
            ))}
          </div>
        )}

        <a href={buttonUrl} className="projects-banner-button">
          {buttonText}
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}