import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  GraduationCap,
  FolderGit2,
  Cpu,
  HeartHandshake,
  Headphones,
  Mail,
  Volume2,
  VolumeX,
  FileDown,
  Phone,
  Compass,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

interface SideNavProps {
  onOpenResume: () => void;
}

export function SideNav({ onOpenResume }: SideNavProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'journey', 'projects', 'skills', 'values', 'spotify', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundEngine.setMuted(nextMuted);
    if (!nextMuted) {
      soundEngine.playClick();
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home', color: 'text-sky-400', activeColor: 'bg-sky-500/15 border-sky-400 text-sky-200', hoverBg: 'hover:bg-sky-500/10' },
    { id: 'about', label: 'About', icon: User, href: '#about', color: 'text-purple-400', activeColor: 'bg-purple-500/15 border-purple-400 text-purple-200', hoverBg: 'hover:bg-purple-500/10' },
    { id: 'journey', label: 'Journey & Edu', icon: Compass, href: '#journey', color: 'text-amber-400', activeColor: 'bg-amber-500/15 border-amber-400 text-amber-200', hoverBg: 'hover:bg-amber-500/10' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects', color: 'text-emerald-400', activeColor: 'bg-emerald-500/15 border-emerald-400 text-emerald-200', hoverBg: 'hover:bg-emerald-500/10' },
    { id: 'skills', label: 'Skills', icon: Cpu, href: '#skills', color: 'text-cyan-400', activeColor: 'bg-cyan-500/15 border-cyan-400 text-cyan-200', hoverBg: 'hover:bg-cyan-500/10' },
    { id: 'values', label: 'Values', icon: HeartHandshake, href: '#values', color: 'text-rose-400', activeColor: 'bg-rose-500/15 border-rose-400 text-rose-200', hoverBg: 'hover:bg-rose-500/10' },
    { id: 'spotify', label: 'Cyberdeck', icon: Headphones, href: '#spotify', color: 'text-green-400', activeColor: 'bg-green-500/15 border-green-400 text-green-200', hoverBg: 'hover:bg-green-500/10' },
    { id: 'contact', label: 'Contact Me', icon: Mail, href: '#contact', color: 'text-indigo-400', activeColor: 'bg-indigo-500/15 border-indigo-400 text-indigo-200', hoverBg: 'hover:bg-indigo-500/10' },
  ];

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 bg-[#050817]/95 border-r border-cyan-500/15 backdrop-blur-2xl flex-col justify-between p-5 z-40 shadow-[4px_0_30px_rgba(0,0,0,0.7)]">
      {/* Top Brand Mark */}
      <div>
        <a
          href="#home"
          onClick={() => soundEngine.playClick()}
          onMouseEnter={() => soundEngine.playHover()}
          className="flex items-center gap-3 p-2 rounded-xl group hover:bg-cyan-500/10 transition-colors"
        >
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 via-[#0a122e] to-purple-600/30 border border-cyan-400/50 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <span className="font-orbitron font-extrabold text-base text-cyan-400 tracking-wider">ZK</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff9d]" />
          </div>
          <div>
            <div className="font-orbitron font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </div>
            <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available to hire</span>
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="mt-5 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => soundEngine.playClick()}
                onMouseEnter={() => soundEngine.playHover()}
                className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 group ${
                  isActive
                    ? `${item.activeColor} border font-semibold shadow-[0_0_15px_rgba(0,240,255,0.15)]`
                    : `text-slate-400 hover:text-slate-100 ${item.hoverBg} border border-transparent`
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSideNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-cyan-400 rounded-r-full shadow-[0_0_8px_#00f0ff]"
                  />
                )}
                                <Icon className={`w-4 h-4 transition-all duration-200 group-hover:scale-110 ${item.color}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Connect & Controls */}
      <div className="space-y-4 pt-4 border-t border-cyan-900/40">
        {/* Quick Resume Download Button */}
        <button
          onClick={() => {
            soundEngine.playClick();
            onOpenResume();
          }}
          onMouseEnter={() => soundEngine.playHover()}
          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-500/20 via-cyan-400/20 to-purple-600/30 border border-cyan-400/50 hover:border-cyan-400 text-cyan-300 font-mono text-xs font-semibold tracking-wider hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2 group"
        >
          <FileDown className="w-4 h-4 text-cyan-400 group-hover:translate-y-[1px] transition-transform" />
          <span>DOWNLOAD CV</span>
        </button>

        {/* Social Connect Matrix with distinct brand hover colors */}
        <div>
          <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-wider">
            Let's Connect
          </div>
          <div className="flex items-center justify-between gap-1.5">
            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              title="GitHub Profile"
              className="p-2 rounded-lg bg-[#080d24] border border-cyan-500/20 text-slate-400 hover:text-white hover:border-[#333] hover:bg-[#161b22] transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              title="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#080d24] border border-cyan-500/20 text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-200"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href={PORTFOLIO_DATA.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              title="WhatsApp Direct Message"
              className="p-2 rounded-lg bg-[#080d24] border border-cyan-500/20 text-slate-400 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              title="Send Direct Email"
              className="p-2 rounded-lg bg-[#080d24] border border-cyan-500/20 text-slate-400 hover:text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => soundEngine.playHover()}
              title={isMuted ? "Unmute Audio Synthesizer" : "Mute Audio Synthesizer"}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                isMuted
                  ? 'bg-red-950/40 border-red-500/30 text-red-400'
                  : 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:border-cyan-400'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
