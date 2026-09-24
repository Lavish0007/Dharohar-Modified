import React from 'react';
import { Image as ImageIcon, HeartHandshake, Ticket, Sparkles, Check, ExternalLink } from 'lucide-react';

export default function SponsorsGallerySection({ onOpenPassModal }) {
  const galleryItems = [
    { title: 'Campus Carnival Ferris Wheel', src: '/home_page_images/Ferris wheel.jpg', category: 'Attractions' },
    { title: 'Classical & Folk Dance Arena', src: '/home_page_images/Dance.jpeg', category: 'Dance' },
    { title: 'Rock & Indie Band Face-Off', src: '/home_page_images/Singing.jpg', category: 'Music' },
    { title: 'Live Headliner Stage Concert', src: '/home_page_images/performance.jpg', category: 'Concert' },
    { title: 'Creative Innovation Workshop', src: '/home_page_images/Workshop.jpg', category: 'Workshop' },
    { title: 'Illusion Spectacle & Magic', src: '/home_page_images/Magic show.jpg', category: 'Theatrics' },
  ];

  const sponsors = [
    { name: 'boAt Lifestyle', logo: '/boat-logo.svg', tag: 'Official Audio Partner' },
    { name: 'Spotify India', logo: 'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg', tag: 'Streaming Partner' },
    { name: 'Thums Up', logo: '/thums-up-logo.svg', tag: 'Beverage Partner' },
    { name: 'Zomato', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png', tag: 'Food Partner' },
    { name: 'Paytm', logo: 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png', tag: 'Payments Partner' },
    { name: 'Hostinger', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Hostinger_Logo.png', tag: 'Web Hosting Partner' },
  ];

  const passes = [
    {
      name: 'College Student',
      title: 'General Pass',
      price: '₹199',
      features: ['Access to Day 1 & Day 2 events', 'Entry to all competition arenas', 'Food flea market vouchers'],
      popular: false,
    },
    {
      name: 'Full 3-Day Fest',
      title: 'All-Access Pass',
      price: '₹499',
      features: ['Complete 3-day full campus access', 'Guaranteed Star Night concert entry', 'Exclusive Dharohar fest wristband', '₹100 carnival ride voucher'],
      popular: true,
    },
    {
      name: 'VIP Experience',
      title: 'VIP Golden Pass',
      price: '₹999',
      features: ['Front-row VIP concert lounge', 'Backstage artist interaction zone', 'Complimentary hospitality snack box', 'Fast-track entry at all gates'],
      popular: false,
    },
  ];

  return (
    <div className="relative z-10 w-full space-y-24 py-10 px-4 sm:px-8 lg:px-16">
      {/* 1. PICTURE GALLERY SECTION */}
      <section id="gallery" className="max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-amber-400/40 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300 mb-3 shadow-[0_0_15px_rgba(245,195,68,0.15)]">
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Memories & Moments</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Picture <span className="gold-text-gradient">Gallery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Snapshots of the electrifying spirit, stellar headliners, and campus memories that define Dharohar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-purple-950/40 border border-purple-800/40 shadow-lg hover:shadow-[0_0_25px_rgba(245,195,68,0.25)] transition-all duration-500"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/home_page_images/Ferris wheel.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0422] via-[#0e0422]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-950/80 text-amber-300 border border-purple-700/60 backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:-translate-y-1 transition-transform">
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                  {item.title}
                </h4>
                <p className="text-xs text-purple-200/80 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Edition XVII • Campus Arena
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FESTIVAL PASSES / TICKETS SECTION */}
      <section id="passes" className="max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-amber-400/40 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300 mb-3 shadow-[0_0_15px_rgba(245,195,68,0.15)]">
            <Ticket className="w-3.5 h-3.5 text-amber-400" />
            <span>Registration & Passes</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Festival <span className="gold-text-gradient">Passes '24</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            Choose your festival pass to access workshops, competitive arenas, and the Star Celebrity Night.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passes.map((pass, i) => (
            <div
              key={i}
              className={`relative p-6 sm:p-8 rounded-3xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                pass.popular
                  ? 'bg-gradient-to-b from-[#2a1352] to-[#150a30] border-2 border-amber-400 shadow-[0_0_35px_rgba(245,195,68,0.3)]'
                  : 'bg-[#14082c]/85 border border-purple-800/50 hover:border-amber-400/40 shadow-xl'
              }`}
            >
              {pass.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-purple-950 text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-purple-300">
                  {pass.name}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-amber-200 mt-1">
                  {pass.title}
                </h3>
                <div className="text-3xl sm:text-4xl font-extrabold text-white my-4 font-cinzel">
                  {pass.price}
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-purple-200/90 my-6">
                  {pass.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <div className="p-0.5 rounded-full bg-amber-400/20 text-amber-400">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenPassModal && onOpenPassModal(pass.title)}
                className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                  pass.popular
                    ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-[#13072b] hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,195,68,0.4)]'
                    : 'bg-purple-900/60 hover:bg-purple-800 text-amber-200 border border-purple-700/50'
                }`}
              >
                Claim {pass.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR SPONSORS SECTION */}
      <section id="sponsors" className="max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-amber-400/40 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-300 mb-3 shadow-[0_0_15px_rgba(245,195,68,0.15)]">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Brand Partners</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Proud <span className="gold-text-gradient">Sponsors</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
            We extend our deepest gratitude to our visionary brand partners who power the scale and spectacle of Dharohar 2024.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {sponsors.map((s, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#14082c]/80 border border-purple-800/40 hover:border-amber-400/50 hover:bg-[#1a0a38]/90 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center text-center shadow-md hover:-translate-y-1"
            >
              <div className="h-16 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-12 max-w-[130px] object-contain filter drop-shadow brightness-110"
                />
              </div>
              <span className="font-bold text-sm sm:text-base text-white group-hover:text-amber-200 transition-colors">
                {s.name}
              </span>
              <span className="text-[11px] text-amber-300/80 mt-0.5 font-medium">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
