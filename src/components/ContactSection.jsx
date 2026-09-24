import React, { useState } from 'react';
import { PhoneCall, Mail, Phone, MapPin, Sparkles, Copy, Check, MessageSquare, Compass } from 'lucide-react';

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 400, y: 200 });

  const eventCoordinators = [
    {
      name: 'Lavish Patel',
      role: 'EVENT COORDINATOR',
      email: 'lavishpatel@gmail.com',
      phone: '+919800000033',
    },
    {
      name: 'Udisha Verma',
      role: 'EVENT COORDINATOR',
      email: 'udishaverma@gmail.com',
      phone: '+919800000064',
    },
    {
      name: 'Vidushi Srivastava',
      role: 'EVENT COORDINATOR',
      email: 'vidushisrivastava@gmail.com',
      phone: '+919800000071',
    },
  ];

  const handleCopy = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleContainerMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section
      id="contact"
      onMouseMove={handleContainerMouseMove}
      className="relative z-10 w-full py-24 px-4 sm:px-8 lg:px-16 scroll-mt-20 overflow-hidden"
    >
      {/* Dynamic Cursor-Reactive Moving Gradient Spotlight */}
      <div
        className="pointer-events-none absolute -inset-20 opacity-70 blur-3xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 212, 0.22), rgba(124, 58, 237, 0.18), rgba(245, 195, 68, 0.1), transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-amber-400/40 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300 mb-3 shadow-[0_0_15px_rgba(245,195,68,0.15)]">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Organizing Committee</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Event <span className="gold-text-gradient">Coordinators & Contact</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about events, passes, stage performances, or sponsorships? Reach out directly to our student coordinator leads.
          </p>
        </div>

        {/* 3 Event Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {eventCoordinators.map((person) => (
            <div
              key={person.name}
              onMouseMove={handleCardMouseMove}
              className="cursor-gradient-card glass-card group relative p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Event Coordinator Magenta/Pink Italic Title matching user reference */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-sans italic font-extrabold tracking-wider text-xs sm:text-sm text-[#ff00d4] drop-shadow-[0_0_10px_rgba(255,0,212,0.5)]">
                    {person.role}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                </div>

                {/* Coordinator Name */}
                <h3 className="font-cinzel text-2xl font-bold text-white tracking-wide mb-5 group-hover:text-amber-200 transition-colors">
                  {person.name}
                </h3>

                {/* Contact Items with Copy Buttons */}
                <div className="space-y-3 text-xs sm:text-sm">
                  {/* Email Box */}
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl glass-card-subtle group-hover:border-purple-500/40 transition-colors">
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2.5 text-purple-200 hover:text-pink-300 transition-colors truncate"
                      title={`Send email to ${person.email}`}
                    >
                      <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span className="underline underline-offset-2 truncate font-medium">
                        {person.email}
                      </span>
                    </a>
                    <button
                      onClick={() => handleCopy(person.email, `${person.name}-email`)}
                      title="Copy email address"
                      className="p-1.5 rounded-md text-purple-400 hover:text-white hover:bg-purple-800/60 transition-colors flex-shrink-0"
                    >
                      {copiedKey === `${person.name}-email` ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl glass-card-subtle group-hover:border-purple-500/40 transition-colors">
                    <a
                      href={`tel:${person.phone}`}
                      className="flex items-center gap-2.5 text-purple-200 hover:text-amber-300 transition-colors font-medium tracking-wide"
                      title={`Call ${person.phone}`}
                    >
                      <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="underline underline-offset-2">{person.phone}</span>
                    </a>
                    <button
                      onClick={() => handleCopy(person.phone, `${person.name}-phone`)}
                      title="Copy phone number"
                      className="p-1.5 rounded-md text-purple-400 hover:text-white hover:bg-purple-800/60 transition-colors flex-shrink-0"
                    >
                      {copiedKey === `${person.name}-phone` ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Direct Mail & Call Actions */}
              <div className="mt-6 pt-4 border-t border-purple-800/40 flex items-center gap-2.5">
                <a
                  href={`mailto:${person.email}`}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center text-pink-200 bg-pink-950/40 hover:bg-pink-900/60 border border-pink-700/50 hover:border-pink-500/70 transition-all shadow-sm"
                >
                  ✉ Send Mail
                </a>
                <a
                  href={`tel:${person.phone}`}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center text-amber-200 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-700/50 hover:border-amber-500/70 transition-all shadow-sm"
                >
                  📞 Direct Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Venue Location & Campus Desk Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Venue Card */}
          <div className="p-6 sm:p-7 rounded-3xl glass-card flex items-start gap-4 hover:-translate-y-1">
            <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex-shrink-0 mt-0.5">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-amber-400 uppercase tracking-wider font-bold">
                Festival Location
              </span>
              <h4 className="text-xl font-bold text-white mt-1">ABES Engineering College</h4>
              <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">
                19th KM Stone, NH-09 (Delhi-Meerut Expressway), Ghaziabad, UP 201009
              </p>
              <p className="text-xs text-purple-300/80 mt-1">
                Landmark: Near Crossing Republik / Noida Electronic City Metro Station
              </p>
            </div>
          </div>

          {/* Central Helpdesk Card */}
          <div className="p-6 sm:p-7 rounded-3xl glass-card flex items-start gap-4 hover:-translate-y-1">
            <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex-shrink-0 mt-0.5">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-amber-400 uppercase tracking-wider font-bold">
                General Helpdesk & Queries
              </span>
              <h4 className="text-xl font-bold text-white mt-1">Dharohar Central Committee</h4>
              <p className="text-sm text-gray-300 mt-1.5 leading-relaxed">
                Central student helpline active daily from 9:00 AM – 8:00 PM IST
              </p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-purple-300">
                <span>Official Fest Mail: <a href="mailto:fest@abes.ac.in" className="underline text-amber-300 hover:text-white">fest@abes.ac.in</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
