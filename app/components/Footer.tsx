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
  Linkedin,
  X,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Modal States
  const [openModal, setOpenModal] = useState<string | null>(null);

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
      {/* ------------ MODALS FOR INFO PAGES ------------ */}
      {openModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex justify-center items-center p-6">
          <div className="bg-black/90 text-white max-w-3xl w-full rounded-2xl p-8 relative max-h-[85vh] overflow-y-auto border border-white/10 shadow-xl">

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 hover:scale-110 transition"
              onClick={() => setOpenModal(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Title */}
            <h2 className="text-3xl font-bold mb-6">{openModal}</h2>

            {/* ---------------- SAFETY TIPS ---------------- */}
            {openModal === "Safety Tips" && (
              <div className="space-y-4 leading-relaxed text-gray-300">
                <p>Your safety is our priority. Follow these essential guidelines:</p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Do not share personal details (address, bank info, passwords).</li>
                  <li>Keep conversations inside Soul Sync until comfortable.</li>
                  <li>Trust your intuition—block and report suspicious users.</li>
                  <li>Verify profiles before meeting in person.</li>
                  <li>Meet in public places and inform a friend about your plans.</li>
                  <li>Never send money or financial assistance to anyone.</li>
                </ul>
              </div>
            )}

            {/* ---------------- PRIVACY POLICY ---------------- */}
            {openModal === "Privacy Policy" && (
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Soul Sync collects minimal data to provide astrology-based
                  matchmaking. Your details are encrypted and never sold.
                </p>

                <h3 className="text-xl font-semibold">Data We Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Basic profile info (name, email, DOB)</li>
                  <li>Birth details for astrological chart generation</li>
                  <li>Interests, preferences, compatibility insights</li>
                  <li>Login/device data for security</li>
                </ul>

                <h3 className="text-xl font-semibold">How We Use Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Matchmaking based on astrology & interests</li>
                  <li>Improving app experience</li>
                  <li>User safety and fraud detection</li>
                </ul>

                <p>
                  You may request deletion of your data anytime. We follow strict
                  privacy and security protocols.
                </p>
              </div>
            )}

            {/* ---------------- TERMS & CONDITIONS ---------------- */}
            {openModal === "Terms & Conditions" && (
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  By using Soul Sync, you agree to our platform rules and
                  matchmaking policy.
                </p>

                <h3 className="text-xl font-semibold">Main Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be 18+ to use Soul Sync.</li>
                  <li>Provide accurate profile information.</li>
                  <li>No scams, harassment, explicit content, or fake identities.</li>
                  <li>Astrology is for compatibility guidance only.</li>
                  <li>We may suspend accounts violating our policies.</li>
                </ul>

                <p>
                  Soul Sync is not responsible for offline interactions.
                  Users must practice discretion and personal judgment.
                </p>
              </div>
            )}

            {/* ---------------- COMMUNITY GUIDELINES ---------------- */}
            {openModal === "Community Guidelines" && (
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Our goal is to create a respectful, meaningful dating environment.
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Be authentic—use real information and pictures.</li>
                  <li>Be respectful in conversations.</li>
                  <li>No hate speech, bullying, or discrimination.</li>
                  <li>No explicit, violent, or harmful content.</li>
                  <li>Do not request money from users.</li>
                  <li>Report suspicious or abusive behavior.</li>
                </ul>

                <p>
                  Help us keep Soul Sync safe and supportive for everyone.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ---------------- MAIN FOOTER ---------------- */}
      <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden py-24 px-8 md:px-24">
        
        {/* BG VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          src="/footerVdo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

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
          {/* <div className="text-center px-6 py-16 md:py-20">
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
            </div> */}

            {submitted && (
              <p className="mt-4 text-green-400">Thank you for subscribing!</p>
            )}
          </div>

          {/* -------- FOOTER BODY -------- */}
          <div className="px-6 md:px-12 lg:px-20 pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* BRAND */}
              <div className="text-center">
                <h1 className="text-5xl ss-heading mb-3">Lovitché</h1>
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
                      { icon: Shield, text: "Safety Tips" },
                      { icon: Lock, text: "Privacy Policy" },
                      { icon: FileText, text: "Terms & Conditions" },
                      { icon: Shield, text: "Community Guidelines" },
                    ].map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => setOpenModal(item.text)}
                          className="flex items-center gap-3 hover:translate-x-2 transition group w-full text-left"
                        >
                          <item.icon className="w-5 h-5 group-hover:scale-110" />
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm">
              © 2025 Lovitché. All rights reserved. Find your perfect match.
            </div>
          </div>
       
      </footer>
    </>
  );
}
