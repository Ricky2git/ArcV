import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers, Radio, Wind, Zap } from 'lucide-react';

const products = [
  {
    name: "MORPH",
    sub: "MODULAR GROUND ROVER",
    desc: "Autonomous all-terrain chassis with hot-swappable sensor brackets.",
    icon: <Cpu className="text-cyan-400" />,
    img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "ZARVEX",
    sub: "AERIAL ARCHITECTURE",
    desc: "Long-endurance UAV systems with rapid mission reconfiguration payload bays.",
    icon: <Wind className="text-emerald-400" />,
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "PRANA",
    sub: "INDUSTRIAL DEPLOYMENT",
    desc: "Ruggedized modular base station for extreme edge intelligence operations.",
    icon: <Radio className="text-purple-400" />,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "STATIC S1",
    sub: "UNIVERSAL SENSOR HUB",
    desc: "Fixed infrastructure sensing with auto-discovery module networking.",
    icon: <Layers className="text-amber-400" />,
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
  },
];

const ProductCard: React.FC<{ product: typeof products[0] }> = ({ product }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.05 }}
      className="flex-shrink-0 w-[420px] h-[300px] glass rounded-[28px] overflow-hidden group border-white/5 relative mx-6 cursor-pointer transition-shadow hover:shadow-[0_0_60px_rgba(34,211,238,0.2)]"
    >
      <img 
        src={product.img} 
        alt={product.name} 
        className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-40 transition-all duration-1000 scale-105 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
      
      <div className="absolute top-8 left-8 flex items-center gap-4" style={{ transform: "translateZ(40px)" }}>
        <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-cyan-500/20">
          {product.icon}
        </div>
        <div>
          <div className="text-[9px] font-bold text-cyan-400 tracking-[0.3em] mb-1 uppercase opacity-80">
            {product.sub}
          </div>
          <div className="text-2xl font-black tracking-tighter text-white leading-none">
            {product.name}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between" style={{ transform: "translateZ(30px)" }}>
        <div className="max-w-[75%]">
          <p className="text-slate-400 text-xs mb-5 leading-relaxed line-clamp-2 font-light">
            {product.desc}
          </p>
          <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-300 bg-white/5 border border-white/10 px-5 py-2 rounded-full hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all uppercase tracking-[0.1em]">
            LEARN MORE 
            <ArrowUpRight size={14} />
          </div>
        </div>
        <div className="text-[8px] font-mono text-cyan-500/20 uppercase tracking-widest">
          S_ID_{product.name}
        </div>
      </div>

      <div className="absolute inset-0 border-[1px] border-white/0 group-hover:border-cyan-500/40 transition-all rounded-[28px] pointer-events-none"></div>
    </motion.div>
  );
};

export const ProductShowcase: React.FC = () => {
  // Duplicate once for seamless loop
  const list = [...products, ...products];

  return (
    <section className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between relative z-20">
        <div>
          <div className="flex items-center gap-2 text-cyan-500 text-[9px] font-bold tracking-[0.5em] mb-5 uppercase">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></div>
            Foundation Infrastructure
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-3 uppercase">
            HARDWARE <span className="text-cyan-400 italic">FABRIC.</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-md font-light leading-relaxed">
            The core kinetic layer of the ArcVion ecosystem. Unified, modular, and built for extreme mission persistence.
          </p>
        </div>
        
        <div className="hidden md:flex flex-col items-end gap-3 text-right">
          <div className="flex items-center gap-3 text-cyan-500/60 text-[10px] font-mono bg-cyan-500/5 px-5 py-2.5 rounded-full border border-cyan-500/10">
            <Zap size={12} className="text-cyan-400" />
            LIVE_KINETIC_SYNC: ACTIVE
          </div>
          <span className="text-[8px] font-mono text-slate-600 tracking-[0.3em] uppercase">
            Architecture v4.0.1 // Node_Alpha
          </span>
        </div>
      </div>

      <div className="relative py-12 overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {list.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </motion.div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto px-6 flex justify-center opacity-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>
    </section>
  );
};
