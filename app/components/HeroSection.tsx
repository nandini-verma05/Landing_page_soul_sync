"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const fadeInUp = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeOutDown {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
}
@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fadeOutScale {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9); }
}
.text-enter { animation: fadeInUp 0.8s ease-out; }
.text-exit { animation: fadeOutDown 0.8s ease-out; }
.quote-enter { animation: fadeInScale 0.8s ease-out 0.2s both; }
.quote-exit { animation: fadeOutScale 0.8s ease-out both; }
`;

const images = [
  {
    id: 1,
    img: "/hero/hero1.jpg",
    quote: "Written in the Stars",
    body:
      "Your destined match exists in the cosmic dance of the universe. Vedic astrology reveals the divine timing of your souls' meeting.",
    boldQuote: "The universe remembers your name.",
  },
  {
    id: 2,
    img: "/hero/hero2.jpg",
    quote: "The Language of Nakshatra",
    body:
      "Each star constellation holds the secrets of your heart. Your birth chart whispers the name of the one meant for you.",
    boldQuote: "Every star guides you home.",
  },
  {
    id: 3,
    img: "/hero/hero3.jpg",
    quote: "Venus Aligned",
    body:
      "When love planets align in your chart, transformation begins. Discover the cosmic blueprint of your perfect union.",
    boldQuote: "When Venus calls, love listens.",
  },
  {
    id: 4,
    img: "/hero/hero4.jpg",
    quote: "Karma's Echo",
    body:
      "Twin souls recognize each other across lifetimes. Your past lives guide you toward the love you've always deserved.",
    boldQuote: "Across lifetimes, we find each other.",
  },
  {
    id: 5,
    img: "/hero/hero5.jpg",
    quote: "The Sacred Moment",
    body:
      "Timing is everything in love. When the planets align, two hearts find their way home to each other.",
    boldQuote: "This is your moment of destiny.",
  },
  {
    id: 6,
    img: "/hero/hero6.jpg",
    quote: "Eternal Connection",
    body:
      "Love isn't found—it's recognized. Your astrological soulmate has been seeking you across the universe all along.",
    boldQuote: "Two souls, one eternal truth.",
  },
];

export default function LightStudiesHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsExiting(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index: number) => {
    if (index !== currentIndex) {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsExiting(false);
      }, 400);
    }
  };

  const currentImage = images[currentIndex];

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden px-4 sm:px-8 lg:px-10 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
      <style>{fadeInUp}</style>

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={currentImage.img}
          alt="Background"
          fill
          className="object-cover opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5 z-10">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-300">
          Finding Love Through Destiny
        </p>

        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight transition-all ${
            isExiting ? "text-exit" : "text-enter"
          }`}
        >
          {currentImage.quote}
          <span className="block text-sm text-gray-400 mt-2">
            [{currentImage.id}/6]
          </span>
        </h1>

        <p
          className={`text-gray-300 text-sm sm:text-base max-w-md mx-auto lg:mx-0 transition-all ${
            isExiting ? "text-exit" : "text-enter"
          }`}
        >
          {currentImage.body}
        </p>
      </div>

      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative w-[260px] h-[360px] sm:w-[320px] sm:h-[440px] lg:w-[420px] lg:h-[520px] rounded-lg overflow-hidden shadow-2xl">
          <Image src={currentImage.img} alt="Hero" fill className="object-cover" />

          <div
            className={`absolute inset-0 bg-black/30 flex items-center justify-center ${
              isExiting ? "quote-exit" : "quote-enter"
            }`}
          >
            <p className="text-center font-bold text-lg sm:text-xl lg:text-2xl px-6">
              {currentImage.boldQuote}
            </p>
          </div>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="absolute bottom-6 w-full px-4">
        <div className="flex gap-4 overflow-x-auto lg:justify-center scrollbar-hide">
          {images.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleThumbnailClick(index)}
              className="flex-shrink-0 cursor-pointer"
            >
              <div
                className={`relative w-28 h-20 sm:w-32 sm:h-24 rounded-md overflow-hidden transition-all ${
                  currentIndex === index
                    ? "ring-2 ring-white scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={item.img} alt="thumb" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
