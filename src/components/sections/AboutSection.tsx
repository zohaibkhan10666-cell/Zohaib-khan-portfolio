import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, GraduationCap, Sparkles, Terminal, CheckCircle2, Globe, Shield } from 'lucide-react';
import { InteractiveTerminal } from '../ui/InteractiveTerminal';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function AboutSection() {
  const statCards = [
    {
      icon: GraduationCap,
      label: 'Degree & Program',
      value: 'BS Computer Science',
      sub: 'University of Punjab (2024–2028)',
      color: 'text-cyan-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PORTFOLIO_DATA.personal.location,
      sub: 'Open to Remote & Hybrid',
      color: 'text-emerald-400',
    },
    {
      icon: Mail,
      label: 'Email Coordinates',
      value: PORTFOLIO_DATA.personal.email,
      sub: 'Direct Communications',
      color: 'text-purple-400',
    },
    {
      icon: Phone,
      label: 'Phone Contact',
      value: PORTFOLIO_DATA.personal.phone,
      sub: 'WhatsApp / Call',
      color: 'text-amber-400',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto z-10">
      {/* Section Heading */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <User className="w-3.5 h-3.5" />
          <span>// ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
          Get to know me <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">better 👋</span>
        </h2>
        <p className="text-sm font-sans text-slate-400 mt-2">
          Passionate developer, designer, and problem solver turning complex computing concepts into clean, functional applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio Narrative & Stats Grid */}
        <div className="lg:col-span-6 space-y-6">
          <div className="cyber-glass rounded-2xl p-6 sm:p-7 relative overflow-hidden">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <h3 className="text-base font-orbitron font-bold text-cyan-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              BACKGROUND & MISSION
            </h3>
            
            <p className="text-sm font-sans text-slate-300 leading-relaxed mb-4">
              I'm <strong>{PORTFOLIO_DATA.personal.name}</strong>, a Computer Science student at <strong>University of Punjab</strong> passionate about building beautiful, functional, and user-friendly applications.
            </p>
            <p className="text-sm font-sans text-slate-400 leading-relaxed mb-5">
              I enjoy turning ideas into real-world solutions through clean code and thoughtful design. With hands-on experience spanning frontend frameworks (React, Tailwind CSS, Three.js) to full-stack backends (Node.js, Express, MongoDB Atlas, REST APIs, Supabase), I focus on writing maintainable software with great performance.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-cyan-900/40 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean Code First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Responsive & Modern UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>REST & Database Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Quick Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {statCards.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#070d24]/80 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/50 transition-all"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-[#0a1435] border border-cyan-500/30">
                      <Icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{stat.label}</span>
                  </div>
                  <div className="font-mono font-semibold text-xs sm:text-sm text-slate-100 truncate">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-0.5 truncate">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Embedded Cyber Terminal */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
              DEVELOPER CLI CONSOLE
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              Try: 'help', 'bio', 'projects', 'journey'
            </span>
          </div>

          <InteractiveTerminal isModal={false} />
        </div>
      </div>
    </section>
  );
}
