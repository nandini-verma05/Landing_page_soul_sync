"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen  text-white">
    
      {/* Background Video */}
      <video
        src="/hero/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Top Left Image */}
      <div className="absolute top-0 left-0  w-80 h-80 md:w-144 md:h-144    ">
        <Image
          src="/hero/h2.png"
          alt="Astrology or Couple Image"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Bottom Right Image */}
      <div className="absolute bottom-0 right-0 w-80 h-80 md:w-144 md:h-144 ">
        <Image
          src="/hero/h1.png"
          alt="Couple or Star Image"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Main Center Content */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-[4rem] md:text-[7rem] font-serif tracking-tight leading-none text-white/90">
          Soul
          <span className="block text-6xl md:text-7xl font-[cursive] text-white mt-2">
            Sync
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 italic">
          Aligning stars and connecting souls ✨
        </p>

        <button className="mt-10 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Optional Floating Animation (subtle movement) */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        div[alt="Astrology or Couple Image"] {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
