"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  placeOfBirth: string;
  timeOfBirth: string;
  timeOfBirthPeriod: string;
  dateOfBirth: string;
  email: string;
};

const loveVideos = [
  { src: "/videos/vdo.mp4" },
  { src: "/videos/vdo1.mp4" },
  { src: "/videos/vdo2.mp4" },
  { src: "/videos/vdo3.mp4" },
];

const destinyVideos = [
  { src: "/videos/vdo4.mp4" },
  { src: "/videos/vdo5.mp4" },
  { src: "/videos/vdo6.mp4" },
  { src: "/videos/vdo7.mp4" },
  { src: "/videos/vdo8.mp4" },
  { src: "/videos/vdo9.mp4" },
  { src: "/videos/vdo10.mp4" },
];

export default function VideoCarousel() {
  const router = useRouter();

  const handleOpenForm = () => {
    router.push("/form");
  };

  return (
    <>
      <section className="relative w-full py-28 bg-black overflow-hidden">
        {/* ---------------------- VIDEO GRID ---------------------- */}
        <div className="flex flex-col gap-0 relative z-10">
          <div className="flex w-full">
            {loveVideos.map((item, index) => (
              <VideoCard
                key={index}
                src={item.src}
                width="w-[25vw]"
                height="h-[45vh]"
              />
            ))}
          </div>

          <div className="flex w-full">
            {destinyVideos.map((item, index) => (
              <VideoCard
                key={index}
                src={item.src}
                width="w-[14.28vw]"
                height="h-[35vh]"
              />
            ))}
          </div>
        </div>

        {/* ---------------------- CENTER OVERLAY CTA ---------------------- */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div
            className="
              pointer-events-auto
              max-w-md
              text-center
              px-10 py-8
              rounded-2xl
              bg-black/55
              backdrop-blur-xl
              border border-white/20
              shadow-[0_0_60px_rgba(255,255,255,0.08)]
            "
          >
            <p className="text-xs tracking-widest uppercase text-white/60">
              Pre-Registration
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
              Were testing something special
            </h2>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              This is an early access test.
              Pre-register now and well notify you the moment we go live.
            </p>

            <button
              onClick={handleOpenForm}
              className="
                mt-6
                w-full
                border border-white/40
                hover:border-white
                transition-all
                px-8 py-3
                rounded-full
                text-sm
                tracking-widest
                uppercase
                text-white/80
                hover:text-white
                hover:bg-white/5
                hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
              "
            >
              Join Pre-Registration
            </button>

            <p className="mt-3 text-[11px] text-white/50">
              No spam. Only launch updates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function VideoCard({
  src,
  width,
  height,
}: {
  src: string;
  width: string;
  height: string;
}) {
  return (
    <div
      className={`
        relative ${width} ${height}
        overflow-hidden 
        rounded-[22px]
        shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        bg-[#111]
        transition-all duration-500
        hover:scale-[1.03]
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 z-[3]" />

      <video
        src={src}
        muted
        loop
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
      />

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] z-[4]" />
    </div>
  );
}
