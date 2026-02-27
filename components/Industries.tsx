
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Factory, Building, Trees, HardHat } from 'lucide-react';

export const Industries: React.FC = () => {
  // Fix: Store the component itself instead of an instantiated JSX element to allow passing props directly
  const industries = [
    { name: "Defense", icon: Shield, color: "border-cyan-500/20" },
    { name: "Infrastructure", icon: Building, color: "border-blue-500/20" },
    { name: "Manufacturing", icon: Factory, color: "border-emerald-500/20" },
    { name: "Environment", icon: Trees, color: "border-teal-500/20" },
    { name: "Energy", icon: HardHat, color: "border-amber-500/20" },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center">BUILT FOR <span className="text-cyan-400">IMPACT.</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className={`glass p-8 rounded-3xl ${industry.color} hover:bg-white/5 transition-all cursor-pointer flex flex-col items-center justify-center text-center group`}
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {/* Fix: Directly render the component with props instead of using React.cloneElement */}
                  <Icon size={32} />
                </div>
                <h4 className="font-heading font-bold tracking-wider">{industry.name}</h4>
                <div className="mt-4 w-8 h-[2px] bg-cyan-500/20 group-hover:w-full transition-all"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
