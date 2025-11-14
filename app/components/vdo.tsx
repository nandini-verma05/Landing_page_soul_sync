"use client";

import { useEffect, useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [showTitle, setShowTitle] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Intersection Observer: play only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isVisible = entry.isIntersecting;

        setVisible(isVisible);

        if (videoRef.current) {
          if (isVisible) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen snap-start flex items-center justify-center bg-black overflow-hidden"
    >
      {/* ---------------------- TOP LEFT QUOTE ---------------------- */}
      <div
        className={`absolute top-10 left-10 max-w-md transition-all duration-[1400ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <span className="text-xs tracking-widest uppercase bg-neutral-800 px-4 py-1 rounded-full w-fit text-white/80">
          💫 Connection
        </span>

        <p className="mt-5 text-2xl md:text-4xl text-gray-800 font-bold tracking-tight leading-snug drop-shadow-lg">
          Let the universe lead you to the one meant for you.
        </p>
      </div>

      {/* ---------------------- BACKGROUND TITLE ---------------------- */}
      <h1
        className={`absolute text-[16vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 tracking-wide 
        transition-all duration-[1500ms] ease-out
        ${visible ? "opacity-30 translate-y-0" : "opacity-0 translate-y-10"}
        ${showTitle ? "opacity-30" : "opacity-0"}`}
      >
        <span className="mr-[10vw]">Soul</span>
        <span>Sync</span>
      </h1>

      {/* ---------------------- VIDEO WRAPPER ---------------------- */}
      <div
        className={`relative w-[350px] md:w-[420px] rounded-2xl overflow-hidden shadow-2xl
        transition-all duration-[1200ms] ease-out
        ${visible ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"}
        ${isPlaying ? "scale-[1.03]" : ""}`}
      >
        <video
          ref={videoRef}
          src="/videos/vdo.mp4"
          poster="/images/poster.jpg"
          loop
          muted
          playsInline
          preload="auto"
          className="rounded-2xl w-full h-auto cursor-pointer transition-all duration-700 ease-out"
          onPlay={() => {
            setShowTitle(false);
            setIsPlaying(true);
          }}
          onPause={() => {
            setShowTitle(true);
            setIsPlaying(false);
          }}
        />
      </div>

      {/* ---------------------- BOTTOM RIGHT QUOTE ---------------------- */}
      <div
        className={`absolute bottom-10 right-10 max-w-md text-right transition-all duration-[1400ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="text-xs tracking-widest uppercase bg-neutral-800 px-4 py-1 rounded-full w-fit text-white/80">
          💞 Destiny
        </span>

        <p className="mt-5 text-2xl md:text-4xl text-gray-800 font-bold tracking-tight leading-snug drop-shadow-lg">
          Every moment brings you closer to your perfect match.
        </p>
      </div>
    </section>
  );
}
