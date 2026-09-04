import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowOnHover = true,
  onClick
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={glowOnHover ? { y: -3, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
