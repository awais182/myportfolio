import React from 'react';
import { motion } from 'framer-motion';

const ResearchSection: React.FC = () => {
  return (
    <section id="research-detail" className="py-24 sm:py-32 bg-white overflow-hidden relative">
      {/* Decorative Branding Line */}
      <div className="absolute left-0 top-0 w-full h-[1px] bg-neutral-100" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: The Protocol Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-neutral-900 rounded-[3rem] text-white shadow-[0_50px_100px_rgba(128,0,0,0.15)] relative overflow-hidden group"
          >
            {/* Background Icon Detail */}
            <div className="absolute top-10 right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
              </svg>
            </div>

            <h3 className="text-[10px] font-black tracking-[0.6em] uppercase text-[#800000] mb-10">
              Thought_Protocol_
            </h3>
            
            <div className="space-y-12 relative z-10">
              <div>
                <p className="text-3xl md:text-5xl font-black mb-6 tracking-tighter italic leading-tight">
                  "Thinking as an Engineering Discipline."
                </p>
                <p className="text-white/60 font-medium leading-relaxed text-base md:text-lg border-l border-white/10 pl-6">
                  Critical thinking isn't a soft skill; it's a rigorous framework. I apply inductive and deductive reasoning to isolate variables in complex systems.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 text-[#800000]">Methodology_</p>
                  <p className="font-bold text-lg">First Principles</p>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 text-[#800000]">Focus_</p>
                  <p className="font-bold text-lg">System Integrity</p>
                </div>
              </div>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#800000]/20 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
          
          {/* Right Side: Content & Log */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-black text-[#800000] tracking-[0.5em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#800000]" />
              Cognitive_Layer
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 tracking-tighter leading-none uppercase">
              R&D & <br/> <span className="text-[#800000] italic">CRITICAL THINKING</span>
            </h3>
            <p className="text-lg text-neutral-500 mb-12 leading-relaxed font-medium">
              My R&D work focuses on solving non-standard problems in infrastructure and data security. From lattice-based cryptography research to autonomous network topologies, I thrive at the edge of the unknown.
            </p>
            
            <div className="bg-neutral-50 rounded-[2.5rem] p-10 border border-neutral-100 relative group">
              <div className="flex items-center justify-between mb-8">
                <p className="text-[10px] font-mono font-black text-[#800000] tracking-[0.2em]">ACTIVE_RESEARCH_LOG:</p>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                </div>
              </div>

              <div className="space-y-2">
                {[
                  "Quantum-Resistant Infrastructure Nodes",
                  "Bio-Inspired Network Topologies",
                  "Semi-Supervised Labeling Efficiency",
                ].map((log, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-4 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 rounded-2xl transition-all duration-300 cursor-default group/item"
                  >
                    <span className="text-[10px] font-black text-neutral-300 group-hover/item:text-[#800000] transition-colors">0{i+1}</span>
                    <p className="text-sm font-bold text-neutral-800 tracking-tight">{log}</p>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;