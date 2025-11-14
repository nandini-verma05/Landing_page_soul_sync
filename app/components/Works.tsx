"use client";
import { useEffect, useRef } from "react";

export default function NewSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      if (video.duration) {
        video.currentTime = video.duration * scrollFraction;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col items-center h-[300vh]">
      {/* Make it sticky so it stays while scrolling */}
      <div className="sticky top-0 w-full">
        <video
          ref={videoRef}
          className="rounded-2xl shadow-lg w-full"
          src="/videos/scroll_video.mp4"
          muted
          preload="auto"
        />
      </div>
    </section>
  );
}