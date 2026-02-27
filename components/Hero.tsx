
import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

// Telemetry/HUD floating elements for 3D depth
const FloatingTelemetry: React.FC = () => {
  const elements = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: 12 + Math.random() * 15,
    type: i % 3 === 0 ? 'hex' : i % 3 === 1 ? 'cross' : 'circle',
    val: (Math.random() * 0xFFFFFF << 0).toString(16).toUpperCase()
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute font-mono text-[9px] text-cyan-500/30 whitespace-nowrap flex items-center gap-1"
          style={{ left: `${el.x}%`, top: `${el.y}%` }}
          animate={{
            y: [0, -120, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {el.type === 'hex' && <span>0x{el.val}</span>}
          {el.type === 'cross' && <div className="w-2.5 h-[1px] bg-cyan-500/30 relative"><div className="absolute inset-0 rotate-90 bg-cyan-500/30"></div></div>}
          {el.type === 'circle' && <div className="w-1.5 h-1.5 rounded-full border border-cyan-500/30"></div>}
          <div className="h-[1px] w-6 bg-cyan-500/20"></div>
        </motion.div>
      ))}
    </div>
  );
};

const NeuralInfrastructure: React.FC = () => {
  const paths = useMemo(() => [
    { d: "M 0 100 L 200 100 L 250 150 L 250 400 L 400 550 L 600 550", opacity: 0.15, delay: 0 },
    { d: "M 1200 200 L 1000 200 L 950 250 L 950 500 L 800 650", opacity: 0.18, delay: 2 },
    { d: "M 400 0 L 400 150 L 550 300 L 850 300 L 900 350", opacity: 0.12, delay: 4 },
    { d: "M 0 800 L 150 800 L 200 750 L 200 600 L 350 450", opacity: 0.14, delay: 1 },
    { d: "M 1200 850 L 1050 850 L 1000 800 L 1000 600 L 850 450", opacity: 0.13, delay: 3.5 },
    { d: "M 100 100 L 100 150 L 50 200", opacity: 0.08, delay: 6 },
    { d: "M 1100 100 L 1100 150 L 1150 200", opacity: 0.08, delay: 7 },
  ], []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {paths.map((p, i) => (
          <path
            key={`static-${i}`}
            d={p.d}
            fill="none"
            stroke="rgba(34, 211, 238, 0.08)"
            strokeWidth="2"
          />
        ))}

        {paths.map((p, i) => (
          <React.Fragment key={`group-${i}`}>
            <motion.path
              d={p.d}
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="3"
              strokeDasharray="60, 500"
              initial={{ strokeDashoffset: 600 }}
              animate={{ strokeDashoffset: -600 }}
              transition={{
                duration: 8 + (i % 4) * 3,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              }}
              style={{ opacity: 0.45, filter: 'url(#strongGlow)' }}
            />
            
            <motion.circle
              r="2.5"
              fill="#22d3ee"
              style={{ opacity: 0.9, filter: 'drop-shadow(0 0 4px #22d3ee)' }}
            >
              <animateMotion
                dur={`${8 + (i % 4) * 3}s`}
                repeatCount="indefinite"
                path={p.d}
                begin={`${p.delay}s`}
              />
            </motion.circle>
          </React.Fragment>
        ))}

        {paths.map((p, i) => i % 2 === 0 && (
          <motion.path
            key={`glitch-layer-${i}`}
            d={p.d}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0, 0, 0.5, 0, 0.4, 0, 0, 0],
              x: [0, 2, -2, 4, 0, -3, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              times: [0, 0.85, 0.87, 0.89, 0.91, 0.95, 1],
              delay: i * 0.4
            }}
          />
        ))}
      </svg>
      
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/15 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/15 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3"></div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-32 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[#020617] z-0"></div>
      
      <motion.div 
        style={{ 
          opacity,
          scale,
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
        }} 
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 grid-pattern opacity-[0.08]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh] bg-[radial-gradient(circle_at_center,rgba(8,47,73,0.3)_0%,transparent_65%)]"></div>
        <NeuralInfrastructure />
        <FloatingTelemetry />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.95)_115%)]"></div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent pointer-events-none z-20"></div>

      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-[11px] font-bold tracking-[0.5em] text-cyan-400/80 uppercase"
        >
          Welcome to ArcVion — A place of infinite possibility
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 glass text-[11px] font-bold tracking-[0.4em] text-cyan-400 uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          <Zap size={12} className="fill-current animate-pulse" /> Unified Hardware Ecosystem
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-7xl md:text-[9rem] font-bold font-heading mb-10 tracking-tighter leading-[0.85] flex flex-col"
        >
          <span className="text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">ONE PLATFORM.</span>
          <span className="animate-gradient-text italic font-black">INFINITE MISSIONS.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Modular robotic and sensing systems that adapt instantly through <span className="text-white font-medium">interchangeable hardware modules.</span> Reconfigure in seconds, deploy for weeks.
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-[10px] tracking-[0.5em] font-black text-cyan-400 uppercase group-hover:text-white transition-colors">Scroll to deploy</span>
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full p-1 flex justify-center shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
