import React from 'react';
import { motion } from 'framer-motion';

const InnovationLog: React.FC = () => {
  const logs = [
    { date: "MAR 2026", task: "Quantum Resistant Infrastructure", status: "In Development", description: "Implementing lattice-based cryptography for secure systems within Raza Nexus." },
    { date: "JAN 2026", task: "Autonomous Network Healing", status: "Published", description: "AI-driven topology reconfiguration for zero-downtime mission-critical networks." },
    { date: "NOV 2025", task: "Next-Gen Data Annotation Flow", status: "Completed", description: "Developed semi-automated pipelines for high-precision computer vision datasets." },
    { date: "OCT 2025", task: "Cognitive Load Analysis", status: "Archive", description: "Critical thinking study on engineer productivity and system complexity reduction." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="research" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Thesis & Callout */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-black text-[#800000] tracking-[0.5em] uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#800000]" />
                Innovation_Vault
              </h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 text-neutral-900 tracking-tighter leading-none uppercase">
                R&D & <br/>
                <span className="text-[#800000] italic">CRITICAL THINKING</span>
              </h3>
              <p className="text-lg text-neutral-500 mb-12 leading-relaxed font-medium max-w-md">
                Innovation isn't just about building; it's about identifying the right problems to solve. My workflow involves rigorous analysis, hypothesis testing, and rapid prototyping of the unknown.
              </p>

              {/* High-Contrast Info Card */}
              <motion.div 
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="p-10 bg-neutral-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group border border-white/10"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#800000]/20 rounded-full blur-3xl -translate-y-12 translate-x-12 group-hover:bg-[#800000]/40 transition-colors duration-700" />
                
                <div className="relative z-10">
                  <p className="font-mono text-[9px] text-[#800000] mb-6 tracking-[0.3em] font-bold">SYSTEM_ANALYSIS: ACTIVE</p>
                  <p className="text-xl md:text-2xl font-bold mb-8 italic leading-snug tracking-tight">
                    "Efficiency is doing things right. Effectiveness is doing the right things."
                  </p>
                  <div className="flex items-center gap-3 py-3 px-4 bg-white/5 rounded-xl border border-white/10 w-fit">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <p className="text-[9px] font-mono tracking-widest uppercase text-neutral-400">Status: <span className="text-white">OPTIMIZING_PROCESS</span></p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column: Interactive Log */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-neutral-100 overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="px-8 py-6 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-400 font-bold tracking-widest">LOG_VERSION_2026.4.0</span>
                </div>
                <div className="text-[9px] font-mono font-black text-[#800000] animate-pulse uppercase tracking-tighter">
                  Real_Time_Stream
                </div>
              </div>

              {/* Log Entries */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="divide-y divide-neutral-50"
              >
                {logs.map((log, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    whileHover={{ x: 10, backgroundColor: "rgba(128, 0, 0, 0.01)" }}
                    className="p-8 group cursor-default transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-[#800000] font-black uppercase tracking-[0.2em]">{log.date}</span>
                        <div className="h-[1px] w-8 bg-neutral-100" />
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest transition-all ${
                        log.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-100' : 
                        log.status === 'In Development' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 
                        'bg-neutral-50 text-neutral-500 border border-neutral-100'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-black mb-3 text-neutral-900 group-hover:text-[#800000] transition-colors tracking-tighter uppercase">
                      {log.task}
                    </h4>
                    <p className="text-neutral-500 text-sm leading-relaxed font-medium max-w-xl group-hover:text-neutral-700 transition-colors">
                      {log.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Terminal Footer Info */}
            <div className="mt-8 px-8 flex justify-between items-center opacity-30 font-mono text-[9px] font-bold uppercase tracking-[0.3em]">
              <span>Index_Searchable: True</span>
              <span>Encrypted_Link: Raz_Net_Core</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InnovationLog;