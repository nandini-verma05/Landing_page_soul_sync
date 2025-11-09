"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is kundli-based matchmaking and how does it work on this app?",
    answer:
      "Kundli-based matchmaking is a traditional Indian practice that uses astrological charts to determine compatibility between partners. This app streamlines the process by analyzing users' birth details and providing personalized matchmaking insights.",
  },
  {
    question: "Why are exact birth details (time, place, date) important for matchmaking?",
    answer:
      "Accurate birth details are crucial for precise astrological calculations. They help in creating detailed kundli charts, which are essential for assessing compatibility and identifying potential challenges between partners.",
  },
  {
    question: "What are Gunas and how do they affect compatibility?",
    answer:
      "Gunas are qualities or attributes that describe an individual's personality and behavior. In kundli-based matchmaking, the compatibility of partners is assessed based on their Gunas, which helps in identifying potential harmony or discord in the relationship.",
  },
  {
    question: "Can kundli dating advice help plan first dates or relationship milestones?",
    answer:
      "Yes, kundli dating advice can provide insights into the best times for important relationship milestones based on astrological alignments.",
  },
  {
    question: "What is Mangal Dosha and why does it matter in relationships?",
    answer:
      "Mangal Dosha is an astrological condition that occurs when Mars is positioned in certain houses of a person's birth chart. It is believed to affect marital harmony and can lead to challenges in relationships. Understanding Mangal Dosha is important for assessing compatibility and finding suitable partners.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "I’ve worked with startups, lifestyle brands, agencies, and independent creators across multiple industries.",
  },
  {
    question: "How accurate are the compatibility and dating predictions?",
    answer:
      "The compatibility and dating predictions are based on astrological principles and the accuracy of the birth details provided. While many users find the insights helpful, it's important to remember that astrology is not an exact science.",
  },
  {
    question: "Will my kundli and birth details stay private?",
    answer:
      "Yes, your kundli and birth details are kept confidential and are only used for the purpose of providing personalized matchmaking insights.",
  },
  {
    question: "Can I download my kundli or compatibility report?",
    answer:
      "Absolutely. You can download your kundli or compatibility report directly from the app for your personal records.",
  },
];

const FAQsection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="min-h-screen w-full bg-black text-white flex flex-col lg:flex-row justify-center items-center gap-16 py-24 px-8 md:px-24 lg:px-24">
      {/* Background overlay (pure black & white lights) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 40%, rgb(255, 255, 255) 0%, transparent 80%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Left Section */}
      <div className="relative z-10 flex flex-col gap-6 max-w-md">
        <span className="text-xs tracking-widest uppercase bg-black px-4 py-1 rounded-full w-fit border border-white/20 text-white/80">
          🌀 FAQ’S
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-widest mb-8 md:mb-12 uppercase text-center mx-auto">Answers</h2>

        <p className="text-white/70 text-sm md:text-base tracking-wide leading-relaxed">
          Find answers to common questions about our process, astrology, and compatibility tools.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-md border border-white/10">
          <Image
            src={"/FAQImage.png"}
            alt="FAQ Visual"
            width={400}
            height={400}
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <button className="mt-4 border border-white/30 hover:border-white transition-all px-6 py-3 rounded-full text-sm tracking-widest uppercase text-white/80 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Book a Free Call
        </button>
      </div>

      {/* Right Section - FAQs */}
      <div className="relative z-10 flex flex-col w-full max-w-lg gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black border border-white/10 rounded-2xl px-6 py-5 cursor-pointer transition-all hover:bg-white/5 hover:border-white/30"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-sm md:text-base font-light tracking-wide text-white/80 hover:text-white transition-all">
                {faq.question}
              </h3>
              <span className="text-xl text-white/60 transition-all">
                {openIndex === index ? "×" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-white/60 text-sm tracking-wide leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsection;
