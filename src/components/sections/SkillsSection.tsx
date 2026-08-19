import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Layout, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = PORTFOLIO_DATA.skillCategories;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code2;
      case 1:
        return Layout;
      case 2:
        return Server;
      case 3:
        return Database;
      case 4:
        return Cpu;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto z-10">
      {/* Section Heading */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>// TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Technologies</span>
        </h2>
        <p className="text-sm font-sans text-slate-400 mt-2">
          Comprehensive full-stack toolbelt honed through academic foundations and production implementations.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat, idx) => {
          const Icon = getCategoryIcon(idx);
          const isActive = activeCategory === idx;
          return (
            <button
              key={cat.category}
              onClick={() => {
                soundEngine.playClick();
                setActiveCategory(idx);
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className={`relative px-4 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                  : 'bg-[#070d24]/80 border border-cyan-500/15 text-slate-400 hover:text-slate-100 hover:border-cyan-500/35'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
              <span>{cat.category}</span>
              {isActive && (
                <motion.div
                  layoutId="activeSkillUnderline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {categories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="cyber-glass rounded-xl p-5 hover:border-cyan-400/60 transition-all group relative overflow-hidden"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div className="flex items-start justify-between mb-2.5">
                <div>
                  <h4 className="text-sm sm:text-base font-orbitron font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                  {skill.description && (
                    <p className="text-xs font-sans text-slate-400 mt-1 leading-relaxed">
                      {skill.description}
                    </p>
                  )}
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded shrink-0 ml-2">
                  {skill.level}%
                </span>
              </div>

              {/* Energy Meter */}
              <div className="w-full h-1.5 bg-[#060a1a] rounded-full overflow-hidden border border-cyan-500/20 mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.7, delay: index * 0.06, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 rounded-full shadow-[0_0_8px_#00f0ff]"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
