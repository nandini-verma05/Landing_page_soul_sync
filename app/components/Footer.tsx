"use client";
import React, { useState } from 'react';
import { Mail, Calendar, MessageCircle, Shield, Lock, FileText, Heart, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        handleSubmit();
    }
};

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden py-24 px-8 md:px-24">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/footerVdo.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: 0.5, pointerEvents: 'none' }}
      />
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="text-center px-6 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-widest mb-8 md:mb-12 uppercase text-center mx-auto">
            Subscribe to Our Newsletter
          </h2>
          
          <div className="max-w-2xl mx-auto flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="YOUR E-MAIL HERE"
              className="flex-1 px-6 md:px-8 py-4 md:py-5 bg-transparent border-2 border-white/30 rounded-l-full text-white placeholder-white/50 text-sm md:text-base tracking-wider focus:outline-none focus:border-white/60 focus:bg-white/5 transition-all"
            />
            <button
              onClick={handleSubmit}
              className="px-6 md:px-8 py-4 md:py-5 bg-white/10 border-2 border-white/30 border-l-0 rounded-r-full hover:bg-white/20 transition-all"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {submitted && (
            <p className="mt-4 text-green-400 tracking-wide">Thank you for subscribing!</p>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-3 uppercase text-center mx-auto">
                Soul Syn
              </h1>
              <p className="text-lg md:text-xl text-white/60 italic tracking-widest mb-8 text-center mx-auto">
                Where Hearts Connect
              </p>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-sm tracking-widest uppercase text-white/80 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all group">
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all group">
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all group">
                    <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all group">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all group">
                    <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Connect Column */}
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-widest mb-6 uppercase">
                  Connect
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <Heart className="w-5 h-5 group-hover:fill-current" />
                      <span className="tracking-wide">Start Your Journey</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <Calendar className="w-5 h-5" />
                      <span className="tracking-wide">Book a Consultation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <MessageCircle className="w-5 h-5" />
                      <span className="tracking-wide">Contact Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <MessageCircle className="w-5 h-5" />
                      <span className="tracking-wide">FAQ</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Information Column */}
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-widest mb-6 uppercase">
                  Information
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <Shield className="w-5 h-5" />
                      <span className="tracking-wide">Safety Tips</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <Lock className="w-5 h-5" />
                      <span className="tracking-wide">Privacy Policy</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <FileText className="w-5 h-5" />
                      <span className="tracking-wide">Terms & Conditions</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white hover:translate-x-2 transition-all group">
                      <Shield className="w-5 h-5" />
                      <span className="tracking-wide">Community Guidelines</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm tracking-wide">
            <p>&copy; 2025 Soul Syn. All rights reserved. Find your perfect match.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}