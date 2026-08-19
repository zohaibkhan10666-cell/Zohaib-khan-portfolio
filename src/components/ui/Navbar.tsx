import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, FileDown, Compass, FolderGit2, Cpu, HeartHandshake, User, Mail, Home } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'journey', 'projects', 'skills', 'values', 'spotify', 'contact'];
      const scrollPos = window.scrollY + 200;

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

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home, color: 'text-sky-400' },
    { label: 'About', href: '#about', id: 'about', icon: User, color: 'text-purple-400' },
    { label: 'Journey & Edu', href: '#journey', id: 'journey', icon: Compass, color: 'text-amber-400' },
    { label: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2, color: 'text-emerald-400' },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Cpu, color: 'text-cyan-400' },
    { label: 'Values', href: '#values', id: 'values', icon: HeartHandshake, color: 'text-rose-400' },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail, color: 'text-indigo-400' },
  ];

  return (
    <header
      className={`lg:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#040714]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'py-4 bg-[#040714]/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Callsign / Logo */}
        <a
          href="#home"
          onClick={() => soundEngine.playClick()}
          onMouseEnter={() => soundEngine.playHover()}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-all">
            <span className="font-orbitron font-extrabold text-sm text-cyan-400">ZK</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff9d]" />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[10px] font-mono text-emerald-400">
              ● Available
            </span>
          </div>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => soundEngine.playHover()}
            title={isMuted ? 'Unmute Audio Synthesizer' : 'Mute Audio Synthesizer'}
            className={`p-2 rounded-lg border transition-all duration-200 ${
              isMuted
                ? 'bg-red-950/30 border-red-500/30 text-red-400'
                : 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300 hover:border-cyan-400'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Resume CTA */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenResume();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="px-3.5 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all duration-200"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV</span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-[#0a1128] border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="bg-[#040714]/98 border-b border-cyan-500/25 px-5 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => {
                      soundEngine.playClick();
                      setIsMobileMenuOpen(false);
                    }}
                    onMouseEnter={() => soundEngine.playHover()}
                    className={`py-2.5 px-3.5 rounded-xl text-xs font-mono tracking-wider flex items-center gap-2.5 transition-all duration-200 ${
                      isActive
                        ? 'bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                        : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? link.color : 'text-slate-400'}`} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Social Row */}
            <div className="mt-4 pt-3 border-t border-cyan-900/40">
              <div className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-wider">
                Let's Connect
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="p-2 rounded-lg bg-[#080d24] border border-cyan-500/20 text-slate-400 hover:text-white hover:border-[#333] hover:bg-[#161b22] transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="p-2 rounded-lg bg-[#080d24] border border-cyan-500/20 text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  onClick={() => soundEngine.playClick()}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="p-2 rounded-lg bg-[#080d24] border border-cyan-500/20 text-slate-400 hover:text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
