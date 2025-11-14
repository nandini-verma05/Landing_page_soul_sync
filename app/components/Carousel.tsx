"use client";

import Image from "next/image";
import React from "react";

interface CarouselItem {
  name: string;
  desc: string;
  img: string;
}

const planets: CarouselItem[] = [
  {
    name: "Mercury",
    desc: "Closest to the Sun",
    img: "/Crousal/planets/mercury.jpg",
  },
  { name: "Venus", desc: "Morning Star", img: "/Crousal/planets/venus.jpg" },
  { name: "Earth", desc: "Our Home", img: "/Crousal/planets/earth.jpg" },
  { name: "Mars", desc: "The Red Planet", img: "/Crousal/planets/mars.jpg" },
  { name: "Jupiter", desc: "Gas Giant", img: "/Crousal/planets/jupiter.jpg" },
  { name: "Saturn", desc: "Ringed Beauty", img: "/Crousal/planets/saturn.jpg" },
  { name: "Uranus", desc: "Ice Giant", img: "/Crousal/planets/uranus.jpg" },
  { name: "Neptune", desc: "Deep Blue", img: "/Crousal/planets/neptune.jpg" },
  { name: "Pluto", desc: "Dwarf Planet", img: "/Crousal/planets/moon.jpg" },
];

const zodiac: CarouselItem[] = [
  { name: "Aries", desc: "The Ram", img: "/Crousal/zodiac/aries.jpg" },
  { name: "Taurus", desc: "The Bull", img: "/Crousal/zodiac/taurus.jpg" },
  { name: "Gemini", desc: "The Twins", img: "/Crousal/zodiac/gemini.jpg" },
  { name: "Cancer", desc: "The Crab", img: "/Crousal/zodiac/cancer.jpg" },
  { name: "Leo", desc: "The Lion", img: "/Crousal/zodiac/leo.jpg" },
  { name: "Virgo", desc: "The Maiden", img: "/Crousal/zodiac/virgo.jpg" },
  { name: "Libra", desc: "The Scales", img: "/Crousal/zodiac/libra.jpg" },
  {
    name: "Scorpio",
    desc: "The Scorpion",
    img: "/Crousal/zodiac/scorpian.jpg",
  },
  {
    name: "Sagittarius",
    desc: "The Archer",
    img: "/Crousal/zodiac/sagittarius.jpg",
  },
  { name: "Capricorn", desc: "The Goat", img: "/Crousal/zodiac/capricorn.jpg" },
  {
    name: "Aquarius",
    desc: "The Water Bearer",
    img: "/Crousal/zodiac/aquarius.jpg",
  },
  { name: "Pisces", desc: "The Fish", img: "/Crousal/zodiac/pisces.jpg" },
];

const CarouselItem: React.FC<{ item: CarouselItem }> = ({ item }) => (
  <div className="shrink-0 w-[100px] h-[100px] relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:z-10">
    <Image
      src={item.img}
      alt={item.name}
      width={100}
      height={100}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
      <h3 className="text-white text-xs mb-0.5">{item.name}</h3>
      <p className="text-gray-300 text-[8px]">{item.desc}</p>
    </div>
  </div>
);

const Carousel: React.FC = () => {
  return (
    <div className=" h-[300px] bg-gradient-to-b from-black to-blue-950/10 flex flex-col justify-center overflow-hidden m-0 py-[2mm] gap-[2mm]">
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scrollLeft 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 50s linear infinite;
        }
        .carousel-row:hover .animate-scroll-left,
        .carousel-row:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Planets Row */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-[75px] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[75px] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="carousel-row">
          <div className="flex gap-4 animate-scroll-left">
            {[...planets, ...planets].map((planet, idx) => (
              <div key={idx} className="group">
                <CarouselItem item={planet} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zodiac Row */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-[150px] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="carousel-row">
          <div className="flex gap-4 animate-scroll-right">
            {[...zodiac, ...zodiac].map((sign, idx) => (
              <div key={idx} className="group">
                <CarouselItem item={sign} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;