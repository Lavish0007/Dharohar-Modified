import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-[#070312] border-t border-purple-900/40 text-purple-300/80 pt-12 pb-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-purple-900/30 pb-8 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden p-0.5 border border-amber-400/40 shadow-[0_0_15px_rgba(245,195,68,0.2)]">
            <img
              src="/dharohar-logo.png"
              alt="Dharohar Logo"
              className="w-full h-full object-contain filter drop-shadow"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div>
            <div className="font-cinzel text-lg font-bold text-white tracking-wider flex items-center gap-2">
              DHAROHAR <span className="text-amber-400 text-xs">2024</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-purple-400">
              ABES Engineering College, Ghaziabad
            </div>
          </div>
        </div>

        {/* Quick Nav Anchor Links */}
        <div className="flex flex-wrap justify-center items-center gap-5 text-xs text-purple-200/90 font-medium">
          <a href="#hero" className="hover:text-amber-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-300 transition-colors">About Us</a>
          <a href="#schedule" className="hover:text-amber-300 transition-colors">Schedule '24</a>
          <a href="#gallery" className="hover:text-amber-300 transition-colors">Gallery</a>
          <a href="#passes" className="hover:text-amber-300 transition-colors">Passes</a>
          <a href="#sponsors" className="hover:text-amber-300 transition-colors">Sponsors</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors font-bold text-pink-400">Contact Us</a>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="p-2.5 rounded-full bg-purple-950/80 hover:bg-purple-900 text-amber-300 border border-purple-700/50 hover:border-amber-400/60 transition-all shadow-md hover:-translate-y-0.5"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-purple-400/70 gap-2 text-center sm:text-left">
        <div>
          © 2024 <span className="text-amber-300 font-semibold">TEAM DHAROHAR</span>. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Crafted with pride by the Student Council • ABES EC</span>
        </div>
      </div>
    </footer>
  );
}
