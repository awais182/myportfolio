import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import InnovationLog from './InnovationLog';
import ResearchSection from './ResearchSection';

const ResearchPage: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for the hero text
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const methodology = [
    { step: "01", label: "ANALYZE", detail: "Deconstruct systems to their first principles." },
    { step: "02", label: "HYPOTHESIZE", detail: "Formulate potential optimal configurations." },
    { step: "03", label: "EXECUTE", detail: "Rapid prototyping and stress testing." },
    { step: "04", label: "REFINE", detail: "Continuous optimization based on metrics." }
  ];

  return (
    <div className="bg-white selection:bg-[#800000] selection:text-white">
      {/* Hero Header Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-neutral-50 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div style={{ y: y1, opacity }} className="max-w-4xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black text-[#800000] tracking-[0.6em] uppercase mb-8 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-[#800000]" />
              Exploration_Labs_V3
            </motion.h4>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-black text-neutral-900 tracking-tighter leading-[0.85] mb-12 uppercase"
            >
              R&D LABS <br/> 
              <span className="text-[#800000] italic">& RESEARCH_</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-2xl italic border-l-2 border-neutral-100 pl-8"
            >
              Exploring the frontiers of engineering through critical thinking, experimental protocols, and iterative research.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Modules */}
      <div className="relative z-20 shadow-[0_-50px_100px_rgba(255,255,255,1)]">
        <InnovationLog />
        <ResearchSection />
      </div>

      {/* Methodology Section - Scientific Grid */}
      
      <section className="py-32 bg-white border-t border-neutral-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-0 border border-neutral-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-neutral-200/20">
            {methodology.map((item, idx) => (
              <motion.div 
                key={item.label}
                whileHover={{ backgroundColor: "rgba(128, 0, 0, 0.02)" }}
                className={`p-12 group transition-colors relative ${
                  idx !== methodology.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-neutral-100' : ''
                }`}
              >
                <span className="block font-mono text-[10px] text-neutral-300 mb-8 group-hover:text-[#800000] transition-colors">
                  PROCESS_STEP_{item.step}
                </span>
                <h5 className="text-3xl font-black text-neutral-900 mb-4 tracking-tighter group-hover:italic transition-all">
                  {item.label}
                </h5>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed">
                  {item.detail}
                </p>
                
                {/* Visual Indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#800000] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="font-mono text-[9px] text-neutral-300 tracking-[0.4em] uppercase">
              End_Of_Lab_Manifest // Version_Control_Stable
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;