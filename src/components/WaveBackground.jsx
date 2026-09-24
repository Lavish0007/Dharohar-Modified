import React from 'react';

/**
 * Responsive Multi-Layered SVG Wave Background
 * Recreates the original 3-layer wave animation from style.css
 * using modern responsive SVG paths with gradient fills and gold crest accent.
 */
export default function WaveBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10 leading-none select-none">
      {/* Decorative Gold Light Haze along the wave boundary */}
      <div className="absolute bottom-16 md:bottom-28 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-24 bg-gradient-to-t from-amber-500/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      {/* Responsive SVG Container */}
      <div className="relative w-full h-28 sm:h-36 md:h-48 lg:h-56">
        {/* Layer 1: Back Wave (Deep Indigo Violet) */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full opacity-40 animate-wave-drift-3"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4c1d95" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#2e1065" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1e1145" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGrad1)"
            d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,208C840,203,960,149,1080,138.7C1200,128,1320,160,1440,181.3C1560,203,1680,213,1800,197.3C1920,181,2040,139,2160,133.3C2280,128,2400,160,2520,181.3C2640,203,2760,213,2820,218.7L2880,224L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Layer 2: Middle Wave (Vibrant Royal Purple with Gold-tinged highlights) */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full opacity-65 animate-wave-drift-2"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b0764" />
              <stop offset="35%" stopColor="#581c87" />
              <stop offset="70%" stopColor="#431407" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2e1065" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGrad2)"
            d="M0,96L60,117.3C120,139,240,181,360,197.3C480,213,600,203,720,170.7C840,139,960,85,1080,85.3C1200,85,1320,139,1440,165.3C1560,192,1680,192,1800,170.7C1920,149,2040,107,2160,106.7C2280,107,2400,149,2520,170.7C2640,192,2760,192,2820,192L2880,192L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Layer 3: Foreground Wave (Deepest Regal Plum & Dark Midnight Navy) with Gold Glowing Crest */}
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-full opacity-90 animate-wave-drift-1"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#240b47" />
              <stop offset="40%" stopColor="#170932" />
              <stop offset="100%" stopColor="#090414" />
            </linearGradient>
            <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#ffd700" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#fef08a" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Main filled body */}
          <path
            fill="url(#waveGrad3)"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1440,154.7C1536,149,1632,171,1728,181.3C1824,192,1920,192,2016,181.3C2112,171,2208,149,2304,149.3C2400,149,2496,171,2592,181.3C2688,192,2784,192,2832,192L2880,192L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1440,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />

          {/* Luminous Gold Crest Line */}
          <path
            fill="none"
            stroke="url(#crestGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1440,154.7C1536,149,1632,171,1728,181.3C1824,192,1920,192,2016,181.3C2112,171,2208,149,2304,149.3C2400,149,2496,171,2592,181.3C2688,192,2784,192,2832,192L2880,192"
          />
        </svg>
      </div>

      {/* Bottom baseline grounding gradient */}
      <div className="w-full h-3 md:h-5 bg-gradient-to-t from-[#06030d] to-transparent" />
    </div>
  );
}
