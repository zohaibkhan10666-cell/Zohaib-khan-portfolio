import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Activity, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { soundEngine } from '@/utils/audioSynth';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const categories = ['All', 'Full Stack MERN', 'Frontend & UI', 'Enterprise & Cloud', 'Tools & Utilities'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto z-10">
      {/* Section Heading */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>// SELECTED WORK & PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white tracking-wide">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">Deployments</span>
        </h2>
        <p className="text-sm font-sans text-slate-400 mt-2">
          Production web platforms, full-stack MERN systems, and modern interactive applications built with precision.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundEngine.playClick();
              setActiveFilter(cat);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider transition-all ${
              activeFilter === cat
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                : 'bg-[#070d24]/80 border border-cyan-500/15 text-slate-400 hover:text-slate-100 hover:border-cyan-500/35'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="cyber-glass rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-cyan-400/60 transition-all duration-300 relative"
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div>
              {/* Project Image Showcase */}
              <div className="relative h-52 w-full overflow-hidden border-b border-cyan-900/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" fill="%23040714"><rect width="400" height="200"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2300f0ff" font-family="monospace" font-size="14">' + project.title + '</text></svg>');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-[#040714]/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-[#040714]/85 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Quick GitHub / Live Links */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundEngine.playClick()}
                      onMouseEnter={() => soundEngine.playHover()}
                      title="View GitHub Repository"
                      className="p-2 rounded-lg bg-[#040714]/80 border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors backdrop-blur-md"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundEngine.playClick()}
                      onMouseEnter={() => soundEngine.playHover()}
                      title="Launch Live Demo"
                      className="p-2 rounded-lg bg-[#040714]/80 border border-cyan-500/30 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors backdrop-blur-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Title inside card */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-base font-orbitron font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-5 space-y-3">
                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Architecture Specs */}
                <div className="pt-2 border-t border-cyan-900/30">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Activity className="w-3 h-3 text-cyan-400" />
                    Highlights:
                  </div>
                  <ul className="space-y-1 text-[11px] font-mono text-slate-400">
                    {project.architectureHighlights.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 truncate">
                        <span className="text-cyan-400 shrink-0">▹</span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tags & Action Footer */}
            <div className="p-5 pt-0 border-t border-cyan-900/30 mt-2">
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/40 border border-cyan-500/20 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    onMouseEnter={() => soundEngine.playHover()}
                    className="flex-1 py-2 rounded-lg bg-[#070d24] border border-cyan-500/25 hover:border-cyan-400 text-cyan-300 font-mono text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>CODE</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    onMouseEnter={() => soundEngine.playHover()}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/30 border border-cyan-400/50 hover:border-cyan-400 text-cyan-200 font-mono text-xs font-semibold text-center hover:shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
