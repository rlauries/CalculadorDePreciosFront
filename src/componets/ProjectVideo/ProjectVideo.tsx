import { useState } from "react";
import { Play } from "lucide-react";
import "./ProjectVideo.css";

type ProjectVideoProps = {
  title?: string;
  description?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  localVideoUrl?: string;
  buttonText?: string;
};

export function ProjectVideo({
  title = "PROJECT VIDEO",
  description,
  thumbnailUrl,
  videoUrl,
  localVideoUrl,
  buttonText = "PLAY VIDEO",
}: ProjectVideoProps) {

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="project-video">
      <div className="project-video-content">
        <h3>{title}</h3>

        {description && <p>{description}</p>}

        <button
          className="project-video-button"
          onClick={() => setPlayVideo(true)}
        >
          {buttonText}
          <Play size={16} />
        </button>
      </div>

      <div className="project-video-preview">

        {!playVideo ? (
          <>
            {thumbnailUrl && (
              <img src={thumbnailUrl} alt={title} />
            )}

            <div className="project-video-overlay" />

            <div className="project-play-icon">
              <Play size={42} />
            </div>
          </>
        ) : (
          <video
            controls
            autoPlay
            className="project-video-player"
          >
            <source src={localVideoUrl} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
}