import { ArrowUp, Radio, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

export function FooterSection() {
  const scrollToTop = () => {
    soundEngine.playWarp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cyan-900/40 bg-[#02050f]/90 py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Status */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-extrabold text-lg text-cyan-400">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-xs font-mono text-cyan-500/60">// 2026</span>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Built with React 18, TypeScript, Three.js, Tailwind CSS & Lenis Scroll.
          </p>
        </div>

        {/* Telemetry Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff9d]" />
          <span>ALL REPOSITORIES DEPLOYED // ZERO VULNERABILITIES</span>
        </div>

        {/* Back to Top Warp Thruster */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => soundEngine.playHover()}
          className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/20 text-xs font-mono font-semibold transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
        >
          <span>WARP TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
