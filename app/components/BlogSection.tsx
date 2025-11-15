"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function BlogGrid() {
  const blogPosts = [
    {
      title: "Unique Date Ideas According to Your Zodiac Sign",
      image: "/BlogImage/blog1.jpg",
      category:
        "Content: Offer creative, personalized date suggestions aligned with zodiac traits.",
    },
    {
      title:
        "Decode Your Dating Style with Astrology: What Your Zodiac Sign Reveals",
      image: "/BlogImage/blog2.jpg",
      category:
        "Content: Explain zodiac influence on dating habits and relationship strengths.",
    },
    {
      title: "The Dos and Don’ts of Dating Each Zodiac Sign",
      image: "/BlogImage/blog3.jpg",
      category: "Content: Best and worst ways to date each zodiac sign.",
    },
    {
      title: "7 Magical Astrology Tips for an Unforgettable First Date",
      image: "/BlogImage/blog4.jpg",
      category: "Content: First date ideas based on zodiac energies.",
    },
    {
      title: "How Astrology Enhances Your Dating App Experience",
      image: "/BlogImage/blog5.jpg",
      category: "Content: Why astrology-based matching increases compatibility.",
    },
    {
      title:
        "Astrology Dating Trends: Why Millennials and Gen Z Love Horoscope Matchmaking",
      image: "/BlogImage/blog6.jpg",
      category: "Content: Why younger generations love astrology-based dating.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white py-12 px-4 sm:py-16 sm:px-6 md:py-24 md:px-12 lg:px-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl ss-heading mb-4 italic">
            COSMOLOGY
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl ss-body max-w-2xl md:max-w-4xl mx-auto">
            Unlock Destiny’s Door: Astrology Dating Awaits.
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Big Left Card */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer min-h-[260px] sm:min-h-[320px] md:min-h-[400px]">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
            <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full justify-between">
              <span className="ss-tag mb-2 sm:mb-3">{blogPosts[0].category}</span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ss-heading">
                {blogPosts[0].title}
              </h3>
              <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 rounded-full flex items-center justify-center mt-auto group-hover:scale-110 transition">
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Right Card + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
            {/* Card */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer min-h-[180px] sm:min-h-[220px] md:min-h-[300px]">
              <img
                src={blogPosts[1].image}
                alt={blogPosts[1].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between">
                <span className="ss-tag mb-2 sm:mb-3">{blogPosts[1].category}</span>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ss-heading">
                  {blogPosts[1].title}
                </h3>
                <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 rounded-full flex items-center justify-center mt-auto group-hover:scale-110 transition">
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
            {/* Side Text */}
            <div className="space-y-2 sm:space-y-3 md:pl-4">
              <h3 className="text-lg sm:text-xl md:text-2xl ss-heading">Stars Are Talking—Will You Listen?</h3>
              <button className="ss-button inline-flex items-center text-blue-400 hover:text-blue-300 transition text-base sm:text-lg">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Remaining Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.slice(2).map((post, i) => (
            <div key={i} className="relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer border border-white/10 min-h-[180px] sm:min-h-[220px] md:min-h-[300px]">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
              <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full justify-between">
                <span className="ss-tag mb-2 sm:mb-3">{post.category}</span>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ss-heading">
                  {post.title}
                </h3>
                <button className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/90 rounded-full flex items-center justify-center mt-auto group-hover:scale-110 transition">
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="ss-body text-white/50 text-sm md:text-base">Discover more .</p>
        </div>
      </div>
    </section>
  );
}
