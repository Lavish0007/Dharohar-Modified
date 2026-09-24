import React, { useRef, useEffect, useState } from 'react';

/**
 * Interactive Particle Canvas + Moving Gradient Background
 * - High-DPI canvas with light-colored balls and fine grains floating across the fest canvas.
 * - When the user moves the cursor, the balls detect proximity and actively move away from it.
 * - Includes smooth velocity damping, floating drift, and cursor-reactive gradient aura.
 */
export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });
  const [showAura, setShowAura] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset scale before scaling
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Mouse tracking state with repel radius
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      radius: 160, // Repel radius: balls smoothly flee from this proximity
    };

    const handlePointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      setCursorPos({ x: e.clientX, y: e.clientY });
      setShowAura(true);
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Luminous, light-colored palette for festive balls and stardust grains
    const colorPalette = [
      { r: 255, g: 255, b: 255 }, // Pure Ivory
      { r: 255, g: 236, b: 153 }, // Radiant Light Gold
      { r: 254, g: 240, b: 138 }, // Pale Gold
      { r: 250, g: 215, b: 90 },  // Warm Champagne Stardust
      { r: 255, g: 200, b: 240 }, // Soft Glowing Magenta Tint
      { r: 220, g: 245, b: 255 }, // Soft Pearl Ice Blue
    ];

    let particles = [];

    const initParticles = () => {
      // Density: around 110-150 on desktop, 60 on mobile
      const count = Math.min(160, Math.max(65, Math.floor((width * height) / 9000)));
      particles = [];

      for (let i = 0; i < count; i++) {
        const isBall = Math.random() < 0.38; // 38% larger glowing balls, 62% light grains
        const radius = isBall ? Math.random() * 2.2 + 2.5 : Math.random() * 1.3 + 1.2;
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,
          driftX: (Math.random() - 0.5) * 0.4,
          driftY: (Math.random() - 0.5) * 0.4 - 0.12, // Gentle organic upward float
          radius,
          isBall,
          color,
          baseAlpha: Math.random() * 0.4 + 0.45,
          pulseSpeed: Math.random() * 0.035 + 0.015,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initParticles();

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Cursor Repulsion: calculate distance between particle and cursor
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            // Outward repulsion: stronger when closer
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            const push = force * force * 11.5; // Responsive repulsion speed

            p.vx += Math.cos(angle) * push;
            p.vy += Math.sin(angle) * push;
          }
        }

        // 2. Physics & Friction Damping
        p.vx *= 0.92;
        p.vy *= 0.92;

        p.x += p.vx + p.driftX;
        p.y += p.vy + p.driftY;

        // 3. Screen Wrap Around
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // 4. Shimmer / Twinkle Alpha calculation
        const alpha = Math.min(
          1,
          Math.max(0.2, p.baseAlpha + Math.sin(frame * p.pulseSpeed + p.pulsePhase) * 0.22)
        );

        // 5. Draw Light-Colored Balls & Grains
        ctx.save();

        if (p.isBall) {
          // Dual-layer glowing light ball
          const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.8);
          glowGrad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.95})`);
          glowGrad.addColorStop(0.35, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.45})`);
          glowGrad.addColorStop(1, 'transparent');

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.8, 0, Math.PI * 2);
          ctx.fill();

          // Bright high-contrast center core
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha + 0.3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Fine light grain with glowing stardust shadow
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.85)`;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run once on mount

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Deep Royal Purple & Violet Radial Ambient Background Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-purple-900/30 via-violet-700/20 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-[450px] h-[350px] bg-purple-950/40 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[400px] bg-indigo-950/30 rounded-full blur-[130px] pointer-events-none" />

      {/* 2. Interactive Cursor-Reactive Moving Gradient Aura */}
      {showAura && (
        <div
          className="absolute pointer-events-none rounded-full blur-[110px] transition-transform duration-200 ease-out will-change-transform opacity-75"
          style={{
            width: '650px',
            height: '650px',
            left: `${cursorPos.x - 325}px`,
            top: `${cursorPos.y - 325}px`,
            background:
              'radial-gradient(circle, rgba(255, 0, 212, 0.18) 0%, rgba(124, 58, 237, 0.15) 35%, rgba(245, 195, 68, 0.08) 65%, transparent 80%)',
          }}
        />
      )}

      {/* 3. Subtle Central Gold Light Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/8 rounded-full blur-[100px] pointer-events-none animate-pulse-subtle" />

      {/* 4. High-Performance Canvas for Light-Colored Balls & Grain (Repelled by Cursor) */}
      <canvas
        ref={canvasRef}
        style={{ width: '100vw', height: '100vh' }}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}
