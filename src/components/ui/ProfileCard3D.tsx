import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Code2, Database, Globe, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

export function ProfileCard3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.6,
    });
  };

  const handleMouseEnter = () => {
    soundEngine.playHover();
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const mernStack = [
    { name: 'MongoDB Atlas', color: 'text-emerald-400', border: 'border-emerald-500/30' },
    { name: 'Express.js', color: 'text-slate-300', border: 'border-slate-500/30' },
    { name: 'React', color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { name: 'Node.js', color: 'text-green-400', border: 'border-green-500/30' },
  ];

  return (
    <div
      style={{ perspective: 1200 }}
      className="w-full max-w-md mx-auto"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
        className="relative rounded-2xl bg-gradient-to-b from-[#0e1630]/90 via-[#0a0f24]/95 to-[#050814]/95 border border-cyan-500/30 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.15)] backdrop-blur-xl overflow-hidden interactive-card cursor-pointer group"
      >
        {/* Holographic Sheen Layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(0, 240, 255, 0.25) 0%, rgba(139, 92, 246, 0.15) 35%, transparent 70%)`,
          }}
        />

        {/* HUD Corner Accents */}
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />

        {/* Header Telemetry */}
        <div className="flex items-center justify-between border-b border-cyan-900/50 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#00ff9d]" />
            <span className="text-[11px] font-mono text-emerald-300 font-semibold tracking-wider">
              {PORTFOLIO_DATA.personal.status}
            </span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400/70 border border-cyan-500/30 px-2 py-0.5 rounded bg-cyan-950/40">
            ZK-DEV
          </span>
        </div>

        {/* Avatar & Ident */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/30 via-purple-600/30 to-blue-900/40 border-2 border-cyan-400/60 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:border-cyan-300 transition-all">
              <div className="w-full h-full rounded-lg bg-[#070d1e] flex flex-col items-center justify-center text-cyan-400 font-orbitron font-extrabold text-2xl">
                <span>ZK</span>
                <span className="text-[8px] font-mono text-slate-400 tracking-tighter">MERN_DEV</span>
              </div>
            </div>
            {/* Status Beacon */}
            <div className="absolute -bottom-1 -right-1 bg-[#040714] rounded-full p-1 border border-cyan-500/40">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-orbitron font-bold text-slate-100 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </h3>
            <p className="text-xs font-mono text-cyan-400 font-medium tracking-wide">
              {PORTFOLIO_DATA.personal.roles.slice(0, 3).join(' • ')}
            </p>
            <p className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-cyan-400" />
              {PORTFOLIO_DATA.personal.location}
            </p>
          </div>
        </div>

        {/* MERN Stack Highlight Tags */}
        <div className="mb-5">
          <div className="text-[10px] font-mono text-slate-400 mb-2 flex items-center justify-between">
            <span>CORE MERN STACK</span>
            <Sparkles className="w-3 h-3 text-cyan-400 animate-spin-slow" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {mernStack.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#060b1b]/80 border ${tech.border} text-xs font-mono`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
                <span className={tech.color}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Telemetry Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-cyan-900/50 my-4 text-center">
          <div className="bg-[#050917]/70 p-2 rounded-lg border border-cyan-500/15">
            <div className="text-sm sm:text-base font-orbitron font-bold text-cyan-300">
              MERN
            </div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">
              Full Stack
            </div>
          </div>
          <div className="bg-[#050917]/70 p-2 rounded-lg border border-cyan-500/15">
            <div className="text-sm sm:text-base font-orbitron font-bold text-emerald-300">
              6+ Real
            </div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">
              Projects
            </div>
          </div>
          <div className="bg-[#050917]/70 p-2 rounded-lg border border-cyan-500/15">
            <div className="text-sm sm:text-base font-orbitron font-bold text-purple-300">
              BS CS
            </div>
            <div className="text-[9px] font-mono text-slate-400 uppercase tracking-tight">
              PU (2024-28)
            </div>
          </div>
        </div>

        {/* Footer Quick Action */}
        <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/80 pt-1">
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE GYRO: ON</span>
          </span>
          <span className="text-slate-400 hover:text-cyan-300 transition-colors">
            {PORTFOLIO_DATA.personal.handle}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
