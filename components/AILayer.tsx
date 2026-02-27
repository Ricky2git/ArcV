
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Radio, Database, Cpu } from 'lucide-react';

export const AILayer: React.FC = () => {
  return (
    <section id="engineering" className="py-32 relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="p-3 bg-white/5 rounded-2xl mb-6 border border-white/10">
            <BrainCircuit className="text-cyan-400 w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">INTELLIGENT BY DEFAULT.</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            AI isn't the hero—it's the glue. Our firmware layer automatically recognizes new modules, optimizes power distribution, and handles low-level pathing without manual input.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: 'AUTO-CONFIG', icon: <Cpu />, desc: 'Plug and play hardware modules.' },
            { label: 'EDGE INTELLIGENCE', icon: <BrainCircuit />, desc: 'On-device neural processing.' },
            { label: 'SWARM COMM', icon: <Radio />, desc: 'Sub-millisecond mesh sync.' },
            { label: 'DATA PERSISTENCE', icon: <Database />, desc: 'Encrypted black-box logging.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-8 rounded-3xl border-white/5 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:neon-glow-cyan transition-all">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">{item.label}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
