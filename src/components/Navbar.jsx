import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Ticket, Calendar, Image as ImageIcon, Info, HeartHandshake, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenPassModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', target: '#hero', icon: null },
    { name: 'About Fest', target: '#about', icon: Info },
    { name: 'Schedule \'24', target: '#schedule', icon: Calendar },
    { name: 'Picture Gallery', target: '#gallery', icon: ImageIcon },
    { name: 'Passes', target: '#passes', icon: Ticket },
    { name: 'Our Sponsors', target: '#sponsors', icon: HeartHandshake },
    { name: 'Contact', target: '#contact', icon: PhoneCall, isContact: true },
  ];

  // Scroll spy to detect active section as user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sections = ['contact', 'sponsors', 'passes', 'gallery', 'schedule', 'about', 'hero'];
      for (const sectionId of sections) {
        if (sectionId === 'hero') {
          setActiveSection('hero');
          break;
        }
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is within upper half of viewport
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (target) => {
    setMobileMenuOpen(false);
    if (!target || target === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(target.replace('#', ''));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full flex-shrink-0 transition-all duration-300">
      {/* Top Glass Navigation Bar */}
      <nav
        className={`h-16 md:h-20 px-4 sm:px-8 lg:px-12 flex items-center justify-between backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f0624]/95 border-b border-purple-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'bg-[#110728]/80 border-b border-purple-900/30 shadow-[0_4px_25px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Brand Logo & Title with smooth scroll to top */}
        <div
          onClick={() => handleLinkClick('#hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 border border-amber-400/40 group-hover:border-amber-400 transition-all duration-300 shadow-[0_0_15px_rgba(245,195,68,0.2)] group-hover:shadow-[0_0_20px_rgba(245,195,68,0.5)]">
            <img
              src="/dharohar-logo.png"
              alt="Dharohar Fest Logo"
              className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = "/Dharohar/Dharohar_logo_cropped-removebg-preview.png";
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
              DHAROHAR
              <span className="text-[10px] sm:text-xs font-sans font-semibold px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 text-amber-300 border border-amber-500/40">
                2024
              </span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-purple-200/70 uppercase font-sans">
              ABES EC Cultural Fest
            </span>
          </div>
        </div>

        {/* Desktop Navbar Links with Scroll Spy Highlight */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const sectionKey = link.target.replace('#', '');
            const isActive = activeSection === sectionKey;
            const isContact = link.isContact;

            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.target)}
                className={`nav-link text-xs xl:text-sm font-medium tracking-wide px-3 xl:px-3.5 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  isContact
                    ? isActive
                      ? 'text-pink-300 font-bold bg-pink-950/40 border border-pink-500/50 shadow-[0_0_15px_rgba(255,0,212,0.3)]'
                      : 'text-pink-200 hover:text-pink-300 hover:bg-pink-950/30 border border-pink-700/30'
                    : isActive
                    ? 'text-amber-300 font-semibold active'
                    : 'text-gray-200 hover:text-amber-300 hover:bg-purple-950/40'
                }`}
              >
                {isContact && <PhoneCall className="w-3.5 h-3.5 text-pink-400" />}
                <span>{link.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right CTA Button (Get Passes) + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* VIP / Fest Ticket Action Button */}
          <button
            onClick={() => handleLinkClick('#passes')}
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            {/* Shimmering Gold Border */}
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-200 to-purple-500 rounded-full animate-gold-shimmer bg-[length:200%_auto]" />
            <span className="relative flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-amber-200 bg-[#160b33] rounded-full group-hover:bg-[#200f49] transition-all duration-300">
              <Ticket className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>Get Passes</span>
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
            </span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-purple-200 hover:text-amber-300 rounded-lg hover:bg-purple-900/30 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu with Smooth Scroll */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full backdrop-blur-xl bg-[#110728]/95 border-b border-purple-800/40 p-5 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const sectionKey = link.target.replace('#', '');
              const isActive = activeSection === sectionKey;
              const isContact = link.isContact;

              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.target)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    isContact
                      ? isActive
                        ? 'bg-pink-950/60 text-pink-300 font-bold border-l-4 border-pink-500'
                        : 'text-pink-300 bg-pink-950/30 hover:bg-pink-900/40'
                      : isActive
                      ? 'bg-purple-900/50 text-amber-300 font-semibold border-l-4 border-amber-400'
                      : 'text-gray-200 hover:bg-purple-900/30 hover:text-amber-300'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isContact ? 'text-pink-400' : 'text-amber-400'}`} />}
                  <span>{link.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
