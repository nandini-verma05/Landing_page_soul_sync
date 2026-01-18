"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Video() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

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
      className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* ---------------------- FULLSCREEN VIDEO ---------------------- */}
      <video
        ref={videoRef}
        src="/hero/bg1.mp4"
        poster="/images/poster.jpg"
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ---------------------- DARK OVERLAY ---------------------- */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ---------------------- BACKGROUND TITLE ---------------------- */}
      <h1
        className={`absolute left-1/2 -translate-x-1/2 text-[10vw] md:text-[14vw] font-extrabold
        text-transparent bg-clip-text bg-white tracking-wide z-10
        transition-all duration-[1500ms] ease-out
        ${visible ? "opacity-40" : "opacity-0"}
        pointer-events-none`}
      >
      Lovitché  
      </h1>

      {/* ---------------------- TOP LEFT QUOTE ---------------------- */}
      <div
        className={`absolute top-8 md:top-12 left-6 md:left-12 max-w-xs md:max-w-md z-20
        transition-all duration-[1400ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <span className="text-xs tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full w-fit text-white/90 font-semibold">
          💫 Love&apos;s Destiny
        </span>

        <p className="mt-4 md:mt-5 text-lg md:text-3xl text-white font-bold tracking-tight leading-snug drop-shadow-lg">
          Written in the stars, your soulmate awaits.
        </p>
      </div>

      {/* ---------------------- BOTTOM RIGHT QUOTE ---------------------- */}
      <div
        className={`absolute bottom-8 md:bottom-12 right-6 md:right-12 max-w-xs md:max-w-md text-right z-20
        transition-all duration-[1400ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <span className="text-xs tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full w-fit text-white/90 font-semibold ml-auto block">
          💞 Cosmic Union
        </span>

        <p className="mt-4 md:mt-5 text-lg md:text-3xl text-white font-bold tracking-tight leading-snug drop-shadow-lg">
          When fate aligns, two souls become one.
        </p>
      </div>

      {/* ---------------------- BETA CTA BUTTON ---------------------- */}
      <div
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 z-30
        transition-all duration-[1200ms] ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <button
          onClick={() => router.push('/form')}
          className="
            px-7 py-3
            rounded-full
            text-sm
            tracking-widest
            uppercase
            text-white/90
            bg-black/55
            backdrop-blur-lg
            border border-white/30
            hover:border-white
            hover:bg-black/65
            hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
            transition-all
          "
        >
          Join Us · Pre-Register for Beta
        </button>
      </div>
    </section>
  );
}
