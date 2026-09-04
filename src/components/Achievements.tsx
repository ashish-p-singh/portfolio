import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { Trophy, Code, Flame, Layers } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-cyan-400" />,
  Flame: <Flame className="w-6 h-6 text-amber-400" />,
  Layers: <Layers className="w-6 h-6 text-indigo-400" />
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5 text-cyan-400" />
            <span>Problem Solving & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Achievements & <span className="text-cyan-400">Problem Solving</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard className="p-7 h-full border-slate-800 bg-slate-900/80 hover:border-slate-700 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                      {ICON_MAP[item.iconName]}
                    </div>
                    <span className="text-2xl font-extrabold font-heading text-cyan-400">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                  Verified Milestone
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
