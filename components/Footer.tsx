
import React from 'react';
import { Cpu, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                <Cpu size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tighter">ARC<span className="text-cyan-400">VION</span></span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              Architecting the future of modular hardware. One platform. Infinite missions. Built by engineers, for the missions that matter.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400">Core Architecture</a></li>
              <li><a href="#" className="hover:text-cyan-400">Module Registry</a></li>
              <li><a href="#" className="hover:text-cyan-400">Ecosystem: Morph</a></li>
              <li><a href="#" className="hover:text-cyan-400">Ecosystem: Zarvex</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400">Mission Terms</a></li>
              <li><a href="#" className="hover:text-cyan-400">ITAR Compliance</a></li>
              <li><a href="#" className="hover:text-cyan-400">Security Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-600">
          <span>&copy; 2024 ARCVION INC. ALL SYSTEMS OPERATIONAL.</span>
          <span>ESTABLISHED AT COORD 37.7749&deg; N, 122.4194&deg; W</span>
        </div>
      </div>
    </footer>
  );
};
