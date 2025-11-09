"use client";

import React, { useEffect, useRef, useState } from "react";

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const tryPlay = async () => {
      const v = videoRef.current;
      if (!v) return;
      try {
        v.muted = true; // required for autoplay in many browsers
        const p = v.play();
        if (p !== undefined) {
          await p;
        }
        // success — video is playing
        setAutoplayBlocked(false);
      } catch (err) {
        // autoplay blocked by browser policy
        console.warn("Video autoplay blocked or play() failed:", err);
        setAutoplayBlocked(true);
      }
    };

    tryPlay();
  }, []);

  const handleManualPlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.muted = true;
      await v.play();
      setAutoplayBlocked(false);
    } catch (err) {
      console.error("Manual play failed:", err);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden px-8 md:px-24 py-24">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setLoaded(true)}
        onError={(e) => {
          console.error("Video failed to load:", e);
        }}
        style={{ opacity: loaded ? 1 : 0.5, zIndex: 0, transition: "opacity 400ms ease" }}
      />

      {/* Flowing abstract background */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? "opacity-60" : "opacity-0"}`}
          style={{
            background: `radial-gradient(ellipse at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 40%),
                         radial-gradient(ellipse at 90% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
                         radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%),
                         #000000`,
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded grid grid-cols-2 gap-0.5 p-1">
            <div className="bg-black rounded-sm" />
            <div className="bg-black rounded-sm" />
            <div className="bg-black rounded-sm" />
            <div className="bg-black rounded-sm" />
          </div>
          <span className="text-white text-xl font-normal tracking-wide">Portfolite</span>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-8 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/30 bg-black/30 backdrop-blur-sm mb-8">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <span className="text-white text-sm font-normal tracking-wide">
            A different dating experience awaits
          </span>
        </div>

        <h1
          className="text-7xl md:text-8xl lg:text-9xl text-white mb-6 tracking-wide mx-auto"
          style={{ fontWeight: 300, lineHeight: 1.1 }}
        >
          Sync Souls
        </h1>

        <p className="text-gray-300 text-base md:text-lg mb-12 text-center tracking-wide font-light">
          aligning stars , connecting souls
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-4">
          <button className="relative px-8 py-2.5 text-white font-normal rounded-md hover:bg-white/10 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">see blogs</span>
            <div
              className="absolute inset-0 rounded-md pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
          </button>
        </div>
      </div>

      {/* Fallback play button when autoplay is blocked */}
      {autoplayBlocked && (
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-auto">
          <button
            onClick={handleManualPlay}
            className="bg-black/60 text-white px-6 py-3 rounded-md backdrop-blur-sm border border-white/20"
          >
            Click to play background video
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
