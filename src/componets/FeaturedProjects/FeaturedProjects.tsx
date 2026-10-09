import React from "react";
import { Link } from "react-router-dom-v5-compat";
import "./FeaturedProjects.css";

export interface FeaturedProject {
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  link: string;
  category?: string;
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
  title?: string;
  viewAllLink?: string;
  viewAllText?: string;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  title = "FEATURED PROJECTS",
  viewAllLink = "/gallery",
  viewAllText = "VIEW ALL PROJECTS",
}) => {
  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-projects-title"
    >
      <div className="featured-projects__header">
        <div className="featured-projects__heading">
          <h2 id="featured-projects-title">
            {title}
          </h2>

          <span
            className="featured-projects__accent"
            aria-hidden="true"
          />
        </div>

        <Link
          to={viewAllLink}
          className="featured-projects__view-all"
        >
          {viewAllText}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="featured-projects__grid">
        {projects.map((project) => (
          <article
            className="featured-projects__card"
            key={project.link}
          >
            <Link
              to={project.link}
              className="featured-projects__image-link"
              aria-label={`View ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="featured-projects__image"
                loading="lazy"
                decoding="async"
              />
            </Link>

            <div className="featured-projects__content">
              {project.category && (
                <span className="featured-projects__category">
                  {project.category}
                </span>
              )}

              <h3>{project.title}</h3>

              <p>{project.location}</p>

              <Link
                to={project.link}
                className="featured-projects__link"
              >
                VIEW PROJECT
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};