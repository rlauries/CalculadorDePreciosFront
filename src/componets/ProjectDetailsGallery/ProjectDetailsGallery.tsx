import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import "./ProjectDetailsGallery.css";

export type ServiceItem = {
  label: string;
  icon: LucideIcon;
};

export type GalleryImage = {
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
};

type Props = {
  services: ServiceItem[];
  images: GalleryImage[];
};

export function ProjectDetailsGallery({ services, images }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] =
    useState<number | null>(null);

  const isModalOpen = selectedImageIndex !== null;

  const selectedImage =
    selectedImageIndex !== null
      ? images[selectedImageIndex]
      : null;

  // OPEN MODAL
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  // CLOSE MODAL
  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // NEXT IMAGE
  const nextImage = useCallback(() => {
    setSelectedImageIndex((current) => {
      if (current === null || images.length === 0) {
        return current;
      }

      return (current + 1) % images.length;
    });
  }, [images.length]);

  // PREVIOUS IMAGE
  const previousImage = useCallback(() => {
    setSelectedImageIndex((current) => {
      if (current === null || images.length === 0) {
        return current;
      }

      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  // KEYBOARD NAVIGATION
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [
    isModalOpen,
    closeModal,
    nextImage,
    previousImage,
  ]);

  return (
    <>
      <section className="project-details-gallery">

        {/* =====================================
            INCLUDED SERVICES
        ===================================== */}

        <div className="included-services">
          <h3>INCLUDED SERVICES</h3>

          <ul>
            {services.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Icon
                  aria-hidden="true"
                  focusable="false"
                />

                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* =====================================
            PROJECT GALLERY
        ===================================== */}

        <div className="project-gallery">
          <h3>PROJECT GALLERY</h3>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <button
                key={`${image.imageUrl}-${index}`}
                type="button"
                className="project-gallery__image-button"
                onClick={() => openModal(index)}
                aria-label={`View enlarged image: ${image.alt}`}
              >
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                />

                <span
                  className="project-gallery__image-overlay"
                  aria-hidden="true"
                >
                  VIEW IMAGE
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          IMAGE MODAL
      ===================================== */}

      {isModalOpen && selectedImage && (
        <div
          className="project-gallery-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="project-gallery-modal__content"
            role="dialog"
            aria-modal="true"
            aria-label="Project image gallery"
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="project-gallery-modal__close"
              onClick={closeModal}
              aria-label="Close gallery"
              autoFocus
            >
              <X size={24} />
            </button>

            {/* PREVIOUS */}

            {images.length > 1 && (
              <button
                type="button"
                className="project-gallery-modal__arrow project-gallery-modal__arrow--left"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* MAIN IMAGE */}

            <div className="project-gallery-modal__image-container">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.alt}
                className="project-gallery-modal__image"
              />
            </div>

            {/* NEXT */}

            {images.length > 1 && (
              <button
                type="button"
                className="project-gallery-modal__arrow project-gallery-modal__arrow--right"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* FOOTER */}

            <div className="project-gallery-modal__footer">
              <p className="project-gallery-modal__caption">
                {selectedImage.alt}
              </p>

              <span className="project-gallery-modal__counter">
                {selectedImageIndex! + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}