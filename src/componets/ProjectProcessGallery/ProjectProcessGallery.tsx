import "./ProjectProcessGallery.css";

export type ProcessImage = {
  label: string;
  imageUrl: string;
  alt?: string;
};

type ProjectProcessGalleryProps = {
  items: ProcessImage[];
};

export function ProjectProcessGallery({ items }: ProjectProcessGalleryProps) {
  return (
    <section className="process-gallery">
      {items.map((item) => (
        <article className="process-card" key={item.label}>
          <img src={item.imageUrl} alt={item.alt ?? item.label} />

          <div className="process-overlay" />

          <span className="process-label">{item.label}</span>
        </article>
      ))}
    </section>
  );
}