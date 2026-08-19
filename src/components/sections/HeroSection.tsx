import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Radio, Zap, Sparkles, ChevronRight, Code2, Globe, Cpu, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Scene3D } from '../canvas/Scene3D';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [warpSpeed, setWarpSpeed] = useState(false);
  const [throttle, setThrottle] = useState(1);

  const roles = PORTFOLIO_DATA.personal.roles;

  // Typewriter effect for rotating roles
  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentFullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === currentFullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const toggleWarp = () => {
    soundEngine.playWarp();
    setWarpSpeed((prev) => !prev);
    setThrottle((prev) => (prev === 1 ? 2.5 : 1));
  };

  const handleAvatarClick = () => {
    soundEngine.playSuccess();
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#00f0ff', '#00ff9d', '#8b5cf6', '#ffffff', '#f59e0b'],
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 lg:pt-14 pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Background 3D Spaceship & Hyperloop Canvas */}
      <Scene3D warpSpeed={warpSpeed} throttle={throttle} />

      {/* Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040714]/40 via-transparent to-[#040714] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 horizon-grid opacity-25 pointer-events-none z-0" />

      {/* Main Grid Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Introduction & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow Welcome Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-5 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
          >
            <span className="text-base animate-bounce">👋</span>
            <span className="font-semibold tracking-wide">Welcome to my world</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-orbitron font-extrabold text-white tracking-tight leading-tight"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 text-glow-cyan">
              {PORTFOLIO_DATA.personal.name},
            </span>
          </motion.h1>

          {/* Role Tags Typewriter Strip */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mt-3 mb-4 font-mono text-base sm:text-xl text-cyan-300 font-medium"
          >
            <span className="text-slate-400 text-sm">Role:</span>
            <span className="text-cyan-300 border-b border-cyan-400/60 pb-0.5 min-w-[240px]">
              {displayedText}
              <span className="animate-pulse text-emerald-400 font-bold ml-0.5">_</span>
            </span>
          </motion.div>

          {/* Bio Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base font-sans text-slate-300 max-w-xl leading-relaxed mb-8"
          >
            {PORTFOLIO_DATA.personal.tagline} {PORTFOLIO_DATA.personal.bio}
          </motion.p>

          {/* Call to Actions Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
          >
            {/* Explore My Work Button */}
            <a
              href="#projects"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-[#040714] font-orbitron font-bold text-xs sm:text-sm tracking-wider hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundEngine.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-5 py-3.5 rounded-xl bg-[#080f26]/90 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </button>

            {/* Contact Transmission CTA */}
            <a
              href="#contact"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-4 py-3.5 rounded-xl bg-transparent border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 font-mono text-xs sm:text-sm font-medium tracking-wider transition-all flex items-center gap-1.5"
            >
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Contact</span>
            </a>

            {/* Warp Throttle Boost */}
            <button
              onClick={toggleWarp}
              onMouseEnter={() => soundEngine.playHover()}
              title="Engage 3D Warp Overdrive"
              className={`p-3.5 rounded-xl border font-mono text-xs font-semibold transition-all flex items-center gap-1.5 ${
                warpSpeed
                  ? 'bg-purple-950/90 border-purple-400 text-purple-200 shadow-[0_0_20px_rgba(139,92,246,0.5)] animate-pulse'
                  : 'bg-cyan-950/30 border-cyan-500/30 text-cyan-400 hover:border-cyan-400'
              }`}
            >
              <Zap className={`w-4 h-4 ${warpSpeed ? 'fill-purple-300 text-purple-300' : 'text-cyan-400'}`} />
              <span className="hidden sm:inline">{warpSpeed ? 'WARP: 250%' : 'WARP'}</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Cosmic Avatar Stage & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]"
        >
          {/* Cosmic Glow Rings */}
          <div className="absolute w-80 h-80 rounded-full border border-cyan-500/25 animate-spin-slow pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full border border-purple-500/20 animate-reverse-spin pointer-events-none" />
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Central Holo Avatar Card */}
          <button
            onClick={handleAvatarClick}
            onMouseEnter={() => soundEngine.playHover()}
            className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-b from-[#0e1635]/90 via-[#0a0f28]/95 to-[#050819]/95 border-2 border-cyan-400/50 p-5 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col items-center justify-center text-center backdrop-blur-xl group hover:border-cyan-300 hover:shadow-[0_0_60px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Glowing Avatar Emblem / Photo */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-cyan-400/60 p-1 mb-4 shadow-[0_0_30px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform duration-300 bg-[#070e24]">
              <img
                src={PORTFOLIO_DATA.personal.heroImage}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full rounded-xl object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full rounded-xl bg-gradient-to-br from-cyan-500/30 via-indigo-900/40 to-purple-600/30 flex items-center justify-center font-orbitron font-black text-4xl text-cyan-300';
                    fallback.textContent = 'ZK';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>

            <div className="font-orbitron font-bold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </div>
            <div className="text-xs font-mono text-cyan-400 mt-0.5">
              {PORTFOLIO_DATA.personal.degreeMajor}
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-1.5">
              <Globe className="w-3 h-3 text-cyan-400" />
              {PORTFOLIO_DATA.personal.location}
            </div>
            <div className="mt-2 text-[10px] font-mono text-emerald-400/70 opacity-0 group-hover:opacity-100 transition-opacity">
              Click for celebration!
            </div>
          </button>

          {/* Floating Badge Top */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-2 sm:-right-4 bg-[#070d24]/90 border border-cyan-500/40 rounded-xl px-3.5 py-2 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-md flex items-center gap-2 max-w-[220px]"
          >
            <span className="text-base">🚀</span>
            <span className="text-[11px] leading-tight text-slate-200">
              Crafting ideas into <strong>impactful solutions</strong>.
            </span>
          </motion.div>

          {/* Floating Badge Bottom */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -left-2 sm:-left-4 bg-[#070d24]/90 border border-emerald-500/40 rounded-xl px-3.5 py-2 text-xs font-mono text-emerald-300 shadow-[0_0_20px_rgba(0,255,157,0.2)] backdrop-blur-md max-w-[240px]"
          >
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>CURRENTLY EXPLORING</span>
            </div>
            <div className="text-[11px] text-slate-300 font-sans mt-0.5 leading-tight">
              {PORTFOLIO_DATA.personal.currentlyExploring}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Downward Nudge */}
      <a
        href="#about"
        onClick={() => soundEngine.playClick()}
        onMouseEnter={() => soundEngine.playHover()}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cyan-400/60 hover:text-cyan-300 font-mono text-[10px] tracking-widest transition-colors z-10"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
      </a>
    </section>
  );
}
