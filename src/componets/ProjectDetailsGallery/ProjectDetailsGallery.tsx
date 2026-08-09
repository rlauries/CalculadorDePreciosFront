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
  return (
    <section className="project-details-gallery">
      <div className="included-services">
        <h3>INCLUDED SERVICES</h3>

        <ul>
          {services.map(({ label, icon: Icon }) => (
            <li key={label}>
              <Icon aria-hidden="true" focusable="false" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-gallery">
        <h3>PROJECT GALLERY</h3>

        <div className="gallery-grid">
          {images.map((image) => (
            <img
              key={image.imageUrl}
              src={image.imageUrl}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  );
}