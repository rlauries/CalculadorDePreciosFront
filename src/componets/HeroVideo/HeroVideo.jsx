import React from 'react'
import { useCallback } from 'react'
import './HeroVideo.css'

export const HeroVideo  = ({
    src,
    className = "hero-video",
    pauseTime = 4000,     // tiempo de pausa antes de reiniciar
    videoId = "slow-video"
    }) => {

    const handlePlayOnClick = useCallback(() => {
        const video = document.getElementById(videoId);
        if (video) video.play();
    }, [videoId]);

    const handleLoop = useCallback(() => {
        setTimeout(() => {
        const video = document.getElementById(videoId);
        if (video) video.play();
        }, pauseTime);
    }, [videoId, pauseTime]);

    return (
        <video
            id={videoId}
            className={className}
            src={src}
            muted
            playsInline
            autoPlay
            onEnded={handleLoop}
            onClick={handlePlayOnClick}
        />
    );
};
