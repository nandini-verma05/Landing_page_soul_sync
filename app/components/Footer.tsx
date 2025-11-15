"use client";

import React, { useState } from "react";
import {
  Mail,
  Calendar,
  MessageCircle,
  Shield,
  Lock,
  FileText,
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden py-24 px-8 md:px-24">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        src="/footerVdo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Soft radial lights */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10">

        {/* ---------------- NEWSLETTER ---------------- */}
        <div className="text-center px-6 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl ss-heading mb-8 md:mb-12">
            Subscribe to Our Newsletter
          </h2>

          <div className="max-w-2xl mx-auto flex items-center">
            <input
              type="email"
              value={email}
              onKeyPress={handleKeyPress}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR E-MAIL HERE"
              className="flex-1 px-6 md:px-8 py-4 md:py-5 bg-transparent border-2 border-white/30 rounded-l-full text-white placeholder-white/50 text-sm tracking-widest focus:outline-none focus:border-white/60 focus:bg-white/5 transition-all"
            />

            <button
              onClick={handleSubmit}
              className="px-6 md:px-8 py-4 md:py-5 bg-white/10 border-2 border-white/30 border-l-0 rounded-r-full hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {submitted && (
            <p className="mt-4 text-green-400 tracking-wide ss-body">
              Thank you for subscribing!
            </p>
          )}
        </div>

        {/* ---------------- MAIN FOOTER ---------------- */}
        <div className="px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

            {/* BRAND SECTION */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl ss-heading mb-3">
                Soul Syn
              </h1>

              <p className="text-lg md:text-xl italic ss-body mb-8 text-center">
                Where Hearts Connect
              </p>

              {/* Social Icons */}
              <div>
                <h3 className="text-sm tracking-widest uppercase text-white/80 mb-4">
                  Follow Us
                </h3>

                <div className="flex gap-4 justify-center">
                  {[Instagram, Facebook, Twitter, Linkedin, Youtube].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all group"
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* -------- LINKS SECTION -------- */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* CONNECT COLUMN */}
              <div>
                <h3 className="ss-footer-title mb-6">Connect</h3>

                <ul className="space-y-5">
                  {[
                    { icon: Heart, text: "Start Your Journey" },
                    { icon: Calendar, text: "Book a Consultation" },
                    { icon: MessageCircle, text: "Contact Us" },
                    { icon: MessageCircle, text: "FAQ" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center gap-3 ss-footer-link hover:translate-x-2 transition-all group"
                      >
                        <item.icon className="w-5 h-5 group-hover:scale-110" />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* INFORMATION COLUMN */}
              <div>
                <h3 className="ss-footer-title mb-6">Information</h3>

                <ul className="space-y-5">
                  {[
                    { icon: Shield, text: "Safety Tips" },
                    { icon: Lock, text: "Privacy Policy" },
                    { icon: FileText, text: "Terms & Conditions" },
                    { icon: Shield, text: "Community Guidelines" },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center gap-3 ss-footer-link hover:translate-x-2 transition-all group"
                      >
                        <item.icon className="w-5 h-5 group-hover:scale-110" />
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* BOTTOM COPYRIGHT */}
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center ss-body text-sm">
            © 2025 Soul Syn. All rights reserved. Find your perfect match.
          </div>
        </div>
      </div>
    </footer>
  );
}
