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
    <section
      className="
        relative w-full min-h-screen text-white overflow-hidden
        px-6 py-14
        lg:px-10 lg:py-20
        flex flex-col lg:flex-row
        items-center
      "
    >
      <style>{fadeInUp}</style>

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={currentImage.img}
          alt="Background"
          fill
          className="object-cover opacity-40 blur-sm transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* LEFT TEXT */}
      <div
        className="
          w-full lg:w-1/2
          space-y-5 z-10
          text-center lg:text-left
          mb-8 lg:mb-0
        "
      >
        <p className="text-xs uppercase tracking-widest text-gray-300">
          Finding Love Through Destiny
        </p>

        <h1
          className={`
            text-3xl sm:text-4xl lg:text-5xl
            font-semibold leading-tight
            transition-all duration-700
            ${isExiting ? "text-exit" : "text-enter"}
          `}
        >
          {currentImage.quote}
          <span className="text-gray-400 block text-sm mt-2">
            [{currentImage.id}/6]
          </span>
        </h1>

        <p
          className={`
            text-gray-300 max-w-md mx-auto lg:mx-0
            text-sm leading-relaxed
            transition-all duration-700
            ${isExiting ? "text-exit" : "text-enter"}
          `}
        >
          {currentImage.body}
        </p>
      </div>

      {/* CENTER PORTRAIT */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-10">
        <div
          className="
            relative
            w-[260px] h-[360px]
            sm:w-[320px] sm:h-[440px]
            lg:w-[420px] lg:h-[520px]
            rounded-lg overflow-hidden shadow-2xl
            transition-all duration-700
          "
        >
          <Image
            src={currentImage.img}
            alt="hero image"
            fill
            className="object-cover"
          />

          <div
            className={`
              absolute inset-0 flex items-center justify-center
              bg-black/30
              ${isExiting ? "quote-exit" : "quote-enter"}
            `}
          >
            <p
              className="
                text-center text-white font-bold
                text-lg sm:text-xl lg:text-2xl
                px-6 leading-relaxed
                max-w-xs drop-shadow-lg
              "
            >
              {currentImage.boldQuote}
            </p>
          </div>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div
        className="
          mt-8
          lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2
          w-full lg:w-auto
          overflow-x-auto lg:overflow-visible
          flex gap-4 px-4 lg:px-0
          justify-start lg:justify-center
        "
      >
        {images.map((item, index) => (
          <div
            key={item.id}
            className="text-center text-gray-300 cursor-pointer shrink-0"
            onClick={() => handleThumbnailClick(index)}
          >
            <div
              className={`
                relative
                w-28 h-20
                sm:w-32 sm:h-22
                lg:w-36 lg:h-24
                rounded-md overflow-hidden shadow-lg
                transition-all duration-300
                ${
                  currentIndex === index
                    ? "ring-2 ring-white scale-105"
                    : "opacity-60 hover:opacity-100"
                }
              `}
            >
              <Image src={item.img} alt="image" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
