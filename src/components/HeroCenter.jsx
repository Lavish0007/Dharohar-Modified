import React from 'react';
import { Sparkles, Calendar, MapPin, ArrowRight, Play, Trophy } from 'lucide-react';

export default function HeroCenter() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-6xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-24 pointer-events-auto">
      {/* 1. College & Fest Pre-Heading Badge with smooth Fade-In */}
      <div 
        style={{ animationDelay: '150ms' }}
        className="opacity-0 animate-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md bg-purple-950/40 border border-amber-400/30 shadow-[0_0_20px_rgba(245,195,68,0.15)] mb-3 sm:mb-5 hover:border-amber-400/60 transition-colors"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-amber-200">
          ABES EC Presents • Annual Cultural Fest
        </span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
      </div>

      {/* 2. Central Regal Hindi Title: ध  रो  ह  र with Grand Typography & Golden Sheen */}
      <div 
        style={{ animationDelay: '350ms' }}
        className="opacity-0 animate-fade-in-up relative flex flex-col items-center select-none group my-1 sm:my-2"
      >
        {/* Subtle Warm Golden Radial Backlight behind Hindi Title */}
        <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/15 via-yellow-300/20 to-amber-400/15 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <h1 
          className="relative font-hindi text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.18em] sm:tracking-[0.22em] text-center gold-text-light gold-glow transition-transform duration-500 hover:scale-[1.02] cursor-default"
        >
          ध&nbsp;&nbsp;रो&nbsp;&nbsp;ह&nbsp;&nbsp;र
        </h1>
      </div>

      {/* 3. Crisp English Tagline: UNITE • CELEBRATE • CREATE */}
      <div 
        style={{ animationDelay: '550ms' }}
        className="opacity-0 animate-fade-in-up flex items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-4 mb-4 sm:mb-6"
      >
        <span className="h-[1px] w-6 sm:w-16 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        
        <p className="font-cinzel text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-[0.22em] sm:tracking-[0.32em] uppercase text-amber-100/90 text-center drop-shadow-md">
          <span>Unite</span>
          <span className="mx-2 sm:mx-3 text-amber-400 text-xs sm:text-sm">✦</span>
          <span>Celebrate</span>
          <span className="mx-2 sm:mx-3 text-amber-400 text-xs sm:text-sm">✦</span>
          <span>Create</span>
        </p>

        <span className="h-[1px] w-6 sm:w-16 bg-gradient-to-l from-transparent via-amber-400/60 to-transparent" />
      </div>

      {/* 4. Date, Venue & Quick Stats Pill */}
      <div 
        style={{ animationDelay: '700ms' }}
        className="opacity-0 animate-fade-in-up flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-purple-200/80 mb-6 sm:mb-8 font-sans"
      >
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-900/40 border border-purple-700/40">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>Nov 14 - 16, 2024</span>
        </div>
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-900/40 border border-purple-700/40">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Campus Arena, Ghaziabad</span>
        </div>
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-900/40 border border-purple-700/40 hidden sm:flex">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-300 font-medium">₹2,00,000 Prize Pool</span>
        </div>
      </div>

      {/* 5. Sleek Interactive Action Buttons with Smooth Scrolling */}
      <div 
        style={{ animationDelay: '850ms' }}
        className="opacity-0 animate-fade-in-up flex flex-wrap items-center justify-center gap-3 sm:gap-4"
      >
        {/* Primary Gold Button */}
        <button
          onClick={() => scrollTo('#schedule')}
          className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase text-[#140827] bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_25px_rgba(245,195,68,0.4)] hover:shadow-[0_0_35px_rgba(245,195,68,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Explore Schedule</span>
          <ArrowRight className="w-4 h-4 text-[#140827] group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Secondary Glassmorphic Button */}
        <button
          onClick={() => scrollTo('#gallery')}
          className="group inline-flex items-center gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider text-purple-100 hover:text-white backdrop-blur-md bg-purple-950/40 border border-purple-500/40 hover:border-amber-400/60 hover:bg-purple-900/50 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform" />
          <span>Fest Highlights</span>
        </button>

        {/* About Fest Button */}
        <button
          onClick={() => scrollTo('#about')}
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-purple-300 hover:text-amber-300 hover:bg-purple-900/30 transition-all duration-200"
        >
          <span>About Fest</span>
        </button>
      </div>
    </section>
  );
}
