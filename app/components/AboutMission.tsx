"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Linkedin, Instagram, X, Facebook } from "lucide-react";
import VideoCarousel from "./VideoCrousal";

/* ===============================
   One-time reveal hook
================================ */
function useRevealOnce<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [revealed, threshold]);

  return { ref, revealed };
}

const AboutMission = () => {
  const router = useRouter();

  const { ref: aboutRef, revealed: aboutVisible } =
    useRevealOnce<HTMLDivElement>();

  const { ref: missionRef, revealed: missionVisible } =
    useRevealOnce<HTMLDivElement>();

  /* Threads Icon */
  const ThreadsIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
    </svg>
  );

  const socialIcons = [
    { icon: Instagram, url: "https://www.instagram.com/_lovitche_" },
    { icon: X, url: "https://x.com/Lovitche_" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/love-mantrraa-385593397" },
    { icon: Facebook, url: "https://www.facebook.com/share/14WWooFre67/" },
    { icon: ThreadsIcon, url: "https://www.threads.com/@_lovitche_" },
  ];

  const openLink = (url: string) => window.open(url, "_blank");

  return (
    <main className="relative flex flex-col overflow-hidden">

      {/* ================= ABOUT SECTION ================= */}
      <section
        ref={aboutRef}
        className="min-h-screen flex flex-col md:flex-row items-center px-8 md:px-24 py-24 text-white"
      >
        {/* TEXT */}
        <div
          className={`max-w-lg space-y-8 transition-all duration-700 ease-out
            ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <span className="text-xs tracking-widest uppercase bg-neutral-800 px-4 py-1 rounded-full">
            💞 About
          </span>

          <h1 className="text-5xl md:text-6xl tracking-widest uppercase">
            <span className="italic font-semibold">Match.</span>{" "}
            <span className="italic font-semibold">Chat.</span>{" "}
            <span className="italic font-semibold">Meet.</span>{" "}
            <span className="text-white/70">Lovitché</span>
            <sup className="text-xl">®</sup>
          </h1>

          <p className="text-white/70">
            Go beyond your social circle and connect with people near and far.
            Let the stars guide your next match.
          </p>

          <button
            onClick={() => router.push("/form")}
            className="border border-white/30 px-8 py-3 rounded-full uppercase tracking-widest
              hover:border-white transition"
          >
            Join Now
          </button>
        </div>

        {/* IMAGES */}
    <div className="relative w-full md:w-1/2 mt-16 md:mt-0 flex justify-center items-center">
  {/* LEFT (smaller + tilt) */}
  <div
    className={`absolute w-56 h-80 rounded-2xl overflow-hidden shadow-2xl
      transition-all duration-[900ms] reel-ease
      ${aboutVisible
        ? "opacity-100 translate-x-[-100px] scale-100 rotate-[-8deg]"
        : "opacity-0 translate-x-[-160px] scale-[0.9] rotate-[-14deg]"}
    `}
  >
    <Image
      src="/AboutImage/image2.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>

  {/* CENTER (largest, no tilt) */}
  <div
    className={`relative w-64 h-96 rounded-2xl overflow-hidden shadow-2xl z-10
      transition-all duration-[900ms] delay-[80ms] reel-ease
      ${aboutVisible
        ? "opacity-100 scale-100"
        : "opacity-0 scale-[0.92]"}
    `}
  >
    <Image
      src="/AboutImage/image1.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>

  {/* RIGHT (smaller + tilt) */}
  <div
    className={`absolute w-56 h-80 rounded-2xl overflow-hidden shadow-2xl
      transition-all duration-[900ms] delay-[160ms] reel-ease
      ${aboutVisible
        ? "opacity-100 translate-x-[100px] scale-100 rotate-[8deg]"
        : "opacity-0 translate-x-[160px] scale-[0.9] rotate-[14deg]"}
    `}
  >
    <Image
      src="/AboutImage/image3.jpg"
      alt=""
      fill
      className="object-cover"
    />
  </div>
</div>


      </section>

      {/* ================= MISSION SECTION ================= */}
      <section
        ref={missionRef}
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 text-white"
      >
        {/* LEFT USER */}
        <div
          className={`relative transition-all duration-700 ease-out
            ${missionVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}
          `}
        >
          <div className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/AboutImage/image2.jpg" alt="" fill className="object-cover" />
          </div>

          {/* LEFT SOCIALS */}
          <div className="absolute -left-10 bottom-8 flex flex-col gap-4">
            {socialIcons.slice(0, 2).map((social, idx) => {
              const Icon = social.icon;
              return (
                <button
                  key={idx}
                  onClick={() => openLink(social.url)}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className={`w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center
                    transition-all duration-700 ease-out
                    ${missionVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"}
                  `}
                >
                  <Icon className="text-black" />
                </button>
              );
            })}
          </div>
        </div>

        {/* TEXT */}
        <div
          className={`mx-12 text-center space-y-6 transition-all duration-700 ease-out
            ${missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
          `}
        >
          <span className="text-xs uppercase bg-neutral-800 px-4 py-1 rounded-full">
            💞 Our Mission
          </span>

          <h1 className="text-5xl md:text-6xl uppercase tracking-widest">
            <span className="italic font-semibold">Connect.</span>{" "}
            <span className="italic font-semibold">Discover.</span>{" "}
            <span className="italic font-semibold">Love.</span>
          </h1>

          <p className="text-white/70 max-w-lg">
            We bridge hearts through shared passions — music, movies, and
            moments that matter.
          </p>
        </div>

        {/* RIGHT USER */}
        <div
          className={`relative transition-all duration-700 ease-out
            ${missionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
          `}
        >
          <div className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/AboutImage/image3.jpg" alt="" fill className="object-cover" />
          </div>

          {/* RIGHT SOCIALS */}
          <div className="absolute -right-10 bottom-8 flex flex-col gap-4">
            {socialIcons.slice(2).map((social, idx) => {
              const Icon = social.icon;
              return (
                <button
                  key={idx}
                  onClick={() => openLink(social.url)}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                  className={`w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center
                    transition-all duration-700 ease-out
                    ${missionVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"}
                  `}
                >
                  <Icon className="text-black" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="h-screen snap-start">
        <VideoCarousel />
      </section>
    </main>
  );
};

export default AboutMission;
