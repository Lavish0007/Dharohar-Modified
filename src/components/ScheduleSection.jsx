import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Music, Star, Zap } from 'lucide-react';

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState('all');

  const daysData = [
    {
      id: 'day1',
      dayNumber: 'Day 01',
      date: 'Nov 14, 2024',
      title: 'AARAMBH (The Awakening)',
      subtitle: 'Classical roots, traditional expressions & rock prelims',
      events: [
        {
          time: '10:00 AM',
          title: 'Grand Inauguration & Lamp Lighting',
          stage: 'Central Auditorium',
          type: 'Ceremonial',
          desc: 'Traditional ceremonial welcome, faculty keynote, and auspicious cultural invocation.',
        },
        {
          time: '12:00 PM',
          title: 'Classical Music & Folk Dance Showcase',
          stage: 'Natraj Arena',
          type: 'Cultural',
          desc: 'Mesmerizing Kathak, Bharatnatyam, and regional folk ensembles by premier college troupes.',
        },
        {
          time: '03:30 PM',
          title: 'Battle of the Bands (Prelims)',
          stage: 'OAT Amphitheater',
          type: 'Music',
          desc: 'High-octane collegiate rock, metal, and indie bands battling for the final headliner spots.',
        },
        {
          time: '06:30 PM',
          title: 'Magic Illusion Spectacle & Acoustic Sunset',
          stage: 'Carnival Stage',
          type: 'Evening Show',
          desc: 'Mind-bending live stage illusions followed by soulful acoustic singer-songwriter sessions.',
        },
      ],
    },
    {
      id: 'day2',
      dayNumber: 'Day 02',
      date: 'Nov 15, 2024',
      title: 'UTSAV (The Carnival)',
      subtitle: 'Theatrics, hip-hop face-offs, runway glam & EDM night',
      events: [
        {
          time: '11:00 AM',
          title: 'Street Theater (Nukkad Natak)',
          stage: 'Campus Plaza',
          type: 'Dramatics',
          desc: 'Powerful socially-charged street plays echoing with thunderous dhols and raw crowd energy.',
        },
        {
          time: '02:00 PM',
          title: 'Western Hip-Hop & Solo Dance Battle',
          stage: 'Natraj Arena',
          type: 'Dance',
          desc: 'Popping, locking, freestyle cyphers, and explosive crew routines judged by pros.',
        },
        {
          time: '04:30 PM',
          title: 'Runway Glamour — The Fashion Walk',
          stage: 'Central Auditorium',
          type: 'Fashion',
          desc: 'Avant-garde couture, traditional royal ethnic wear, and cutting-edge runway themes.',
        },
        {
          time: '07:30 PM',
          title: 'Campus DJ War & Electrifying EDM Night',
          stage: 'Main Festival Ground',
          type: 'Headliner',
          desc: 'Pumping bass drops, pyrotechnics, laser displays, and guest electronic headliners.',
        },
      ],
    },
    {
      id: 'day3',
      dayNumber: 'Day 03',
      date: 'Nov 16, 2024',
      title: 'DHAROHAR (The Grand Finale)',
      subtitle: 'Final showdowns, grand awards & the celebrity star night',
      events: [
        {
          time: '11:30 AM',
          title: 'Battle of the Bands — Grand Finals',
          stage: 'OAT Amphitheater',
          type: 'Music',
          desc: 'Top 5 national college bands fighting with original compositions for ₹1,00,000 cash prizes.',
        },
        {
          time: '02:30 PM',
          title: 'Voices of Dharohar — Western & Indie Choir',
          stage: 'Central Auditorium',
          type: 'Acapella',
          desc: 'Vocal harmonies, beatboxing duels, and multi-part choral arrangements.',
        },
        {
          time: '05:00 PM',
          title: 'Grand Awards Gala & Trophy Ceremony',
          stage: 'Central Auditorium',
          type: 'Awards',
          desc: 'Felicitation of winners, rolling trophy presentation, and faculty honors.',
        },
        {
          time: '07:30 PM',
          title: 'Star Celebrity Concert Night',
          stage: 'Main Festival Arena',
          type: 'Celebrity Night',
          desc: 'Unforgettable live stadium concert with Bollywood playback royalty under the stars.',
        },
      ],
    },
  ];

  const filteredDays = activeDay === 'all' 
    ? daysData 
    : daysData.filter((d) => d.id === activeDay);

  return (
    <section id="schedule" className="relative z-10 w-full py-20 px-4 sm:px-8 lg:px-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-amber-400/40 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300 mb-3 shadow-[0_0_15px_rgba(245,195,68,0.15)]">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Timeline & Events</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Festival <span className="gold-text-gradient">Schedule '24</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Three days of unmissable music, dance, theater, and celebration across 4 campus stages.
          </p>
        </div>

        {/* Day Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveDay('all')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeDay === 'all'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-purple-950 shadow-[0_0_20px_rgba(245,195,68,0.4)]'
                : 'bg-purple-950/40 text-purple-200 border border-purple-800/40 hover:border-amber-400/50 hover:text-white'
            }`}
          >
            All 3 Days
          </button>
          {daysData.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDay(d.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeDay === d.id
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-purple-950 shadow-[0_0_20px_rgba(245,195,68,0.4)]'
                  : 'bg-purple-950/40 text-purple-200 border border-purple-800/40 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              <span>{d.dayNumber}</span>
              <span className="opacity-70 text-[11px]">({d.date.split(',')[0]})</span>
            </button>
          ))}
        </div>

        {/* Days Timeline Content */}
        <div className="space-y-12">
          {filteredDays.map((dayGroup) => (
            <div
              key={dayGroup.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#14082c]/85 border border-purple-800/50 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Day Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-800/40 pb-5 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                      {dayGroup.dayNumber}
                    </span>
                    <span className="text-xs text-purple-300">{dayGroup.date}</span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1.5">
                    {dayGroup.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300/80 mt-0.5">
                    {dayGroup.subtitle}
                  </p>
                </div>
              </div>

              {/* Day Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dayGroup.events.map((ev, idx) => (
                  <div
                    key={idx}
                    className="group p-4 sm:p-5 rounded-2xl bg-purple-950/40 border border-purple-800/30 hover:border-amber-400/40 hover:bg-purple-900/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs sm:text-sm">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{ev.time}</span>
                        </div>
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-purple-900/60 text-purple-200 border border-purple-700/40">
                          {ev.type}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                        {ev.title}
                      </h4>
                      <p className="text-xs text-purple-200/80 mt-1.5 leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-purple-800/30 flex items-center justify-between text-[11px] text-purple-300">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-pink-400" />
                        <span>{ev.stage}</span>
                      </span>
                      <span className="text-amber-400/80 font-medium group-hover:translate-x-0.5 transition-transform">
                        Explore Event →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
