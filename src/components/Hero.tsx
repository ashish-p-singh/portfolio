import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Terminal, ArrowUpRight, Code, Cpu, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-36 pb-24 flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Subtle Glowing Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for Software Engineering Internships</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-cyan-400">Ashish Pratap Singh</span>.
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-300 font-sans border-l-2 border-cyan-500 pl-4 py-0.5">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Short Intro */}
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.intro}
            </p>

            {/* Primary CTAs & Secondary Link */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-2 cursor-pointer"
              >
                Let's Connect <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Profile Photo Card & Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md">
              
              {/* Profile Card Frame */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/40 via-slate-800 to-indigo-500/40 shadow-2xl backdrop-blur-xl border border-slate-800/80">
                <div className="rounded-[22px] bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-7 flex flex-col items-center text-center space-y-5 overflow-hidden relative">
                  
                  {/* Subtle background radial pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

                  {/* High-Quality Clean Photo Frame */}
                  <div className="relative group w-full max-w-[300px] aspect-[4/5] rounded-2xl p-1 bg-gradient-to-br from-cyan-400/60 to-indigo-500/60 shadow-xl overflow-hidden">
                    <div className="w-full h-full rounded-[12px] bg-slate-950 overflow-hidden relative">
                      <img
                        src="/profile.jpg"
                        alt="Ashish Pratap Singh"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                        style={{ objectPosition: 'center 20%' }}
                      />
                      {/* Gradient overlay at bottom to blend with UI theme */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent pointer-events-none" />
                      
                      {/* Subtitle overlay inside card */}
                      <div className="absolute bottom-3 left-3 right-3 text-left z-10">
                        <span className="px-2.5 py-0.5 rounded-md bg-cyan-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                          B.Tech CSE Student
                        </span>
                        <p className="text-xs font-bold text-white mt-1">
                          Lovely Professional University
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Code Snippet Footer inside Card */}
                  <div className="w-full rounded-xl bg-slate-950 border border-slate-800/80 p-3 text-left font-mono text-[11px] space-y-1 text-slate-300">
                    <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-1 mb-1">
                      <span className="flex items-center gap-1"><Terminal className="w-3 h-3 text-cyan-400" /> dev_profile.cpp</span>
                      <span className="text-[10px] text-cyan-400 font-semibold">CGPA: 9.0</span>
                    </div>
                    <div><span className="text-purple-400">string</span> stack = <span className="text-emerald-300">"React, Node, C++"</span>;</div>
                    <div><span className="text-purple-400">int</span> dsaSolved = <span className="text-cyan-400">80</span>; <span className="text-slate-500">// 27d streak 🔥</span></div>
                  </div>

                </div>
              </div>

              {/* Floating Technology Badges */}
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 shadow-xl flex items-center gap-1.5"
              >
                <Code className="w-3.5 h-3.5 text-cyan-400" /> React
              </motion.span>

              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-purple-400 shadow-xl flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" /> C++
              </motion.span>

              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400 shadow-xl flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> JavaScript
              </motion.span>

              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400 shadow-xl flex items-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Node.js & Python
              </motion.span>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
