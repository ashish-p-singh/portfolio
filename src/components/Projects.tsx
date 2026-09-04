import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { FolderGit, Github, Calendar, CheckCircle2, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <FolderGit className="w-3.5 h-3.5 text-cyan-400" />
            <span>Developer Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Hands-on web development projects showcasing DOM manipulation, asynchronous REST APIs, and full-stack system concepts.
          </p>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        {/* Projects Stack / Cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-8 border-slate-800 bg-slate-900/80 hover:border-slate-700 space-y-6">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-cyan-400 font-mono">
                        PROJECT 0{idx + 1}
                      </span>
                      {project.statusLabel && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold">
                          {project.statusLabel}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {project.date}
                    </span>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
                      >
                        <Github className="w-4 h-4" /> GitHub Repository
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" /> {project.statusLabel ? 'Planned Features' : 'Key Features'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.keyFeatures.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-3 flex-wrap">
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-slate-400" /> Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono font-medium text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
