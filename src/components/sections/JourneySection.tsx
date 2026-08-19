import { motion } from 'framer-motion';
import { Compass, GraduationCap, School, Milestone, Code2, Layers, Rocket, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export function JourneySection() {
  const education = PORTFOLIO_DATA.education;
  const journey = PORTFOLIO_DATA.journey;

  const getJourneyIcon = (index: number) => {
    switch (index) {
      case 0:
        return Compass;
      case 1:
        return Code2;
      case 2:
        return Layers;
      default:
        return Rocket;
    }
  };

  return (
    <section id="journey" className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto z-10">
      {/* Section Heading */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>// EDUCATION & JOURNEY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
          My Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Education</span>
        </h2>
        <p className="text-sm font-sans text-slate-400 mt-2">
          From a curious scientific mind to architecting modern web platforms and software systems.
        </p>
      </div>

      {/* Education Cards */}
      <div className="mb-14">
        <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <School className="w-4 h-4" />
          Academic Qualifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="cyber-glass rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-400/60 transition-all"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-[#091230] border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                  {edu.period}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-orbitron font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {edu.degree}
              </h4>
              <p className="text-xs font-mono text-emerald-400 font-semibold mt-0.5 mb-2">
                {edu.institution}
              </p>
              <p className="text-xs font-sans text-slate-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div>
        <h3 className="text-sm font-mono font-bold text-purple-400 uppercase tracking-wider mb-6 flex items-center gap-2">
          <Milestone className="w-4 h-4" />
          Key Milestones & Growth
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {journey.map((item, idx) => {
            const Icon = getJourneyIcon(idx);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-[#070d24]/90 border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-[#0a1435] border border-cyan-500/30 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0b1638] text-purple-300 border border-purple-500/30">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-sm font-orbitron font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-sans text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-cyan-900/30 text-[10px] font-mono text-cyan-500/70">
                  PHASE 0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
