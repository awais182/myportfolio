import React from 'react';
import EngineeringHero from './components/EngineeringHero';
import TechStack from './components/TechStack';
import SoftwareSection from './SoftwareSection';
import { motion } from 'framer-motion';

const EngineeringPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#800000] selection:text-white">
      {/* Hero Section - Handles its own internal responsiveness */}
      <EngineeringHero />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tech Stack Module */}
        <section className="py-12 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-[10px] font-black text-[#800000] tracking-[0.5em] uppercase mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#800000]" />
              Technical_Stack
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tighter uppercase">
              Tooling & <span className="text-[#800000] italic">Environments</span>
            </h3>
          </motion.div>
          
          <TechStack />
        </section>

        {/* Divider - Clean and Minimal */}
        <div className="w-full h-[1px] bg-neutral-100" />

        {/* Software Section Module */}
        <section className="py-12 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-[10px] font-black text-[#800000] tracking-[0.5em] uppercase mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#800000]" />
              Development_Core
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tighter uppercase">
              Featured <span className="text-[#800000] italic">Software</span>
            </h3>
          </motion.div>

          <SoftwareSection />
        </section>

      </div>

      {/* Footer Branding Detail */}
      <footer className="py-12 border-t border-neutral-100 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-40">
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-neutral-500">
            Nexus_Engineering_Protocol // 2026
          </span>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-neutral-300" />
            <div className="w-2 h-2 rounded-full bg-neutral-300" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EngineeringPage;