import React from "react";
import { Link } from "react-router-dom-v5-compat";
import "./PageHero.css";

/* =====================================================
   TYPES
===================================================== */

export interface PageHeroBreadcrumb {
  label: string;
  path?: string;
}

interface PageHeroProps {
  image: string;
  imageAlt?: string;

  title: string;
  description?: string;

  breadcrumbs?: PageHeroBreadcrumb[];

  overlayOpacity?: number;

  height?: string;

  imagePosition?: string;

  showAccent?: boolean;
}

/* =====================================================
   COMPONENT
===================================================== */

export const PageHero: React.FC<PageHeroProps> = ({
  image,
  imageAlt = "",

  title,
  description,

  breadcrumbs = [],

  overlayOpacity = 0.65,

  height = "420px",

  imagePosition = "center",

  showAccent = true,
}) => {
  const opacity = Math.min(1, Math.max(0, overlayOpacity));

  return (
    <section
      className="page-hero"
      style={
        {
          "--page-hero-height": height,
          "--page-hero-overlay": opacity,
          "--page-hero-image-position": imagePosition,
        } as React.CSSProperties
      }
      aria-label={title}
    >
      {/* =====================================
          BACKGROUND IMAGE
      ===================================== */}

      <img
        src={image}
        alt={imageAlt}
        className="page-hero__image"
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {/* =====================================
          DARK OVERLAY
      ===================================== */}

      <div
        className="page-hero__overlay"
        aria-hidden="true"
      />

      {/* =====================================
          CONTENT
      ===================================== */}

      <div className="page-hero__container">

        {/* BREADCRUMBS */}

        {breadcrumbs.length > 0 && (
          <nav
            className="page-hero__breadcrumbs"
            aria-label="Breadcrumb"
          >
            <ol>
              {breadcrumbs.map((crumb, index) => {
                const isLast =
                  index === breadcrumbs.length - 1;

                return (
                  <li key={`${crumb.label}-${index}`}>
                    {!isLast && crumb.path ? (
                      <Link to={crumb.path}>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        aria-current={
                          isLast ? "page" : undefined
                        }
                      >
                        {crumb.label}
                      </span>
                    )}

                    {!isLast && (
                      <span
                        className="page-hero__separator"
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* ORANGE ACCENT */}

        {showAccent && (
          <span
            className="page-hero__accent"
            aria-hidden="true"
          />
        )}

        {/* TITLE */}

        <h1 className="page-hero__title">
          {title}
        </h1>

        {/* DESCRIPTION */}

        {description && (
          <p className="page-hero__description">
            {description}
          </p>
        )}

      </div>
    </section>
  );
};