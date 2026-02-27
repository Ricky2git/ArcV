
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export const WhyArcVion: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass p-10 rounded-[40px] border-red-500/10 opacity-60">
            <div className="flex items-center gap-2 mb-8 text-red-400 font-bold tracking-widest uppercase text-sm">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              Traditional Systems
            </div>
            <h3 className="text-3xl font-heading font-bold mb-8">Rigid & Costly.</h3>
            <ul className="space-y-6">
              {[
                "Fixed application design",
                "Expensive maintenance cycles",
                "High R&D for every task",
                "Hardware silos / no reuse"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-400">
                  <X size={20} className="text-red-500/50" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-10 rounded-[40px] border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-2xl">
            <div className="flex items-center gap-2 mb-8 text-emerald-400 font-bold tracking-widest uppercase text-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              ArcVion Platform
            </div>
            <h3 className="text-4xl font-heading font-bold mb-8">Adaptive & Scalable.</h3>
            <ul className="space-y-6">
              {[
                "Hot-swappable sensor modules",
                "90% reduction in deployment cost",
                "AI-driven auto-configuration",
                "Shared infrastructure across teams"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium">
                  <div className="bg-emerald-500/20 p-1 rounded-full">
                    <Check size={20} className="text-emerald-400" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
            <button className="mt-12 w-full py-4 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              UPGRADE YOUR FLEET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
