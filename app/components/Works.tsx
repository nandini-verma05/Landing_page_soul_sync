"use client";

import React, { useEffect, useRef } from "react";

const Works: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameCount = 3; // number of major frames (your short video sections)
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let requestId: number;
    let scrollFraction = 0;
    let targetTime = 0;

    const updateVideo = () => {
      if (!video.duration) return;
      // Smoothly approach the target time for less jumpiness
      const currentTime = video.currentTime;
      video.currentTime = currentTime + (targetTime - currentTime) * 0.15;
      requestId = requestAnimationFrame(updateVideo);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      scrollFraction = scrollTop / maxScroll;

      // map scrollFraction → 0 to duration
      targetTime = scrollFraction * video.duration;

      // Prevent overflow
      if (targetTime < 0) targetTime = 0;
      if (targetTime > video.duration) targetTime = video.duration;
    };

    // Start animation loop
    requestId = requestAnimationFrame(updateVideo);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <section className="relative h-[300vh] bg-black flex items-center justify-center">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <video
          ref={videoRef}
          src="/videos/scroll_video.mp4"
          preload="auto"
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 text-white text-lg font-medium">
          Scroll to scrub through the video
        </div>
      </div>
    </section>
  );
};

export default Works;
