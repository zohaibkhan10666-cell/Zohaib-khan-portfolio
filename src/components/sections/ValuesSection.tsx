import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles, UserCheck, GraduationCap, Code2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function ValuesSection() {
  const values = PORTFOLIO_DATA.values;

  const getValueIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Code2;
      case 1:
        return UserCheck;
      case 2:
        return GraduationCap;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="values" className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto z-10">
      {/* Section Heading */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>// WHAT I BELIEVE IN</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
          Values That <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">Drive My Work</span>
        </h2>
        <p className="text-sm font-sans text-slate-400 mt-2">
          Engineering principles and human values that shape every project I build.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((val, idx) => {
          const Icon = getValueIcon(idx);
          return (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="cyber-glass rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/60 transition-all flex flex-col justify-between"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 via-[#0a122e] to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-orbitron font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-cyan-900/30 text-[10px] font-mono text-cyan-500/60 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>CORE PILLAR 0{idx + 1}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
