import React from 'react';
import { motion } from 'framer-motion';
import NetworkingBackground from './NetworkingBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-transparent">
      {/* 1. LAYER 0: THE INFINITE NEXUS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <NetworkingBackground />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* 2. RESPONSIVE GRID: Image on top for Mobile, Right for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* TEXT CONTENT CONTAINER */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-[#800000]/20 text-[#800000] text-[9px] font-black tracking-[0.3em] uppercase mb-8 bg-white/90 backdrop-blur-sm shadow-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#800000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800000]"></span>
              </span>
              System_Status: 100%_Operational
            </div>
            
            {/* Main Title with Dynamic Sizing */}
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-[4.5rem] font-black text-neutral-900 leading-[0.85] mb-3 sm:mb-6 md:mb-8 tracking-tighter uppercase">
              ARCHITECTING <br className="hidden sm:block" />
              <span className="text-[#800000] italic transform -skew-x-6 inline-block">COMPLEXITY</span> <br className="hidden sm:block" />
              INTO ELEGANCE.
            </h1>
            
            {/* Bio with Bold Accents */}
            <p className="text-xs sm:text-base md:text-lg text-neutral-600 max-w-xl mb-8 sm:mb-10 leading-relaxed font-medium mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-[#800000] lg:pl-6">
              I am <span className="text-neutral-900 font-black tracking-tight underline decoration-[#800000] decoration-2 underline-offset-4">AWAIS RAZA</span>, 
              a Senior Systems Engineer engineering the future of <span className="text-[#800000]">Network Protocols</span> and 
              intelligent <span className="text-[#800000]">Data Structures</span>.
            </p>
            
            {/* Action Group */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 items-center lg:items-start justify-center lg:justify-start">
              <a href="#projects" className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#800000] text-white text-[8px] sm:text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] rounded-full shadow-2xl hover:shadow-[#800000]/40 hover:-translate-y-1 transition-all uppercase w-full sm:w-auto text-center">
                Initialize_Protocol
              </a>
              
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[12, 15, 22, 31].map(i => (
                    <div key={i} className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-full border-2 border-white bg-neutral-100 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i}`} alt="verified_node" className="grayscale hover:grayscale-0 transition-all w-full h-full" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-[7px] sm:text-[8px] md:text-[8px] font-black text-neutral-400 uppercase tracking-widest leading-tight">
                    Trusted Nodes <br/> <span className="text-neutral-900 text-[8px] sm:text-[9px] md:text-[9px]">50+ Global Teams</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* IMAGE CONTENT: VISIBLE ON ALL SCREENS */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none p-3 bg-white/30 backdrop-blur-lg rounded-[2.5rem] border border-white/40 shadow-2xl float-animation">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 border-2 border-white/60 transition-all duration-1000">
                <img 
                  src="/assets/Awais_Raza_image.jpeg"
                  alt="Awais Raza Professional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Mastery Node (Smaller on Mobile) */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-28 h-28 sm:w-44 sm:h-44 bg-[#800000] rounded-full p-4 flex items-center justify-center text-white text-center shadow-[0_0_50px_rgba(128,0,0,0.3)] animate-pulse z-20">
                <div>
                  <p className="text-xl sm:text-2xl font-black italic">10+</p>
                  <p className="text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.2em] leading-none">Domains of <br/>Mastery</p>
                </div>
              </div>

              {/* Technical Indicator Widget (MD+ only) */}
              <div className="hidden md:block absolute top-1/2 -left-10 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-neutral-100 shadow-xl z-20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-[#800000] rounded-full animate-pulse" />
                  <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Core_Load</p>
                </div>
                <div className="w-24 h-1 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#800000]" />
                </div>
                <p className="text-[10px] font-black mt-2 text-neutral-900 uppercase">75% R&D</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. TECHNICAL METADATA FOOTER (The "Small Things") */}
      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex flex-col sm:flex-row justify-between items-start sm:items-end pointer-events-none opacity-40 gap-2 sm:gap-0">
        <div className="font-mono text-[6px] sm:text-[7px] md:text-[9px] text-neutral-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] space-y-0.5">
          <p>User: Awais_Raza_Nexus</p>
          <p>Loc: 31.5204° N / 74.3587° E</p>
          <p>Ver: 2026.4.2-Stable</p>
        </div>
        <div className="hidden sm:block font-mono text-[7px] sm:text-[8px] md:text-[9px] text-neutral-400 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
          [ Engineering_The_Future ]
        </div>
      </div>
    </section>
  );
};

export default Hero;