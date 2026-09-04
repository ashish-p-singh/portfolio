import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { GraduationCap, Code2, Flame, UserCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Background & Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 space-y-6 border-slate-800 bg-slate-900/60">
              <p className="text-base text-slate-300 leading-relaxed">
                Ashish Pratap Singh is currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, with a current CGPA of 9.0.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                He is developing skills across programming, web development, databases, and problem solving, with hands-on projects involving JavaScript, React, Node.js, REST APIs, MongoDB, and modern frontend technologies.
              </p>
            </GlassCard>
          </motion.div>

          {/* Compact Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {/* Card 1: Education */}
            <GlassCard className="p-6 border-l-4 border-l-cyan-400 border-slate-800 bg-slate-900/80">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Academic Standing</span>
                  <h4 className="text-lg font-bold text-white">B.Tech CSE</h4>
                  <p className="text-xs text-slate-300 font-medium">Lovely Professional University</p>
                  <p className="text-xs font-bold text-cyan-400 mt-1">CGPA: 9.0 / 10.0</p>
                </div>
              </div>
            </GlassCard>

            {/* Card 2: DSA */}
            <GlassCard className="p-6 border-l-4 border-l-indigo-400 border-slate-800 bg-slate-900/80">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Coding Practice</span>
                  <h4 className="text-lg font-bold text-white">80+ Problems</h4>
                  <p className="text-xs text-slate-300 font-medium">Programming & DSA Solved</p>
                </div>
              </div>
            </GlassCard>

            {/* Card 3: Codeforces */}
            <GlassCard className="p-6 border-l-4 border-l-amber-400 border-slate-800 bg-slate-900/80">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Competitive Coding</span>
                  <h4 className="text-lg font-bold text-white">27-Day Streak 🔥</h4>
                  <p className="text-xs text-slate-300 font-medium">Codeforces Problem-Solving Streak</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
