import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Education
          </h2>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        {/* Clean Timeline */}
        <div className="max-w-4xl mx-auto space-y-6 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-800" />

          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-0 sm:pl-16"
            >
              {/* Node Circle */}
              <div className="hidden sm:flex absolute left-4 top-6 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-400 items-center justify-center z-10">
                <GraduationCap className="w-4 h-4" />
              </div>

              <GlassCard className="p-7 border-slate-800 bg-slate-900/80 hover:border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-cyan-400 font-mono">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> {edu.location}
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-left sm:text-right shrink-0">
                    <span className="block text-[10px] uppercase font-bold text-slate-500">Grade / Score</span>
                    <span className="text-base font-extrabold text-cyan-400 font-heading">{edu.grade}</span>
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
