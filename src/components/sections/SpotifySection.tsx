import { motion } from 'framer-motion';
import { Headphones, Radio, Flame, Sparkles, Disc3, Disc, Music, Activity } from 'lucide-react';
import { SpotifyWidget } from '../ui/SpotifyWidget';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function SpotifySection() {
  const spotifyData = PORTFOLIO_DATA.spotify;

  return (
    <section id="spotify" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <Headphones className="w-3.5 h-3.5 text-emerald-400" />
          <span>// SUBSYSTEM 05: CYBERDECK AUDIO & FOCUS TELEMETRY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-wide">
          LIVE SPOTIFY <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">CYBERDECK</span>
        </h2>
        <p className="text-sm sm:text-base font-sans text-slate-400 max-w-2xl mt-3">
          Real-time audio telemetry broadcasting current coding sessions, synthwave frequencies, and peak deep-focus playlists.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Cyberdeck Player */}
        <div className="lg:col-span-7">
          <SpotifyWidget />
        </div>

        {/* Right Column: Audio & Productivity Metrics */}
        <div className="lg:col-span-5 space-y-4">
          <div className="cyber-glass rounded-2xl p-6 relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <h3 className="text-base font-orbitron font-bold text-slate-100 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              CODING VIBE DIAGNOSTICS
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#060a1e] border border-cyan-500/15">
                <span className="text-slate-400">MONTHLY CODING AUDIO:</span>
                <span className="text-cyan-300 font-bold">{spotifyData.stats.monthlyMinutes} MINS</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#060a1e] border border-cyan-500/15">
                <span className="text-slate-400">PRIMARY GENRE:</span>
                <span className="text-emerald-300 font-bold">{spotifyData.stats.topGenre}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#060a1e] border border-cyan-500/15">
                <span className="text-slate-400">CODING FREQUENCY:</span>
                <span className="text-purple-300 font-bold">{spotifyData.stats.codingVibe}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#060a1e] border border-cyan-500/15">
                <span className="text-slate-400">AUDIO ENCODING:</span>
                <span className="text-amber-300 font-bold">{spotifyData.stats.audioQuality}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-cyan-900/40 text-[11px] font-sans text-slate-400">
              Music fuels my workflow: high-tempo synthwave and darksynth for backend concurrency design, ambient chillstep for 3D shaders and mathematical modeling.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
