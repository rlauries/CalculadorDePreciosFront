import "./BannerImageHalf.css";

interface BannerImageHalfProps {
  image: string;
  title: string;
  subtitle: string;
  reversed?: boolean;
  link?: string;
}

export function BannerImageHalf({
  image,
  title,
  subtitle,
  reversed = false,
  link,
}: BannerImageHalfProps) {
  const imageElement = (
    <img
      src={image}
      alt={title}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <section className={`banner ${reversed ? "reversed" : ""}`}>
      <div className="banner-content">
        <div className="text-container">
          <h1>
            {title}
            <strong className="banner-strong"> | </strong>
          </h1>

          <p>{subtitle}</p>
        </div>

        <div className="image-container">
          {link ? (
            <a href={link}>
              {imageElement}
            </a>
          ) : (
            imageElement
          )}
        </div>
      </div>
    </section>
  );
}