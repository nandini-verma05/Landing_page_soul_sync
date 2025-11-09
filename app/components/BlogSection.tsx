"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function BlogGrid() {
  const blogPosts = [
    {
      title: "Unique Date Ideas According to Your Zodiac Sign",
      image: "/BlogImage/image1.jpg",
      category: "Content: Offer creative, personalized date suggestions that align with each zodiac sign's characteristics to make dating more magical and meaningful. Include tips on how zodiac traits can guide planning perfect dates",
    },
    {
      title: "Decode Your Dating Style with Astrology: What Your Zodiac Sign Reveals",
      image: "/BlogImage/image2.png",
      category: "Content: Explain how each zodiac sign approaches love and relationships, highlighting their dating strengths, challenges, and compatibility matches. Add practical tips for improving relationships based on astrological traits.",
    },
    {
      title: "The Dos and Don’ts of Dating Each Zodiac Sign",
      image: "/BlogImage/image3.png",
      category: "Content: Provide a comprehensive guide on the best and worst ways to date each zodiac sign, including tips for compatibility and understanding their unique needs.",
    },
    {
      title: "7 Magical Astrology Tips for an Unforgettable First Date",
      image: "/BlogImage/image4.png",
      category: "Content: Share enchanting astrology-inspired tips to create a memorable first date experience, tailored to each zodiac sign's unique traits and preferences.",
    },
    {
      title: "How Astrology Enhances Your Dating App Experience ",
      image: "/BlogImage/image5.png",
      category: "Content: Educate users on how astrology-based compatibility boosts meaningful matches, helps users understand partner dynamics, and increases engagement through personalized content",
    },
    {
      title: "Astrology Dating Trends: Why Millennials and Gen Z Love Horoscope Matchmaking",
      image: "/BlogImage/image6.png",
      category: "Content: Explore the rising popularity of astrology-based matchmaking among younger generations, examining the cultural and psychological factors driving this trend.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-8 md:px-24 overflow-hidden">
      {/* Decorative background pattern from Footer */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4 text-center mx-auto">
              Cosmetology
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-4xl leading-relaxed">
Unlock Destiny’s Door: Astrology Dating Awaits.
            </p>
          </div>

          {/* Row 1: Consultations + Facial Treatments + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Consultations */}
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-wider mb-3">
                    {blogPosts[0].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light">{blogPosts[0].title}</h3>
                </div>
                <div className="flex justify-end mt-auto">
                  <button className="w-11 h-11 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Facial Treatments + Text beside it */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
                <img
                  src={blogPosts[1].image}
                  alt={blogPosts[1].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-wider mb-3">
                      {blogPosts[1].category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light">
                      {blogPosts[1].title}
                    </h3>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <button className="w-11 h-11 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Text beside the card */}
              <div className="space-y-3 md:pl-4">
                <h3 className="text-2xl font-light text-white">Stars Are Talking—Will You Listen?</h3>
               
                <button className="mt-3 inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Rest of the Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(2).map((post, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden group cursor-pointer border border-gray-800/40"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-wider mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light">{post.title}</h3>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <button className="w-11 h-11 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-3xl transition-all pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 tracking-wide">
              Discover more .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
