import React from 'react';
import { motion } from 'framer-motion';

const SystemsHub: React.FC = () => {
  // Stagger variants for the skill chips
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="py-32 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        {/* TEXT CONTENT AREA */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[#800000] font-black tracking-[0.4em] uppercase text-xs mb-4">
            Infrastructure Hub
          </h2>
          <h3 className="text-6xl font-black text-neutral-900 mb-8 tracking-tighter leading-[0.9]">
            NETWORKING & <br/>
            <motion.span 
              initial={{ color: "#171717" }}
              whileInView={{ color: "#800000" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[#800000]"
            >
              SYSTEMS
            </motion.span>
          </h3>
          <p className="text-lg text-neutral-600 leading-relaxed font-medium mb-10 max-w-lg">
            Designing secure, low-latency enterprise networks. Expert in SDN, 
            high-availability architecture, and critical systems maintenance.
          </p>

          {/* STAGGERED SKILL GRID */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {['Cisco Specialist', 'SDN Engineer', 'Cloud Infrastructure', 'Zero Trust Architecture'].map(skill => (
              <motion.div 
                key={skill} 
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5, borderColor: "#800000" }}
                className="flex items-center gap-4 p-4 bg-white border border-neutral-100 rounded-2xl shadow-sm transition-colors group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-[#800000] group-hover:animate-pulse" />
                <span className="text-[10px] font-black text-neutral-700 uppercase tracking-widest group-hover:text-[#800000] transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* PRO 3D TERMINAL VISUAL */}
        <motion.div 
          initial={{ x: 100, opacity: 0, rotateY: -20 }}
          whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="perspective-1000"
        >
          <motion.div 
            whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
            className="relative p-12 bg-[#0a0a0a] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 min-h-[450px] flex items-center justify-center overflow-hidden group"
          >
            {/* Animated Grid Background */}
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700" 
              style={{
                backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', 
                backgroundSize: '30px 30px'
              }} 
            />

            {/* Kinetic Energy Lines */}
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                background: [
                  "linear-gradient(90deg, transparent 0%, #800000 50%, transparent 100%)",
                  "linear-gradient(90deg, transparent 100%, #800000 50%, transparent 0%)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute h-[1px] w-full top-1/2 -translate-y-1/2"
            />

            <div className="relative z-10 w-full">
              <div className="flex justify-around mb-16">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.2) }}
                    className={`w-16 h-16 rounded-2xl ${i % 2 === 0 ? 'bg-white/5 border-white/10' : 'bg-[#800000]/10 border-[#800000]/30'} border flex items-center justify-center relative shadow-inner`}
                  >
                    {i % 2 !== 0 && (
                      <div className="w-3 h-3 bg-[#800000] rounded-full animate-ping" />
                    )}
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#800000] opacity-50" />
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 px-6">
                <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-[#800000]" 
                  />
                </div>
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.2em]">
                  <span className="text-neutral-500">Uptime: 99.99%</span>
                  <span className="text-[#800000] animate-pulse">Node_Active</span>
                </div>
              </div>

              <div className="mt-16 text-center">
                <motion.div 
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="font-mono text-[9px] text-[#800000] tracking-[0.4em] uppercase"
                >
                  SYSTEMS_ACTIVE: AWAIS_CORE_INFRA
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default SystemsHub;