import React from 'react';
import { motion } from 'framer-motion';

const EngineeringHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 overflow-hidden bg-white min-h-[80vh] flex flex-col justify-center">
      {/* Structural Background Detail - Hidden on very small screens to keep it clean */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none hidden sm:block" 
           style={{ backgroundImage: 'linear-gradient(#800000 1px, transparent 1px), linear-gradient(90deg, #800000 1px, transparent 1px)', backgroundSize: 'clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px)' }} />
      
      {/* Gradient Wash */}
      <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full bg-gradient-to-l from-neutral-50 to-transparent z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Domain Indicator */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-neutral-100 shadow-sm mb-6 md:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#800000] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800000]"></span>
            </span>
            <span className="text-[8px] md:text-[10px] font-black text-neutral-900 uppercase tracking-[0.2em] md:tracking-[0.3em]">
              System_Core: <span className="text-[#800000]">Architecture</span>
            </span>
          </div>

          {/* Hero Heading - Using responsive text sizes and clamp */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-neutral-900 tracking-tighter leading-[0.85] md:leading-[0.8] mb-8 md:mb-12 uppercase break-words">
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Software
            </motion.span>
            <motion.span 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#800000] italic block sm:inline"
            >
              Engineering
            </motion.span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-7 xl:col-span-6"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-500 font-medium leading-relaxed italic border-l-4 border-[#800000] pl-6 md:pl-8">
              Developing robust, scalable, and mission-critical software solutions. My approach integrates backend stability with modern frontend performance.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-5 xl:col-span-6 flex lg:justify-end"
          >
            {/* Engineering Metrics Widget - Adjusted for Mobile padding/gap */}
            <div className="flex w-full sm:w-auto gap-4 sm:gap-8 p-6 md:p-8 bg-neutral-900 rounded-2xl md:rounded-[2rem] text-white shadow-2xl border border-white/10">
              <div className="flex-1 sm:flex-none">
                <p className="text-[8px] md:text-[10px] font-mono text-[#800000] mb-1 md:mb-2 uppercase tracking-widest">Uptime</p>
                <p className="text-2xl md:text-3xl font-black italic">99.9%</p>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div className="flex-1 sm:flex-none">
                <p className="text-[8px] md:text-[10px] font-mono text-[#800000] mb-1 md:mb-2 uppercase tracking-widest">Scalability</p>
                <p className="text-2xl md:text-3xl font-black italic">Elastic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringHero;