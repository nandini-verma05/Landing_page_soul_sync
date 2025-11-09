"use client";

import React, { useEffect, useRef } from "react";

const Works: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is paused and ready for frame control
    video.pause();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // How far we’ve scrolled through the page (0 to 1)
      const scrollFraction = scrollTop / maxScroll;

      // Calculate corresponding video time
      const targetTime = scrollFraction * video.duration;

      // Snap to exact frame (assuming ~30fps)
      const frameRate = 30;
      const snappedTime = Math.floor(targetTime * frameRate) / frameRate;

      if (!isNaN(snappedTime)) {
        video.currentTime = snappedTime;
      }
    };

    // Handle video load state before enabling scroll control
    const handleLoadedMetadata = () => {
      handleScroll(); // Update frame based on initial scroll position
      window.addEventListener("scroll", handleScroll);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <section className="relative h-[500vh] bg-black flex items-center justify-center">
      {/* Sticky container keeps video fixed while scrolling */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <video
          ref={videoRef}
          src="/videos/scroll_video.mp4"
          preload="auto"
          playsInline
          muted
          className="w-full h-full object-cover"
        />

        {/* Optional overlay text */}
        <div className="absolute bottom-10 text-white text-lg font-semibold bg-black/50 px-4 py-2 rounded-lg">
          Scroll to move frame by frame 🎞️
        </div>
      </div>
    </section>
  );
};

export default Works;
