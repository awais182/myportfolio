import React from 'react';
import { motion } from 'framer-motion';

const SystemsHero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-transparent">
      {/* BACKGROUND ELEMENTS: Subtle grid guide */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* DOMAIN TAG: Status Style */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#800000] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800000]"></span>
          </span>
          <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.2em]">
            Protocol: Infrastructure_&_Security
          </span>
        </motion.div>

        {/* FLUID HEADING: Synchronized motion tags */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[clamp(3.5rem,12vw,8.5rem)] font-black text-white tracking-tighter leading-[0.85] mb-10 uppercase"
        >
          SYSTEMS & <br/> 
          <span className="text-[#800000] italic transform -skew-x-6 inline-block">
            NETWORKING
          </span>
        </motion.h1>

        {/* DESCRIPTION: Brutalist pl-line style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-2 border-[#800000] pl-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-white/50 max-w-2xl font-medium leading-relaxed"
          >
            Architecting resilient backbones. Expert in <span className="text-white font-bold">SDN</span>, 
            high-throughput routing, and <span className="text-white font-bold">zero-trust</span> security protocols.
          </motion.p>

          {/* TELEMETRY DATA: Corner small text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-[9px] text-white/20 uppercase tracking-[0.4em] text-right"
          >
            <p>Load: Optimal</p>
            <p>Nodes: Active</p>
            <p>Uptime: 99.99%</p>
          </motion.div>
        </div>
      </div>

      {/* DECORATIVE: Large faded background text */}
      <div className="absolute -bottom-10 -right-20 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">
        Infrastructure
      </div>
    </section>
  );
};

export default SystemsHero;