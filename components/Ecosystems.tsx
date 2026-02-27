
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Wind, Anchor, ChevronRight } from 'lucide-react';

export const Ecosystems: React.FC = () => {
  const ecosystems = [
    {
      id: 'ground',
      title: 'Ground: MORPH',
      desc: 'All-terrain modular rovers for inspection, mapping, and heavy cargo.',
      icon: <Truck size={24} />,
      color: 'from-cyan-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1518314916301-724f0c8ad671?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'aerial',
      title: 'Aerial: ZARVEX',
      desc: 'High-endurance UAV systems with rapid module swapping for aerial intelligence.',
      icon: <Wind size={24} />,
      color: 'from-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'static',
      title: 'Static: SENSORIA',
      desc: 'Fixed infrastructure sensors that auto-configure for long-term monitoring.',
      icon: <Anchor size={24} />,
      color: 'from-purple-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="ecosystems" className="py-32 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">THREE ECOSYSTEMS.</h2>
          <p className="text-slate-400 text-lg">One unified hardware architecture.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {ecosystems.map((eco) => (
            <motion.div
              key={eco.id}
              whileHover={{ y: -10 }}
              className="group relative h-[600px] rounded-3xl overflow-hidden glass border-white/5"
            >
              <img 
                src={eco.image} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700" 
                alt={eco.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${eco.color} flex items-center justify-center mb-6 shadow-xl`}>
                  {eco.icon}
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4 text-white uppercase tracking-tight">{eco.title}</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">{eco.desc}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-cyan-400 tracking-widest uppercase hover:text-white transition-colors">
                  EXPLORE {eco.id} ARCHITECTURE <ChevronRight size={16} />
                </button>
              </div>
              
              {/* HUD Elements overlay */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity">
                SYS_CHECK: OK<br />
                SIGNAL: 100%<br />
                LATENCY: 0.02ms
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
