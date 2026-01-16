"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const fadeInUp = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeOutDown {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  }
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes fadeOutScale {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }
  .text-enter {
    animation: fadeInUp 0.8s ease-out;
  }
  .text-exit {
    animation: fadeOutDown 0.8s ease-out;
  }
  .quote-enter {
    animation: fadeInScale 0.8s ease-out 0.2s both;
  }
  .quote-exit {
    animation: fadeOutScale 0.8s ease-out both;
  }
`;

const images = [
  {
    id: 1,
    img: "/hero/hero1.jpg",
    quote: "Written in the Stars",
    body: "Your destined match exists in the cosmic dance of the universe. Vedic astrology reveals the divine timing of your souls' meeting.",
    boldQuote: "The universe remembers your name.",
  },
  {
    id: 2,
    img: "/hero/hero2.jpg",
    quote: "The Language of Nakshatra",
    body: "Each star constellation holds the secrets of your heart. Your birth chart whispers the name of the one meant for you.",
    boldQuote: "Every star guides you home.",
  },
  {
    id: 3,
    img: "/hero/hero3.jpg",
    quote: "Venus Aligned",
    body: "When love planets align in your chart, transformation begins. Discover the cosmic blueprint of your perfect union.",
    boldQuote: "When Venus calls, love listens.",
  },
  {
    id: 4,
    img: "/hero/hero4.jpg",
    quote: "Karma's Echo",
    body: "Twin souls recognize each other across lifetimes. Your past lives guide you toward the love you've always deserved.",
    boldQuote: "Across lifetimes, we find each other.",
  },
  {
    id: 5,
    img: "/hero/hero5.jpg",
    quote: "The Sacred Moment",
    body: "Timing is everything in love. When the planets align, two hearts find their way home to each other.",
    boldQuote: "This is your moment of destiny.",
  },
  {
    id: 6,
    img: "/hero/hero6.jpg",
    quote: "Eternal Connection",
    body: "Love isn't found—it's recognized. Your astrological soulmate has been seeking you across the universe all along.",
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

  interface HeroImage {
    id: number;
    img: string;
    quote: string;
    body: string;
    boldQuote: string;
  }

  const handleThumbnailClick = (index: number): void => {
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
<section className="relative w-full h-screen text-white overflow-hidden px-10 py-20 flex items-center">

      <style>{fadeInUp}</style>
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
        <p className="text-sm uppercase tracking-widest text-gray-300">Finding Love Through Destiny</p>
        <h1 className={`text-5xl font-semibold leading-tight max-w-xl transition-all duration-700 ${isExiting ? 'text-exit' : 'text-enter'}`}>
          {currentImage.quote}
          <span className="text-gray-400 block text-lg mt-2">[{currentImage.id}/6]</span>
        </h1>
        <p className={`text-gray-300 max-w-md text-sm leading-relaxed transition-all duration-700 ${isExiting ? 'text-exit' : 'text-enter'}`}>
          {currentImage.body}
        </p>
      </div>

      {/* MAIN CENTER PORTRAIT */}
      <div className="w-1/2 relative flex justify-end pr-10">
        <div className="relative w-[420px] h-[520px] rounded-lg overflow-hidden shadow-2xl transition-all duration-700">
          <Image src={currentImage.img} alt="hero image" fill className="object-cover" />
          {/* BOLD QUOTE OVERLAY */}
          <div className={`absolute inset-0 flex items-center justify-center bg-black/30 ${isExiting ? 'quote-exit' : 'quote-enter'}`}>
            <p className="text-center text-white font-bold text-2xl px-6 leading-relaxed max-w-xs drop-shadow-lg">
              {currentImage.boldQuote}
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM THUMBNAILS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
        {images.map((item, index) => (
          <div
            key={item.id}
            className="text-center text-gray-300 cursor-pointer"
            onClick={() => handleThumbnailClick(index)}
          >
            <div
              className={`
                relative w-36 h-24 rounded-md overflow-hidden shadow-lg transition-all duration-300
                ${
                  currentIndex === index
                    ? "ring-2 ring-white scale-105"
                    : "opacity-60 hover:opacity-100"
                }
              `}
            >
              <Image src={item.img} alt= "image" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}