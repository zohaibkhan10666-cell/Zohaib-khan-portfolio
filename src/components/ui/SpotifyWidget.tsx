import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Radio, Music, Volume2, ExternalLink, Disc3, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, SpotifyTrack } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

export function SpotifyWidget() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(45);
  const tracks = PORTFOLIO_DATA.spotify.topTracks;
  const currentTrack: SpotifyTrack = tracks[currentTrackIndex] || PORTFOLIO_DATA.spotify.currentlyPlaying;

  // Fake playback progress ticker
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    soundEngine.playClick();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    soundEngine.playClick();
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const prevTrack = () => {
    soundEngine.playClick();
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#0e1635]/90 via-[#0a0f26]/95 to-[#050818]/95 border border-cyan-500/30 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(0,240,255,0.15)] backdrop-blur-xl relative overflow-hidden">
      {/* HUD Corner Accents */}
      <div className="hud-corner-tl" />
      <div className="hud-corner-tr" />
      <div className="hud-corner-bl" />
      <div className="hud-corner-br" />

      {/* Cyberdeck Header */}
      <div className="flex items-center justify-between border-b border-cyan-900/40 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff9d]" />
          <span className="text-[11px] font-mono font-bold text-emerald-300 tracking-wider flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-emerald-400" />
            SPOTIFY REAL-TIME TELEMETRY
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" />
          {isPlaying ? 'ACTIVE STREAM' : 'PAUSED'}
        </span>
      </div>

      {/* Track Details & Visualizer */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Album Artwork with Spinning Ring */}
        <div className="relative group shrink-0">
          <div className="w-24 h-24 rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.25)] relative">
            <img
              src={currentTrack.albumArt}
              alt={currentTrack.album}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isPlaying ? 'scale-105' : 'scale-100 opacity-80'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Disc3 className="w-8 h-8 text-cyan-400/80 animate-spin-slow" />
              </div>
            )}
          </div>
        </div>

        {/* Track Metadata & Equalizer Bars */}
        <div className="flex-1 w-full">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-base font-orbitron font-bold text-slate-100 hover:text-cyan-300 transition-colors">
                {currentTrack.title}
              </h4>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">
                {currentTrack.artist}
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                {currentTrack.album} • {currentTrack.genre}
              </p>
            </div>

            {/* Live Animated Equalizer Spectrum Bars */}
            <div className="flex items-end gap-1 h-7 px-2">
              <span className={`w-1 bg-cyan-400 rounded-full ${isPlaying ? 'animate-eq-1' : 'h-1'}`} />
              <span className={`w-1 bg-emerald-400 rounded-full ${isPlaying ? 'animate-eq-2' : 'h-2'}`} />
              <span className={`w-1 bg-purple-400 rounded-full ${isPlaying ? 'animate-eq-3' : 'h-1'}`} />
              <span className={`w-1 bg-cyan-300 rounded-full ${isPlaying ? 'animate-eq-4' : 'h-3'}`} />
              <span className={`w-1 bg-emerald-300 rounded-full ${isPlaying ? 'animate-eq-5' : 'h-1.5'}`} />
            </div>
          </div>

          {/* Scrubber Bar */}
          <div className="mt-3">
            <div className="w-full h-1.5 bg-[#070e24] rounded-full overflow-hidden border border-cyan-500/20">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_10px_#00f0ff]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
              <span>{Math.floor((progress / 100) * 3)}:{String(Math.floor(((progress / 100) * 212) % 60)).padStart(2, '0')}</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Controls */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-cyan-900/40">
        <div className="flex items-center gap-2">
          <button
            onClick={prevTrack}
            onMouseEnter={() => soundEngine.playHover()}
            className="p-2 rounded-lg bg-[#070c20] border border-cyan-500/25 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
          >
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={togglePlay}
            onMouseEnter={() => soundEngine.playHover()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 border border-cyan-400 text-cyan-300 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
          </button>
          <button
            onClick={nextTrack}
            onMouseEnter={() => soundEngine.playHover()}
            className="p-2 rounded-lg bg-[#070c20] border border-cyan-500/25 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Spotify Stats */}
        <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <Music className="w-3.5 h-3.5 text-cyan-400" />
            BPM: <strong className="text-cyan-300">{currentTrack.bpm}</strong>
          </span>
          <span className="border-l border-cyan-900/60 pl-3 flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
            FLAC 24-bit
          </span>
        </div>
      </div>
    </div>
  );
}
