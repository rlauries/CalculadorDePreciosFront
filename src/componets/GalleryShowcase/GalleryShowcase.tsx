import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom-v5-compat";
import { ArrowRight, X } from "lucide-react";

import "./GalleryShowcase.css";

/* =====================================================
   TYPES
===================================================== */

export interface GalleryItem {
  id: number;
  name: string;
  imageUrl: string;
  serviceTypeId: number;
  matrialId: number;
}

export interface MaterialOption {
  id: number;
  name: string;
}

export interface GalleryCategory {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  link: string;
}

interface GalleryShowcaseProps {
  gallery: GalleryItem[];
  categories: GalleryCategory[];

  fenceMaterials: MaterialOption[];
  pergolaMaterials: MaterialOption[];

  defaultCategory?: number;
  allMaterialsId?: number;

  title?: string;
}

/* =====================================================
   COMPONENT
===================================================== */

export const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({
  gallery,
  categories,
  fenceMaterials,
  pergolaMaterials,
  defaultCategory = 1,
  allMaterialsId = 7,
  title = "SERVICE GALLERY",
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState(defaultCategory);

  const [selectedMaterial, setSelectedMaterial] =
    useState(allMaterialsId);

  const [selectedImage, setSelectedImage] =
    useState<GalleryItem | null>(null);

  /* =====================================================
     MATERIAL OPTIONS
  ===================================================== */

  const materialOptions = useMemo(() => {
    if (selectedCategory === 1) {
      return fenceMaterials;
    }

    if (selectedCategory === 2) {
      return pergolaMaterials;
    }

    return [];
  }, [
    selectedCategory,
    fenceMaterials,
    pergolaMaterials,
  ]);

  /* =====================================================
     FILTER GALLERY
  ===================================================== */

  const filteredGallery = useMemo(() => {
    return gallery.filter((item) => {
      const categoryMatches =
        selectedCategory === 0 ||
        item.serviceTypeId === selectedCategory;

      const materialMatches =
        selectedMaterial === allMaterialsId ||
        item.matrialId === selectedMaterial;

      return categoryMatches && materialMatches;
    });
  }, [
    gallery,
    selectedCategory,
    selectedMaterial,
    allMaterialsId,
  ]);

  /* =====================================================
     SELECT CATEGORY
  ===================================================== */

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setSelectedMaterial(allMaterialsId);
  };

  /* =====================================================
     MODAL
  ===================================================== */

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selectedImage]);

  const selectedCategoryData = categories.find(
    (category) => category.id === selectedCategory
  );

  const selectedImageCategory = categories.find(
    (category) =>
      category.id === selectedImage?.serviceTypeId
  );

  return (
    <section
      className="gallery-showcase"
      aria-label="Lauries Welding Group project gallery"
    >
      <div className="gallery-showcase__container">

        {/* =====================================================
            CATEGORY CARDS
        ===================================================== */}

        <div className="gallery-showcase__categories">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`gallery-showcase__category ${
                selectedCategory === category.id
                  ? "gallery-showcase__category--active"
                  : ""
              }`}
              onClick={() =>
                handleCategoryChange(category.id)
              }
              aria-pressed={
                selectedCategory === category.id
              }
            >
              <img
                src={category.image}
                alt={category.imageAlt}
                loading="lazy"
                decoding="async"
              />

              <div className="gallery-showcase__category-overlay">
                <div className="gallery-showcase__category-text">
                  <h2>{category.title}</h2>
                  <p>{category.subtitle}</p>
                </div>

                <span
                  className="gallery-showcase__category-arrow"
                  aria-hidden="true"
                >
                  <ArrowRight size={20} />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* =====================================================
            FILTER BAR
        ===================================================== */}

        <div className="gallery-showcase__filter-bar">
          <div className="gallery-showcase__filter-content">
            <span className="gallery-showcase__filter-label">
              FILTERED BY:
            </span>

            <div
              className="gallery-showcase__filters"
              role="group"
              aria-label="Filter gallery by material"
            >
              <button
                type="button"
                className={`gallery-showcase__filter ${
                  selectedMaterial === allMaterialsId
                    ? "gallery-showcase__filter--active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedMaterial(allMaterialsId)
                }
                aria-pressed={
                  selectedMaterial === allMaterialsId
                }
              >
                All Materials
              </button>

              {materialOptions
                .filter(
                  (material) =>
                    material.id !== allMaterialsId
                )
                .map((material) => (
                  <button
                    key={material.id}
                    type="button"
                    className={`gallery-showcase__filter ${
                      selectedMaterial === material.id
                        ? "gallery-showcase__filter--active"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedMaterial(material.id)
                    }
                    aria-pressed={
                      selectedMaterial === material.id
                    }
                  >
                    {material.name}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            GALLERY GRID
        ===================================================== */}

        <div className="gallery-showcase__gallery">
          <div className="gallery-showcase__heading">
            <div>
              <span className="gallery-showcase__eyebrow">
                EXPLORE OUR WORK
              </span>

              <h2>{title}</h2>

              <span
                className="gallery-showcase__accent"
                aria-hidden="true"
              />
            </div>

            <p>
              {selectedCategoryData
                ? `${selectedCategoryData.title} COLLECTION`
                : "ALL PROJECTS"}
              {" · "}
              {filteredGallery.length} IMAGES
            </p>
          </div>

          {filteredGallery.length > 0 ? (
            <div className="gallery-showcase__grid">
              {filteredGallery.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className="gallery-showcase__card"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View ${item.name}`}
                >
                  <div className="gallery-showcase__image-wrapper">
                    <img
                      src={
                        item.imageUrl.startsWith("/")
                          ? item.imageUrl
                          : `/${item.imageUrl}`
                      }
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h3 className="gallery-showcase__card-title">
                    {item.name}
                    <span aria-hidden="true" />
                  </h3>
                </button>
              ))}
            </div>
          ) : (
            <div className="gallery-showcase__empty">
              <p>
                No projects found for this material.
              </p>

              <button
                type="button"
                onClick={() =>
                  setSelectedMaterial(allMaterialsId)
                }
              >
                CLEAR FILTER
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}

      {selectedImage && (
        <div
          className="gallery-showcase__modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="gallery-showcase__modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.name}
          >
            <button
              type="button"
              className="gallery-showcase__modal-close"
              onClick={closeModal}
              aria-label="Close image"
            >
              <X size={23} />
            </button>

            <img
              src={
                selectedImage.imageUrl.startsWith("/")
                  ? selectedImage.imageUrl
                  : `/${selectedImage.imageUrl}`
              }
              alt={selectedImage.name}
            />

            <div className="gallery-showcase__modal-footer">
              <h3>{selectedImage.name}</h3>

              <div className="gallery-showcase__modal-actions">
                {selectedImageCategory && (
                  <Link to={selectedImageCategory.link}>
                    VIEW SERVICE
                    <ArrowRight size={16} />
                  </Link>
                )}

                <Link
                  to="/contactus"
                  className="gallery-showcase__modal-contact"
                >
                  GET AN ESTIMATE
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};