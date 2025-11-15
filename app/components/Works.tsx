"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function NewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const images = [
    "/videos/image.png",
    "/videos/image2.png",
    "/videos/image3.png",
  ];

  const quotes = [
    {
      topLeft: "“Light reveals the hidden truth.”",
      topRight: "“Every frame holds a story untold.”",
      bottomLeft:
        "In this moment, the world slows down.\nThe silence turns into a quiet melody.\nLight paints emotion.\nShadows whisper softly.",
      bottomRight:
        "Every frame is a doorway.\nA journey to someplace softer.\nA moment of stillness.\nA breath captured forever.",
    },
    {
      topLeft: "“Darkness creates its own beauty.”",
      topRight: "“Emotion grows in the quiet spaces.”",
      bottomLeft:
        "Nothing stands still here.\nEvery shadow moves with meaning.\nEvery glance holds depth.\nStillness becomes its own language.",
      bottomRight:
        "Soft tones shape the story.\nLight travels gently across skin.\nMoments become eternal.\nSilence becomes art.",
    },
    {
      topLeft: "“Light remembers what we forget.”",
      topRight: "“A single frame can hold a lifetime.”",
      bottomLeft:
        "Faces become poems.\nEyes speak louder than words.\nLight bends to emotion.\nThis is where stories begin.",
      bottomRight:
        "Between the light and the shadow…\nA feeling breathes.\nA memory awakens.\nA connection is born.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // WHEN THIS SECTION IS IN VIEW
      const visibleTop = Math.max(0, vh - rect.top);
      const totalScrollable = rect.height - vh;

      let progress = visibleTop / totalScrollable;
      progress = Math.min(Math.max(progress, 0), 1); // clamp 0–1

      const index = Math.floor(progress * images.length);

      setCurrentIndex(Math.min(index, images.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col h-[600vh] bg-black text-white"
    >
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt="Frame"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute inset-0 p-10">
          <div
            key={currentIndex + "-tl"}
            className="absolute top-10 left-10 text-xl font-semibold transition-all duration-700 animate-slideDown"
          >
            {quotes[currentIndex].topLeft}
          </div>

          <div
            key={currentIndex + "-tr"}
            className="absolute top-10 right-10 text-xl font-semibold text-right transition-all duration-700 animate-slideDown"
          >
            {quotes[currentIndex].topRight}
          </div>

          <div
            key={currentIndex + "-bl"}
            className="absolute bottom-10 left-10 w-64 text-sm leading-relaxed whitespace-pre-line transition-all duration-700 animate-slideUp"
          >
            {quotes[currentIndex].bottomLeft}
          </div>

          <div
            key={currentIndex + "-br"}
            className="absolute bottom-10 right-10 w-64 text-sm leading-relaxed text-right whitespace-pre-line transition-all duration-700 animate-slideUp"
          >
            {quotes[currentIndex].bottomRight}
          </div>
        </div>
      </div>
    </section>
  );
}
