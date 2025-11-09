"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AboutMission = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const [aboutProgress, setAboutProgress] = useState(0);
  const [aboutReveal, setAboutReveal] = useState(0);
  const [missionReveal, setMissionReveal] = useState(0);

  // ABOUT section scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalVisible = windowHeight + rect.height;
        const scrollRatio = 1 - rect.bottom / totalVisible;
        const normalized = Math.min(Math.max(scrollRatio, 0), 1);
        setAboutProgress(normalized);
      }

      const visible = Math.max(0, windowHeight - rect.top);
      const total = rect.height + windowHeight;
      const ratio = Math.min(Math.max(visible / total, 0), 1);
      setAboutReveal(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MISSION section scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!missionRef.current) return;
      const rect = missionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.max(0, windowHeight - rect.top);
      const total = rect.height + windowHeight;
      const ratio = Math.min(Math.max(visible / total, 0), 1);
      setMissionReveal(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated styles for AboutSection images
  const leftImageStyle = {
    transform: `
      translateX(${(-150 + aboutProgress * 120).toFixed(1)}px)
      translateY(${(60 - aboutProgress * 60).toFixed(1)}px)
      rotate(${(-12 + aboutProgress * 12).toFixed(1)}deg)
      scale(${(0.7 + aboutProgress * 0.3).toFixed(2)})
    `,
    opacity: aboutProgress,
    transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
  };

  const rightImageStyle = {
    transform: `
      translateX(${(150 - aboutProgress * 120).toFixed(1)}px)
      translateY(${(60 - aboutProgress * 60).toFixed(1)}px)
      rotate(${(12 - aboutProgress * 12).toFixed(1)}deg)
      scale(${(0.7 + aboutProgress * 0.3).toFixed(2)})
    `,
    opacity: aboutProgress,
    transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
  };

  return (
    <main className="relative flex flex-col overflow-hidden">
      {/* --- Single Full Background Image --- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/AboutImage/bg.jpg" // 🔹 replace with your preferred image
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* ---------------------- ABOUT SECTION ---------------------- */}
      <section
        ref={aboutRef}
        className="relative flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-24 text-white overflow-hidden min-h-screen"
      >
        {/* LEFT TEXT CONTENT */}
        <div className="relative z-10 max-w-lg text-left space-y-8">
          <span className="text-xs tracking-widest uppercase bg-neutral-800 px-4 py-1 rounded-full w-fit text-white/80">
            💞 About
          </span>

          <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase leading-tight text-center md:text-left">
            <span className="italic font-semibold text-white">Match.</span>{" "}
            <span className="italic font-semibold text-white">Chat.</span>{" "}
            <span className="italic font-semibold text-white">Meet.</span>{" "}
            <span className="text-white/80">Soul Syn</span>
            <sup className="align-top text-2xl font-light">®</sup>
          </h1>

          <p className="text-white/70 text-sm md:text-base tracking-wide leading-relaxed">
            Go beyond your social circle, and connect with people near and far.
            You’re about to have the best online dating experience – all you
            need are some good pics and a solid bio to stand out. Let the stars
            guide your next match.
          </p>

          <button className="border border-white/30 hover:border-white transition-all px-8 py-3 rounded-full text-sm tracking-widest uppercase text-white/80 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Join Now
          </button>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-16 md:mt-0 perspective-[1000px] z-10">
          {/* Left image */}
          <div
            className="absolute w-64 h-96 rounded-2xl overflow-hidden shadow-2xl"
            style={leftImageStyle}
          >
            <Image
              src="/AboutImage/image2.jpg"
              alt="Profile 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Center image */}
          <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
            <Image
              src="/AboutImage/image1.jpg"
              alt="Profile 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Right image */}
          <div
            className="absolute w-64 h-96 rounded-2xl overflow-hidden shadow-2xl"
            style={rightImageStyle}
          >
            <Image
              src="/AboutImage/image3.jpg"
              alt="Profile 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------------- MISSION SECTION ---------------------- */}
      <section
        ref={missionRef}
        id="mission-section"
        className="relative flex flex-col md:flex-row justify-center items-center overflow-hidden min-h-screen px-8 md:px-24 text-white"
      >
        {/* LEFT PERSON */}
        <div className="relative flex flex-col items-center z-20 mb-12 md:mb-0">
          <div className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/AboutImage/image2.jpg"
              alt="Left User"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Spotify card */}
          <div className="absolute top-10 -left-12 bg-white/90 backdrop-blur-md text-black px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 w-52 hover:scale-105 transition-transform">
            <Image
              src="/icons/spotify.png"
              alt="Spotify"
              width={24}
              height={24}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">Spotify</p>
              <p className="text-xs text-gray-500">14 Common Songs</p>
            </div>
          </div>
        </div>

        {/* MISSION TEXT */}
        <div className="flex flex-col items-center text-center px-8 mt-10 md:mt-0 space-y-6 z-20">
          <span className="text-xs tracking-widest uppercase bg-neutral-800 px-4 py-1 rounded-full text-white/80">
            💞 Our Mission
          </span>
          <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase leading-tight">
            <span className="italic font-semibold text-white">Connect.</span>{" "}
            <span className="italic font-semibold text-white">Discover.</span>{" "}
            <span className="italic font-semibold text-white">Love.</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-lg tracking-wide leading-relaxed">
            At Soul Syn, our mission is to bridge hearts through shared passions
            — from your favorite playlists to your go-to binge-worthy shows. Let
            every common interest bring you closer.
          </p>
        </div>

        {/* RIGHT PERSON */}
        <div className="relative flex flex-col items-center z-20 mt-12 md:mt-0">
          <div className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/AboutImage/image3.jpg"
              alt="Right User"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Netflix card */}
          <div className="absolute top-10 -right-12 bg-white/90 backdrop-blur-md text-black px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 w-52 hover:scale-105 transition-transform">
            <Image
              src="/icons/netflix.png"
              alt="Netflix"
              width={24}
              height={24}
            />
            <div>
              <p className="font-semibold text-sm">Netflix</p>
              <p className="text-xs text-gray-500">4 Common Movies</p>
            </div>
          </div>

          {/* Floating Places card */}
          <div className="absolute -bottom-8 bg-white/90 backdrop-blur-md text-black px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 w-56 hover:scale-105 transition-transform">
            <Image src="/icons/places.png" alt="Places" width={24} height={24} />
            <div>
              <p className="font-semibold text-sm">Favorite Places</p>
              <p className="text-xs text-gray-500">2 Common Spots</p>
            </div>
            <span className="ml-auto bg-black text-white text-xs rounded-full px-2 py-1">
              30k
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMission;
