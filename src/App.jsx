import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCenter from './components/HeroCenter';
import WaveBackground from './components/WaveBackground';
import ParticlesBackground from './components/ParticlesBackground';
import AboutSection from './components/AboutSection';
import ScheduleSection from './components/ScheduleSection';
import SponsorsGallerySection from './components/SponsorsGallerySection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import FestModal from './components/FestModal';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  // Audio ambience synthesizer using Web Audio API for celebratory cultural chime/hum
  useEffect(() => {
    let audioCtx = null;
    let osc = null;
    let gainNode = null;

    if (!isAudioMuted) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        osc = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();

        // Warm drone chord (Indian Tanpura / ambient harmonic frequency ~ 136.1 Hz OM freq)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(136.1, audioCtx.currentTime);

        gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 1.5);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
      } catch (err) {
        console.warn('AudioContext not allowed without gesture', err);
      }
    }

    return () => {
      if (osc) {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      }
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, [isAudioMuted]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#090414] text-white flex flex-col justify-between select-none">
      {/* 1. Persistent Fixed Background Canvas: Light-colored balls & grains (Repelled by Cursor) */}
      <ParticlesBackground />

      {/* 2. Sticky Glassmorphic Navigation Bar with Smooth Scroll & Contact Highlight */}
      <Navbar onOpenPassModal={(passName) => setActiveModal('tickets')} />

      {/* 3. Main Continuous Scrolling Flow */}
      <main className="relative z-10 flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
          <HeroCenter />
          {/* Transition wave separating Hero from About Us */}
          <div className="w-full mt-auto">
            <WaveBackground />
          </div>
        </div>

        {/* About Fest Section */}
        <AboutSection />

        {/* Festival Schedule '24 Section */}
        <ScheduleSection />

        {/* Picture Gallery, Passes & Sponsors Section */}
        <SponsorsGallerySection
          onOpenPassModal={(passName) => setActiveModal('tickets')}
        />

        {/* Event Coordinators & Contact Section with Cursor Moving Gradient */}
        <ContactSection />
      </main>

      {/* 4. Complete Footer */}
      <FooterSection />

      {/* 5. Minimal Ambient Corner Controls (Fixed in bottom corners) */}
      <div className="fixed bottom-4 left-4 sm:left-6 z-40 flex items-center gap-2 pointer-events-auto">
        <button
          onClick={() => setIsAudioMuted(!isAudioMuted)}
          title={isAudioMuted ? 'Turn on festive ambient drone' : 'Mute ambience'}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider text-purple-200/80 hover:text-amber-300 bg-[#160a35]/85 hover:bg-[#200f49] border border-purple-800/50 hover:border-amber-400/50 backdrop-blur-md transition-all duration-300 shadow-xl"
        >
          {isAudioMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Ambience Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-amber-300 hidden sm:inline">Ambience On</span>
            </>
          )}
        </button>
      </div>

      <div className="fixed bottom-4 right-4 sm:right-6 z-40 hidden sm:flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] text-amber-300/80 bg-purple-950/60 border border-purple-800/50 backdrop-blur-md shadow-xl">
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          <span>Edition XVII • 2024</span>
        </div>
      </div>

      {/* 6. Passes / Ticket Claim Dialog Modal (Optional overlay) */}
      <FestModal
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
