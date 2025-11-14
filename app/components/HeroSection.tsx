"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { id: 1, name: "Naomi", img: "/hero/1.jpeg" },
  { id: 2, name: "Isla", img: "/hero/2.jpg" },
  { id: 3, name: "Claire", img: "/hero/3.jpg" },
  { id: 4, name: "Sandra", img: "/hero/4.jpg" },
  { id: 5, name: "Simone", img: "/hero/4.jpg" },
  { id: 6, name: "Anastasia", img: "/hero/4.jpg" },
];

export default function LightStudiesHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden px-10 py-20 flex items-center">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={currentImage.img}
          alt="Background"
          fill
          className="object-cover opacity-40 blur-sm transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* LEFT TEXT */}
      <div className="w-1/2 space-y-6 z-10">
        <p className="text-sm uppercase tracking-widest text-gray-300">Light Studies</p>

        <h1 className="text-5xl font-semibold leading-tight max-w-xl">
          Visual Exploration <br /> of Emotion & Light{" "}
          <span className="text-gray-400">[{currentImage.id}]</span>
        </h1>

        <p className="text-gray-300 max-w-md text-sm leading-relaxed">
          A portrait study exploring solitude, light, and the quiet moments in
          between. Each face reflects a different kind of calm.
        </p>
      </div>

      {/* MAIN CENTER PORTRAIT */}
      <div className="w-1/2 relative flex justify-end pr-10">
        <div className="relative w-[420px] h-[520px] rounded-lg overflow-hidden shadow-2xl transition-all duration-700">
          <Image
            src={currentImage.img}
            alt={currentImage.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* BOTTOM THUMBNAILS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
        {images.map((item, index) => (
          <div
            key={item.id}
            className="text-center text-gray-300 cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            <div
              className={`relative w-36 h-24 rounded-md overflow-hidden shadow-lg transition-all duration-300
                ${currentIndex === index ? "ring-2 ring-white scale-105" : "opacity-60 hover:opacity-100"}`}
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs opacity-80">
              #{item.id} | {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
