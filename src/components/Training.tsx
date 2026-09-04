import React from 'react';
import { motion } from 'framer-motion';
import { TRAINING } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { ShieldCheck, Calendar, MapPin, Users, CheckCircle2, Award } from 'lucide-react';

export const Training: React.FC = () => {
  return (
    <section id="training" className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Community Outreach & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Training & <span className="text-cyan-400">Community Impact</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 border-l-4 border-l-cyan-400 border-slate-800 bg-slate-900/80 space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <span className="px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-extrabold text-xs uppercase tracking-wider border border-cyan-500/20">
                    Community Project
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-2">
                    {TRAINING.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    {TRAINING.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1 font-mono">
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {TRAINING.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {TRAINING.location}
                  </span>
                </div>
              </div>

              {/* Highlights Pill Row */}
              <div className="flex flex-wrap gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 items-center justify-around text-center">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white">36 Participants</span>
                    <span className="text-[11px] text-slate-400">Community Outreach</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white">Cybersecurity Awareness</span>
                    <span className="text-[11px] text-slate-400">Scam & Digital Safety</span>
                  </div>
                </div>
              </div>

              {/* Bullet points */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Key Responsibilities & Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TRAINING.description.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </GlassCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
