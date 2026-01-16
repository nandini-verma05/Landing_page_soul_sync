"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Linkedin, Instagram, X, Facebook } from "lucide-react";
import VideoCarousel from "./VideoCrousal";
const AboutMission = () => {
  const router = useRouter();
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);

  const [aboutProgress, setAboutProgress] = useState(0);
  const [aboutReveal, setAboutReveal] = useState(0);
  const [missionReveal, setMissionReveal] = useState(0);

  // One-time enter animations
  const [aboutEntered, setAboutEntered] = useState(false);
  const [missionEntered, setMissionEntered] = useState(false);

  // Threads Icon SVG Component
  const ThreadsIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  );

  const socialIcons = [
    { icon: Instagram, label: "Instagram", url: " https://www.instagram.com/_lovitche_?igsh=bjdqZzJuZ3BkYjU5" },
    { icon: X, label: "X", url: "https://x.com/Lovitche_?t=eG8p4F_M_Zflnc9vR2mnMg&s=09" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/love-mantrraa-385593397" },
    { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/share/14WWooFre67/" },
    { icon: ThreadsIcon, label: "Threads", url: " https://www.threads.com/@_lovitche_" },
  ];


  // ABOUT section scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Enter / exit trigger
      const visible = Math.max(0, windowHeight - rect.top);
      const total = rect.height + windowHeight;
      const ratio = Math.min(Math.max(visible / total, 0), 1);

      if (ratio > 0.2 && !aboutEntered) setAboutEntered(true);
      if (ratio < 0.05 && aboutEntered) setAboutEntered(false);

      // Image animation progress
      if (rect.top < windowHeight && rect.bottom > 0) {
        const totalVisible = windowHeight + rect.height;
        const scrollRatio = 1 - rect.bottom / totalVisible;
        const normalized = Math.min(Math.max(scrollRatio, 0), 1);
        setAboutProgress(normalized);
      }

      setAboutReveal(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutEntered]);

  // MISSION section scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!missionRef.current) return;

      const rect = missionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Enter / exit trigger
      const visible = Math.max(0, windowHeight - rect.top);
      const total = rect.height + windowHeight;
      const ratio = Math.min(Math.max(visible / total, 0), 1);

      if (ratio > 0.2 && !missionEntered) setMissionEntered(true);
      if (ratio < 0.05 && missionEntered) setMissionEntered(false);

      setMissionReveal(ratio);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [missionEntered]);

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

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="relative flex flex-col overflow-hidden">

      {/* ---------------------- ABOUT SECTION ---------------------- */}
      <section
        ref={aboutRef}
        className="relative flex flex-col md:flex-row justify-between items-center px-8 md:px-24 py-24 text-white overflow-hidden min-h-screen"
      >
        {/* LEFT TEXT CONTENT */}
        <div
          className={`relative z-10 max-w-lg text-left space-y-8 transition-all duration-[900ms]
            ${aboutEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <span className="text-xs tracking-widest uppercase bg-neutral-800 px-4 py-1 rounded-full w-fit text-white/80">
            💞 About
          </span>

          <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase leading-tight text-center md:text-left">
            <span className="italic font-semibold text-white">Match.</span>{" "}
            <span className="italic font-semibold text-white">Chat.</span>{" "}
            <span className="italic font-semibold text-white">Meet.</span>{" "}
            <span className="text-white/80">  Lovitché</span>
            <sup className="align-top text-2xl font-light">®</sup>
          </h1>

          <p className="text-white/70 text-sm md:text-base tracking-wide leading-relaxed">
            Go beyond your social circle, and connect with people near and far.
            You're about to have the best online dating experience – all you
            need are some good pics and a solid bio to stand out. Let the stars
            guide your next match.
          </p>

          <button onClick={() => router.push('/form')} className="border border-white/30 hover:border-white transition-all px-8 py-3 rounded-full text-sm tracking-widest uppercase text-white/80 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Join Now
          </button>
        </div>

        {/* RIGHT IMAGE STACK */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-16 md:mt-0 perspective-[1000px] z-10">
          <div
            className="absolute w-64 h-96 rounded-2xl overflow-hidden shadow-2xl"
            style={leftImageStyle}
          >
            <Image src="/AboutImage/image2.jpg" alt="Profile 2" fill className="object-cover" />
          </div>

          <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
            <Image src="/AboutImage/image1.jpg" alt="Profile 1" fill className="object-cover" />
          </div>

          <div
            className="absolute w-64 h-96 rounded-2xl overflow-hidden shadow-2xl"
            style={rightImageStyle}
          >
            <Image src="/AboutImage/image3.jpg" alt="Profile 3" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ---------------------- MISSION SECTION ---------------------- */}
      <section
        ref={missionRef}
        id="mission-section"
        className="relative flex flex-col md:flex-row justify-center items-center overflow-visible min-h-screen px-8 md:px-24 text-white"
      >
        {/* LEFT PERSON */}
        <div className="relative flex flex-col items-center z-20 mb-12 md:mb-0">
          <div className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/AboutImage/image2.jpg" alt="Left User" fill className="object-cover" />
          </div>
          
          {/* LEFT SIDE SOCIALS */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
            {socialIcons.slice(0, 2).map((social, idx) => {
              const Icon = social.icon;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-[900ms] transform ${
                    missionEntered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <button onClick={() => handleSocialClick(social.url)} className="px-5 py-4 rounded-xl bg-white hover:bg-white/90 shadow-lg hover:shadow-2xl flex items-center justify-center transition-all group">
                    <Icon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* MISSION TEXT */}
        <div
          className={`flex flex-col items-center text-center px-8 mt-10 md:mt-0 md:mx-12 space-y-6 z-20 transition-all duration-[900ms]
            ${missionEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <span className="text-xs tracking-widest uppercase bg-neutral-800 px-4 py-1 rounded-full text-white/80">
            💞 Our Mission
          </span>
          <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase leading-tight">
            <span className="italic font-semibold text-white">Connect.</span>{" "}
            <span className="italic font-semibold text-white">Discover.</span>{" "}
            <span className="italic font-semibold text-white">Love.</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-lg tracking-wide leading-relaxed">
            At   Lovitché, our mission is to bridge hearts through shared passions —
            from your favorite playlists to your go-to binge-worthy shows. Let every
            common interest bring you closer.
          </p>
        </div>

        {/* RIGHT PERSON */}
        <div className="relative flex flex-col items-center z-20 mt-12 md:mt-0">
          <div className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/AboutImage/image3.jpg" alt="Right User" fill className="object-cover" />
          </div>
          
          {/* RIGHT SIDE SOCIALS */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
            {socialIcons.slice(2, 4).map((social, idx) => {
              const Icon = social.icon;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-[900ms] transform ${
                    missionEntered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${(idx + 2) * 150}ms` }}
                >
                  <button onClick={() => handleSocialClick(social.url)} className="px-5 py-4 rounded-xl bg-white hover:bg-white/90 shadow-lg hover:shadow-2xl flex items-center justify-center transition-all group">
                    <Icon className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
        <section className="snap-start h-screen">
          <VideoCarousel />
        </section>
    </main>
  );
};

export default AboutMission;