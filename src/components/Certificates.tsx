import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between border-slate-800 bg-slate-900/80 hover:border-slate-700 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-mono font-bold text-[10px] uppercase border border-cyan-500/20">
                      {cert.issuer}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400">
                    Platform: <span className="text-slate-200 font-semibold">{cert.platform}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {cert.date}
                  </span>
                  <span className="text-cyan-400 font-semibold text-[11px]">
                    Verified
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
