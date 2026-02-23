"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,

  MessageCircle,
  Shield,
  Lock,
  FileText,
  Heart,
  Instagram,
  Facebook,
  Linkedin,
  X,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFAQClick = () => {
    const faqElement = document.getElementById("faq-section");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { icon: Instagram, url: " https://www.instagram.com/_lovitche_?igsh=bjdqZzJuZ3BkYjU5" },
    { icon: Facebook, url: "https://www.facebook.com/share/14WWooFre67/" },
    { icon: X, url: "https://x.com/Lovitche_?t=eG8p4F_M_Zflnc9vR2mnMg&s=09" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/love-mantrraa-385593397" },
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

 const handleSubmit = async () => {
  if (!email) return;

  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Subscription failed");
      return;
    }

    setSubmitted(true);
    setEmail("");

    setTimeout(() => setSubmitted(false), 3000);
  } catch (err) {
    alert("Something went wrong");
  }
};

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <>
      

      {/* ---------------- MAIN FOOTER ---------------- */}
      <footer className="relative  bg-black text-white overflow-hidden py-24 px-8 md:px-24">
        
        {/* BG VIDEO */}
      

        {/* LIGHTS */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            style={{
              backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `,
            }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative z-10">

          {/* -------- NEWSLETTER -------- */}
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
                className="flex-1 px-6 py-4 bg-transparent border-2 border-white/30 rounded-l-full text-white placeholder-white/50 tracking-widest focus:border-white/60"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-4 bg-white/10 border-2 border-white/30 border-l-0 rounded-r-full hover:bg-white/20"
              >
                <Mail className="w-6 h-6 " />
              </button>
            </div> 
            </div>

            {submitted && (
              <p className="mt-4 text-green-400">Thank you for subscribing!</p>
            )}
          </div>

          {/* -------- FOOTER BODY -------- */}
          <div className="px-6 md:px-12 lg:px-20 pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* BRAND */}
              <div className="text-center">
                <h1 className="text-5xl ss-heading mb-3">LovitchÃ©</h1>
                <p className="text-lg italic mb-8">alinging stars , connecting souls</p>

                <h3 className="text-sm tracking-widest text-white/80 mb-4">
                  Follow Us
                </h3>

                <div className="flex gap-4 justify-center">
                  {socialLinks.map(
                    (social, i) => (
                      <button
                        key={i}
                        onClick={() => handleSocialClick(social.url)}
                        className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all"
                      >
                        <social.icon className="w-5 h-5" />
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* LINKS */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* CONNECT */}
                <div>
                  <h3 className="ss-footer-title mb-6">Connect</h3>

                  <ul className="space-y-5">
                    {[
                      { icon: Heart, text: "Start Your Journey" },
                      { icon: MessageCircle, text: "Contact Us" },
                      { icon: MessageCircle, text: "FAQ" },
                    ].map((item, index) => (
                      <li key={index}>
                        {item.text === "FAQ" ? (
                          <button
                            onClick={handleFAQClick}
                            className="flex items-center gap-3 hover:translate-x-2 transition group"
                          >
                            <item.icon className="w-5 h-5 group-hover:scale-110" />
                            {item.text}
                          </button>
                        ) : (
                          <a
                            href="#"
                            className="flex items-center gap-3 hover:translate-x-2 transition group"
                          >
                            <item.icon className="w-5 h-5 group-hover:scale-110" />
                            {item.text}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* INFORMATION */}
               <div>
  <h3 className="ss-footer-title mb-6">Information</h3>

  <ul className="space-y-5">
    {[
      { icon: Shield, text: "Safety Tips", path: "/safety" },
      { icon: Lock, text: "Privacy Policy", path: "/privacy-policy" },
      { icon: FileText, text: "Terms & Conditions", path: "/terms-and-conditions" },
      { icon: Shield, text: "Community Guidelines", path: "/security" },
    ].map((item, index) => (
      <li key={index}>
        <Link
          href={item.path}
          className="flex items-center gap-3 hover:translate-x-2 transition group"
        >
          <item.icon className="w-5 h-5 group-hover:scale-110" />
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
</div>

              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm">
              Â© 2025 LovitchÃ©. All rights reserved. Find your perfect match.
            </div>
          </div>
       
      </footer>
    </>
  );
}

