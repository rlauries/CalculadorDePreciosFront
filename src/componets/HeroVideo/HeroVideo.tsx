import React, { useCallback, useEffect, useRef } from "react";
import "./HeroVideo.css";

interface HeroVideoProps {
  src: string;
  poster: string;
  className?: string;
  pauseTime?: number;
  videoId?: string;
  ariaLabel?: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({
  src,
  poster,
  className = "hero-video",
  pauseTime = 4000,
  videoId = "slow-video",
  ariaLabel = "Lauries Welding Group promotional video"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePlayOnClick = useCallback(() => {
    videoRef.current?.play().catch(() => {
      // El navegador puede bloquear la reproducción.
    });
  }, []);

  const handleLoop = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // El navegador puede bloquear la reproducción.
        });
      }
    }, pauseTime);
  }, [pauseTime]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      id={videoId}
      className={className}
      muted
      playsInline
      autoPlay
      preload="metadata"
      poster={poster}
      controls={false}
      aria-label={ariaLabel}
      onEnded={handleLoop}
      onClick={handlePlayOnClick}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};