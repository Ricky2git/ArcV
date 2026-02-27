
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Magnet, Settings, Monitor, ShieldCheck } from 'lucide-react';

export const ModularConcept: React.FC = () => {
  const layers = [
    { title: "Power Infrastructure", desc: "Intelligent battery arrays with health telemetry.", icon: <Settings size={18} /> },
    { title: "Edge Compute", desc: "Dual Orin nodes for path planning.", icon: <Monitor size={18} /> },
    { title: "Mesh Link", desc: "Private mesh networking for zero-latency.", icon: <Magnet size={18} /> },
    { title: "Carbon Chassis", desc: "Aviation-grade composite frames.", icon: <Layers size={18} /> },
  ];

  return (
    <section id="platforms" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-[0.3em] uppercase text-[8px] mb-4">
                <ShieldCheck size={12} /> Engineering Standards
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-5 leading-[0.9] tracking-tighter">
                MODULARITY <span className="text-slate-600">IS</span><br />
                <span className="text-cyan-400 italic">THE STANDARD.</span>
              </h2>
              <p className="text-slate-400 text-sm mb-8 max-w-lg leading-relaxed">
                Shared infrastructure for rapid mission deployment. Stop rebuilding hardware, start hot-swapping intelligence.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {layers.map((layer, idx) => (
                <motion.div 
                  key={idx}
                  className="flex flex-col gap-2 p-4 rounded-xl glass border-white/5 hover:border-cyan-500/40 transition-all cursor-default group"
                >
                  <div className="w-8 h-8 flex-shrink-0 bg-slate-900 rounded-lg flex items-center justify-center text-cyan-400 group-hover:neon-glow-cyan transition-all">
                    {layer.icon}
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-white mb-0.5">{layer.title}</h4>
                    <p className="text-[10px] text-slate-500 leading-tight">{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-[400px] mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-[80px]"></div>
              
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
                {[4, 3, 2, 1].map((level) => (
                  <motion.div
                    key={level}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: level * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`w-full h-12 glass rounded-xl border-cyan-400/${level * 10} flex items-center justify-between px-6 relative overflow-hidden group`}
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 opacity-60"></div>
                    <div className="flex flex-col">
                      <span className="text-[7px] font-bold text-cyan-500/60 uppercase tracking-widest leading-none mb-1">Layer 0{level}</span>
                      <span className="text-sm font-black font-heading text-white italic tracking-tighter leading-none">
                        {level === 4 ? "PAYLOAD_LAYER" : level === 3 ? "COMPUTE_FABRIC" : level === 2 ? "POWER_BACKBONE" : "CORE_CHASSIS"}
                      </span>
                    </div>
                    <div className="text-[7px] font-mono text-cyan-500 group-hover:scale-105 transition-transform bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      SYS_L0{level}_ACTIVE
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
