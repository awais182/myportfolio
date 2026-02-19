import React from 'react';
import { motion } from 'framer-motion';
import DesignSection from './DesignSection';

const DesignPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen w-full bg-transparent overflow-x-hidden"
    >
      {/* 1. HERO SECTION: Fluid & Cinematic */}
      <section className="pt-[15vh] pb-[10vh] px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
        <div className="max-w-4xl relative">
          {/* Technical Watermark */}
          <span className="absolute -top-20 -left-10 text-[20vw] font-black text-neutral-50/50 select-none -z-10 leading-none">
            DE_
          </span>

          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#800000]" />
            <span className="text-[10px] font-black tracking-[0.5em] text-[#800000] uppercase">
              Visual_Architecture_v2
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(3.5rem,14vw,11rem)] font-black text-neutral-900 tracking-tighter leading-[0.8] mb-10 uppercase"
          >
            VISUAL <br/> 
            <span className="text-[#800000] italic transform -skew-x-6 inline-block">DESIGN_</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[clamp(1.1rem,2vw,1.6rem)] text-neutral-600 font-medium leading-relaxed max-w-2xl border-l-2 border-[#800000] pl-8"
          >
            Where functional engineering meets aesthetic excellence. Crafting identities that command attention through logical structure.
          </motion.p>
        </div>
      </section>

      {/* 2. DESIGN FEED Component (Box-free) */}
      <motion.div variants={itemVariants}>
        <DesignSection />
      </motion.div>

      {/* 3. PHILOSOPHY SECTION: High-Performance Layout */}
      <section className="py-20 md:py-40 border-t border-neutral-100 bg-white/40 backdrop-blur-3xl">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            {/* Left: Philosophy Text */}
            <div className="lg:col-span-6 space-y-10">
              <motion.h4 
                variants={itemVariants}
                className="text-[clamp(2rem,6vw,4rem)] font-black text-neutral-900 tracking-tighter uppercase leading-none"
              >
                DESIGN <br/> PHILOSOPHY
              </motion.h4>
              
              <motion.p variants={itemVariants} className="text-lg text-neutral-500 font-medium leading-relaxed max-w-xl">
                Good design is invisible. Great design is felt. I focus on creating visual systems that are not just beautiful, but are rooted in logical structures and accessibility.
              </motion.p>
              
              <div className="space-y-6 pt-6">
                {['Grid Systems', 'Color Theory', 'Typography', 'Dynamic Motion'].map((item, i) => (
                  <motion.div 
                    key={item} 
                    custom={i}
                    variants={itemVariants}
                    className="flex items-center gap-6 group cursor-crosshair"
                  >
                    <span className="font-mono text-[10px] text-neutral-300">0{i+1}</span>
                    <div className="w-12 h-[1px] bg-neutral-200 group-hover:w-24 group-hover:bg-[#800000] transition-all duration-500" />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-neutral-900 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Abstract Technical Composition (Replaces Boxes) */}
            <div className="lg:col-span-6 relative aspect-square md:aspect-video lg:aspect-square flex items-center justify-center">
              {/* Outer Wireframe Circle */}
              <div className="absolute inset-0 border border-neutral-100 rounded-full animate-pulse" />
              
              {/* Crosshair Decor */}
              <div className="absolute w-full h-px bg-neutral-100" />
              <div className="absolute h-full w-px bg-neutral-100" />
              
              {/* Floating Data Nodes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="relative w-2/3 h-2/3 border border-[#800000]/20 rounded-full flex items-center justify-center"
              >
                <div className="w-1/2 h-1/2 bg-[#800000] shadow-[0_0_50px_rgba(128,0,0,0.3)] mix-blend-multiply" />
                <div className="absolute -top-4 left-1/2 w-8 h-8 bg-neutral-900 rotate-45" />
              </motion.div>

              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-neutral-400 text-right uppercase tracking-[0.2em]">
                System_Aesthetics_Engine<br/>Status: Rendering_Optimum
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Buffer */}
      <div className="h-[10vh]" />
    </motion.div>
  );
};

export default DesignPage;