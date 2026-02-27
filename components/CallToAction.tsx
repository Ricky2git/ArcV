
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[60px] border-white/10 text-center relative overflow-hidden">
          {/* Animated Background Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse"></div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Zap className="mx-auto text-cyan-400 mb-8 w-12 h-12" />
            <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">
              STOP REBUILDING.<br />
              <span className="text-cyan-400">START REUSING.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              The modular future is ready for deployment. Partner with ArcVion to redefine your robotic fleet with unparalleled flexibility and intelligence.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] group">
                REQUEST MISSION BRIEFING <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="px-10 py-5 glass border-white/20 text-white font-extrabold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                DOWNLOAD SPECS v3.1
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
