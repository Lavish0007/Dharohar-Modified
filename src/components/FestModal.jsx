import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Sparkles, Trophy, Users, ShieldCheck, Ticket, ExternalLink, HeartHandshake, PhoneCall, Mail, Phone, Copy, Check } from 'lucide-react';


export default function FestModal({ activeModal, onClose }) {
  const [copiedText, setCopiedText] = useState(null);
  const [contactMouse, setContactMouse] = useState({ x: 350, y: 150 });

  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleCopy = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedText(key);
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  const handleContactMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setContactMouse({
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

  const eventCoordinators = [
    {
      name: 'Lavish Patel',
      role: 'EVENT COORDINATOR',
      email: 'lavishpatel@gmail.com',
      phone: '+916307967123',
    },
    {
      name: 'Udisha Verma',
      role: 'EVENT COORDINATOR',
      email: 'udishaverma@gmail.com',
      phone: '+918287465123',
    },
    {
      name: 'Vidushi Srivastava',
      role: 'EVENT COORDINATOR',
      email: 'vidushisrivastava@gmail.com',
      phone: '+918800147123',
    },
  ];


  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop with blur and deep purple tint */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#070312]/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] flex flex-col glass-card-featured rounded-2xl sm:rounded-3xl overflow-hidden animate-fade-in z-10"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 border-b border-white/10 bg-white/[0.03] backdrop-blur-md flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,195,68,0.8)]" />
            <h2 className="font-cinzel text-lg sm:text-2xl font-bold tracking-wider text-amber-200">
              {activeModal === 'about' && 'About Dharohar 2024'}
              {activeModal === 'schedule' && "Festival Schedule '24"}
              {activeModal === 'gallery' && 'Picture Gallery'}
              {activeModal === 'sponsors' && 'Our Proud Sponsors'}
              {activeModal === 'tickets' && 'Festival Passes & Tickets'}
              {activeModal === 'contact' && 'Event Coordinators & Contact'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-purple-300 hover:text-white hover:bg-purple-800/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with smooth internal scroll container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-gray-200 custom-scrollbar">
          {/* 1. ABOUT FESTIVAL */}
          {activeModal === 'about' && (
            <div className="space-y-6 text-sm sm:text-base leading-relaxed">
              <div className="p-4 sm:p-6 rounded-xl glass-card flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/dharohar-logo.png"
                  alt="Dharohar Fest Logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow"
                />
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-300 mb-2">
                    IT'S GO TIME! WELCOME TO धरोहर 2024!
                  </h3>
                  <p className="text-purple-200/90 leading-relaxed text-sm sm:text-base">
                    <b>Dharohar</b> is an electrifying three-day cultural extravaganza at <b>ABES Engineering College</b>,
                    celebrating timeless heritage, creative passion, and artistic innovation. Organized entirely by students,
                    it brings together over 15,000+ attendees from across the country for an unforgettable experience.
                  </p>
                </div>
              </div>

              {/* Fest Highlights Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl glass-card-subtle">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Grand Attractions
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    A campus Ferris wheel, carnival roller coasters, immersive game zones, and interactive VR stalls.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card-subtle">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> 40+ Competitions
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    High-stakes battles across Dance, Rock Bands, Classical Singing, Street Play, and Fashion shows.
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card-subtle">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Star Celebrity Night
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Live electrifying performance by Bollywood playback artists and top electronic DJ headliners.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. SCHEDULE '24 */}
          {activeModal === 'schedule' && (
            <div className="space-y-4">
              <p className="text-sm text-purple-300">
                Three days of unmissable music, dance, theater, and celebration across 4 campus stages.
              </p>

              <div className="space-y-3">
                {/* Day 1 */}
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cinzel font-bold text-amber-300 text-base sm:text-lg">
                      DAY 1 • AARAMBH (THE AWAKENING)
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Nov 14
                    </span>
                  </div>
                  <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                    <li>✦ <strong>10:00 AM:</strong> Grand Inaugural Ceremony & Traditional Lamp Lighting</li>
                    <li>✦ <strong>12:00 PM:</strong> Classical Music & Folk Dance Showcase (Natraj Arena)</li>
                    <li>✦ <strong>03:30 PM:</strong> Battle of Bands (Rock & Indie Prelims)</li>
                    <li>✦ <strong>06:30 PM:</strong> Magic Illusion Spectacle & Acoustic Sunset Sessions</li>
                  </ul>
                </div>

                {/* Day 2 */}
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cinzel font-bold text-amber-300 text-base sm:text-lg">
                      DAY 2 • UTSAV (THE CARNIVAL)
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Nov 15
                    </span>
                  </div>
                  <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                    <li>✦ <strong>11:00 AM:</strong> Street Play (Nukkad Natak) & Thespian Arts</li>
                    <li>✦ <strong>02:00 PM:</strong> Western Hip-Hop & Solo Dance Face-Off</li>
                    <li>✦ <strong>04:30 PM:</strong> Runway Glamour • The Grand Fashion Walk</li>
                    <li>✦ <strong>07:30 PM:</strong> EDM Night & Campus DJ War with Special Guest DJ</li>
                  </ul>
                </div>

                {/* Day 3 */}
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cinzel font-bold text-amber-300 text-base sm:text-lg">
                      DAY 3 • DHAMAKA (CELEBRITY STAR NIGHT)
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Nov 16
                    </span>
                  </div>
                  <ul className="text-xs sm:text-sm space-y-1 text-gray-300">
                    <li>✦ <strong>12:00 PM:</strong> Finals of Battle of Bands & Prize Distribution Ceremony</li>
                    <li>✦ <strong>04:00 PM:</strong> Cultural Heritage Handicraft Fair & Food Carnival</li>
                    <li>✦ <strong>07:00 PM:</strong> LIVE MEGA CONCERT • Bollywood Celebrity Singer</li>
                    <li>✦ <strong>10:30 PM:</strong> Grand Finale Fireworks & Laser Light Symphony</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 3. GALLERY */}
          {activeModal === 'gallery' && (
            <div className="space-y-4">
              <p className="text-sm text-purple-300">
                A glimpse into the magical energy and golden memories of previous editions of Dharohar.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { src: '/home_page_images/Dance.jpeg', title: 'Dance Extravaganza' },
                  { src: '/home_page_images/Singing.jpg', title: 'Musical Symphony' },
                  { src: '/home_page_images/performance.jpg', title: 'Mainstage Crowd' },
                  { src: '/home_page_images/Magic show.jpg', title: 'Illusionist Show' },
                  { src: '/home_page_images/Ferris wheel.jpg', title: 'Carnival Wheel' },
                  { src: '/home_page_images/Workshop.jpg', title: 'Craft Workshop' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl overflow-hidden aspect-video bg-purple-950/50 border border-purple-800/40 hover:border-amber-400/60 transition-all duration-300"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // fallback to a styled placeholder
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] sm:text-xs font-medium text-amber-200">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. SPONSORS */}
          {activeModal === 'sponsors' && (
            <div className="space-y-6">
              <p className="text-sm text-purple-300">
                We extend our deepest gratitude to our visionary brand partners who make Dharohar 2024 grander than ever.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'boAt Lifestyle', logo: '/boat-logo.svg', tag: 'Official Audio Partner' },
                  { name: 'Spotify India', logo: 'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg', tag: 'Streaming Partner' },
                  { name: 'Coca-Cola', logo: '/Coca-Cola', tag: 'Beverage Partner' },
                  { name: 'Zomato', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png', tag: 'Food Partner' },
                  { name: 'Paytm', logo: 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png', tag: 'Payments Partner' },
                  { name: 'Hostinger', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Hostinger_Logo.png', tag: 'Web Hosting Partner' },
                ].map((sponsor, idx) => (

                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-card flex flex-col items-center justify-center text-center hover:border-amber-400/60 transition-all duration-300"
                  >
                    <div className="h-14 flex items-center justify-center mb-3">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-12 max-w-[110px] object-contain filter drop-shadow brightness-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-white">{sponsor.name}</span>
                    <span className="text-[10px] text-amber-300/80 mt-0.5">{sponsor.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. PASSES & TICKETS */}
          {activeModal === 'tickets' && (
            <div className="space-y-5">
              <p className="text-sm text-purple-300">
                Choose your festival pass to access workshops, competitive arenas, and the Star Celebrity Night.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Student Pass */}
                <div className="p-5 rounded-2xl glass-card flex flex-col justify-between hover:border-amber-400/50 transition-all">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-purple-300">College Student</span>
                    <h4 className="font-cinzel text-xl font-bold text-amber-300 mt-1">General Pass</h4>
                    <div className="text-2xl font-bold text-white my-3">₹199</div>
                    <ul className="text-xs space-y-2 text-gray-300">
                      <li>✓ Access to Day 1 & Day 2 events</li>
                      <li>✓ Entry to all competition arenas</li>
                      <li>✓ Food stall & carnival vouchers</li>
                    </ul>
                  </div>
                  <button className="mt-5 w-full py-2 rounded-xl text-xs font-bold text-amber-200 bg-purple-900 hover:bg-purple-800 transition-colors">
                    Reserve Pass
                  </button>
                </div>

                {/* All-Access Fest Pass (Featured) */}
                <div className="relative p-5 rounded-2xl glass-card-featured border-2 border-amber-400 shadow-[0_0_25px_rgba(245,195,68,0.25)] flex flex-col justify-between">
                  <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-amber-400 text-[#15072e] text-[10px] font-extrabold uppercase">
                    Most Popular
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300">Full 3-Day Fest</span>
                    <h4 className="font-cinzel text-xl font-bold text-amber-200 mt-1">All-Access Pass</h4>
                    <div className="text-2xl font-bold text-white my-3">₹499</div>
                    <ul className="text-xs space-y-2 text-gray-200">
                      <li>✓ Complete 3-day full campus access</li>
                      <li>✓ Guaranteed Star Night concert entry</li>
                      <li>✓ Exclusive Dharohar fest wristband</li>
                      <li>✓ ₹100 carnival ride voucher</li>
                    </ul>
                  </div>
                  <button className="mt-5 w-full py-2.5 rounded-xl text-xs font-bold text-[#15072e] bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-md">
                    Claim Pass Now
                  </button>
                </div>

                {/* VIP Lounge Pass */}
                <div className="p-5 rounded-2xl glass-card flex flex-col justify-between hover:border-amber-400/50 transition-all">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-purple-300">VIP Experience</span>
                    <h4 className="font-cinzel text-xl font-bold text-amber-300 mt-1">VIP Golden Pass</h4>
                    <div className="text-2xl font-bold text-white my-3">₹999</div>
                    <ul className="text-xs space-y-2 text-gray-300">
                      <li>✓ Front-row VIP concert lounge</li>
                      <li>✓ Backstage artist interaction zone</li>
                      <li>✓ Complimentary hospitality & snack box</li>
                      <li>✓ Fast-track entry at all gates</li>
                    </ul>
                  </div>
                  <button className="mt-5 w-full py-2 rounded-xl text-xs font-bold text-amber-200 bg-purple-900 hover:bg-purple-800 transition-colors">
                    Reserve VIP Pass
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 6. CONTACT US */}
          {activeModal === 'contact' && (
            <div
              onMouseMove={handleContactMouseMove}
              className="relative space-y-6 overflow-hidden rounded-2xl p-1 sm:p-2 select-text"
            >
              {/* Dynamic Interactive Moving Gradient that tracks mouse movement across the contact panel */}
              <div
                className="pointer-events-none absolute -inset-10 opacity-70 blur-3xl transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(550px circle at ${contactMouse.x}px ${contactMouse.y}px, rgba(255, 0, 212, 0.22), rgba(124, 58, 237, 0.2), rgba(245, 195, 68, 0.12), transparent 70%)`,
                }}
              />

              {/* Sub-header text */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-purple-800/40 pb-3">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-200">
                    Festival Event Coordinators
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300 mt-0.5">
                    Feel free to connect directly for event registrations, stage schedules, and general queries.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-pink-950/40 border border-pink-700/40 text-[11px] text-pink-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                  <span>Central Team</span>
                </div>
              </div>

              {/* 3 Event Coordinators Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventCoordinators.map((person) => (
                  <div
                    key={person.name}
                    onMouseMove={handleCardMouseMove}
                    className="cursor-gradient-card group relative p-5 rounded-2xl border border-purple-800/50 bg-[#160b35]/85 backdrop-blur-md flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,0,212,0.25)] transition-all duration-300"
                  >
                    <div>
                      {/* Event Coordinator magenta italic badge matching the reference image */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-sans italic font-extrabold tracking-wider text-xs sm:text-sm text-[#ff00d4] drop-shadow-[0_0_8px_rgba(255,0,212,0.45)]">
                          {person.role}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                      </div>

                      {/* Coordinator Name */}
                      <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-4 group-hover:text-amber-300 transition-colors">
                        {person.name}
                      </h4>

                      {/* Contact Info Items */}
                      <div className="space-y-2.5 text-xs sm:text-sm">
                        {/* Email */}
                        <div className="flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/40 group-hover:border-purple-600/50 transition-colors">
                          <a
                            href={`mailto:${person.email}`}
                            className="flex items-center gap-2 text-purple-200 hover:text-pink-300 transition-colors truncate"
                            title={`Email ${person.email}`}
                          >
                            <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                            <span className="underline underline-offset-2 truncate font-medium">
                              {person.email}
                            </span>
                          </a>
                          <button
                            onClick={() => handleCopy(person.email, `${person.name}-email`)}
                            title="Copy email address"
                            className="p-1 rounded-md text-purple-400 hover:text-white hover:bg-purple-800/60 transition-colors flex-shrink-0"
                          >
                            {copiedText === `${person.name}-email` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/40 group-hover:border-purple-600/50 transition-colors">
                          <a
                            href={`tel:${person.phone}`}
                            className="flex items-center gap-2 text-purple-200 hover:text-amber-300 transition-colors font-medium tracking-wide"
                            title={`Call ${person.phone}`}
                          >
                            <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            <span className="underline underline-offset-2">{person.phone}</span>
                          </a>
                          <button
                            onClick={() => handleCopy(person.phone, `${person.name}-phone`)}
                            title="Copy phone number"
                            className="p-1 rounded-md text-purple-400 hover:text-white hover:bg-purple-800/60 transition-colors flex-shrink-0"
                          >
                            {copiedText === `${person.name}-phone` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quick Direct Actions */}
                    <div className="mt-5 pt-3 border-t border-purple-800/30 flex items-center gap-2">
                      <a
                        href={`mailto:${person.email}`}
                        className="flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-semibold text-center text-pink-200 bg-pink-950/40 hover:bg-pink-900/60 border border-pink-700/40 hover:border-pink-500/60 transition-all"
                      >
                        ✉ Mail
                      </a>
                      <a
                        href={`tel:${person.phone}`}
                        className="flex-1 py-1.5 px-2.5 rounded-lg text-[11px] font-semibold text-center text-amber-200 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-700/40 hover:border-amber-500/60 transition-all"
                      >
                        📞 Call
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Venue & Location and General Helpline Info */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/40 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">
                      Festival Venue
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">ABES Engineering College</h4>
                    <p className="text-xs text-gray-300 mt-1">19th KM Stone, NH-09, Ghaziabad, UP 201009</p>
                    <p className="text-[11px] text-purple-300/80 mt-0.5">
                      Near Crossing Republik / Electronic City Metro
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-800/40 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-400/10 border border-purple-400/20 text-purple-300 flex-shrink-0 mt-0.5">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">
                      General Fest Desk
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">Dharohar Central Helpdesk</h4>
                    <p className="text-xs text-gray-300 mt-1">Support available 9:00 AM – 8:00 PM IST</p>
                    <p className="text-xs text-purple-300 mt-0.5">
                      Email: <a href="mailto:fest@abes.ac.in" className="underline hover:text-amber-300">fest@abes.ac.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 sm:px-8 sm:py-4 bg-[#14082c] border-t border-purple-800/40 flex items-center justify-between text-xs text-purple-300/80 flex-shrink-0">
          <span>Dharohar '24 • ABES Engineering College</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-amber-300 hover:text-white bg-purple-900/40 hover:bg-purple-800/60 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
