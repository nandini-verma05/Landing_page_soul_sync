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
      "Gunas are qualities or attributes describing personality and temperament. Compatibility is assessed by matching Gunas, revealing harmony or tension in relationships.",
  },
  {
    question: "Can kundli dating advice help plan first dates or relationship milestones?",
    answer:
      "Yes, kundli dating advice provides insights into auspicious timings and emotional compatibility for important moments.",
  },
  {
    question: "What is Mangal Dosha and why does it matter in relationships?",
    answer:
      "Mangal Dosha occurs when Mars is positioned in specific houses. It may affect relationship harmony, and understanding it helps choose a compatible partner.",
  },
  {
    question: "How accurate are the compatibility and dating predictions?",
    answer:
      "Predictions depend on astrological principles and accurate birth details. They offer guidance but shouldn't be treated as absolute.",
  },
  {
    question: "Will my kundli and birth details stay private?",
    answer:
      "Yes, your kundli and birth details remain confidential and are used only for personalized matchmaking insights.",
  },
  {
    question: "Can I download my kundli or compatibility report?",
    answer:
      "Yes. You can download your kundli or compatibility report directly from the app.",
  },
];

const FAQsection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq-section" className="min-h-screen w-full bg-black text-white flex flex-col lg:flex-row justify-center items-center gap-16 py-24 px-8 md:px-24">

      {/* Soft background aura */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 40%, rgba(255,255,255,0.4) 0%, transparent 70%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 60%)
            `,
          }}
        />
      </div>

      {/* LEFT Section */}
      <div className="relative z-10 flex flex-col gap-6 max-w-md">

        {/* TAG */}
        <span className="ss-tag border border-white/20 bg-black">
          🌀 FAQ’s
        </span>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl ss-heading mb-8 md:mb-12">
          Answers
        </h2>

        {/* PARAGRAPH */}
        <p className="ss-body">
          Find answers to common questions about our platform, astrology, and compatibility tools.
        </p>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md">
          <Image
            src={"/FAQImage.png"}
            alt="FAQ Visual"
            width={400}
            height={400}
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* CTA BUTTON */}
       
      </div>

      {/* RIGHT Section - FAQs */}
      <div className="relative z-10 flex flex-col w-full max-w-lg gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-black border border-white/10 rounded-2xl px-6 py-5 cursor-pointer transition-all hover:bg-white/5 hover:border-white/30"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {/* QUESTION */}
            <div className="flex justify-between items-center">
              <h3 className="ss-question">{faq.question}</h3>
              <span className="text-xl text-white/60 transition-all">
                {openIndex === index ? "×" : "+"}
              </span>
            </div>

            {/* ANSWER */}
            {openIndex === index && (
              <p className="ss-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsection;
