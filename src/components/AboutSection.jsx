import React from 'react';
import { Sparkles, Trophy, Users, Award, Star, Compass } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Grand Carnival Attractions',
      desc: 'Campus Ferris wheel, carnival rides, VR gaming zones, immersive visual stalls, and nocturnal food flea markets.',
      badge: 'Attraction',
    },
    {
      icon: Trophy,
      title: '40+ Competitive Arenas',
      desc: 'High-stakes national collegiate face-offs across Dance, Battle of the Bands, Classical Voice, Street Theater, and Fashion.',
      badge: 'Competitions',
    },
    {
      icon: Users,
      title: 'Star Celebrity Concert',
      desc: 'Electrifying live headliner concert featuring top Bollywood playback artists and chart-topping electronic DJ music.',
      badge: 'Star Night',
    },
  ];

  const stats = [
    { number: '15,000+', label: 'Footfall & Attendees' },
    { number: '40+', label: 'Flagship Events' },
    { number: '₹5,00,000+', label: 'Prize & Accolades' },
    { number: '50+', label: 'Colleges Represented' },
  ];

  return (
    <section id="about" className="relative z-10 w-full py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading Tag */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-amber-400/40 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300 mb-3 shadow-[0_0_15px_rgba(245,195,68,0.15)]">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Legacy & Heritage</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            About <span className="gold-text-gradient">Dharohar 2024</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            The flagship annual cultural spectacle of ABES Engineering College celebrating heritage, art, and unstoppable student energy.
          </p>
        </div>

        {/* Featured Story Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#1a0c3b]/90 via-[#13072b]/95 to-[#0d041c]/90 border border-purple-700/50 shadow-[0_10px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl mb-12 overflow-hidden">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden p-3 bg-purple-950/50 border border-amber-400/30 shadow-[0_0_30px_rgba(245,195,68,0.15)] group">
                <img
                  src="/dharohar-logo.png"
                  alt="Dharohar Mascot"
                  className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/Dharohar/Dharohar_logo_cropped-removebg-preview.png";
                  }}
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-pink-400">
                Edition XVII • ABES Engineering College
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-amber-200">
                Where Timeless Culture Meets Electric Innovation
              </h3>
              <p className="text-purple-200/90 text-sm sm:text-base leading-relaxed">
                <b>धरोहर (Dharohar)</b> embodies the sacred bond between Indian tradition and contemporary youthful imagination. Over three unmissable days, the entire college campus transforms into a vibrant carnival of rhythm, theatrics, colors, and intellectual camaraderie.
              </p>
              <p className="text-purple-300/80 text-xs sm:text-sm leading-relaxed">
                Organized and orchestrated completely by students, Dharohar brings together the sharpest performing talents, underground rock bands, traditional thespians, and visionary fashion designers under one royal spotlight.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars / Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#14082c]/80 border border-purple-800/40 hover:border-amber-400/50 hover:bg-[#1c0c3d]/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-700/50 text-amber-300 group-hover:scale-110 group-hover:text-amber-200 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-950/60 text-purple-300 border border-purple-800/60">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-purple-950/40 border border-purple-800/50 backdrop-blur-md">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gold-text-gradient font-cinzel">
                {s.number}
              </div>
              <div className="text-xs text-purple-300/80 font-medium uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
