import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Shield, Sparkles, Globe, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const triggerDownload = () => {
    soundEngine.playSuccess();
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8b5cf6', '#00ff9d', '#ffffff'],
    });

    const link = document.createElement('a');
    link.href = PORTFOLIO_DATA.personal.resumeUrl;
    link.download = 'Zohaib_Khan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#070b1c] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0a1128] border-b border-cyan-500/25">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-orbitron font-bold text-slate-100 flex items-center gap-2">
                  CURRICULUM VITAE // {PORTFOLIO_DATA.personal.name.toUpperCase()}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80">
                  DEVELOPER • DESIGNER • PROBLEM SOLVER
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={triggerDownload}
                onMouseEnter={() => soundEngine.playHover()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/30 to-purple-600/30 border border-cyan-400 text-cyan-300 font-mono text-xs font-semibold hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF</span>
              </button>
              <button
                onClick={() => {
                  soundEngine.playClick();
                  onClose();
                }}
                className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Preview Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 text-sm font-sans cyber-grid">
            {/* Header info */}
            <div className="border-b border-cyan-900/50 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-orbitron font-extrabold text-cyan-300">
                    {PORTFOLIO_DATA.personal.name}
                  </h1>
                  <p className="text-sm font-mono text-emerald-400 font-semibold mt-1">
                    {PORTFOLIO_DATA.personal.roles.join(' • ')}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                  <div>Email: {PORTFOLIO_DATA.personal.email}</div>
                  <div>Phone: {PORTFOLIO_DATA.personal.phone}</div>
                  <div>Location: {PORTFOLIO_DATA.personal.location}</div>
                  <div>GitHub: {PORTFOLIO_DATA.personal.github}</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-300 leading-relaxed font-sans">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Academic Background
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#090e24]/80 border border-cyan-500/15">
                    <div className="flex items-center justify-between font-bold text-slate-100">
                      <span>{edu.degree}</span>
                      <span className="text-[11px] font-mono text-cyan-400">{edu.period}</span>
                    </div>
                    <div className="text-emerald-400 font-mono text-xs mt-0.5">{edu.institution}</div>
                    <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Skills */}
            <div>
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Technical Skills & Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PORTFOLIO_DATA.skillCategories.slice(0, 4).map((cat) => (
                  <div key={cat.category} className="p-3.5 rounded-lg bg-[#0a1024]/80 border border-cyan-500/20">
                    <span className="font-bold text-cyan-300">{cat.category}: </span>
                    <span className="text-slate-300">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Highlight */}
            <div>
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Selected Production Projects
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {PORTFOLIO_DATA.projects.map((p) => (
                  <div key={p.id} className="p-3.5 rounded-lg bg-[#090e24]/80 border border-cyan-500/15">
                    <h5 className="font-bold text-slate-100">{p.title}</h5>
                    <p className="text-[11px] text-slate-400 mt-1">{p.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] font-mono text-cyan-300">
                      {p.tags.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
