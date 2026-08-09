import { useState } from "react";
import { Play } from "lucide-react";
import "./ProjectVideo.css";

type ProjectVideoProps = {
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
  videoUrl?: string;
  localVideoUrl?: string;
  buttonText?: string;
};

export function ProjectVideo({
  title = "PROJECT VIDEO",
  description,
  thumbnailUrl,
  thumbnailAlt = "Project video preview",
  videoUrl,
  localVideoUrl,
  buttonText = "PLAY VIDEO",
}: ProjectVideoProps) {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const sourceUrl = localVideoUrl ?? videoUrl;
  const hasVideo = Boolean(sourceUrl);

  const handlePlay = () => {
    if (hasVideo) {
      setPlayVideo(true);
      setVideoError(false);
    }
  };

  return (
    <section className="project-video">
      <div className="project-video-content">
        <h3>{title}</h3>

        {description && <p>{description}</p>}

        <button
          type="button"
          className="project-video-button"
          onClick={handlePlay}
          disabled={!hasVideo}
          aria-label={`Play video: ${title}`}
        >
          {buttonText}
          <Play size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="project-video-preview">
        {!playVideo ? (
          <button
            type="button"
            className="project-video-thumbnail-button"
            onClick={handlePlay}
            disabled={!hasVideo}
            aria-label={`Play video: ${title}`}
          >
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={thumbnailAlt}
                loading="lazy"
                decoding="async"
              />
            )}

            <div className="project-video-overlay" />

            <div className="project-play-icon">
              <Play size={42} aria-hidden="true" />
            </div>
          </button>
        ) : videoError ? (
          <p className="project-video-error">
            The video could not be loaded.
          </p>
        ) : (
          <video
            controls
            autoPlay
            playsInline
            preload="none"
            className="project-video-player"
            onError={() => setVideoError(true)}
          >
            <source src={sourceUrl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        )}
      </div>
    </section>
  );
}