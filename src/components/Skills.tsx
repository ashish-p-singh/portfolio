import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { Code, Layout, Database, Brain, CheckCircle2, Wrench } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Brain: <Brain className="w-5 h-5 text-amber-400" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard className="p-7 h-full border-slate-800 bg-slate-900/70 hover:border-slate-700 space-y-6">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {ICON_MAP[category.iconName]}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills / Cards */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map(skill => (
                    <div
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-200 flex items-center gap-2 transition-all hover:bg-slate-800 cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
