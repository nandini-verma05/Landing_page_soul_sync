"use client";

import { useRef } from "react";

const videos = [
  { src: "/videos/v1.mp4", title: "THE ROSELINE RING" },
  { src: "/videos/v2.mp4", title: "THE ZOE EARRINGS" },
  { src: "/videos/v3.mp4", title: "THE Hibiscus Ring II" },
  { src: "/videos/v4.mp4", title: "THE CHUBBY HOOPS" },
  { src: "/videos/v5.mp4", title: "THE CHUBBY HOOPS" },
];

export default function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-20 bg-black flex justify-center items-center">
      
      {/* HORIZONTAL SCROLLER */}
      <div
        ref={scrollRef}
        className="
          flex gap-8 px-10 overflow-x-auto scroll-smooth
          snap-x snap-mandatory hide-scrollbar
        "
      >
        {videos.map((item, index) => (
          <div
            key={index}
            className="
              relative
              w-[280px] 
              h-[500px] 
              snap-center shrink-0
              rounded-[40px]

              overflow-hidden
              shadow-[0px_20px_60px_rgba(0,0,0,0.45)]
              bg-[#1a1a1a]

              transition-all duration-500
              hover:scale-[1.06]
            "
            style={{
              borderRadius: "45px",
            }}
          >
            {/* GOLDEN WARM OVERLAY — like reference */}
            <div className="
              absolute inset-0
              bg-gradient-to-b
              from-[#2a1c13]/20 
              via-transparent
              to-[#0d0d0d]/40
              z-[3]
            " />

            {/* VIDEO */}
            <video
              src={item.src}
              muted
              loop
              autoPlay
              playsInline
              className="
                absolute inset-0
                w-full h-full 
                object-cover 
                scale-[1.05]
              "
            />

            {/* SOFT INNER SHADOW FOR DEPTH */}
            <div className="
              absolute inset-0 pointer-events-none
              shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]
              z-[4]
            " />

            {/* TITLE */}
            <div className="
              absolute bottom-8 left-6 
              text-white text-lg font-light tracking-wide 
              drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]
              z-[10]
            ">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
