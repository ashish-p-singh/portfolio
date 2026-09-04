import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GlassCard } from './ui/GlassCard';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900 text-slate-300 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Let's Build Something
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            I'm always open to connecting, discussing technology, collaborating on projects, and exploring opportunities to learn and build.
          </p>
          <div className="w-12 h-1 bg-cyan-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <GlassCard className="p-5 border-slate-800 bg-slate-900/80 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </GlassCard>

            {/* LinkedIn Card */}
            <GlassCard className="p-5 border-slate-800 bg-slate-900/80 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">LinkedIn</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                    www.linkedin.com/in/ashish-pr-singh
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* GitHub Card */}
            <GlassCard className="p-5 border-slate-800 bg-slate-900/80 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">GitHub</span>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    github.com/ashish-p-singh
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Mobile Card */}
            <GlassCard className="p-5 border-slate-800 bg-slate-900/80 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Mobile</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="block text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </GlassCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 border-slate-800 bg-slate-900/80 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">
                Send a Message
              </h3>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" /> Message sent successfully! I will reply to your email soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Ashish, I'd like to connect..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
